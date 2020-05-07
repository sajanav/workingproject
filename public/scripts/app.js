'use strict';

console.log('app.js is running');
//jsx javascript XML 
var template = React.createElement(
  'p',
  null,
  'i am the big change'
);
//var template = /*#__PURE__*/React.createElement("p", null, "this is JSX from app.js");
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
