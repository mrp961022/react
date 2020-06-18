import React,{ Component } from "react"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import './App.css'
import routes from './model/router'
class AppRoute extends Component{
    render(){
        return (
        <Router>
            <div>
                <header className="title">
                    <Link to="/">首页组件</Link>
                    <Link to="/user">用户页面</Link>
                    <Link to="/shop">商户</Link>
                    <Link to="/news">新闻</Link>
                </header>
                {/* <Route exact path="/user/" render={props=>{
                        <route.component {...props} routes = {route.routes}/>
                }}></Route> */}
                {routes.map((route,key)=>{
                    if(route.exact){
                        return <Route key={key} exact path={route.path}
                        render={props=>(
                            <route.component {...props} routes={route.routes}/>
                        )}
                        />
                    }else{
                        // 实现嵌套路由传值 
                        return <Route key={key} path={route.path}
                        render={props=>(
                            <route.component {...props} routes={route.routes}/>
                        )}
                        />
                    }
                })}{/* 循环的方式 */}
                {/* <Route exact path="/" component={Home}/>
                <Route exact path="/shop" component={Shop}/>
                <Route exact path="/user" component={User}/> */}{/* 一种方式 */} 
            </div>
        </Router>
        )
    }
}
export default AppRoute;