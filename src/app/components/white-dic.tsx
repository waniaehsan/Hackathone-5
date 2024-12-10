import Image from "next/image";
import couples from "@/images/asian-woman-man-with-winter-clothes 1.png";

export default function Whitediv() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-6 px-4 lg:px-0">
        {/* Image Section */}
        <div className="relative w-full lg:w-[707px] h-[300px] sm:h-[400px] lg:h-[682px] flex justify-center">
          <Image
            src={couples}
            alt="couple"
            className="object-contain"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[573px] flex flex-col gap-5 justify-center items-center lg:items-start text-center lg:text-left">
          <h5 className="text-sm sm:text-base font-Montserrat font-bold leading-6 text-[#BDBDBD]">
            SUMMER 2020
          </h5>
          <h2 className="lg:w-[375px] text-lg sm:text-2xl lg:text-[40px] font-Montserrat font-bold leading-8 sm:leading-10 text-[#252B42]">
            Part of the Neural Universe
          </h2>
          <h4 className="lg:w-[375px] text-base sm:text-lg lg:text-xl font-Montserrat font-normal leading-6 sm:leading-8 text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            <button className="w-[140px] sm:w-[156px] h-[48px] sm:h-[52px] rounded-[5px] py-3 px-5 sm:px-10 bg-[#2DC071] flex justify-center items-center">
              <h1 className="text-sm font-Montserrat font-bold text-white">
                BUY NOW
              </h1>
            </button>
            <button className="w-[140px] sm:w-[156px] h-[48px] sm:h-[52px] rounded-[5px] py-3 px-5 sm:px-10 border border-[#2DC071] flex justify-center items-center">
              <h1 className="text-sm font-Montserrat font-bold text-[#2DC071]">
                READ MORE
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
