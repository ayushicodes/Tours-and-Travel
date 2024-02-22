import "./App.css";
import LandingPage from "./component/LandingPage";
import Header1 from "./component/Header1";
import Header2 from "./component/Header2";
import Header from "./component/Header";
import PlaceImages from "./component/PlaceImages";

function App() {
  return (
    <div>
      <Header1 />
      <Header2 />
      <LandingPage />
      <Header heading="Popular Destination" />
      <div className="max-w[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5">
        {PlaceImages.map((items) => {
          console.log("url", items.url);
          return (
            <div>
              <div>
                <img src={items.url} alt={items.alt} className="h-full " />
              </div>
              <h5>{items.decs}</h5>
              <button>Read More</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
