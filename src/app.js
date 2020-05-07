console.log('app.js is running');
//jsx javascript XML 
var template=<div><h1>My First App</h1><p>This is some info</p></div>;
//var template = /*#__PURE__*/React.createElement("p", null, "this is JSX from app.js");
var appRoot=document.getElementById('app');
ReactDOM.render(template,appRoot);