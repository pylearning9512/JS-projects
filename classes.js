
class Shape{
 constructor(name,size,area){
    this.size=size;
    this.name=name;
    this.area=area;
 }
 shapeArea(){
    alert(`the area of this ${this.name} is ${this.area} cm.`)
 }
}

//instanciating an object from the shape class
const triangle=new Shape("triangle");

//defining the size by using an object :D
triangle.size={
 base:Number(prompt("what is the base in cm?: ",height:Number(prompt("what is the  height in cm?: "}
//using a template literal/string interpolation to print out the area of the instance
triangle.area=(triangle.size.base*triangle.size.height)/2

console.log("this is me testing classes in js\n")

alert(`the name of the shape instance is ${triangle.name}`)
triangle.shapeArea()




