import LandingPage from "../../component/LandingPage";
import Header1 from "../../component/Header1";
import Header from "../../component/Header";
import PlaceImages from "../../component/PlaceImages";
import BeautifulDestination from "../../component/Beautiful Destination/BeautifulDestination";
import MainContact from "../../component/Contact/MainContact";
import Review from "../../component/reviews/Review";
import { Services } from "../../component/Services/Services";
function Home() {
  return (
    <div>
      <Header1 />
      <LandingPage />
      <Header heading="Why Choose Us ?" />

      <Services />
      <Header heading="Popular Destination" />
      <div className="grid xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 lg:gap-8 md:gap-8 sm:gap-8 px-30 sm:px-8 py-8 justify-items-center">
        {PlaceImages.map((items) => {
          return (
            <div className="lg:py-8 md:py-4 sm:py-4 " key={items.alt}>
              <div className=" overflow-hidden max-w-sm shadow-xl rounded ring-offset-cyan-400">
                <img
                  src={items.url}
                  alt={items.alt}
                  className="w-full h-full  "
                />
              </div>
            </div>
          );
        })}
      </div>
      <BeautifulDestination />

      <MainContact />
      <Header heading="Hear From Travelers Like You" />
      <Review />
    </div>
  );
}

export default Home;
