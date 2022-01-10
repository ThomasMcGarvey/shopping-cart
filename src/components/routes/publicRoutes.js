//import { lazy } from "react";
import ShoppingCart from "../checkout/ShoppingCart";
import PaymentInterface from "../checkout/PaymentInterface";

const routeList = [
  {
    path: "/",
    element: <ShoppingCart />,
  },
  {
    path: "/payment/:total",
    element: <PaymentInterface />,
  },
];

export default routeList;
