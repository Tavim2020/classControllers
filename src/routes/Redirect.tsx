import { Navigate } from "react-router-dom";

export function Redirect(): JSX.Element {
  return <Navigate to="/introduction/page/1" />;
}