import React from "react";
import checkIcon from "../assets/images/icon-list.svg";

const Header = () => {
  return (
    <div className="text-[var(--dark-navy)] flex flex-col gap-6 mb-5">
      <h1 className="text-[52px] font-bold text-center">Stay Updated!</h1>
      <p className="mb-2">
        Join 60,000+ product managers receiving monthly updates on:
      </p>

      <ul>
        <li className="flex gap-4">
          <img className="" src={checkIcon} alt="check" />
          <p>Product discovery and building what matters</p>
        </li>
        <li className="flex gap-4">
          <img className="" src={checkIcon} alt="check" />
          <p>Measuring to ensure updates are a success</p>
        </li>
        <li className="flex gap-4">
          <img className="" src={checkIcon} alt="check" />
          <p>And much more!</p>
        </li>
      </ul>
    </div>
  );
};

export default Header;
