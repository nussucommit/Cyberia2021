import styled from "styled-components";

export default function ColoredText({textColor, text}) {
  return <TextContainer color={textColor}>{text}</TextContainer>;
}

const TextContainer = styled.p`
  color: ${(props) => `${props.color || 'white'}`};
  line-height: 0.6cm;

  a {
    color: #09f3fd;
  }
`;
