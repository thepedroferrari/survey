import { useFetcher, useLoaderData } from "@remix-run/react";
import { Answer_Type_Enum } from "~/graphql/generated";
import { loader } from "~/routes/surveys.$surveyId";
import { IconArrowDown, IconArrowUp, IconTrash } from "./Icons";

export const SurveyQuestion = ({ position }: { position: number }) => {
  const { survey } = useLoaderData<typeof loader>();
  const questionControlFetcher = useFetcher();
  const updateQuestionPromptFetcher = useFetcher();
  const updateQuestionTypeFetcher = useFetcher();

  const question = survey.questions[position];

  const updateQuestionType = (type: Answer_Type_Enum) => {
    updateQuestionPromptFetcher.submit(
      {
        intent: "updateType",
        questionId1: String(question.id),
        questionType: type,
      },
      {
        replace: true,
        method: "post",
      }
    );
  };

  return (
    <li className="survey__question">
      <updateQuestionPromptFetcher.Form
        method="post"
        style={{ gridArea: "input" }}
      >
        <input
          className="survey__question--input"
          name="questionPrompt"
          defaultValue={question.prompt}
          onBlur={(e) => {
            // prevent calling an update if the prompt hasn't changed
            if (e.target.value === question.prompt) return;

            updateQuestionPromptFetcher.submit(
              {
                intent: "updatePrompt",
                questionId1: String(question.id),
                questionPrompt: e.target.value,
              },
              {
                replace: true,
                method: "post",
              }
            );
          }}
        />
      </updateQuestionPromptFetcher.Form>
      <updateQuestionTypeFetcher.Form
        method="post"
        className="survey__question--radio"
      >
        <fieldset>
          <b>Type:</b>
          <label>
            <input
              type="radio"
              value="boolean"
              defaultChecked={question.answer_type === Answer_Type_Enum.Boolean}
              name={String(question.id)}
              onClick={() => updateQuestionType(Answer_Type_Enum.Boolean)}
            />{" "}
            Boolean
          </label>
          <label>
            <input
              type="radio"
              value="number"
              defaultChecked={question.answer_type === Answer_Type_Enum.Number}
              name={String(question.id)}
              onClick={() => updateQuestionType(Answer_Type_Enum.Number)}
            />{" "}
            Number
          </label>
          <label>
            <input
              type="radio"
              value="text"
              defaultChecked={question.answer_type === Answer_Type_Enum.Text}
              name={String(question.id)}
              onClick={() => updateQuestionType(Answer_Type_Enum.Text)}
            />{" "}
            Text
          </label>
        </fieldset>
      </updateQuestionTypeFetcher.Form>

      <questionControlFetcher.Form
        method="post"
        className="survey__question--controls"
      >
        <fieldset about="controls">
          <input type="hidden" name="questionId1" value={String(question.id)} />
          <input
            type="hidden"
            name="question1Rank"
            value={String(question.survey_rank)}
          />
          <input
            type="hidden"
            name="prevQuestionId"
            value={String(survey.questions[position - 1]?.id)}
          />
          <input
            type="hidden"
            name="prevQuestionRank"
            value={String(survey.questions[position - 1]?.survey_rank)}
          />
          <input
            type="hidden"
            name="nextQuestionId"
            value={String(survey.questions[position + 1]?.id)}
          />
          <input
            type="hidden"
            name="nextQuestionRank"
            value={String(survey.questions[position + 1]?.survey_rank)}
          />
          <button
            type="submit"
            name="intent"
            value="deleteQuestion"
            style={{ backgroundColor: "unset" }}
          >
            <IconTrash />
          </button>

          <button
            disabled={position === 0}
            type="submit"
            name="intent"
            value="moveQuestionUp"
          >
            <IconArrowUp />
          </button>
          <button
            disabled={position === survey.questions.length - 1}
            type="submit"
            name="intent"
            value="moveQuestionDown"
          >
            <IconArrowDown />
          </button>
        </fieldset>
      </questionControlFetcher.Form>
    </li>
  );
};
