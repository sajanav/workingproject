console.log('app.js is running');
//jsx javascript XML 
var user={
    name1:'Sajana'
    
};
function getName(name){
    if(name){
  return  name ;
    }else{
        return 'Unknown';
    }
}
var template=(<div>
    <h1>My First App</h1>
    <p>This is some info</p>
    <ol>
        <li>
        {getName(user.name1)}
        </li>
        <li>
        {user.name2 ? user.name2 :'unknown123'}
        </li>
    </ol>
    </div>
    );
//var template = /*#__PURE__*/React.createElement("p", null, "this is JSX from app.js");
let count=0;
const addOne=() => {
count++;

console.log("Add one",count);
renderApp();
}



var appRoot=document.getElementById('app');
const  renderApp =() =>{
    const templateTwo = (
        <div>
        <h1>Count:{count}</h1>
        <button onClick={addOne}>+1</button>
        </div>
        );
        ReactDOM.render(templateTwo,appRoot);
};
//ReactDOM.render(templateTwo,appRoot);
renderApp();