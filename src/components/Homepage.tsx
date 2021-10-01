import Image from "next/image";
import Hero from "./Hero";

const Homepage = () => {
  return (

      <Hero image="/bghomepage.png" alt="Background">
        <div className="grid grid-cols-2 h-full">
        <div />
        <div className="text-center text-6xl text-white font-bold grid grid-rows-2 bg-black bg-opacity-70">
          <span className="pt-52">Coming Soon.</span>
          <span className="pt-7 text-3xl font-normal">Please stay tuned for our new website!</span>
          <div className="text-xl font-medium pt-28 pb-5 flex flex-row-reverse pr-8">
            <div className="pl-3">
              <Image src="/discordlogo.png" alt="Discord Logo" layout="fixed" width={40} height={28} />
            </div>
            <span>Join our discord</span>
            </div>
        </div>
      </div>

      </Hero>

  );
};

export default Homepage;
