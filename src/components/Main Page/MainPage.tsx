import "./MainPage.css";
import Slideshow from "../../components/Slideshow/Slideshow";
import MapComponent from "../Map/MapComponent";

const MainPage = () => {
  return (
    <div className="main-page">
      <Slideshow />
      <MapComponent />
    </div>
  );
};

export default MainPage;
