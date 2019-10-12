// {
//     let add = (a,b) => a+b;
//     const sum = add(3,5);
//     function foo(...args){
//         console.log(args);
//     }
//     const arr = [1,3,4,5,6,7];
//     foo(...arr);
//     document.write(`<h1 style="text-align:center">Hello Webpack</h1><h2 style="margin-top:10px;text-align: center;">${sum}</h2>`);
// }

const React = require('react');
const ReactDOM = require('react-dom');
const style =  require('./index.css');
const content = require('./a.js');

// require.ensure(['./a'], function(require) {
//   const content = require('./a');
//   document.open();
//   document.write('<h1>' + content + '</h1>');
//   document.close();
// });

ReactDOM.render(
    <div>
    <h1 className={style.h1}>Hello Webpack!</h1>
    <h2>{content}</h2>
    <h2 className="h2">现在的时间是{new Date().toLocaleTimeString()}!</h2>
    <img src='./res/bg.jpg'/>
</div>,
    document.querySelector('#wrapper')
);