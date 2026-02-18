import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  // routes in same layout
  /*
  layout("layouts/layout-a.tsx", [route("/route-a", "routes/route-a.tsx"),
    route("/route-b", "routes/route-b.tsx")
  ]),
  */

  // routes in sibling layouts
  // patch applied from react-router "7.13.1-pre.0"
  
  layout("layouts/layout-a.tsx", [route("/route-a", "routes/route-a.tsx")]),
  layout("layouts/layout-b.tsx", [route("/route-b", "routes/route-b.tsx")]),

] satisfies RouteConfig;
