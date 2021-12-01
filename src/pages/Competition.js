import { useState } from "react";

import Fade from "react-reveal";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Section from "../components/Section";
import { competitionInfo } from "../data/CompetitionInfo";

/**
 * Competition detail page of Cyberia 2021 website.
 * Summarizing info on competition story, details and rules.
 */
export default function Competition() {
  const infoList = competitionInfo;

  const [current, setCurrent] = useState(-1);

  const changeState = (panel) => (e, newValue) => {
    setCurrent(newValue ? panel : -1);
  };

  return (
    <Section
      info={
        <Fade left>
          {infoList.map((info, index) => (
            <Accordion
              key={index}
              expanded={current === index}
              onChange={changeState(index)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{info.key}</Typography>
              </AccordionSummary>
              <AccordionDetails>{info.value}</AccordionDetails>
            </Accordion>
          ))}
        </Fade>
      }
      justifyInfoContent="flex-start"
      media="Competition Media"
      displayMedia="none"
    />
  );
}
