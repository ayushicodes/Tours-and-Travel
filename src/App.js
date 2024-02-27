import "./App.css";
import LandingPage from "./component/LandingPage";
import Header1 from "./component/Header1";
import Header2 from "./component/Header2";
import Header from "./component/Header";
import PlaceImages from "./component/PlaceImages";
// import { Slider } from "./Slider";
// import slider from "./component/Mock";

function App() {
  return (
    <div>
      <Header1 />
      <Header2 />
      <LandingPage />
      <Header heading="Popular Destination" />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center mt-20">
        {PlaceImages.map((items) => {
          console.log("url", items.url);
          return (
            <div className="py-10">
              <div className=" overflow-hidden max-w-sm shadow-lg rounded">
                <img src={items.url} alt={items.alt} className="w-full " />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{items.name}</div>
                  <p className="text-gray-400	">{items.decs}</p>
                </div>
                <div className="grid grid-flow-col gap-5 pb-2 px-6">
                  <span className="bg-gray-200 rounded-full px- text-sm py-1 font-base mb-2">
                    #Luxry
                  </span>
                  <span className="bg-gray-200 rounded-full px- text-sm py-1 font-base mb-2">
                    #Hotel
                  </span>
                  <span className="bg-gray-200 rounded-full px- text-sm py-1 font-base mb-2">
                    #Travel
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
