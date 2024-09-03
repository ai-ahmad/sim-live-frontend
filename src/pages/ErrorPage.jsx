import React from "react";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex flex-col gap-3 items-center h-full justify-center">
      <h1>Something went wrong 😢</h1>
      <p>{error}</p>
      <button
        className="btn btn-outline text-xs btn-sm"
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </div>
  );
}
