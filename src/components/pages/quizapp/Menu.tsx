import React from "react";
import { useContext } from "react";
import { GameStateContext } from "@/app/helpers/Context";

export default function Menu() {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error("Menu must be used within a GameStateContext.Provider");
  }
  const { gameState, setGameState } = context;

  return (
    <div
      style={{
        width: 500,
        height: 500,
        backgroundColor: "lightseagreen",
        boxShadow: " 0 0 10px rgba(0, 0, 0, 0.1)",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          placeholder="Ex. John Smith"
          style={{
            flexDirection: "column",
            width: 300,
            height: 50,
            marginBottom: "50px",
          }}
        />
        <button
          type="button"
          onClick={() => (setGameState ? setGameState("playing") : null)}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
