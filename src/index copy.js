import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import './dome.css'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// function clock() { 
//   let time = new Date().toLocaleTimeString();
//   let ele = (
//     <div>
//       <p> 现在的时间是：{time} </p>
//       <p> 现在的时间是：{time} </p>
//     </div>
//   )
//   ReactDOM.render(ele,document.querySelector('#root'))
//  }
//  setInterval(clock, 1000);

 //函数式组件
//  function Clock(props) {
//    return (
//      <div>
//        <p> 现在的时间是：{props.date.toLocaleTimeString()} </p>
//      </div>
//    )
//  }

//  function run(){
//    ReactDOM.render(
//      <Clock date={new Date()} />,
//      document.querySelector('#root')
//    )
//  }

//  setInterval(run, 1000);

//表达式
// let time = new Date().toLocaleTimeString();
// let str = '当前时间是：'
// let ele = (
//   <div>
//     <h1>表达式1</h1>
//     <p>{str+time}</p>
//   </div>
// )

//三元表达式
// var tq = '26'
// let color = 'textColor'
// var ele2 = (
//   <div>
//     {/* html 的样式类名要写className,因为class在js当中是关键词 */}
//     <p className={color}>天气晴</p>
//     <p className="bg textColor">温度适中</p>
//   </div>
// )
// let ele = (
//   <div>
//     <p>三元表达式：</p>
//     <div>{tq>27?'天气很热':ele2}</div>
//   </div>
// )
// ReactDOM.render(
//   ele,
//   document.querySelector('#root')
// )

//类组件定义
// class HelloWorld extends React.Component{
//   render(){
//     return (
//       <div>
//         <h1>类组件定义</h1>
//       </div>
//     )
//   }
// }
// React State 相当于vue的data

// class Clock extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       time:new Date().toLocaleTimeString()
//     }
//   }
//   oinput = ()=>{
//     console.log('aa');
//   }
//   dianji = (msg,e)=>{
//     console.log(msg,e);
//   }
//   render(){
//     return (
//       <div>
//         <p>当前时间shi：{this.state.time}</p>
//         <div onClick={this.oinput}>
//             事件事件
//         </div>
//         <button onClick = {(e)=> this.dianji('hello',e)}>点击事件</button>
//       </div>
//     )
//   }
  
  
//   componentDidMount(){
//     setInterval(() => {
//       //this.state.time = new Date().toLocaleTimeString() //错误的方式
//       // 切勿直接修改state数据，需要使用setState
//       this.setState({
//         time:new Date().toLocaleTimeString()
//       })
//     }, 1000);
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.querySelector('#root')
// )



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
