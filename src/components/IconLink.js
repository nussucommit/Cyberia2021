import styled from "styled-components";

export default function IconLink({link, source, alternateText, hideWhenMinimize}) {
    return (
      <Icons href={link} display={hideWhenMinimize ? 1 : 0} target="_blank">
        <img src={source} alt={alternateText} />
      </Icons>
    );
}

const Icons = styled.a`
  display: ${(props) => `${props.display ? "none" : "flex"}`};
  justify-content: center;
  align-items: center;

  img {
    width: 70%;
    height: auto;
    padding: 3vh 0;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.display ? "flex" : "")};
  }
`;
