import "./App.css";
import LandingPage from "./component/LandingPage";
import Header1 from "./component/Header1";
import Header from "./component/Header";
import PlaceImages from "./component/PlaceImages";
import BeautifulDestination from "./component/Beautiful Destination/BeautifulDestination";
import MainContact from "./component/Contact/MainContact";
import Review from "./component/reviews/Review";
// import { TripPlanning } from "./component/Trip Planning/TripPlanning";
function App() {
  return (
    <div>
      <Header1 />
      <LandingPage />
      <Header heading="Popular Destination" />
      <div
        className="grid lg:grid-cols-4 gap-1 px-28 py-8  md:grid-cols-2 justify-items-center"
        // style={{ gridTemplateColumns: "5rem 1fr 1fr 1fr 1fr 5rem" }}
      >
        {PlaceImages.map((items) => {
          return (
            <div className="py-8">
              <div className=" overflow-hidden max-w-sm shadow-xl rounded ring-offset-cyan-400">
                <img src={items.url} alt={items.alt} className="w-full h-80 " />
              </div>
            </div>
          );
        })}
      </div>
      <BeautifulDestination />

      <MainContact />
      <Header heading="Hear From Travelers Like You" />
      <Review />
      {/* <TripPlanning /> */}
    </div>
  );
}

export default App;
