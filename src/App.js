import styled from "styled-components";
import {
  faMagnifyingGlass,
  faEye,
  faAngleRight,
  faAnglesRight,
  faAngleLeft,
  faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import axios from "axios";

const All = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Search = styled.div`
  width: 1200px;
  margin: 20px 0 40px 0;
  .searchBar {
    padding: 5px 5px;
    width: 300px;
    border-radius: 30px;
    box-shadow: 3px 3px 10px #d6d6d6;
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
    cursor: pointer;
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
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 1200px;
  .card {
    margin: 15px;
  }
  .cardImag {
    position: relative;
    p {
      margin: 0;
      position: absolute;
      background-color: black;
      color: white;
      padding: 0 3px;
      bottom: 5px;
      right: 5px;
    }
    img {
      width: 100%;
    }
  }
  .title {
    font-weight: bold;
    margin: 15px 0;
  }
  .info {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .date {
      display: flex;
      align-items: center;
      > span {
        &:first-child {
          background-color: #179aff;
          padding: 3px 8px;
          font-size: 10px;
          font-weight: bold;
          color: white;
          margin-right: 10px;
        }
        &:last-child {
          font-size: 12px;
        }
      }
    }
    .view {
      display: flex;
      align-items: center;
      span {
        font-size: 12px;
        margin-left: 10px;
      }
    }
  }
`;

function App() {
  const [cards, setCards] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  const api = () => {
    axios({
      method: "get",
      url: "http://trusuite.truabutment.com/api/tada/list",
      data: {
        page: page,
        keyword: keyword,
      },
      maxContentLength: 2000,
    })
      .then(function (response) {
        setCards(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    api();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setKeyword("");
  };

  return (
    <All>
      <Search>
        <div className="searchBar">
          <form onSubmit={onSubmit}>
            <select name="select">
              <option value="all">All</option>
              <option value="title">Title</option>
            </select>
            <input placeholder="Search" value={keyword} onChange={(e) => setKeyword(e.target.value)}></input>
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
      </Search>
      <Card>
        {cards &&
          cards.data?.map((card) => (
            <div className="card">
              <div className="cardImag">
                <p>{card.length}</p>
                <img src={card.thumb} alt="card_image"></img>
              </div>
              <div className="title">{card.title}</div>
              <div className="info">
                <div className="date">
                  <span>LECTURE</span>
                  <span>{card.created_at_format}</span>
                </div>
                <div className="view">
                  <FontAwesomeIcon icon={faEye} />
                  <span>{card.view}</span>
                </div>
              </div>
            </div>
          ))}
      </Card>
      <div>
        <p>
          <FontAwesomeIcon icon={faAnglesLeft} />
          <FontAwesomeIcon icon={faAngleLeft} />
          1 2
          <FontAwesomeIcon icon={faAngleRight} />
          <FontAwesomeIcon icon={faAnglesRight} />
        </p>
      </div>
    </All>
  );
}

export default App;
