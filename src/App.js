import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

//import AllQuotes from "./pages/AllQuotes";
//import QuoteDetail from "./pages/QuoteDetail";
//import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
//import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";

//this page will not executed in advanced but only if needed
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

//* means the rest of the path which are not defined
export default App;
