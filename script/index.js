// 创建过去七天的数组，如果将代码中的减号换成加号，你将得到未来7天的数组集合
[...Array(7).keys()].map(days => new Date(Date.now() - 86400000 * days));

// 获取URL的查询参数
q = {};
location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => q[k] = v);
console.log(q);

// 获取本地时间
console.log(new Date().toLocaleString().slice(9, 19));

// 随机更改数组元素顺序，混淆数组
// (arr) => arr.slice().sort(() => Math.random() - 0.5)
let mixArr = (arr) => arr.slice().sort(() => Math.random() - 0.5);
console.log(mixArr([1, 2, 3, 4, 5]));

// 数组去重
let arr = [1, 1, 1, 2, 3, 4, 5];
console.log([...new Set(arr)]);

// 创建特定大小的数组
console.log([...Array(3).keys()]);

// 返回一个键盘
(_ => [..."`1234567890-=~~QWERTYUIOP[]\\~ASDFGHJKL;'~~ZXCVBNM,./~"].map(x => (o += `/${b = '_'.repeat(w = x < y ? 2 : ' 667699'[x = ["BS", "TAB", "CAPS", "ENTER"][p++] || 'SHIFT', p])}\\|`, m += y + (x + '    ').slice(0, w) + y + y, n += y + b + y + y, l += ' __' + b)[73] && (k.push(l, m, n, o), l = '', m = n = o = y), m = n = o = y = '|', p = l = k = []) && k.join``)();