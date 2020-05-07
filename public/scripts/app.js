'use strict';

console.log('app.js is running');
//jsx javascript XML 
var user = {
    name1: 'Sajana'

};
function getName(name) {
    if (name) {
        return name;
    } else {
        return 'Unknown';
    }
}
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
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            getName(user.name1)
        ),
        React.createElement(
            'li',
            null,
            getName(user.name2)
        )
    )
);
//var template = /*#__PURE__*/React.createElement("p", null, "this is JSX from app.js");
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
