import React, { Suspense, lazy } from "react";
import Main from "../src/components/main/main";
import Log from "./components/logIn/login_try";
import Register from "./components/logIn/register_try";

//import lazyload components
const LazyContributains = lazy(() =>
  import("../src/components/Contributains/Contributains")
);
const LazyCreateAccount = lazy(() =>
  import("../src/components/CreateAccount/createAccount")
);
const LazyLogin = lazy(() => import("../src/components/logIn/logIn"));
const LazyAboutWikipedia = lazy(() =>
  import("../src/components/aboutWikipedia/aboutWikipedia")
);
const LazyContents = lazy(() =>
  import("../src/components/contentsPage/contents")
);
const LazyTalk = lazy(() => import("../src/components/Talk/talk"));
const LazyDonate = lazy(() => import("../src/components/Donate/Donate"));
const LazyHero = lazy(() => import("../src/components/hero/hero"));
const LazyNearby = lazy(() => import("../src/components/nearby/nearby"));
const LazyContactUs = lazy(() =>
  import("../src/components/contactUs/contactUs")
);

let routes = [
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/log",
    element: <Log />,
  },
  {
    path: "/wikipedia",
    element: (
      <Suspense fallback="loading...">
        <Main />{" "}
      </Suspense>
    ),
  },
  {
    path: "/createaccount",
    element: (
      <Suspense fallback="loading login page...">
        <LazyCreateAccount />{" "}
      </Suspense>
    ),
  },
  {
    path: "/hero",
    element: (
      <Suspense fallback="loading signup page...">
        <LazyHero />{" "}
      </Suspense>
    ),
  },
  {
    path: "/Contributains",
    element: (
      <Suspense fallback="loading...">
        <LazyContributains />{" "}
      </Suspense>
    ),
  },
  {
    path: "talk",
    element: (
      <Suspense fallback="loading notFound page...">
        <LazyTalk />{" "}
      </Suspense>
    ),
  },
  {
    path: "donate",
    element: (
      <Suspense fallback="loading notFound page...">
        <LazyDonate />{" "}
      </Suspense>
    ),
  },
  {
    path: "nearby",
    element: (
      <Suspense fallback="loading notFound page...">
        <LazyNearby />{" "}
      </Suspense>
    ),
  },
  {
    path: "contents",
    element: (
      <Suspense fallback="loading notFound page...">
        <LazyContents />{" "}
      </Suspense>
    ),
  },
  {
    path: "contactus",
    element: (
      <Suspense fallback="loading notFound page...">
        <LazyContactUs />{" "}
      </Suspense>
    ),
  },
  {
    path: "aboutWikipedia",
    element: (
      <Suspense fallback="loading notFound page...">
        <LazyAboutWikipedia />{" "}
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback="loading notFound page...">
        <LazyLogin />{" "}
      </Suspense>
    ),
  },
];

export default routes;
