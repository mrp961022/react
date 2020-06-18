import React,{ Component } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:"我是user组件"
        }
    }
    componentDidMount(){
        console.log(this.props.routes)
    }
    render(){
        return (
            <Router>
        <div>
            {/* 用户页 */}
            <div>
            <Link to="/user/" >用户列表</Link>
            <br/>
            <Link to="/user/add">增加用户</Link>
            </div>
            <div>
                {this.props.routes.map((route,key)=>{
                    return <Route exact key={key} path={route.path} component={route.component}/>
                })}
            </div>
        </div>
        </Router>
        )
    }
}
export default User;