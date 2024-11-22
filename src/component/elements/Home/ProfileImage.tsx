import React from "react";

interface ProfileImageProps {
  src: string;
  alt: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt }) => (
  <div className="foto w-full md:w-1/2 mb-6 md:mb-0 flex justify-center mt-20">
    <img src={src} alt={alt} className="w-auto max-h-[300px] md:max-h-[400px] lg:max-h-[500px]" />
  </div>
);

export default ProfileImage;
