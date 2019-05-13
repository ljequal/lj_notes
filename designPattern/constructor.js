// 创建对象
let newObject = {};
let newObject2 = new Object();
let newObject3 = Object.create(null);

// 键值赋值给对象
// 1、点方法
// 2、中括号方法
// 3、Object.defineProperty();
// 4、Object.defineProperties();

// 基本构造器
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function () {
        return this.model + ' has done' + this.miles + ' miles';
    }
}

// 上述会产生两个问题，一是继承变得困难，二是方法在每一个实例上都创建

function Car2(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car2.prototype.toString = function () {
    return this.model + ' has done' + this.miles + ' miles';
};