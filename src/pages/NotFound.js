import Section from "../components/Section";
import CenteredImage from "../components/CenteredImage";
import styled from "styled-components";

/**
 * Not Found page for Cyberia 2021 website.
 * This page only shows up when the user enters invalid path to the url domain.
 */
export default function NotFound() {
  return (
    <Section
      info={
        <>
          <CenteredImage
            source="./assets/images/404NotFound.svg"
            alternateText="404 Page Not Found"
          />
          <br />
          <Text>
            We are sorry, the page you requested could not be found.
            <br /> Please go back to the homepage.
          </Text>
        </>
      }
      justifyInfoContent="center"
    />
  );
}

const Text = styled.p`
  color: white;
  text-align: center;
`
