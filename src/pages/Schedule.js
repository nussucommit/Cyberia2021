import Section from "../components/Section";
import BasicTable from "../components/Table";
import {
  DayOneSchedule,
  DayTwoSchedule,
  DayThreeSchedule,
} from "../data/ScheduleData";

/**
 * Event schedule page for Cyberia 2021 website.
 * Summarizing the schedules for all three days of the event.
 */
export default function Schedule() {
  return (
    <Section
      info={
        <>
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
