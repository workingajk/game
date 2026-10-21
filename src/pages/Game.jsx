import React, { useEffect } from "react";

import { useState, useRef } from "react";
import "./Game.css";
import holeImg from "./../assets/hole.svg";
import moleImg from "./../assets/mole.svg";
import hammerImg from "./../assets/hammer-svgrepo-com.svg";
import bgMusic from "./../assets/music.mp3";
import smashSfx from "./../assets/smash.mp3";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { Howl, Howler } from "howler";

function Timer({ timeout }) {
    const [time, setTime] = useState(60);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);
        timeout(false);

        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        if (time === 0 && intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            timeout(true);
            // return;
        }
    }, [time]);
    return <>{time}</>;
}

function Square({ index, moleIndex, handleClick }) {
    return (
        <button
            // key={index}
            className="bg-amber-200 outline-1 rounded-md  flex justify-center items-center w-25 h-25"
            onClick={() => handleClick(index)}
            style={{ cursor: `url("${hammerImg}") 32 32, auto` }}
        >
            {moleIndex == index ? (
                <div className="static flex flex-col">
                    <img
                        src={moleImg}
                        style={{
                            padding: 10,
                            transform: "translateY(-14px)",
                            animation: "slide 1s linear ",
                        }}
                        className="mole "
                        alt=""
                    />
                </div>
            ) : (
                <img src={holeImg} />
            )}
        </button>
    );
}

function Score({ score }) {
    return <p>Score:{score}</p>;
}

function Game() {
    const [score, setScore] = useState(0);
    const [moleIndex, setMoleIndex] = useState(Math.floor(Math.random() * 9));
    const [gameOver, setGameOver] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        if (gameOver) {
            if (localStorage.getItem("topScore") < score) {
                localStorage.setItem("topScore", score);
            }
            Swal.fire({
                title: "Game Over",
                text: "Your Score: " + score,
                // icon: "question",
            });
            nav("/");
        }
    }, [gameOver]);

    let [musicEnabled, setMusicEnabled] = useState(true);
    const musicRef = useRef(null);
    const smashRef = useRef(null);

    const playMusic = () => {
        // console.log(music.playing(1));
        const music = musicRef.current;
        if (!music) return;

        if (musicEnabled) {
            music.pause();
            setMusicEnabled(false);
        } else {
            music.play();
            setMusicEnabled(true);
        }
    };

    React.useEffect(() => {
        const music = new Howl({
            src: [bgMusic],
            loop: true,
            volume: 0.2,
            
        });

        const smash = new Howl({
            src: [smashSfx],
            volume: 0.2,
        });

        musicRef.current = music;
        smashRef.current = smash;

        music.play()
        return () => {
            // musicRef.current.unload()
            music.unload();
            smash.unload();
        };
    }, []);

    // const pauseMusic = () => {};

    const handleClick = (index) => {
        // console.log(index);
        if (index == moleIndex) {
            setScore((prev) => prev + 1);
            setMoleIndex(Math.floor(Math.random() * 9));
            smashRef.current.play();
            // smash.play();
        } else {
            setScore((prev) => prev - 1);
        }
        // console.log(moleIndex);
    };
    console.log(hammerImg);

    return (
        <>
            <h1 className="text-2xl font-bold text-center">Wack-A-Mole</h1>
            <div>
                {" "}
                {musicEnabled ? (
                    <button
                        onClick={playMusic}
                        className="bg-amber-300 rounded-md py-0.5 px-1.5"
                    >
                        {" "}
                        music ON{" "}
                    </button>
                ) : (
                    <button
                        onClick={playMusic}
                        className="bg-amber-300 rounded-md py-0.5 px-1.5 line-through"
                    >
                        {" "}
                        music OFF{" "}
                    </button>
                )}{" "}
                <Timer timeout={setGameOver} />
            </div>
            <div
                className="grid grid-flow-col grid-rows-3 gap-4 justify-center align-center p-13"
                style={{ cursor: `url("${hammerImg}") 32 32, auto` }}
            >
                {Array.from({ length: 9 }, (_, index) => (
                    <Square
                        key={index}
                        index={index}
                        moleIndex={moleIndex}
                        handleClick={handleClick}
                    />
                ))}
            </div>
            <div className="text-center">
                <Score score={score} />
            </div>
        </>
    );
}

export default Game;
