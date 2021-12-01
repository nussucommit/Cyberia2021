import styled from "styled-components";

export default function ColoredTitle({titleColor, titleText}) {
    return (
        <Title color={titleColor}>
            {titleText}
        </Title>
    )
}

const Title = styled.h2`
  color: ${(props) => `${props.color || "white"}`};
  text-decoration: underline;
`;