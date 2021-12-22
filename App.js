import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Carrito from "./components/Carrito";

const App= ()=>{
    return (
            <>
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path= "/productos/" element={<ItemListContainer/>}/>
                <Route path= "/productos/:categoria" element={<ItemListContainer/>}/>
                <Route path= "/carrito"element={<Carrito/>}/>
                <Route path= "/producto/:id" element={<ItemDetailContainer/>}/>
                <Route path="/" element={<Home/>} />
            </Routes>
            </BrowserRouter>
            </>
            )
};
export default App;