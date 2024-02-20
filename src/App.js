import "./App.css";
import { LandingPage } from "./component/LandingPage";
import Header1 from "./component/Header1";
import Header2 from "./component/Header2";
import PlaceImages from "./component/PlaceImages";

function App() {
  console.log("placeImages", PlaceImages);
  return (
    <div>
      <Header1 />
      <Header2 />
      <LandingPage />
      <div>
        {PlaceImages.map((items) => {
          console.log("url", items.url);
          return <img src={items.url} alt={items.alt} />;
        })}
      </div>
    </div>
  );
}

export default App;
