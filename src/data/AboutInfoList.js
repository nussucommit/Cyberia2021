import ColoredText from "../components/ColoredText";
import ColoredTitle from "../components/ColoredTitle";
import AcadiaTrainingInfo from "../data/AcadiaTrainingInfo";
import EventInfo from "../data/EventInfo";
import TrainerInfo from "../data/TrainerInfo";

export const aboutInfoList = [
  <ColoredTitle key={0} titleText="About the Event" />,
  <ColoredText key={1} text={<EventInfo />} />,
  <ColoredTitle key={2} titleText="About Acadia Training" />,
  <ColoredText key={3} text={<AcadiaTrainingInfo />} />,
  <ColoredTitle key={4} titleText="About the trainer: Han Guangwen" />,
  <ColoredText key={5} text={<TrainerInfo />} />,
];
