function createData(id, time, duration, program, venue) {
  return { id, time, duration, program, venue };
}

export const DayOneSchedule = [
  createData("0101", "0930 – 1000", "30 min", "Attendance taking"),
  createData("0102", "1000 – 1100", "1 hr", "Opening Ceremony"),
  createData("0103", "1100 – 1135", "35 min", "Ice-Breakers"),
  createData("0104", "1135 – 1230", "55 min", "Lunch"),
  createData("0105", "1230 – 1235", "5 min", "Trainer Intro"),
  createData("0106", "1235 – 1435", "2 hr", "Training"),
  createData("0107", "1435 - 1445", "10 min", "Break"),
  createData("0108", "1445 - 1645", "2 hr", "Training"),
  createData("0109", "1645 - 1650", "5 min", "Break"),
  createData("0110", "1650 - 1820", "1 hr 30 min", "The Watcher's Trial"),
  createData("0111", "1820 - 1825", "5 min", "Buffer time"),
  createData(
    "0112",
    "1825 - 1840",
    "15 min",
    "Time Keepers of the Multiverse briefing"
  ),
  createData("0113", "1840 - 1940", "1 hr", "Dinner"),
  createData("0114", "1940 - 2140", "2 hr", "Night Training"),
  createData(
    "0115",
    "2140 - 2145",
    "5 min",
    "Prism of Endless Possibilities Briefing"
  ),
  createData(
    "0116",
    "2140 - 2145",
    "5 min",
    "Prism of Endless Possibilities Briefing"
  ),
  createData("0117", "2145 - 2230", "45 min", "Prism Preparation"),
];

export const DayTwoSchedule = [
  createData(
    "0201",
    "0945 – 1000",
    "15 min",
    "Attendance taking & Intro",
    "E2 lab"
  ),
  createData("0202", "1000 - 1200", "2 hr", "Training", "E2 lab"),
  createData("0203", "1200 – 1300", "1 hr", "Lunch", "Techno Edge(FoE)"),
  createData("0204", "1300 - 1500", "2 hr", "Training", "E2 lab"),
  createData("0205", "1500 - 1515", "15 min", "Break", "-"),
  createData(
    "0206",
    "1515 – 1530",
    "15 min",
    "Time Keepers of the Multiverse theme selection",
    "E2 lab"
  ),
  createData(
    "0207",
    "1530 - 1830",
    "3 hr",
    "Time Keepers of the Multiverse",
    "E2 lab"
  ),
  createData("0208", "1830 - 1840", "10 min", "Buffer time", "-"),
  createData(
    "0209",
    "1840 - 1955",
    "1 hr 15 min",
    "Dinner",
    "Techno Edge(FoE)"
  ),
  createData(
    "0210",
    "1955 - 2120",
    "1 hr 25 min",
    "Champions of the Multiverse",
    "E2 lab"
  ),
  createData("0211", "2120 - 2130", "10 min", "Buffer Time", "-"),
  createData("0212", "2130 - 2215", "45 min", "Prism Preparation", "E2 lab"),
];

export const DayThreeSchedule = [
  createData("0301", "0945 – 1000", "15 min", "Attendance taking & Intro"),
  createData("0302", "1000 – 1030", "30 min", "Prism of Endless Possibilities"),
  createData(
    "0303",
    "1030 - 1130",
    "1 hr",
    "Closing ceremony + Announcement of winners"
  ),
];
