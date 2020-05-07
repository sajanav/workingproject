console.log('app.js is running');
//jsx javascript XML 
var template=<p>i am the big change</p>;
//var template = /*#__PURE__*/React.createElement("p", null, "this is JSX from app.js");
var appRoot=document.getElementById('app');
ReactDOM.render(template,appRoot);