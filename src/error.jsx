import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // Using and invoking the useRouteError function from react router dom
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}


// TODO: Make eror page sexy