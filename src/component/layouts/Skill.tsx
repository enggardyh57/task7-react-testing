import { useState } from "react";
import SkillCardList from "../fragments/Skill/SkillCardList";
import SkillList from "../fragments/Skill/SkillList";
import { faPenNib, faDesktop, faSearch, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const Skill = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(index === activeCard ? null : index);
  };

  const skills = [
    { name: "UI/UX Design", level: 80 },
    { name: "Web Design", level: 90 },
    { name: "App Design", level: 85 },
    { name: "SEO", level: 75 },
  ];

  const cards = [
    { icon: faPenNib, title: "UI/UX Design" },
    { icon: faDesktop, title: "Web Design" },
    { icon: faMobileAlt, title: "App Design" },
    { icon: faSearch, title: "SEO" },
  ];

  const getSkillColor = (level: number) => {
    if (level <= 30) return "bg-red-800";
    if (level <= 60) return "bg-yellow-200";
    return "bg-seccondary";
  };

  return (
    <div className="skill section bg-primary py-20" id="skills">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Skills</h2>
        <h3 className="text-xl sm:text-xl md:text-2xl mb-4 opacity-70">What I Do</h3>
        <p className="text-base sm:text-lg md:text-lg leading-relaxed">
          I am passionate about creating engaging and user-friendly experiences through effective UI/UX design. I have a strong foundation in web development, with expertise in HTML, CSS, JavaScript, and React.
        </p>
      </div>

      <SkillCardList cards={cards} activeCard={activeCard} handleCardClick={handleCardClick} />

      <div className="my-8">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h3 className="text-xl sm:text-xl md:text-2xl mb-4 opacity-70">Why Choose Me</h3>
          <p className="text-base sm:text-lg md:text-lg leading-relaxed">
            I combine simplicity and functionality to create designs and solutions that are not only beautiful but also effective. By focusing on efficiency and clarity, I ensure that your ideas come to life seamlessly and successfully.
          </p>
        </div>
      </div>

      <SkillList skills={skills} getSkillColor={getSkillColor} />
    </div>
  );
};

export default Skill;
