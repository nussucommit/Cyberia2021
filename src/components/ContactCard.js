import styled from "styled-components";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ContactCard({
  image,
  name,
  description,
  primaryLink,
  secondaryLink,
}) {
  return (
    <CenteredCard>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="contact info"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" href={primaryLink} target="_blank">
          {name === "NUSSU commIT" ? "Instagram" : "Telegram"}
        </Button>
        <Button variant="text" href={`mailto:${secondaryLink}`} target="_blank">
          Email
        </Button>
      </CardActions>
    </CenteredCard>
  );
}

const CenteredCard = styled(Card)`
  height: 50vh;
  min-width: 25vw;
  width: auto;
  margin: 1vh 1vw;

  img {
    max-height: 45%;
    min-width: 100%;
  }

  @media (max-width: 768px) {
    margin: 8vh 2vw;
    width: 80vw;
    height: 60vh;
  }
`;
