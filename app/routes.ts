import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  // routes in same layout
  /*
  layout("layouts/layout-a.tsx", [route("/route-a", "routes/route-a.tsx"),
    route("/route-b", "routes/route-b.tsx")
  ]),
  */

  // routes in sibling layout
  
  layout("layouts/layout-a.tsx", [route("/route-a", "routes/route-a.tsx")]),
  layout("layouts/layout-b.tsx", [route("/route-b", "routes/route-b.tsx")]),

] satisfies RouteConfig;
