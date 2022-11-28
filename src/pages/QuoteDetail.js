import { useParams, Route, useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Wc", text: "Reading React is fun." },
  { id: "q2", author: "WanChang", text: "Reading React is great." },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  console.log(match);

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <section>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comment
          </Link>
        </div>
      </Route>
      <Route exact path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

//useRouteMatch can help to check for the path and url of the route you are currently visit in the browser
export default QuoteDetail;
