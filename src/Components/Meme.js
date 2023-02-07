import React from "react";
import memeData from "./memeData";
import { useState, useEffect } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    toptext: "",
    bottomtext: "",
    random: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function Memegenerator(e) {
    e.preventDefault();
    const Random = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[Random].url;
    
    setMeme((prevMeme) => ({
      ...prevMeme,
      random: url,
    }));
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <div className="form">
      <form method="submit">
        <div className="inputs">
          <input
            type="text"
            value={meme.toptext}
            name="toptext"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="bottomtext"
            value={meme.bottomtext}
            onChange={handleChange}
          ></input>
        </div>
        <div className="button">
          <button type="submit" className="btn" onClick={Memegenerator}>
            Get New Meme Image
          </button>
          <div>
            <img src={meme.random}
          
              style={{ height: "400px", width: "400px" }}
              alt="img"
            />
            <div
              style={{
                display: "grid",
                textAlign: "center",

                color: "white",
              }}
            >
              <h2 style={{ position: "relative", bottom: "400px" }}>
                {meme.toptext}
              </h2>
              <h2 style={{ position: "relative", bottom: "200px" }}>
                {meme.bottomtext}
              </h2>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Meme;
