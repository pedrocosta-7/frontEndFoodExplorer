import { AppRoutes } from './app.routes'
import { BrowserRouter } from 'react-router-dom'
import {AppAdminRoutes} from "./app.admin.routes"
import { AuthRoutes } from './auth.routes'
import { useAuth } from '../hooks/auth'


export function MyRoutes(){
  const {user} = useAuth();

  function rendeRoutes(){
    if(user && user.email == "pedro@admin.com" && user.name == "pedroAdmin"){
    return <AppAdminRoutes/>
    } else if(user) {
      return <AppRoutes/>
    } else {
      return <AuthRoutes/>
    }
  }



  console.log("MyRoutes está sendo renderizado");
    return (
      <BrowserRouter>
         {rendeRoutes()}
      </BrowserRouter>
    )
  }
  