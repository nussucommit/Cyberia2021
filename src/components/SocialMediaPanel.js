import styled from "styled-components";
import IconLink from './IconLink';

export default function SocialMediaPanel() {
    return (
      <SocialMediaContainer>
        <IconLink
          link="https://www.nussucommit.com/"
          source="./assets/icons/CommIT Logo Transparent.png"
          alternateText="CommIT Logo"
        />
        <IconContainer>
          <IconLink
            link="https://www.instagram.com/nussucommit/"
            source="./assets/icons/Instagram Logo.svg"
            alternateText="CommIT Instagram"
          />
          <IconLink
            link="https://www.facebook.com/NUSSUcommIT/"
            source="./assets/icons/Facebook Logo.svg"
            alternateText="CommIT Facebook"
          />
        </IconContainer>
      </SocialMediaContainer>
    );
}

const SocialMediaContainer = styled.div`
  border-right: 1px solid white;
  height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none; // Hide if screen is too small
  }
`

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
