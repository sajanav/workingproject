console.log('app.js is running');
//jsx javascript XML 
var user={
    name1:'Sajana',
    name2:'vijayan'
};
var template=(<div>
    <h1>My First App</h1>
    <p>This is some info</p>
    <ol>
        <li>
        {user.name1}
        </li>
        <li>
        {user.name2}
        </li>
    </ol>
    </div>
    );
//var template = /*#__PURE__*/React.createElement("p", null, "this is JSX from app.js");
var appRoot=document.getElementById('app');
ReactDOM.render(template,appRoot);