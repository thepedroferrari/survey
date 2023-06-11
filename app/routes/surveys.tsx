import { gql } from "@apollo/client";
import { json, type V2_MetaFunction } from "@remix-run/node";
import { Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";
import { Query_Root } from "~/graphql/generated";
import { client } from "~/graphql/graphql-client";

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

const LIST_SURVEYS = gql`
  query ListSurveys {
    survey {
      id
      name
    }
  }
`;

export const loader = async () => {
  try {
    const { data } = await client.query<Pick<Query_Root, "survey">>({
      query: LIST_SURVEYS,
    });

    return json({ surveys: data.survey });
  } catch (error) {
    throw new Error(
      `Error getting the survey ${process.env.HASURA_SURVEY_ID}: ${error}`
    );
  }
};

export default function Surveys() {
  const { surveys } = useLoaderData<typeof loader>();

  return (
    <div>
      <header
        style={{
          backgroundColor: "var(--blue)",
          padding: "var(--smallLargePadding)",
        }}
      >
        <h2
          style={{
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "19px",
            margin: 0,
            color: "var(--cta-text)",
            fontFamily: "Inter",
          }}
        >
          Survey Manager
        </h2>
      </header>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(150px, 25%) 1fr",
          gridTemplateRows: "1fr",
        }}
      >
        <nav className="sidebar">
          <ul>
            {surveys.map((survey) => (
              <li key={String(survey.id)}>
                <NavLink to={String(survey.id)}>{survey.name}</NavLink>
              </li>
            ))}

            <li>
              <NavLink to="create">Create a Survey</NavLink>
            </li>
          </ul>
        </nav>

        {/* An Outlet is a component that renders the matched child route. */}
        <Outlet />
      </div>
    </div>
  );
}
