//filter these objects and find if they are underage or not

const ppl = [
  {name: 'Alan', age: 26},
  {name: 'David', age: 16},
  {name: 'John', age: 46},
  {name: 'Sarah', age: 32},
  {name: 'Emily', age: 19},
  {name: 'Michael', age: 41},
  {name: 'Jessica', age: 15},
  {name: 'Robert', age: 38},
  {name: 'Ashley', age: 24},
  {name: 'Christopher', age: 29},
  {name: 'Amanda', age: 17},
  {name: 'Matthew', age: 35},
  {name: 'Brittany', age: 22},
  {name: 'Joshua', age: 44},
  {name: 'Samantha', age: 18},

];

const uwu=(ppl)=>{
    let underage=[];
    let adult=[];

    ppl.forEach(person => {
        if (person.age>=18){
            adult.push(person.name);}
            else{
            underage.push(person.name)
            }
        

    });
    console.log(`${adult} are adults and can drink.\n`)
    console.log(`the underage people are ${underage}`)}

uwu(ppl);