import Image from "next/image";
import React from "react";
import ProfilePic from "../../public/profile-pic.png";
import Hexagon from "../../public/hexagon.svg";
import SkillCard from "./SkillCard";

const ProfileData = {
  skills: ['HTML 5','CSS', 'JavaScript','TailwindCSS', 'Next.js', 'MongoDB', 'Node.js', 'PostgreSQL']
}

export default function ProfileCard() {
  return (
    <div className="rounded-3xl w-3/5 pb-5 bg-white border border-gray-200">
      <div className="bg-blue-500 w-full h-[180px] rounded-t-3xl relative">
        <div className="absolute -bottom-14 left-7">
          <div className="relative w-fit">
            <Image
              src={ProfilePic}
              alt="Profile Pic"
              width={130}
              height={130}
              className=" rounded-full border-2 border-white"
            />
            <div className="absolute bottom-0 right-0">
              <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center origin-center my-auto text-white font-semibold text-xl">
                5
              </span>
              <Image alt="badge" src={Hexagon} width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
      <section className="ml-44 mt-4 flex flex-col gap-3 px-5">
        <div className="flex flex-row items-center gap-3">
          <h2 className="font-bold text-3xl">Sidharth Sreejil</h2>
          <span className="px-4 py-0.5 bg-lime-300 rounded-md font-semibold text-sm">
            Pro
          </span>
          <span className="px-4 py-0.5 bg-blue-100 rounded-md font-semibold text-blue-800 text-sm">
            Looking for a job
          </span>
        </div>
        <div className="flex flex-row items-center gap-3">
          <span className="text-sm text-slate-500">Applying for Frontend Intern at codedamn</span>
        </div>
        <div className="flex flex-row items-center gap-3">
          <span className="text-sm text-slate-400">Bangalore, India</span>
        </div>
        <div className="flex flex-row items-center gap-2 flex-wrap">
          {ProfileData.skills.map((skill,index) => {
            return (
              <SkillCard text={skill} key={index}/>
            )
          })}
        </div>
        <hr className="border-1 border-gray-400 rounded-lg w-full" />

      </section>
    </div>
  );
}
