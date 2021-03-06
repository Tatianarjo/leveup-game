import React, { useState } from "react";

export const GameContext = React.createContext();

export const GameProvider = (props) => {
  const [games, setGames] = useState([]);
  const [gameTypes, setTypes] = useState([]);

  const getGames = () => {
    return fetch("http://localhost:8000/games", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((response) => response.json())
      .then(setGames);
  };
  const createGame = (game) => {
    return fetch("http://localhost:8000/games", {}).then().then();
  };
  
  const getGameTypes = () => {
    return fetch("http://localhost:8000/gameTypes", {}).then().then();
  };
  return (
    <GameContext.Provider value={{ games, getGames, createGame, getGameTypes  }}>
      {props.children}
    </GameContext.Provider>
  );
};