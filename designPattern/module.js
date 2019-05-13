// 模块模式
// 在js中，有几种用于实现模块的方法
// ①对象字面量表示法；②Module模式；③AMD模式；④CommonJS模块；⑤ECMAScript Harmony模式
// es6中增加了import和export
// 对面字面量表示法定义的模块
let myModule = {
    myProperty: 'some value',
    myConfig: {
        useCaching: true,
        language: 'en'
    },
    myMethod: function () {
        // ...
    }
};

// 在js中，Module模式用于进一步模拟类的概念，通过这种方式，能够使一个单独的对象拥有公有/私有方法和变量
// 降低函数名冲突的可能性

// Module模式
let testModule = (function () {
    let counter = 0;
    return {
        increment() {
            return ++counter;
        },
        reset() {
            counter = 0;
        }
    }
})();

// 下面是一个包含命名空间、公有和私有变量的Module模块
let myNamespace = (function () {
    let myPrivateVar = 0;
    let myPrivateMethod = foo => {
        console.log(foo)
    };
    return {
        myPublicVar: 'foo',
        myPublicMethod(bar) {
            myPrivateVar++;
            myPrivateMethod(bar);
        }
    }
})();
