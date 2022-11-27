import { Fragment } from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Wc", text: "Reading React is fun." },
  { id: "q2", author: "WanChang", text: "Reading React is great." },
];

const AllQuotes = (props) => {
  return (
    <Fragment>
      <QuoteList quotes={DUMMY_QUOTES} />
    </Fragment>
  );
};

export default AllQuotes;
