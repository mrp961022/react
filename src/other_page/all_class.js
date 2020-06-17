import React,{ Component } from 'react';
import ReactDom from 'react-dom';
import propTypes from 'prop-types'; // 引入格式验证所需要的prototypes

class MrpPage extends Component{
    constructor(props){
        super(props);
        this.state={ showType:true } // state存储变量
    }
    render(){
        return (
            // 如果render的return是个null则组织组件渲染 但是并不影响生命周期函数的触发
            <div>
                <p> {this.props.url} </p> {/** 父组件的传值直接子组件props使用 */}
                <p> {this.props.objData.name} </p>
                <button onClick={this.addWhich.bind(this)}>点击</button>
                {/** 需要bind(this)改变指向不然无法渠道setState的值 */}
                <div id = "mrpExample"></div>
                {this.state.showType && <h1>添加</h1>} {/** 逻辑与 如果前面的为true显示后面的组件 */}
                {this.state.showType || <h2>删除</h2>} {/** 逻辑或 如果前面的为false显示后面的组件 */}
            </div>
        );
    }

    addWhich(){
        this.setState(
            /**
             * setstate是异步
             * 两个参数
             * 第一个参数改变state中的变量
             * 第二个属性为改变后触发的函数 需要使用箭头函数或者bind(this)
             */
            { showType : !this.state.showType },// 修改state中的值
            ()=>{
                ReactDom.render(this.IsShowIt({ showIt: this.state.showType }), document.getElementById("mrpExample"))
            }
        )
    }
    IsShowIt(props){
        if(props.showIt){
            return this.Add();
        }else{
            return this.Remove();
        }
    }
    Add(){
        return <h1>添加</h1>
    }
    Remove(){
        return <h2>删除</h2>
    }
}
MrpPage.propTypes = {
    url:propTypes.string // props格式验证
}
export default MrpPage;