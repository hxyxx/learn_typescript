//类
class Person1{
    name:string;
    constructor(name:string){
        this.name = name
    }
    run():void{
        alert(this.name)
    }
}
var p = new Person1('aaa');
// p.run(); 
//ts中实现继承
//子类和父类有同样的方法，会执行子类的方法
class Web extends Person1 {
    constructor(name:string){
        super(name)
    }
    work(){
        alert("李四在工作")
    }
}
let w = new Web('sss')
w.work();
//ts有三种修饰符
/**
 *   public公有，再类里边、子类、类外面都可以访问
 *   protected 保护类型，在类里面、子类里面可以访问，在类外部没法访问
 *   private 私有，在类里面可以访问，子类、类外部都没法访问
 *   属性不加修饰符，默认是public 
 * */