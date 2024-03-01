import car1 from "../public/assets/photo-1492144534655-ae79c964c9d7.png";
import car2 from "../public/assets/photo-1494976388531-d1058494cdd8.png";
import car3 from "../public/assets/photo-1503376780353-7e6692767b70.png";
import car4 from "../public/assets/Skyline GT-R Tokyo Drift.png";
import car5 from "../public/assets/download.png";
import car6 from "../public/assets/front-left-side-47.png";
import car7 from "../public/assets/images.png";
import car8 from "../public/assets/mansory-p9lm-evo-900-porsche-911-turbo-s.png";
// import { ImageSlider1 } from "./components/ImageSlider1";
// import { ImageSlider2 } from "./components/ImageSlider2";
import { ImageSlider3 } from "./components/ImageSlider3";

const IMAGES = [
  { url: car1, alt: "Car One" },
  { url: car2, alt: "Car Two" },
  { url: car3, alt: "Car Three" },
  { url: car4, alt: "Car Four" },
  { url: car5, alt: "Car Five" },
  { url: car6, alt: "Car Six" },
  { url: car7, alt: "Car Seven" },
  { url: car8, alt: "Car Eight" },
];

function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        height: "500px",
        margin: "0 auto",
        aspectRatio: "10/6",
      }}
    >
      {/* <ImageSlider1 imageUrls={IMAGES} /> */}
      {/* <ImageSlider2 imageUrls={IMAGES} /> */}
      <ImageSlider3 images={IMAGES} />
      <a href="/" style={{fontSize:"4rem"}}>
        Link
      </a>
    </div>
  );
}

export default App;
