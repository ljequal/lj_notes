/**
 * Created by fchsoft on 2018/10/15.
 */
// 模板字符串内部，就是执行 JavaScript 代码
`In JavaScript '\n' is a line-feed.`;

// 多行字符串
`In JavaScript this is
 not legal.`;

console.log(`string text line 1
string text line 2`);

// ${}大括号内可以嵌入任意 JS 表达式，进行运算，引用对象属性
// 字符串中嵌入变量
let name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);
let x = 1;
let y = 2;

console.log(`${x} + ${y} = ${x + y}`); // "1 + 2 = 3"

`${x} + ${y * 2} = ${x + y * 2}`; // "1 + 4 = 5"

let obj = {x: 1, y: 2};
`${obj.x + obj.y}`; // "3"
console.log(`${obj}`);

function fn() {
    return "Hello World";
}

`foo ${fn()} bar`; // foo Hello World bar

let greeting = `\`Yo\` World!`;
console.log(greeting);


let arr = [1, 2, 3];
arr.map((el, i) => console.log(el + i));

const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];
const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;

console.log(tmpl(data));


// 标签模板

