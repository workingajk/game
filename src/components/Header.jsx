import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="bg-amber-200 p-3 flex justify-center">
            <Link to={"/"}>
                <h1 className="text-2xl  font-bold ">Whack-A-Mole</h1>
            </Link>
        </div>
    );
}

export default Header;
