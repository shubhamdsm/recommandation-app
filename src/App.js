import React, { useState } from "react";
import "./styles.css";

const listOfRecommendations = {
  youtube: [
    {
      name: "tanay pratap",
      about: "frontend developement"
    },
    {
      name: "avalon meta live",
      about: "news"
    },

    {
      name: "ABNUX",
      about: "design"
    },

    {
      name: "JSlovers",
      about: "frontend developement"
    }
  ],
  podcast: [
    {
      name: "developer dunia",
      by: "tanay pratap and sid"
    },
    {
      name: "cero 1 and cero 2",
      by: "varun mayya"
    }
  ],
  newsletters: [
    {
      name: "uidev",
      by: "tyler mcginnis"
    },
    {
      name: "tiny react",
      by: "sid kshetrapal"
    },

    {
      name: "technicalinterview.dev",
      by: "emma bostain"
    }
  ]
};

var lists = Object.keys(listOfRecommendations);

export default function App() {
  const [topic, setTopic] = useState("youtube");
  function topicClickHandler(item) {
    setTopic(item);
  }

  return (
    <div className="App">
      <h1>My Recommandations</h1>

      <div>
        {lists.map((item) => (
          <button className="btn" onClick={() => topicClickHandler(item)}>
            {item}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {listOfRecommendations[topic].map((topic) => (
            <li key={topic.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {topic.name} </div>
              <div style={{ fontSize: "smaller" }}> {topic.about} </div>
              <div style={{ fontSize: "smaller" }}> {topic.by} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
