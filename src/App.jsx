import { useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Pnf from "./pages/Pnf";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="*" element={<Pnf />} />
            </Routes>
        </>
    );
}

export default App;
