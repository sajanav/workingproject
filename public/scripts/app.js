"use strict";

console.log('app.js is running');
var details = "";
var buttonValueStr = "Show Details";
var appRoot = document.getElementById('app');

var buttonValue = function buttonValue() {

    console.log('button is clicked with buttonvaluestrg', buttonValueStr);
    if (buttonValueStr == "Show Details") {
        details = "Here are the details";
        buttonValueStr = "Hide details";
    } else {
        details = "";
        buttonValueStr = "Show Details";
    }
    renderApp();
};
var renderApp = function renderApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "title",
            null,
            "Indecision App"
        ),
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: buttonValue },
            buttonValueStr
        ),
        React.createElement(
            "p",
            null,
            details
        )
    );
    ReactDOM.render(template, appRoot);
};
renderApp();
