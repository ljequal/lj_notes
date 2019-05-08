/**
 * Created by fchsoft on 2018/10/16.
 */
// 扩展运算符
console.log(...[1, 2, 3]);

// 复制数组
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
// 写法二
// const [...a2] = a1;

// 数组合并    两种方法都是浅拷贝
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES5 的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 的合并数组
let arrContact = [...arr1, ...arr2, ...arr3];
// [ 'a', 'b', 'c', 'd', 'e' ]

let arr = [1, 2, 4];
let arrFrom = Array.from(arr);
arrFrom[0] = 5;
console.log(arr);
console.log(arrFrom);

const obj = {
    toString() {
        return 'abc';
    }
};
const sym = Symbol(obj);
console.log(sym); // Symbol(abc)

// 遍历数组  返回遍历器对象，返回键值对，key，value
// entries()，keys() 和 values()