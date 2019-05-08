/**
 * Created by fchsoft on 2018/10/16.
 */
function log(x = 'hello', y) {
    console.log(x, y);
}
log('world');

function m1({x = 0, y = 0} = {}) {
    return [x, y];
}

// 写法二
function m2({x, y} = {x: 0, y: 0}) {
    return [x, y];
}
console.log(m1());
console.log(m2());

let insert = (value) => ({
    into: (array) => ({
        after: (afterValue) => {
            array.splice(array.indexOf(afterValue) + 1, 0, value);
            return array;
        }
    })
});

insert(2).into([1, 3]).after(1); //[1, 2, 3]
console.log(insert(2));
console.log(insert(2).into([1, 3]));
console.log(insert(2).into([1, 3]).after(1));