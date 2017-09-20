import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import isWednesday from "./util/isWednesday";
import wednesdayText from "./util/wednesdayText";
import Wednesday from "./components/Wednesday";
import NotWednesday from "./components/NotWednesday";
import "./index.css";

window.document.title = wednesdayText();

const App = () => (isWednesday() ? <Wednesday /> : <NotWednesday />);

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
