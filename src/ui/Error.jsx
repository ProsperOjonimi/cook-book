import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-2xl font-semibold">Something went wrong 😢</h1>
      <p className="font-semibold">{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>
        <span className="text-2xl text-yellow-700">&larr; </span>Go back
      </button>
    </div>
  );
}

export default NotFound;
