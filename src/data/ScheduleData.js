function createData(id, time, duration, program, venue) {
  return { id, time, duration, program, venue};
}

export const DayOneSchedule = [
  createData("0101", "0930 – 1000", "30 min", "Participants join zoom"),
  createData("0102", "1000 – 1100", "1 hr", "Opening speech + Briefing"),
  createData("0103", "1100 – 1135", "35 min", "Ice-breakers"),
  createData("0104", "1135 – 1235", "1 hr", "Lunch"),
  createData("0105", "1235 – 1435", "2 hr", "Training"),
  createData("0106", "1435 - 1445", "10 min", "Break"),
  createData("0107", "1445 - 1645", "2 hr", "Training"),
  createData("0108", "1645 - 1655", "10 min", "Break"),
  createData("0109", "1655 - 1700", "5 min", "Online mass games briefing"),
  createData("0110", "1700 - 1820", "1 hr 20 min", "Online mass games"),
  createData("0111", "1820 - 1825", "5 min", "Buffer time"),
  createData("0112", "1825 - 1840", "15 min", "Competition movie bidding"),
  createData("0113", "1840 - 1940", "1 hr", "Dinner"),
  createData("0114", "1940 - 2140", "2 hr", "Night Training"),
  createData("0116", "2140 - 2145", "5 min", "Prism of Endless Possibilities Briefing"),
  createData("0117", "2145 - 2230", "45 min", "Prism Preparation"),
];

export const DayTwoSchedule = [
  createData("0201", "0945 – 1000", "15 min", "Attendance taking", "E2 lab"),
  createData("0202", "1000 - 1200", "2 hr", "Training", "E2 lab"),
  createData("0203", "1200 – 1300", "1 hr", "Lunch", "Techno Edge(FoE)"),
  createData("0204", "1300 - 1500", "2 hr", "Training", "E2 lab"),
  createData("0205", "1500 - 1515", "15 min", "Break", "-"),
  createData("0206", "1515 – 1530", "15 min", "Competition briefing", "E2 lab"),
  createData("0207", "1530 - 1830", "3 hr", "Competition", "E2 lab"),
  createData("0208", "1830 - 1835", "5 min", "Buffer time", "-"),
  createData("0209", "1835 - 1945", "1 hr 10 min", "Dinner", "Techno Edge(FoE)"),
  createData("0210", "1945 - 2000", "15 min", "Mass Games Briefing + Setup", "E2 Corridor"),
  createData("0211", "2000 - 2120", "1 hr 20 min", "In-person mass games", "E2 lab/Corridor"),
  createData("0212", "2120 - 2130", "10 min", "Buffer Time", "-"),
  createData("0213", "2130 - 2230", "1 hr", "Prism Preparation", "E2 lab"),
];

export const DayThreeSchedule = [
  createData("0301", "0945 – 1000", "15 min", "Participants join zoom"),
  createData("0302", "1000 – 1030", "30 min", "Prism of Endless Possibilities"),
  createData("0303", "1030 - 1130", "1 hr", "Closing ceremony + Announcement of winners"),
];
