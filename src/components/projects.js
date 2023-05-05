import weatherApp from "../assets/weatherApp.JPG";
import TenzieGame from "../assets/projectTenzieGame.jpg";
import NotezApp from "../assets/projectNotezApp.jpg"


import Card from "./card";
const Projects = () => {
  return (
    <>
      {/* <!-- Projects Section--> */}
      <section className="py-5">
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Projects</span>
            </h1>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              {/* style="width: 18rem;" */}
              <Card
                img={weatherApp}
                title={"Weather App"}
                text={`Weather app created using react and openWeather Api. You can
                    search for a particular location or use your live location
                    to get weather details. Forecat and air pollution data is
                    yet to be added in next update. Don't forget to turn on your
                    device's Live Location.`}
                items={["React,js", "Open Weather Api"]}
                link={"https://fahadabbas920.github.io/weather-app/"}
              ></Card>
              <Card
                img={TenzieGame}
                title={"Tenzie Game"}
                text={`Everyone gets ten dice. Someone says, “Go.” Then everyone rolls and rolls as fast as they can until someone gets all their dice on the same number and shouts “TENZI.”`}
                items={["React,js","State Management"]}
                link={"https://mytenziegame.netlify.app/"}
              ></Card>
              <Card
                img={NotezApp}
                title={"Notez App"}
                text={`This is a simple yet powerful notes app, created using react-mde, and showdown which converts basic text into html format for preview. It uses your browser local storage to save your notes.`}
                items={["React,js","React ShowDown","React-mde"]}
                link={"https://fahadabbas920.github.io/Notez/"}
              ></Card>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Call to action section--> */}
      <section className="py-5 bg-gradient-primary-to-secondary text-white">
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="display-4 fw-bolder mb-4">
              Let's build something together
            </h2>
            <a
              className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
              href="/contact"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
