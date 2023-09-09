import React, { useEffect, useState } from "react";

const Card = () => {
  const [days, setDays] = useState(25);
  const [hours, setHours] = useState(19);
  const [minutes, setMinutes] = useState(55);
  const [seconds, setSeconds] = useState(28);

  const updateTimer = () => {
    const now = new Date();
    const targetDate = new Date("2023-12-31T23:59:59");

    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      // Timer has ended
      clearInterval(interval);
    } else {
      const remainingSeconds = Math.floor(timeDifference / 1000);

      const newDays = Math.floor(remainingSeconds / 86400);
      const newHours = Math.floor((remainingSeconds % 86400) / 3600);
      const newMinutes = Math.floor((remainingSeconds % 3600) / 60);
      const newSeconds = remainingSeconds % 60;

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);
    }
  };

  useEffect(() => {
    const interval = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div class="top-12 bottom-8 flex-1 pb-60 sm:pb-48 ">
      <div class="relative mx-auto rounded-t-xl h-[400px] w-full sm:w-[450px]">
        <div class="h-full w-full rounded-t-xl  ">
          <div className=" absolute inset-0 bg-black opacity-30 rounded-t-xl"></div>

          <img class="h-full rounded-t-xl" src="/images/bg.jpg" />
          <div class="absolute top-2 left-0 right-0 mx-4">
            <div class="flex gap-x-2 items-center justify-between text-white">
              <div class="flex flex-col text-center uppercase tracking-widest text-white">
                <span class="text-[43px]">{days}</span>
                <span class="opacity-80 text-[10px]">Days</span>
              </div>
              <div class="flex flex-col text-center uppercase tracking-widest text-white">
                <span class="text-[43px]">{hours}</span>
                <span class="opacity-80 text-[10px]">Hours</span>
              </div>
              <div class="flex flex-col text-center uppercase tracking-widest text-white">
                <span class="text-[43px]">{minutes}</span>
                <span class="opacity-80 text-[10px]">Minutes</span>
              </div>
              <div class="flex flex-col text-center uppercase tracking-widest text-white">
                <span class="text-[43px]">{seconds}</span>
                <span class="opacity-80 text-[10px]">Seconds</span>
              </div>
            </div>
          </div>
          <div
            class=" align-center   heart_main_div absolute right-5 mt-5 flex justify-end gap-3 text-white xl:mr-[10px] "
            style={{ fontSize: "20px", top: "80px" }}
          >
            <img src="/images/arrow.svg" alt="" class="fill-white text-white" />
            <img
              width="20px"
              src="/images/heart.svg"
              alt=""
              class="  cursor-pointer"
            />
          </div>

          <div class="absolute bottom-0 items-center flex flex-col">
            {/* Between  */}
            <div className="flex items-center justify-between mx-6 ">
              <div>
                <img src="/images/progressbar.svg" alt="" class="h-20 " />
              </div>
              <div class="flex w-full flex-col text-center font-light tracking-widest text-white">
                <div class="flex items-center justify-center gap-x-2 px-2 text-[11px] tracking-[2px] text-white lg:gap-x-3 relative ">
                  £5,000,000 GBP
                </div>
              </div>

              <div className="w-auto">
                <img src="/images/sothe.svg" alt="" class="h-16 " />
              </div>
            </div>
            {/* Line Section sliding  */}
            <div className="mb-2">
              <img
                src="/images/line.svg"
                alt=""
                class=" absolute right-0 mr-8"
              />
            </div>

            {/* Text Section  */}
            <div>
              <p class="text-[10px] text-white relative tracking-[1px] ">
                SHELTON STREET COVENT GARDEN LONDON WC2H UNITED KINGDOM
                <div className="text-[11px] bottom-1 text-right">
                  #ZM7861234567
                </div>
              </p>
            </div>
          </div>
        </div>
        <button class="my-1 mx-auto flex w-full max-w-[660px]  rounded-b-xl bg-black px-8 py-6 text-lg font-light items-center tracking-widest text-white duration-100 justify-between">
          <div>
            <h1 class="">
              <span>£</span>
              25.00 GBP
            </h1>
          </div>
          <div className="relative">
            <h1 class="">BUY ENTRY NOW</h1>
            <div class=" bottom-1 text-right text-[9px] text-white ">
              #ZM7861234567
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Card;
