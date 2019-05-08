/**
 * Created by fchsoft on 2018/10/15.
 */
let [a, b, c] = [1, 2, 3];
console.log(a);
console.log(b);
console.log(c);

let obj = {foo: 'aaa', bar: 'bbb', test: undefined};
let {foo, bar, test = 10} = {...obj};
console.log(foo);
console.log(bar);
console.log(test);