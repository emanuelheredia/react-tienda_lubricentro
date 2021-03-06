import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Carrito from "./components/Carrito";
import CartContext from "./components/CartContext"
import MisOrdenes from "./components/MisOrdenes"
import Compra from "./components/Compra";

const App= ()=>{
    
    return (
            <CartContext>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route exact path= "/productos/" element={<ItemListContainer/>}/>
                        <Route exact path= "/productos/:categoria" element={<ItemListContainer/>}/>
                        <Route exact path= "/carrito"element={<Carrito/>}/>
                        <Route exact path= "/producto/:id" element={<ItemDetailContainer/>}/>
                        <Route exact path="/misordenes" element={<MisOrdenes/>} />
                        <Route exact path= "/producto/carrito" element={<Carrito/>}/>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/compra" element={<Compra/>} />
                    </Routes>
                </BrowserRouter>
            </CartContext>
            )
};
export default App;
