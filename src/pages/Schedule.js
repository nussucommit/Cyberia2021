import Section from "../components/Section";
import BasicTable from "../components/Table";
import {
  DayOneSchedule,
  DayTwoSchedule,
  DayThreeSchedule,
} from "../data/ScheduleData";

export default function Schedule() {
  return (
    <Section
      info={
        <>
          <BasicTable title="Day 1" schedule={DayOneSchedule} />
          <BasicTable title="Day 2" schedule={DayTwoSchedule} />
          <BasicTable title="Day 3" schedule={DayThreeSchedule} />
          <br />
        </>
      }
      justifyInfoContent="flex-start"
      displayMedia="none"
    />
  );
}
