'use strict';

console.log('app.js is running');
//jsx javascript XML 
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'My First App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  )
);
//var template = /*#__PURE__*/React.createElement("p", null, "this is JSX from app.js");
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);