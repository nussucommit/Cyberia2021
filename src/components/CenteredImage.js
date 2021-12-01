import styled from "styled-components";
import Fade from "react-reveal";

export default function CenteredImage({source, alternateText}) {
  return (
    <Fade bottom>
      <Image src={source} alt={alternateText}/>
    </Fade>
  );
}

const Image = styled.img`
  display: block;
  width: 100%;
  padding: 0 5vw;
  margin: 0 0;
`;
