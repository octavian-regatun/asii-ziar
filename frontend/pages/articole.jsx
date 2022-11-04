import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import articlesData from "../assets/data/articles.json";
import imagine1 from "../assets/images/article.jpg";
import Articol1 from "../components/Articol1";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const ArticolePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="text-5xl mt-5 mb-5 ml-5 text-white font-bold bg-red-600 w-6/6 sm:w-2/6 rounded-2xl p-2 text-center ">
        <Typewriter
          words={["Ziarul de ASII", "Sectiunea Articole"]}
          loop={20}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4" data-aos="zoom-in">
        {articlesData ? (
          articlesData.map(({ title, description }, index) => (
            <Articol1
              key={index}
              imageSrc={imagine1}
              title={title}
              description={description}
            />
          ))
        ) : (
          <div>nothing</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ArticolePage;
