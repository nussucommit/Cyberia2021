import Fade from "react-reveal";
import styled from "styled-components";

import Section from "../components/Section";
import BasicTable from "../components/Table";
import {
  DayOneSchedule,
  DayTwoSchedule,
  DayThreeSchedule,
} from "../data/ScheduleData";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

const dayOneZoom = {
  title: "Day 1",
  link: "https://nus-sg.zoom.us/j/87567036836?pwd=ckY3TW1tVEZTSFV3bmNnODZ2ZXJEQT09",
};

const dayThreeZoom = {
  title: "Day 3",
  link: "https://nus-sg.zoom.us/j/82396300965?pwd=NCtmY3Z1TmdsTWFJRENoVWE4NWVEQT09",
};

const zoomLinks = [dayOneZoom, dayThreeZoom];

/**
 * Event schedule page for Cyberia 2021 website.
 * Summarizing the schedules for all three days of the event.
 */
export default function Schedule() {
  return (
    <Section
      info={
        <>
          <Fade left>
            <Title>Zoom Links</Title>
            <br />
            {zoomLinks.map((zoomInfo, index) => (
              <Alert severity="success">
                {/* <AlertTitle>{zoomInfo.title}</AlertTitle> */}
                <Button
                  href={zoomInfo.link}
                  target="__blank"
                  sx={{ color: "#006400" }}
                >
                  {`Click me to open ${zoomInfo.title} zoom link`}
                </Button>
              </Alert>
            ))}
          </Fade>
          <BasicTable title="Day 1 (Online)" schedule={DayOneSchedule} />
          <BasicTable title="Day 2" schedule={DayTwoSchedule} />
          <BasicTable title="Day 3 (Online)" schedule={DayThreeSchedule} />
          <br />
        </>
      }
      justifyInfoContent="flex-start"
      displayMedia="none"
    />
  );
}

const Title = styled.h2`
  text-align: center;
  color: white;
`;
