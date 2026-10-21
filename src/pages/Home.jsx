import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
    const[score,setScore]= React.useState(0)

    useEffect(()=>{
        let topScore =localStorage.getItem('topScore') 
        if (topScore == null){
            localStorage.setItem('topScore',0)
        }
        setScore(topScore)
    })
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="flex flex-col justify-center items-center bg-amber-100 py-15 px-25 gap-3 outline-1 rounded-xl">
                <h1 className="text-3xl font-bold">Welcome</h1>
                <p className="text-2xl">Top Score: {score}</p>
                <Link to={"/game"}>
                    <button className="text-xl font-extrabold px-12 py-2 bg-amber-300 rounded-md">
                        Play
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
