"use client";
import { Mail, MoveRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Speakers: React.FC = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    console.log("Newsletter signup clicked!");
  };

  const handleMouseLeave = () => {
    setIsPressed(false);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-3 px-10">
        <h1 className="font-darumdrop text-4xl text-[#766060]">
          Still have questions?
        </h1>
        <p className="font-fredoka text-sm text-[#766060]">
          Reach out to us at{" "}
          <a href="mailto:hello@deltahacks.com">hello@deltahacks.com</a>, any
          socials, or subscribe to our newsletter for more updates!
        </p>
        <div className="flex h-13 w-full items-center justify-between gap-4 rounded-2xl border-3 border-white bg-[#FFF5F5] p-3 text-[#C08080] drop-shadow-sm">
          <div className="flex w-full items-center gap-4">
            <Mail className="w-6" />
            <input
              className="flex-1 text-sm text-[#766060] placeholder:text-[#C08080]"
              type="text"
              placeholder="Sign up for our newsletter"
            />
          </div>
          <div className="relative min-h-7 min-w-12">
            <div
              className={`absolute inset-0 h-full w-full rounded-md bg-[#C89D9D] ${
                isPressed ? "border border-gray-400" : ""
              }`}
            />
            <button
              className={`absolute flex h-full w-full items-center justify-center rounded-md bg-[#FFFFFF] text-[#C89D9D] transition-all duration-50 ${
                isPressed
                  ? "top-0 left-0 border border-[#C89D9D]"
                  : "top-[-3px] left-[3px]"
              } cursor-pointer`}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
            >
              <MoveRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="h-12" />
      <div className="w-full px-6">
        <Image
          className="w-full"
          src="/assets/shopping-cart.png"
          alt="Reach Out To Us"
          width={797}
          height={622}
        />
      </div>
    </div>
  );
};

export default Speakers;
