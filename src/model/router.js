import Home from '../route_page/home'
import Shop from '../route_page/shop'
import User from '../route_page/user'
   import UserAdd from '../user/user_add'
   import UserList from '../user/user_list'
import News from '../route_page/news'
let routes =[
    {
        path:"/",
        component:Home,
        exact:true
    },
    {
        path:"/home",
        component:Shop
    },
    {
        path:"/user",
        component:User,
        routes:[
            // 嵌套路由写法
            {
                path:"/user/",
                component:UserList
            },
            {
                path:"/user/add",
                component:UserAdd
            }
        ]
    },
    {
        path:"/news",
        component:News
    }
]
export default routes