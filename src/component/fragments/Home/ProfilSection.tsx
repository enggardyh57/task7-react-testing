import React from "react";
import ProfileImage from "../../elements/Home/ProfileImage";
import IntroductionSection from "../../elements/Home/IntroSection";

const ProfileSection: React.FC = () => (
  <div className="home flex flex-col md:flex-row justify-between md:p-0 items-center px-4 md:px-12 bg-primary pb-10">
    <ProfileImage src="/image.png" alt="Profile" />
    <IntroductionSection />
  </div>
);

export default ProfileSection;
