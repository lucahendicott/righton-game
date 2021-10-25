import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
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

const Join = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const { pages } = pagesData;
  const page = pages[pageIndex];
  return (
    <div>
      <h1>{page.title}</h1>

      <form>
        <h3>{page.text}</h3>
        <p>{page.data.gameCode}</p>
        <input type="text" />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

const Question = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const { pages } = pagesData;
  const page = pages[pageIndex];
  const answerList = page.data.answers;
  const answers = answerList.map((answer) => <button>{answer}</button>);
  return (
    <div>
      <h1>{page.title}</h1>
      <h3>{page.text}</h3>
      <ul>{answers}</ul>
    </div>
  );
};

const Scorecard = () => {
  const [pageIndex, setPageIndex] = useState(2);
  const { pages } = pagesData;
  const page = pages[pageIndex];
  const scoreList = page.data.scores;
  const scores = scoreList.map((score) => (
    <li>
      {score.teamName}: {score.teamScore}
    </li>
  ));
  return (
    <div>
      <h1>{page.title}</h1>
      <h3>{page.text}</h3>
      <ul>{scores}</ul>
    </div>
  );
};

function App() {
  return (
    <div>
      <Join />
      <Question />
      <Scorecard />
    </div>
  );
}

export default App;
