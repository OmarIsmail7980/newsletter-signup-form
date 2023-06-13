import checkIcon from "../assets/images/icon-list.svg";

const Header = () => {
  return (
    <div
      className="text-[var(--dark-navy)] flex flex-col gap-3 lg:gap-6 
    md:gap-6 mb-5 mx-5 lg:mx-0 md:mx-0"
    >
      <h1 className="text-[42px] lg:text-[52px] md:text-[52px] font-bold lg:text-center 
      md:text-center">
        Stay Updated!
      </h1>
      <p className="mb-2">
        Join 60,000+ product managers receiving monthly updates on:
      </p>

      <ul>
        <li className="flex gap-4 mb-4">
          <img className="flex align-top h-full" src={checkIcon} alt="check" />
          <p>Product discovery and building what matters</p>
        </li>
        <li className="flex gap-4 mb-4">
          <img className="flex align-top h-full" src={checkIcon} alt="check" />
          <p>Measuring to ensure updates are a success</p>
        </li>
        <li className="flex gap-4">
          <img className="flex align-top h-full" src={checkIcon} alt="check" />
          <p>And much more!</p>
        </li>
      </ul>
    </div>
  );
};

export default Header;
