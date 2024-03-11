import Image from "next/image";
const LandingImage: React.FC = () => {
  /**
   * TODO Get Image name from BE
   * TODO Change format to webp?
   * TODO soccerLanding.png/hockeyLanding.jpg
   */
  return (
    <Image
      src="/soccerLanding.png"
      alt="Image of Soccer Stadion with Ball"
      width={1000}
      height={600}
      className="opacity-90 h-full w-full object-cover"
    />
  );
};

export default LandingImage;
