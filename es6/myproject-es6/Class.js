function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
};

let p = new Point(1, 2);

class NewPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

// 类的属性名，可以采用表达式
let methodName = 'getArea';

class Square {
    constructor(length) {
        // ...
    }

    [methodName]() {
        // ...
    }
}

// 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用
class Foo {
    static classMethod() {
        return 'hello';
    }
}

Foo.classMethod() // 'hello'

let foo = new Foo();
// foo.classMethod()

// 暂时不提供私有方法和私有属性
// 1、可通过下划线命名区分
// 2、将方法移出模块，通过bind绑定
// 3、symbol