import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News/News";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import LoginLayout from "../Layout/LoginLayout";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";

const router = createBrowserRouter([

    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element:<Navigate to='/category/0'></Navigate>

            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },{
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            }
        ]

    },


    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
                path:'/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
                
            }
        ]
    },

    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id',
                element: <News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;