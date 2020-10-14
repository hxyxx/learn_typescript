"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//类
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        alert(this.name);
    };
    return Person;
}());
var p = new Person('aaa');
// p.run(); 
//ts中实现继承
//子类和父类有同样的方法，会执行子类的方法
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.work = function () {
        alert("李四在工作");
    };
    return Web;
}(Person));
var w = new Web('sss');
w.work();
//ts有三种修饰符
/**
 *   public公有，再类里边、子类、类外面都可以访问
 *   protected 保护类型，在类里面、子类里面可以访问，在类外部没法访问
 *   private 私有，在类里面可以访问，子类、类外部都没法访问
 *   属性不加修饰符，默认是public
 * */ 
