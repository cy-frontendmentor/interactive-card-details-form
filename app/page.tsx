"use client";
import Image from "next/image";
import heroBg_mb from "../public/images/bg-main-mobile.png";
import cardFront from "../public/images/bg-card-front.png";
import cardBack from "../public/images/bg-card-back.png";
import cardLogo from "../public/images/card-logo.svg";
import Form from "../components/form/form";

const page = () => {
  return (
    <div className="max-w-[1440px]">
      <div className="grid gap-y-[91px] md:grid-cols-[auto,_1fr]">
        <div className=" relative w-screen  pt-[64%] md:h-screen md:w-[483px] lg:pt-0">
          <Image src={heroBg_mb} alt="" fill className="-z-50"></Image>
          <div className=" absolute top-1/2 left-1/2 -translate-y-1/3 -translate-x-1/2 drop-shadow-[0_39px_60px_rgba(0,0,0,0.1425)] lg:left-[164px] lg:-translate-x-0 lg:-translate-y-1/2 ">
            <div className=" relative h-[251px] w-[343px] lg:h-[527px] lg:w-[541px] ">
              <div className="absolute  bottom-0 left-0 lg:top-0 ">
                <div className=" relative h-[157px] w-[286px] lg:h-[245px] lg:w-[447px]">
                  <Image
                    src={cardFront}
                    alt=""
                    fill
                    className="-z-10"
                    priority={true}
                  ></Image>
                  <div className=" grid gap-y-[37px] px-[19px] py-[18px] lg:gap-y-[64px]">
                    <Image
                      src={cardLogo}
                      alt=""
                      width={54}
                      height={30}
                      className=" inline-block lg:h-[47px] lg:w-[84px]"
                    ></Image>
                    <div className="grid gap-y-[17px] ">
                      <p className="font-medium leading-normal tracking-[2.2px] text-white lg:text-[28px]">
                        0000 0000 0000 0000
                      </p>
                      <div className="flex justify-between text-[9px] font-medium uppercase leading-normal tracking-[1.29px] text-white lg:text-sm">
                        <span>Jane Appleseed</span>
                        <span>00/00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 max-lg:top-0 lg:bottom-0">
                <div className=" relative h-[157px] w-[286px] lg:h-[245px] lg:w-[447px] ">
                  <Image src={cardBack} alt="" fill className="-z-20"></Image>
                  <span className=" absolute top-[71px] right-[37px] text-[9px] font-medium leading-normal tracking-[1.29px] text-white  lg:top-[111px] lg:right-[57px] lg:text-[14px]">
                    000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid items-center justify-center px-6">
          <Form></Form>
        </div>
      </div>
    </div>
  );
};

export default page;
