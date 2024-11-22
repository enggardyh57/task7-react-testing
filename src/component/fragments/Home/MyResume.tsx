import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faMedium } from "@fortawesome/free-brands-svg-icons";

const MyResume: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="resume bg-seccondary text-primary py-16 px-4 sm:px-8 md:px-20 flex justify-center items-center min-h-screen">
      <div className="text-center max-w-4xl w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">My Resume</h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-5 sm:px-12 md:px-20">Hello! I'm Enggar Dyah Bintang Ayuna, a passionate UI/UX designer. Check out my resume below or get in touch!</p>

        <div className="flex justify-center mb-6">
          <img src="/img.png" alt="Enggar Dyah Bintang Ayuna" className="rounded-full w-72 border-primary"/>
        </div>

        <a
          href="https://drive.google.com/file/d/1ttb1B4D4QEoDLd268xFZvRVMmw3I_NAM/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-seccondary text-secondary px-6 py-3 rounded-full hover:bg-opacity-90 font-bold mb-4 inline-block"
        >
          See Resume
        </a>

        <button className="bg-white text-black px-6 py-3 rounded-full hover:opacity-70 font-bold mx-2" onClick={handleBackToHome}>
          Back to Home
        </button>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/enggar-dyah-bintang/" target="_blank" rel="noopener noreferrer" className="text-2xl text-primary hover:text-opacity-70">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/enggardyh57" target="_blank" rel="noopener noreferrer" className="text-2xl text-primary hover:text-opacity-70">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://instagram.com/enggardyah_" target="_blank" rel="noopener noreferrer" className="text-2xl text-primary hover:text-opacity-70">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://medium.com/@enggardyah57" target="_blank" rel="noopener noreferrer" className="text-2xl text-primary hover:text-opacity-70">
              <FontAwesomeIcon icon={faMedium} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyResume;
