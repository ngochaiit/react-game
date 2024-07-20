"use client";
import React, { useState } from "react";
import Menu from "@/components/pages/quizapp/menu";
import Quiz from "@/components/pages/quizapp/Quiz";
import { GameStateContext } from "@/app/helpers/Context";

export default function QuizApp() {
  const [gameState, setGameState] = useState<string>("menu");
  const [userName, setUserName] = useState<string>("");
  return (
    <GameStateContext.Provider
      value={{ gameState, userName, setGameState, setUserName }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
          background: "#f0f0f0",
          margin: "auto",
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
      </div>
    </GameStateContext.Provider>
  );
}
