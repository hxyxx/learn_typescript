"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//bool
var flag = true;
//number
var a = 123;
a = 12.3;
console.log(a);
//数组类型
var arr = ["12", "4", "a"];
var arr1 = ["s", "s", "s"];
var arr2 = [1, "2"];
console.log(arr);
//元组类型
var arr3 = ["1", 1, true];
//枚举
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 0] = "success";
    Flag[Flag["error"] = 1] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
console.log(f);
//定义没有赋值就是undefinded
var num;
//一个元素可能是number,可能是null,可能是undefined
var num1;
//void/用在方法没有返回值
function run() {
    console.log("run");
}
//默认参数,函数可选参数,可选参数卸载参数列表最后
function test(num, arg) {
    if (num === void 0) { num = "aaa"; }
    if (arg) {
        return num + " --- " + arg;
    }
    else {
        return "" + num;
    }
}
function getInfo(name, age) {
    if (age) {
        return name + "---" + age;
    }
    else {
        return "" + name;
    }
}
