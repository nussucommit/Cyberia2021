import Typography from "@mui/material/Typography";
import styled from "styled-components";

export var competitionInfo = [];

competitionInfo.push({
  key: <strong>Story</strong>,
  value: (
    <Typography>
      Doctor Strange is messing up the universe. The theme of the competition is
      “What If - Disney”. Just a single change in the plot can result in the
      entire movie changing in pivotal ways. What if Rapunzel’s hair had the
      power to kill instead of healing powers? What if Finding Nemo was a
      thriller? In the competition “What If - Disney”, participants are to
      create a poster reimagining numerous major events from the disney movies
      in game-changing ways.
    </Typography>
  ),
});

competitionInfo.push({
  key: <strong>Competition</strong>,
  value: (
    <Typography>
      Time allocation : 3 hours
      <br />
      <br />
      The theme of the competition is “What If - Disney”. The participants are
      to create a poster reimagining numerous major events from the disney
      movies in game-changing ways. The theme will be chosen by group but the
      competition would be done individually.
      <br />
      <br />
      Samples for the competition will be shown to the participants.
      <br />
      <br />
      Participants will be graded based on their creativity, techniques and
      variety of tools used. 3 participants will be given a reward on the last
      day of camp, based on the rewards mentioned below.
      <br />
      <br />
      <strong>Rewards:</strong>
      <br />
      Best Overall Award
      <br />
      Most Skillful (based on the techniques and tools used)
      <br />
      Most Popular (will be decided via a voting system)
      <br />
      <br />
      <strong>Rules:</strong>
      <br />
      Participants are prohibited from asking committee members for help, nor
      are they allowed to download an existing Photoshop file online or from any
      other sources.
      <br />
      <br />
      However, participants are allowed to discuss and ask friends for help,
      searching online for inspiration or instructions, referencing the manuals
      etc. Some relevant templates or assets (of several key characters and
      their backgrounds) will be created by the Training Cell and provided for
      them.
      <br />
      <br />
      Participants are given 3 hours in total. When the time is up, participants
      would need to submit both psd (Photoshop) and pdf files to Google
      Forms(for now). Participants would also need to cite the resources that
      they use. They should name their files with their OG name. (Eg.
      OGname_Yourname)
    </Typography>
  ),
});

competitionInfo.push({
  key: <strong>Grading Rubric</strong>,
  value: (
    <Typography>
      1. Creativity – Design – Layout
      <br />
      <br />
      Rating 1-15 ( Poor : 1-5, Good : 6-10, Excellent : 11-15)
      <br />- Project shows <strong>original thought</strong>: Project goes
      beyond a tutorial in content and scope
      <br />- Project shows <strong>good design</strong>: Use images, colour,
      and text are cohesive and work well together
      <br />- Project shows <strong>good layout</strong>: Overall project has a
      theme that is transmitted through the layout
      <br />
      <br />
      2. Photoshop Technique
      <br />
      <br />
      Rating 1-15 ( Poor : 1-5, Good : 6-10, Excellent : 11-15)
      <br />- Document <strong>setup</strong>: Document is of appropriate size
      and proper resolution
      <br />- Use of <strong>Layers</strong>: Appropriate layers were used to
      separate the different elements
      <br />- Document <strong>Organization</strong>: Layers were named
      appropriately for element identification
      <br />
      <br />
      3. Photoshop Tools
      <br />
      <br />
      Rating 1-15 ( Poor : 1-5, Good : 6-10, Excellent : 11-15)
      <br />- <strong>Varied</strong> Use of Tools : A variety of tools were
      used to achieve the desired effects
      <br />- <strong>Proper</strong> use of tools : Participants shows a
      working knowledge of the tools used
      <br />
      [may add bonus grades]
    </Typography>
  ),
});

const ColoredLink = styled.a`
  color: #09f3fd;
`;

competitionInfo.push({
  key: <strong>Competition File Submission</strong>,
  value: (
    <Typography>
      You may submit your competition files{" "}
      <ColoredLink href="https://forms.gle/HvidP18592o8sxhXA" target="__blank">
        here
      </ColoredLink>
      <br />
      <br />
      Deadline: before <strong>18:35</strong> on 18-12-2021
    </Typography>
  ),
});
