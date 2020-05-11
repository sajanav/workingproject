
//var template = /*#__PURE__*/React.createElement("p", null, "this is JSX from app.js");
let count=0;
const addOne=() => {
count++;

console.log("Add one",count);
renderApp();
}



const  renderApp =() =>{
    const templateTwo = (
        <div>
        <h1>Count:{count}</h1>
        <button onClick={addOne}>+1</button>
        </div>
        );
        ReactDOM.render(templateTwo,appRoot);
};
renderApp();