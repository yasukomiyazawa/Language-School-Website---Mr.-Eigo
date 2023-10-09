import React from "react";
import Link from "next/link";

// const Hero = ({ backgrounds, interval }: BackgroundProps) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     // Automatically switch background every 3 seconds
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) =>
//           prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
//         );
//       }, 3000); // Change every 3 seconds (3000 milliseconds)
//     });

//       // Clear the interval when the component is unmounted
//       return () => clearInterval(interval);
//       }, [backgrounds, interval]);

//     return (
//       <header className={`bg-cover h-screen ${backgrounds[currentIndex]}`}>

const Hero = () => {
  return (
    <header className="bg-hero-bg bg-cover h-screen">
      <h1 className="flex flex-col text-center justify-center items-center text-6xl mt-14 text-red-900 font-bold">
        Elevate Your English{" "}
        <span className="mt-2">Empowering Futures, One Word at a Time!</span>
      </h1>
      <div className="flex justify-center gap-5 mt-10">
        <Link href="/ContactUs" passHref>
          <button className="bg-red-800 border border-red-800 rounded-full px-4 py-2 text-white shadow-lg hover:bg-white hover:text-red-800">
            SIGN UP NOW
          </button>
        </Link>

        <Link href="/Courses" passHref>
          <button className="bg-white border-white border rounded-full px-4 py-2 text-red-800 shadow-lg hover:bg-red-800 hover:text-white">
            LEARN MORE
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Hero;