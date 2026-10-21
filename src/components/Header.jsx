import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="bg-amber-200 p-3 flex">
            <Link to={"/"}>
                <h1 className="text-2xl  font-bold">Wack-A-Mole</h1>
            </Link>
        </div>
    );
}

export default Header;
