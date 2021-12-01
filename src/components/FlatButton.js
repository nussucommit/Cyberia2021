import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function FlatButton({link, btnText}) {
    return (
        <Button to={link}>
            {btnText}
        </Button>
    );
}

const Button = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Exo 2", sans-serif;
  font-weight: 300;

  display: inline-block;
  position: relative;
  text-align: center;
  color: #09f3fd;
  border: 1px solid #09f3fd;
  border-radius: 5px;

  line-height: 3em;
  padding: 0;
  margin: 0;

  box-shadow: 0 0 0 0 transparent;

  transition: 0.2s ease-in;

  &:hover {
    color: white;
    box-shadow: 0 0 30px 0 transparentize(#09f3fd, 0.5);
    background-color: #09f3fd;

    transition: 0.2s ease-out;

    &:before {
      animation: shine 0.5s 0s linear;
    }
  }

  &:active {
    box-shadow: 0 0 0 0 transparent;
    transition: box-shadow 0.2s ease-in;
  }
`;