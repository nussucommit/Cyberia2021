import CenteredImage from "../components/CenteredImage";

export default function HomeImageList() {
  const imageList = [];
  
  for (let i = 1; i <= 7; i++) {
    const image = (
      <CenteredImage key={i}
        source={`./assets/images/showcase${i}.jpg`}
        alternateText={`Cyberia Showcase ${i}`}
      />
    );
    imageList.push(image);
  }
  
  return (
    <>
      {imageList.map((image) => image)}
    </>
  );
}
