import Header from "./Header";
import Form from "./Form";
import Banner from "./Banner";

const Signup = () => {
  return (
    <section
      className="flex flex-col-reverse lg:flex-row md:flex-row justify-center items-center bg-[var(--white)] 
    lg:rounded-xl md:rounded-xl w-[928px] h-screen lg:h-[641px] md:h-[641px] gap-6 mx-0 lg:mx-5 md:mx-2 px-0 
    md:px-4"
    >
      <div className="flex flex-col gap-4">
        <Header />
        <Form />
      </div>
      <Banner />
    </section>
  );
};

export default Signup;

// flex-col lg:flex-row md:flex-row 