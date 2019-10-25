import React, { useEffect, useState } from "react";
import { withRouter, Route } from "react-router-dom";
import Login from "./Auth/Login"
import Register from "./Auth/Register"
import CardLister from "../components/cards/CardLister"
import AddForm from "../components/forms/AddForm"
import EditForm from "../components/forms/EditForm"
import APIManager from "../modules/APIManager"


const ApplicationViews = () => {
  const [moves, setMoves] = useState([]);
  const [difficulty, setDifficulty] = useState([]);
  const [body_region, setBodyRegion] = useState([]);
  const [situation, setSituation] = useState([]);

  const getMoves = () => {
    APIManager.getAllUnauthorized("moves").then(setMoves);
  };

  const getDifficulty = () => {
    APIManager.getAllUnauthorized("difficulty_type").then(setDifficulty);
  };

  const getBodyRegion = () => {
    APIManager.getAllUnauthorized("body_region").then(setBodyRegion);
  };

  const getSituations = () => {
    APIManager.getAllUnauthorized("situation_type").then(setSituation);
  }

  useEffect(() => {
    getMoves();
    getDifficulty();
    getBodyRegion();
    getSituations();
  }, []);

  return (
    <React.Fragment>
      <Route
        exact
        path="/login"
        render={props => {
          return <Login {...props} />;
        }}
      />

      <Route
        exact
        path="/register"
        render={props => {
          return <Register {...props} />;
        }}
      />

      <Route
        exact
        path="/"
        render={props => {
          return <CardLister getMoves={getMoves} moves={moves} {...props} />;
        }}
      />

      <Route
        exact
        path="/addform"
        render={props => {
          return <AddForm situation={situation} getMoves={getMoves} difficulty={difficulty} body_region={body_region} {...props} />;
        }}
      />

      <Route
        exact
        path="/editform/:each(\d+)"
        render={props => {
          let move = moves.find(
            each => each.id === parseInt(props.match.params.each)
          );
          if (!move) {
            move = { id: 404, name: "404" };
          }
          return (
            <EditForm
              move={move}
              situation={situation} getMoves={getMoves} difficulty={difficulty} body_region={body_region} {...props}
            />
          );
        }}
      />

    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);
