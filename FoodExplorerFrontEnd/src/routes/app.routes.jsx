import { Routes, Route } from "react-router-dom";
import { Dish } from "../pages/Dish";
import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";



export function AppRoutes(){
    return (
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dish" element={<Dish/>}/>
        <Route path="/menu" element={<Menu/>}/>      
        </Routes>
    )
}