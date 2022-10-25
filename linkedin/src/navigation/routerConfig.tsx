import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/login/login"

export const RouterConfig = () => {
    return <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login />} />
        </Routes>
    </BrowserRouter>
}