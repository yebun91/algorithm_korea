import styled from "styled-components";

export const All = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Search = styled.div`
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
export const Card = styled.div`
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
export const PageNumber = styled.div`
  margin: 50px 0 100px 0;
  svg,
  span {
    cursor: pointer;
    margin: 0 5px;
  }
`;
