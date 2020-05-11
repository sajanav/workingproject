console.log('app.js is running');
let details ="";
let buttonValueStr ="Show Details";
var appRoot=document.getElementById('app');

const buttonValue =()=>{

    console.log('button is clicked with buttonvaluestrg',buttonValueStr);
    if(buttonValueStr =="Show Details"){
    details="Here are the details"; 
    buttonValueStr ="Hide details";
    }else{
        details=""; 
    buttonValueStr ="Show Details"; 
    }
    renderApp();
};
const  renderApp =() =>{
var template=(<div>
    <title>Indecision App</title>
    <h1>Visibility Toggle</h1>
    <button onClick={buttonValue}>{buttonValueStr}</button>
    <p>{details}</p>
    </div>
    );
    ReactDOM.render(template,appRoot);
};
renderApp();