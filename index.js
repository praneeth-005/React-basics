import React from "react";
import ReactDOM from "react-dom";
const parent = React.createElement("div", {id : "parent"}, 
    [React.createElement("div", {id : "child"}, [React.createElement("h1", {id : "heading1"}, "This is heading1"), React.createElement("h2", {id : "heading2"}, "This is heading 2")]),
React.createElement("div", {id : "child2"}, [React.createElement("h3", {id : "heading3"}, "This is heading 3"), React.createElement("h4", {id : "heading4"}, "This is heading4")])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);