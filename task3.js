//class-person
class person
{
    constructor(name,age,gender,city,id){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.city=city;
        this.id=id;
}
getname()
{
    console.log(`Name: ${this.name}`);

}
getage()
{
    console.log(`Age: ${this.age}`);

}
getgender()
{
    console.log(`Gender: ${this.gender}`);

}
getcity()
{
    console.log(`City: ${this.city}`);

}
getid()
{
    console.log(`ID: ${this.id}`);

}

}
let data=new person("guru",18,"male","chennai","101");

data.getname();
data.getage();
data.getgender();
data.getcity();
data.getid();