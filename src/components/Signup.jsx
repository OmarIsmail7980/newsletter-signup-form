import Header from "./Header";
import Form from "./Form";
import Banner from "./Banner";

const Signup = () => {
  return (
    <section className="flex justify-center items-center bg-[var(--white)] rounded-xl w-[928px] h-[641px] gap-6 font-medium">
      <div className="flex flex-col gap-4">
        <Header />
        <Form />
      </div>
      <Banner />
    </section>
  );
};

export default Signup;
