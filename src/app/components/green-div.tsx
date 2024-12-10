import Image from "next/image";
import greenman from "@/images/shop-hero-2-png-picture-1.png";

export default function GreenDiv() {
  return (
    <div className="w-full rounded-[5px] absolute bg-[#23856D] mt-[-130px] top-[3200px] border">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="w-full max-w-[1440px] h-auto px-4 py-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-[80px]">
            <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
              <h4 className="text-[16px] lg:text-[20px] font-Montserrat font-normal leading-[24px] lg:leading-[30px] text-white">
                SUMMER 2020
              </h4>
              <h1 className="text-[32px] lg:text-[58px] font-Montserrat font-bold leading-[40px] lg:leading-[80px] text-white">
                Vita Classic Product
              </h1>
              <p className="text-[14px] leading-[20px] text-white max-w-[90%] lg:max-w-[341px] mx-auto lg:mx-0">
                We know how large objects will act, We know how are objects will
                act, We know
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <h3 className="text-[20px] lg:text-[24px] font-Montserrat font-bold leading-[32px] text-white">
                  $16.48
                </h3>
                <button className="rounded-[5px] bg-[#2DC071] px-6 py-3 flex items-center justify-center text-white text-[14px] leading-[22px] font-Montserrat">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src={greenman} alt="picman" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
