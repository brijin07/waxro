import React from "react";
import wrongsvg from "../src/images/wrong.svg";

function Deisign() {
  return (
    <div className="p-2">
      <div className=" h-10 w-[95%] flex justify-end items-center">
        <button className="btn1">
          <img src={wrongsvg} alt="" />
        </button>
      </div>
      <div className="flex justify-center w-full pt-5">
        <div className="md:w-[70%] m-3 md:m-0 h-[600px]">
          <div className="md:p-3">
            <p className="text-center text-white font-light text-2xl md:text-3xl">
              Epic Games : An American video game and software developer and
              publisher based in Cary, North Carolina.
            </p>
          </div>
          {/* fornite main img */}
          <div className="img1 w-full h-[230px] md:h-[300px] mt-5"></div>

          <div className="pt-5 ">
            <p className="text-justify md:text-center  md:p-4 text-white font-light hyphens-auto">
              Create, play, and battle with friends for free in Fortnite. Be the
              last player standing in Battle Royale and Zero Build, experience a
              concert or live event,or discover over a million creator made
              games, including racing, parkour,zombie survival, and more.Each
              Fortnite island has an individual age rating so you can find the
              one that's right for you and your friends. Find it all in Fortnite
              ... Drop In.
            </p>
          </div>

          <div className="flex justify-center pt-5">
            <button className="btn1 bg-slate-100 w-[40%] md:w-[25%] border-2 border-white p-1">
              visit website
            </button>
          </div>

          <div className=" mt-20 flex flex-col gap-4     md:flex-row justify-evenly items-center	">
            <div className=" p-2 w-[100%] md:w-[30%] h-[260px] ">
              <div className="boximg1 w-full h-[200px]"></div>
              <p className="pt-2 text-center leading-5 text-white font-light">
                Explore large, destructible environments where no two games are
                ever the same.
              </p>
            </div>
            <div className=" p-2 w-[100%] md:w-[30%] h-[260px]">
              <div className="boximg2  w-full h-[200px]"></div>
              <p className="pt-2 text-center leading-5 text-white font-light">
                Team up with friends by sprinting, climbing and smashing your
                way to earn your Victory Royale
              </p>
            </div>
            <div className="p-2 w-[100%]   md:w-[30%] h-[260px] ">
              <div className="boximg3 w-full h-[200px]"></div>
              <p className="pt-2 text-center leading-5 text-white font-light">
                Discover even more ways to play across thousands of creator-made
                game genres
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h1 className="text-2xl md:text-4xl font-light text-white text-center">
              Our Contribution
            </h1>
            <p className="text-light font-light text-white text-justify md:text-center mt-2 ">
              Our core offering extends beyond mere profit generation; we
              emphasize the growth and active involvement of our user community.
              Collaborating with us represents an investment, rather than a mere
              expenditure. Our dedication to providing distinctive digital
              interactions guarantees unparalleled benefits for our clientele.
            </p>
          </div>

          <div className="flex justify-evenly mt-20  ">
            <div className="text-white flex flex-col w-[23] md:w-[15%]">
              <h1 className="text-center text-2xl md:text-4xl p-2 font-light">
                5M
              </h1>
              <p className=" text-center font-light ">Daily User Engagements</p>
            </div>
            <div className="text-white flex flex-col w-[30%] md:w-[20%] ">
              <h1 className="text-center text-2xl md:text-4xl p-2 font-light">
                $500K
              </h1>
              <div className="flex justify-center">
                <p className=" text-center leading-5 md:leading-6 font-light w-[80%] ">
                  Revenue Surge for an Platform
                </p>
              </div>
            </div>

            <div className="text-white flex flex-col w-[40%] md:w-[20%]">
              <h1 className="text-center text-2xl md:text-4xl p-2 font-light">
                10X
              </h1>
              <div className="flex justify-center">
                <p className=" text-center leading-5 md:leading-6 font-light w-[80%] ">
                  ROAS on all our marketing campaigns
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h1 className="text-white text-center text-2xl md:text-4xl font-light">
              Interested in delving deeper into the project?
            </h1>
            <div className="flex justify-center mt-5">
              <div className="md:w-[60%]">
                <p className="text-white   font-light text-justify md:text-center">
                  If you'd like to explore further details about our initiatives
                  or any of our affiliated brands, don't hesitate to connect.
                  You can reach out to us via email at{" "}
                  <span className="font-bold">hello@abc.com.</span> or give us a
                  call at <span className="font-bold">+91 480 20802730.</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-5 pt-10">
              <button className="w-[40%] text-sm md:w-[25%] border border-slate-200 text-white p-1">
                Ring us on Skype
              </button>
              <button className="btn1 text-sm bg-slate-100 w-[40%] md:w-[25%] border-2 border-white p-1">
                Contact Us
              </button>
            </div>

            <div>
              <p className="font-extralight text-white text-center mt-[20%] pb-5">
                © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deisign;
