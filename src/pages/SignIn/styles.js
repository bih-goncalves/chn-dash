import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #F1F4F8;
`;

export const Form = styled.form`
  width: 30%;
  background: #fff;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: left;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: left;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 5px 10px;
    color: #777;
    font-size: 16px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #5648F1;
    height: 56px;
    border: 0;
    border-radius: 30px;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
    text-align:center;
  }
`;