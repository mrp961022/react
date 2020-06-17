import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
// import MrpPage from './other_page/all_class'
import AjaxUrl from './other_page/ajax_url'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { date: new Date() } // state状态机
    /**
     * 通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。
       React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。
       以下实例创建一个名称扩展为 React.Component 的 ES6 类，在 render() 方法中使用 this.state 来修改当前的时间。
       添加一个类构造函数来初始化状态 this.state，类组件应始终使用 props 调用基础构造函数。
     */
  }
  render() {
    return (
      <div id="App">
        {/**我是一段注释文本 */}
        <button onClick={this.tick.bind(this,111)}> 点击插入元素 </button>
        {/** react中的事件触发 入参 */}
        <div id="example"></div>
      </div>
    );
  }
  
  // componentWillMount() // dom元素加载前
  componentDidMount(){
    // setInterval(() => {
      this.tick();
    // }, 1000);
  } // dom元素加载后
  // componentWillUnmount() // dom元素卸载前
  // componentDidCatch() // 报错前
  // componentWillReceiveProps() // （子组件）入参时
  // shouldComponentUpdate() 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。可以在你确认不需要更新组件时使用。
  // componentWillUpdate() // 更新前
  // componentDidUpdate() // 更新后
  // 普通方法使用首字母小写的驼峰命名 如果返回值是dom组件的方法首字母大写
  Clock(props) {
    // dom组件 声明时大写 返回值最外层有且只有一个dom元素
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  NewDom() {
    let arr = [1, 2, 3, 4];
    let domArr = [];
    Object.keys(arr).forEach(item => {
      domArr.push(<h1 key = {item}>{item}</h1>)
    }); // 对于dom元素操作推荐这样写
    // Object.keys 遍历key值
    // Object.values 遍历value值
    // arr.map((item,index)=>{
    //   domArr.push(<h1 key = {index}>{item}</h1>)
    // });
    console.log(domArr)
    return (
      <div>{domArr}</div>
    )
  }
  tick(aaa) {
    // let arr=[<h1>1</h1>, <h1>2</h1>]
    ReactDOM.render(
      // render 第一参数 dom 元素
      // 第二个参数 dom元素需要插入的dom
      // this.Clock({date:new Date()}),
      // <div>{arr}</div>, // 可以插入数组
      // this.NewDom(),
      // this.Clock(this.state),
      // <MrpPage objData={{name:"dfasdfas"}} url={"111"}/>, // class类继承component可以直接组件引入
      // 传值普通字符串 引号 对象两个大括号（对象外部再包一层）
      <AjaxUrl/>,
      document.getElementById('example')
    );
  }
}


export default App;
