import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routeList from "./components/routes/publicRoutes";

function App() {
  const routes = useRoutes(routeList);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
    </div>
  );
}

export default React.memo(App);
