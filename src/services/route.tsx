import React from "react";
import { BrowserRouter, Route as ReactRoute, Switch } from "react-router-dom";

export const RouterProvider: React.FC<{ modules: Module[] }> = props => {
  const publicRoutes: Route[] = [];
  for (let m of props.modules) {
    publicRoutes.push(...m.routes);
  }
  return (
    <BrowserRouter>
      <Switch>
        {publicRoutes.map(route => {
          let PageComponent = route.component;
          return (
            <ReactRoute
              exact
              key={route.path}
              path={route.path}
              render={routeprops => <PageComponent {...routeprops} />}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};
