import banner from "../assets/images/illustration-sign-up-desktop.svg";

const Banner = () => {
  return (
    <div>
      <img
        className="w-screen lg:w-[400px] lg:h-[593] md:w-[400px] md:h-[593] object-contain"
        src={banner}
        alt="banner"
      />
    </div>
  );
}

export default Banner
