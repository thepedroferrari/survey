import { gql } from "@apollo/client";
import {
  ActionArgs,
  DataFunctionArgs,
  json,
  type V2_MetaFunction,
} from "@remix-run/node";
import {
  isRouteErrorResponse,
  useFetcher,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { SurveyQuestion } from "~/components/SurveyQuestion";
import { Query_Root } from "~/graphql/generated";
import { client } from "~/graphql/graphql-client";

// A meta function is responsible for providing metadata about the route.
// # https://remix.run/docs/en/main/route/meta-v2
export const meta: V2_MetaFunction = () => {
  return [
    { title: "Survey: Coffee Sourcing and Management Practices" },
    {
      name: "description",
      content:
        "Take our survey to help us understand your coffee purchasing practices, sourcing strategies, and feedback on our management. Your insights are vital to our growth.",
    },
  ];
};

const FETCH_SURVEY = gql`
  query FetchSurvey($id: uuid!) {
    survey_by_pk(id: $id) {
      id
      name
      questions(order_by: { survey_rank: asc }) {
        id
        prompt
        survey_rank
        answer_type
      }
    }
  }
`;

const SWAP_QUESTIONS = gql`
  mutation SwapQuestions(
    $questionId1: uuid!
    $questionId2: uuid!
    $question1Rank: Int
    $question2Rank: Int
  ) {
    updateQuestion1: update_question_by_pk(
      pk_columns: { id: $questionId1 }
      _set: { survey_rank: $question2Rank }
    ) {
      id
    }
    updateQuestion2: update_question_by_pk(
      pk_columns: { id: $questionId2 }
      _set: { survey_rank: $question1Rank }
    ) {
      id
    }
  }
`;

const UPDATE_PROMPT = gql`
  mutation UpdateQuestionPrompt($id: uuid!, $prompt: String) {
    update_question_by_pk(pk_columns: { id: $id }, _set: { prompt: $prompt }) {
      id
    }
  }
`;

const DELETE_QUESTION = gql`
  mutation DeleteQuestion($id: uuid!) {
    delete_question_by_pk(id: $id) {
      id
    }
  }
`;

const CREATE_QUESTION = gql`
  mutation CreateQuestion($rank: Int!) {
    insert_question(
      objects: { answer_type: Text, prompt: "", survey_rank: $rank }
    ) {
      __typename
    }
  }
`;

const UPDATE_QUESTION_TYPE = gql`
  mutation UpdateQuestionType($id: uuid!, $type: answer_type_enum) {
    update_question_by_pk(
      pk_columns: { id: $id }
      _set: { answer_type: $type }
    ) {
      id
    }
  }
`;

// A loader function is responsible for loading the data that a specific route
// needs to render its page. It acts as a bridge between your server-side data
// like your databases or APIs and your client-side code, such as the components.
// # https://remix.run/docs/en/main/route/loader
export const loader = async ({ params }: DataFunctionArgs) => {
  const surveyId = params.surveyId;

  try {
    const result = await client.query<Pick<Query_Root, "survey_by_pk">>({
      query: FETCH_SURVEY,
      variables: { id: surveyId },
    });
    const { data } = result;

    if (data.survey_by_pk) {
      return json(
        { survey: data.survey_by_pk, loading: false },
        {
          headers: {
            "Cache-Control": `private, max-age=${300}`, // 5 minutes
          },
        }
      );
    } else {
      throw new Error("Survey not found");
    }
  } catch (error) {
    throw new Error(`Error getting the survey ${surveyId}: ${error}`);
  }
};

// Actions in Remix are just like loaders, except they are called with a POST, PUT or PATCH request.
// Everything in here will also only run on the server.
// # https://remix.run/docs/en/main/route/action
export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  const questionPrompt = formData.get("questionPrompt");
  const questionType = formData.get("questionType");
  const questionId1 = formData.get("questionId1");
  const question1Rank = formData.get("question1Rank");
  const prevQuestionId = formData.get("prevQuestionId");
  const prevQuestionRank = formData.get("prevQuestionRank");
  const nextQuestionId = formData.get("nextQuestionId");
  const nextQuestionRank = formData.get("nextQuestionRank");
  const lastQuestionRank = formData.get("lastQuestionRank");

  switch (intent) {
    case "moveQuestionUp":
      return await client.mutate({
        mutation: SWAP_QUESTIONS,
        variables: {
          questionId1: questionId1,
          questionId2: prevQuestionId,
          question1Rank: question1Rank,
          question2Rank: prevQuestionRank,
        },
      });

    case "moveQuestionDown":
      return await client.mutate({
        mutation: SWAP_QUESTIONS,
        variables: {
          questionId1: questionId1,
          questionId2: nextQuestionId,
          question1Rank: question1Rank,
          question2Rank: nextQuestionRank,
        },
      });

    case "deleteQuestion":
      return await client.mutate({
        mutation: DELETE_QUESTION,
        variables: {
          id: questionId1,
        },
      });

    case "createQuestion":
      return await client.mutate({
        mutation: CREATE_QUESTION,
        variables: {
          // I am not sure how the rank is calculated, so I am just going to use the last question rank + 1
          rank: Number(lastQuestionRank) + 1,
        },
      });

    case "updatePrompt":
      // We should probably validate the prompt here

      return await client.mutate({
        mutation: UPDATE_PROMPT,
        variables: {
          id: questionId1,
          prompt: questionPrompt,
        },
      });

    case "updateType":
      return await client.mutate({
        mutation: UPDATE_QUESTION_TYPE,
        variables: {
          id: questionId1,
          type: questionType,
        },
      });

    default:
      return json({ error: "Invalid intent" }, { status: 400 });
  }
}

export default function Survey() {
  const { survey } = useLoaderData<typeof loader>();
  const addQuestion = useFetcher();

  return (
    <main
      itemScope
      itemType="https://schema.org/Quiz"
      style={{
        backgroundColor: "var(--bg-tertiary)",
      }}
    >
      <meta itemProp="about" content={survey.name} />
      <meta itemProp="abstract" content="Survey Description" />
      <meta itemProp="accessMode" content="Textual, Visual" />

      <section className="survey">
        <header
          style={{
            padding: "21px 40px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            boxShadow: "var(--box-shadow)",
            marginBottom: "30px",
            backgroundColor: "var(--white)",
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
              }}
            >
              {survey.name}
            </h2>
            <span>Create, update or delete questions in the survey.</span>
          </div>
          <addQuestion.Form
            method="post"
            style={{
              alignSelf: "end",
              justifySelf: "end",
            }}
          >
            <input
              type="hidden"
              name="lastQuestionRank"
              // for an empty survey, the last question rank is 0
              value={survey.questions.at(-1)?.survey_rank ?? 0}
            />
            <button
              className="button-cta"
              type="submit"
              name="intent"
              value="createQuestion"
            >
              Add
            </button>
          </addQuestion.Form>
        </header>
        <ol className="survey__questions">
          {survey.questions.map((question, index) => (
            <SurveyQuestion key={String(question.id)} position={index} />
          ))}
        </ol>
      </section>
    </main>
  );
}

// https://remix.run/docs/en/1.16.1/pages/v2#catchboundary-and-errorboundary
export const ErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 403) {
    return (
      <div>
        <h1>Unauthorized</h1>
        <p>You don't have access to this survey</p>
      </div>
    );
  }

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <div>
        <h1>Survey not found</h1>
        <p>The survey you tried to access does not exist</p>
      </div>
    );
  }

  return (
    <div>
      <h1>There was an error and we couldn't load the survey.</h1>
    </div>
  );
};
