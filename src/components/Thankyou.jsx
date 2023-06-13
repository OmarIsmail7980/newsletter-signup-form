import checkIcon from "../assets/images/icon-success.svg";
import { useLocation, useNavigate, Navigate } from "react-router-dom";

const Thankyou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || { email: null };
  const redirect = email ? true : false;

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      {redirect ? (
        <div
          className="flex flex-col justify-normal lg:justify-center md:justify-center w-full h-screen lg:items-center md:items-center bg-[var(--white)] 
        lg:rounded-3xl md:rounded-3xl lg:w-[504px] md:w-[504px] lg:h-[480px] md:h-[480px] relative"
        >
          <div
            className="mx-5 lg:mx-16 md:mx-16 mt-20 lg:mt-5 md:mt-5 flex flex-col gap-4 h-screen lg:h-auto md:h-auto 
          relative lg:static md:static "
          >
            <img
              className="w-[44px] h-[44px] mt-8 lg:mx-16 md:mx-16 mb-6 lg:absolute md:absolute top-0 left-0"
              src={checkIcon}
              alt="check"
            />
            <h1
              className="text-[42px] lg:text-[52px] md:text-[52px] font-bold leading-[45px] 
            md:leading-[55px] lg:leading-[55px]"
            >
              Thanks for subscribing!
            </h1>
            <p className="text-[18px] mb-8">
              A confirmation email has been sent to{" "}
              <span className="font-bold">{email}</span>. Please open it and
              click the button inside to confirm your subscription.
            </p>
            <button
              className="absolute bottom-0 mb-10 lg:mb-0 md:mb-0 w-full lg:static md:static p-4 bg-[var(--dark-navy)] rounded-lg text-[var(--white)] font-bold 
              hover:bg-[var(--vermillion)] hover:shadow-lg hover:shadow-[var(--gradient-1)]"
              onClick={handleClick}
            >
              Dismiss message
            </button>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Thankyou;
