import { Form } from "@remix-run/react";

export default function CreateSurvey() {
  return (
    <main style={{ marginLeft: "40px" }}>
      <header>
        <h1>Create a Survey</h1>
      </header>
      <Form method="post">
        <label>
          <p>Survey Name</p>
          <input
            type="text"
            name="surveyName"
            style={{
              padding: "5px 8px",
              marginRight: "10px",
            }}
          />
        </label>
        <button
          className="button-cta"
          type="button"
          onClick={() => {
            alert("This has not been integrated yet");
          }}
        >
          Create Survey
        </button>
      </Form>
    </main>
  );
}
