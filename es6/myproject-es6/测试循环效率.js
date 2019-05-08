let testArr = [],
    i = 0;
while (i < 40000000) {
    testArr.push(i);
    i++;
}

// forEach
function testForeach(testArr) {
    console.time('foreach');
    let newArr = [];
    testArr.forEach(function (i) {
        newArr.push(i);
    });
    console.timeEnd('foreach');
}

// map
function testMap(testArr) {
    console.time('map');
    let newArr = [];
    testArr.map(function (i) {
        newArr.push(i);
    });
    console.timeEnd('map');
}

// for循环
function testFor(testArr) {
    console.time('for');
    let newArr = [];
    for (let i = 0; i < testArr.length; i++) {
        newArr.push(i);
    }
    console.timeEnd('for');
}

// for...of...
function testForOf(testArr) {
    console.time('for...of');
    let newArr = [];
    for (let item of testArr) {
        newArr.push(item);
    }
    console.timeEnd('for...of');
}

testForeach(testArr);
testMap(testArr);
testFor(testArr);
testForOf(testArr);