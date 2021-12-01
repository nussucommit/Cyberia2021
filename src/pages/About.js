import Section from "../components/Section";
import AboutImageList from "../data/AboutImageList";
import { aboutInfoList } from "../data/AboutInfoList";

/**
 * About page of Cyberia 2021 website.
 * Summarizing info on Cyberia 2021, Acadia Training and trainer.
 */
export default function About() {
  const infoList = aboutInfoList;

  return (
    <Section
      info={
        infoList.map((info) => info)
      }
      justifyInfoContent="flex-start"
      media={<AboutImageList />}
    />
  );
}
