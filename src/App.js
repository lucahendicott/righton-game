import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import "./App.css";

const pagesData = {
  pages: [
    {
      pageId: "JOIN",
      title: "Join the game!",
      text: "Enter the game code below to join:",
      data: {
        gameCode: "A4B5",
      },
    },
    {
      pageId: "QUESTION",
      title: "Question 1",
      text: "What is the square root of 4?",
      data: {
        answers: ["2", "3", "1/2", "16"],
      },
    },
    {
      pageId: "SCORECARD",
      title: "Scorecard",
      text: "Here's how each team is doing:",
      data: {
        scores: [
          {
            teamName: "team 1",
            teamScore: 200,
          },
          {
            teamName: "team 2",
            teamScore: 500,
          },
          {
            teamName: "team 3",
            teamScore: 300,
          },
          {
            teamName: "team 4",
            teamScore: 400,
          },
        ],
      },
    },
  ],
};

const Join = ({ data }) => {
  const history = useHistory();

  return (
    <form>
      <p>{data.gameCode}</p>
      <input type="text" />
      <br />
      <br />
      <input type="submit" onClick={() => history.push("/1")} />
    </form>
  );
};

const Question = ({ data }) => {
  const history = useHistory();
  const answerList = data.answers;
  const answers = answerList.map((answer) => (
    <button onClick={() => history.push("/2")}>{answer}</button>
  ));

  return <ul>{answers}</ul>;
};

const Scorecard = ({ data }) => {
  const scoreList = data.scores;
  const scores = scoreList.map((score) => (
    <li>
      {score.teamName}: {score.teamScore}
    </li>
  ));

  return <ul>{scores}</ul>;
};

const PageMap = {
  0: Join,
  1: Question,
  2: Scorecard,
};

const PageProvider = ({ match }) => {
  const { params } = match;
  const { pages } = pagesData;
  const page = pages[params.pageIndex];

  const PageComponent = PageMap[params.pageIndex];

  return (
    <div>
      <h1>{page.title}</h1>
      <h3>{page.text}</h3>
      <PageComponent data={page.data} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Route path="/:pageIndex" component={PageProvider}></Route>
    </Router>
  );
}

export default App;
