import { useState } from "react";
import "./styles.css";

const MovieDatabase = {
  Action: [
    {
      name: "War",
      rating: "8.9/10",
      description:
        "Kabir, a secret agent, goes rogue after a mission to catch a terrorist goes awry. However, his boss sends Khalid, another agent and his student, to track him down."
    },
    {
      name: "Shershaah",
      rating: "8.8/10",
      description:
        "The life of Indian army captain Vikram Batra, awarded with the Param Vir Chakra, India's highest award for valour for his actions during the 1999 Kargil War."
    },
    {
      name: "Batla House",
      rating: "7.2/10",
      description:
        "Following a deadly encounter with terrorists at Batla House in Delhi, Sanjeev Kumar Yadav strives to catch the culprits while dealing with nationwide criticism and post-traumatic stress disorder."
    }
  ],
  Comedy: [
    {
      name: "Hera Pheri",
      rating: "9/10",
      description:
        "Hera Pheri is a 2000 Indian Hindi-language comedy film directed by Priyadarshan, starring Akshay Kumar, Sunil Shetty, Paresh Rawal and Tabu. The film is remake of 1989 Malayalam film Ramji Rao Speaking which itself was based on the 1971 TV movie See The Man Run."
    },
    {
      name: "Chup Chup Ke",
      rating: "8.7/10",
      description:
        "A fisherman saves Jeetu from committing suicide, only to sell him to a moneylender. Jeetu is then forced to pose as a man with hearing and speech impairment, resulting in hilarious consequences."
    },
    {
      name: "Total Dhamaal",
      rating: "9/10",
      description:
        "When a plane carrying a thief's treasure crashes in Janakpur, a group of eccentric people and seasoned con artists compete against each other to find it first."
    }
  ],
  Horror: [
    {
      name: "Bhoot Part One: The Haunted Ship",
      rating: "5.5/10",
      description:
        "A bereaved shipping officer must save a girl he believes is real, on a stranded, unmanned haunted ship, sea bird."
    },
    {
      name: "Stree",
      rating: "7.6/10",
      description:
        "The people of Chanderi live under constant fear of Stree, the spirit of a woman who attacks men at night during festivals. Vicky, along with his friends, decides to unravel the mystery."
    },
    {
      name: "1920 evil returns",
      rating: "5/10",
      description:
        "A famous poet, Jaidev, meets a woman who has lost her memories. He brings her to his house and tries to help her, but things take an ugly turn when she gets possessed by an evil spirit."
    }
  ]
};
let MovieNameList = Object.keys(MovieDatabase);
export default function App() {
  const [movieName, setMovieName] = useState("Action");

  function movieClickHandler(movie) {
    setMovieName(movie);
  }
  return (
    <div className="container">
      <h1>Bollywood Movies</h1>
      <div>
        {MovieNameList.map((movie) => {
          return (
            <button
              key={movie}
              className="movie-btn"
              onClick={() => movieClickHandler(movie)}
            >
              {movie}
            </button>
          );
        })}
      </div>
      <div>
        {MovieDatabase[movieName].map((list) => {
          return (
            <div className="movie-block">
              <div className="movie-name">{list.name}</div>
              <div className="movie-desc">{list.description}</div>
              <div className="movie-rating">Rating : {list.rating}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
