import styled from "styled-components";

const StyledMain = styled.div`
  border: 1px solid;
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  li {
    list-style: none;
    width: fit-content;
    height: fit-content;
    font-size: 1.3rem;
    font-weight: 500;
    border-radius: 3px;
    background-color: lightblue;
    display: flex;
  }
  section {
    display: flex;
    flex-flow: row wrap;
  }
  button {
    background-color: steelblue;
    color: white;
    border: none;
    border-radius: 5px;
    height: 30px;
    width: 205px;
    font-size: 1.2rem;
  }
  input {
    height: 30px;
    width: 105px;
  }
`;

export default StyledMain;
