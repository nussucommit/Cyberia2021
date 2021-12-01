import CenteredImage from "../components/CenteredImage";
import ColoredText from "../components/ColoredText";
import FlatButton from "../components/FlatButton";
import Section from "../components/Section";
import HomeImageList from "../data/HomeImageList";

/**
 * Home page for Cyberia 2021 Website.
 * Summarizing the basic info and entries to other pages.
 */
export default function Home() {
  return (
    <Section
      info={
        <>
          <CenteredImage
            source="./assets/icons/Cyberia Silver Logo.png"
            alternateText="Cyberia 2021"
          />
          <br />
          <ColoredText
            text="
            Cyberia is an annual Adobe Photoshop boot camp organized by NUSSU
            commIT, which aims to impart graphic design knowledge and skills to
            the participants to strengthen their skill set. You will learn Adobe
            Photoshop with training conducted by a certified professional Adobe
            Photoshop trainer and a series of challenging and exciting games. At
            the end of the camp, you will have the opportunity to put all the
            skills you learn to test by producing an artwork in our competition
            and stand to win attractive prizes!"
          />
          <br />
          <FlatButton link="/Schedule" btnText="Event Schedule" />
          <br />
          <FlatButton link="/Competition" btnText="Competition Detail" />
        </>
      }
      media={<HomeImageList />}
    />
  );
}
