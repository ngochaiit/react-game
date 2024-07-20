import { createContext } from "react";

type GameStateContextType = {
  gameState: string;
  setGameState: Nullable<React.Dispatch<React.SetStateAction<string>>>;
  userName: string;
  setUserName: Nullable<React.Dispatch<React.SetStateAction<string>>>;
};

export const GameStateContext = createContext<GameStateContextType>({
  gameState: "",
  userName: "",
  setGameState: null,
  setUserName: null,
});
