import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <div>
      <div>404 not found | {error.statusText}</div>
    </div>
  );
}
