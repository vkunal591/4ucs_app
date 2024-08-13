import "./Css/banner.css";

const Banner = (porps: { reverse: boolean; technologiesImages: string[] }) => {
  return (
    <div className="scroll-box h-50" id="experties">
      <div
        className={`scroll-container ${porps.reverse ? "reverse" : "straight"}`}
      >
        {porps.technologiesImages &&
          porps.technologiesImages?.map((technologiesImage, index) => {
            return <img src={technologiesImage} key={index} alt="cat1" />;
          })}
      </div>
    </div>
  );
};

export { Banner };
