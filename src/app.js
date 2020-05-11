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
const numbers= [99,98,97];
const onMakeDecision =() =>{
    const randomNo=Math.floor(Math.random()*1);
  //  randomNo=randomNo+1;
    console.log(randomNo);
    if(randomNo !=0){
    const option =app.options[randomNo];
    alert(option);
    }
};
const onFormSubmit=(e)=>{
e.preventDefault();
const option =e.target.elements.option.value;

console.log("form is submitted",option);
};
var template=(<div>
    <h1>My First App</h1>
    <p>This is some info</p>
             
    {
       [ <p key='1'> a</p>,<p key='2'>b</p>,<p key='3'> c</p>]
        
        }
        {
            /*numbers.map((number)=>{
            return <p key={number}>Number:{number}</p>;
            }

            )*/
        }
    <ol>
      {
         numbers.map((number)=>{
          return <li key={number}>{number}</li>
          })
      } 
    </ol>
    <form onSubmit={onFormSubmit}>
        <input type="text" name ="option"></input>
        <button>Add Option</button>
        <button disabled ={true}onClick={onMakeDecision}>What should i do </button>

          </form>
    </div>
    );

var appRoot=document.getElementById('app');
    ReactDOM.render(template,appRoot);
