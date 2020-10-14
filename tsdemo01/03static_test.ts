class Person2{
    public name:string
    static sex='男'
    constructor(name:string){
        this.name = name;
    }
    run(){
        alert(`${this.name}在运动`)
    }
    work(){
        alert(`${this.name}在工作`)
    }
    static print(){
        alert(`print`);
    }
}
var p = new Person2('李四')
// p.run();
// Person.print(); 
alert(Person2.sex)
