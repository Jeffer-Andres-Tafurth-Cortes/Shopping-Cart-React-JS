import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./Components/NavBar"
import { ComprasPage } from "./Pages/ComprasPage"
import { CarritoPage } from "./Pages/CarritoPage"
import { ProductosProvider } from "./Context/ProductosProvider"
import { CarritoProvider } from "./Context/CarritoProvider"

export const Cart = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar></NavBar>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
                        <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
                        <Route path="/*" element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
            </CarritoProvider>
        </ProductosProvider>
    )
}