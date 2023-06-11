import { redirect } from "@remix-run/node";

export const loader = async () => {
  // For now we don't have an index page for our application so I am redirecting the user to the surveys page.
  return redirect("/surveys");
};
