import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    if (isValid) {
      navigate("/success", { state: { email } });
    } else {
      setEmailError(true);
    }
  };

  return (
    <div className="flex flex-col gap-1 mx-5 lg:mx-0 md:mx-0">
      <div className="flex justify-between mx-1">
        <label className="font-bold text-[13px]">Email Address</label>
        {emailError && (
          <label className="font-bold text-[13px] text-[var(--vermillion)]">
            Valid email required
          </label>
        )}
      </div>

      <input
        style={
          emailError
            ? {
                background: "rgba(255, 97, 85, 0.15)",
                border: "1px solid rgba(255, 97, 85, 1)",
                color: "var(--vermillion)",
              }
            : {
                border: "1px solid gray",
              }
        }
        className="w-full outline-none cursor-pointer bg-transparent p-4 rounded-lg mb-4"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setEmailError(false);
        }}
        placeholder="email@company.com"
      />

      <button
        className="p-4 bg-[var(--dark-navy)] rounded-lg text-[var(--white)] font-bold 
                  sm:mb-4 hover:bg-[var(--vermillion)] hover:shadow-lg 
                  hover:shadow-[var(--gradient-1)] mb-10 lg:mb-10 md:mb-10"
        onClick={handleSubmit}
      >
        Subscribe to monthly newsletter
      </button>
    </div>
  );
};

export default Form;
