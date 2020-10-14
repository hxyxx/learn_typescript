import { TeletexString } from "asn1js"

//bool
var flag:boolean =true
//number
var a:number=123
a=12.3
console.log(a)
//数组类型
let arr:string[]=["12","4","a"]
let arr1:Array<string>=["s","s","s"]
let arr2:Array<any>=[1,"2"]
console.log(arr)
//元组类型
let arr3:[string,number,boolean]=["1",1,true]
//枚举
enum Flag{
    success,//默认为0
    error
}
let f:Flag = Flag.success
console.log(f)
//定义没有赋值就是undefinded
let num:number|undefined;
//一个元素可能是number,可能是null,可能是undefined
let num1:number|null|undefined
//void/用在方法没有返回值
function run():void{
    console.log("run");
}
//默认参数,函数可选参数,可选参数卸载参数列表最后
function test(num:string="aaa",arg?:number):string{
    if(arg){
        return `${num} --- ${arg}`
    }else{
        return `${num}`
    }
}
//方法重载
function getInfo(name:string):string;
function getInfo(name:string,age:number):string
function getInfo(name:any,age?:number):string{
    if(age){
        return `${name}---${age}`
    }else{
        return `${name}`
    }
}