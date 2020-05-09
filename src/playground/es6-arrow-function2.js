const addAB = function (a,b){
 return a+b;
};

const addABF = (a, b) =>{
    return a + b;
  };
console.log(addABF(5,7));
const user ={
name:'Sajana',
cities:['UAE','PERTH','NEWZELAND'],
printPlacesLived:function(){
       this.cities.forEach((city)=>{
        console.log(this.name +'has lived in '+city);
    });

}

};
user.printPlacesLived();