import styled from "styled-components";

function ImageCredit() {
  return (
    <CreditLink>
      Background Photo By{" "}
      <a
        href="https://www.instagram.com/pmcze/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pawel Czerwinski
      </a>
    </CreditLink>
  );
}

export default ImageCredit;

const CreditLink = styled.p`
  position: absolute;
  right: 0;
  bottom: 0;
  color: lightgrey;
  padding: 10px 10px;
  font-size: 1.5vh;

  a {
    color: lightgrey;
    font-size: 1.5vh;
  }

  @media (max-width: 768px) {
    display: none; // If screen small, do not display the menu
  }
`;
