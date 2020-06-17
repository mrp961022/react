import React,{ Component } from 'react';
import ReactDom from 'react-dom';
import ajax from '../static/ajax'

class AjaxUrl extends Component{
    constructor(){
        super();
        this.state = {allData:[],inputValue:"",seleData:"GG"}
    }
    render(){
        return(
            <div >
                <input ref="myInput" onChange={this.changeState.bind(this)} value={this.state.inputValue}></input>
                <button onClick={this.getInputFocus.bind(this)}>点击input获取焦点</button>
                <div id="ajax_url"></div>
                <select value={this.state.seleData} onChange={this.changeSelect.bind(this)}>
                    <option value="GG">谷歌</option>
                    <option value="BD">百度</option>
                    <option value="360">360</option>
                    <option value="TB">淘宝</option>
                </select>
                <button onClick={this.clickSelectData.bind(this)}>点击</button>
                
            </div>
        )
    }
    componentDidMount(){
        this.getData();
    }
    getData(){
        ajax({
            type: "get",
            url: "http://a.itying.com/api/productlist"
        }).then(resolve => {
            this.setState({
                allData: resolve.result
            },()=>{
                const listItems =[]
                Object.values(resolve.result).forEach(item=>{
                    listItems.push(
                    <li key={item.title}>
                        {item.title}
                    </li>)
                })
            ReactDom.render(<ul>{listItems}</ul>,document.getElementById("ajax_url"))
            })
        })
        .catch(reject => {console.error(reject)})
    }
    changeState(event){
        this.setState({inputValue:event.target.value})
    }
    changeSelect(event){
        this.setState({seleData:event.target.value});
    }
    clickSelectData(){
        alert(`最爱浏览的网页是${this.state.seleData}`)
    }
    getInputFocus(){
        this.refs.myInput.focus();
    }
}
export default AjaxUrl