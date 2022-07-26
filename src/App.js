import styled from "styled-components";
import { faMagnifyingGlass, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = styled.div`
  margin: 20px 0 40px 0;
  .searchBar {
    padding: 5px 5px;
    width: 300px;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #d6d6d6;
  }
  select {
    padding-left: 10px;
    font-weight: bold;
    border: none;
    width: 90px;
  }
  select:focus {
    outline: none;
  }
  input {
    border: none;
  }
  input:focus {
    outline: none;
  }
  button {
    appearance: none;
    background-color: transparent;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    font-size: 20px;
    background: linear-gradient(to bottom right, #0096d8, #21ffc0);
    color: white;
  }
`;
const Card = styled.div`
  height: 700px;
  width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .card {
    border: 1px solid black;
    position: relative;
  }
  .cardImag {
    > p {
      margin: 0;
      position: absolute;
      background-color: black;
      color: white;
      padding: 0 3px;
      bottom: 10px;
      right: 10px;
    }
  }
`;

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://trusuite.truabutment.com/api/tada/list",
      responseType: "json",
      maxContentLength: 2000,
    })
      .then(function (response) {
        setCards(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Search>
        <div className="searchBar">
          <form>
            <select name="select">
              <option value="all">All</option>
              <option value="title">Title</option>
            </select>
            <input placeholder="Search"></input>
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
      </Search>
      <Card>
        {cards.data.map((card) => (
          <div className="card">
            <div className="cardImag">
              <p>{card.length}</p>
              <img src={card.thumb} alt="card_image" />
            </div>
            <div>{card.title}</div>
            <div>
              <div>
                <span>LECTURE</span>
                <span>{card.created_at_format}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faEye} />
                <span>{card.view}</span>
              </div>
            </div>
          </div>
        ))}
      </Card>
      <div>
        <p>1 2</p>
      </div>
    </div>
  );
}

export default App;
