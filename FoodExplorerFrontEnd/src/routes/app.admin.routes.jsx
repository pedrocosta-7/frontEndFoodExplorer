import {DishAdmin} from "../pages/DishAdmin"
import { Routes, Route } from "react-router-dom";
import {EditDish} from "../pages/EditDish"
import {HomeAdmin} from "../pages/HomeAdmin"
import {MenuAdmin} from "../pages/MenuAdmin"
import{NewDish} from "../pages/NewDish"

export function AppAdminRoutes(){
    return (
        <Routes>
        <Route path="/" element={<HomeAdmin/>}/>
        <Route path="/dishadmin" element={<DishAdmin/>}/>
        <Route path="/menuadmin" element={<MenuAdmin/>}/>
        <Route path="/editdish/:id" element={<EditDish />} />
        <Route path="/newdish" element={<NewDish/>}/>                 
        </Routes>
    )
}