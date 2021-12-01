import styled, { css } from "styled-components";

import ImageCredit from "./ImageCredit";
import NavigationBar from "./NavigationBar";

export default function Section({
  info,
  infoDisplayDirection,
  justifyInfoContent,
  media,
  displayMedia,
}) {
  return (
    <SectionContainer>
      <NavigationBar />
      <ContentContainer>
        <InfoContainer
          direction={infoDisplayDirection}
          justifyContent={justifyInfoContent}
        >
          {info}
        </InfoContainer>
        <MediaContainer displayMedia={displayMedia}>
          {media}
          <ImageCredit />
        </MediaContainer>
      </ContentContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  height: 100vh;
  flex: 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const scrollBarStyles = css`
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  flex: 9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${scrollBarStyles}

  @media (max-width: 768px) {
    flex-direction: column;
    overflow-y: auto;
  }
`;

const InfoContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 9;
  display: flex;
  flex-direction: ${(props) => `${props.direction || "column"}`};
  justify-content: ${(props) => `${props.justifyContent || "center"}`};
  align-items: ${(props) => `${props.direction === "row" ? "center" : ""}`};
  padding: 0vh 2vw;
  overflow-y: auto;

  ${scrollBarStyles}

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: visible;
  }
`;

const MediaContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 8;
  display: ${(props) => `${props.displayMedia || "flex"}`};
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;

  ${scrollBarStyles}
  
  img {
    padding: 10vh 10vw;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
