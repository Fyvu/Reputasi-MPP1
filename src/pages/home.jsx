import ProfilePhoto from "../assets/Profile.png";
import ButtonLink from "../component/button-link";
import { useState } from "react";
import { moods } from "../objects/theme-mood";
import MyButton from "../component/button";

export default function Home() {
  const [showAboutMe, setAboutMe] = useState(false);
  const [showContact, setContact] = useState(false);
  function HandleContact() {
    setContact(true);
  }
  function HandleProfileClick() {
    setAboutMe(true);
  }
  function HandleBackClick() {
    setAboutMe(false);
  }
  function HandleBackFC() {
    setContact(false);
  }
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="abosolute flex gap-2 flex-col text-center items-center justify-center py-25 mx-5">
        <div className="flex flex-col gap-1 mb-8">
          <h1 className="text-5xl">Welcome!</h1>
          <p className="font-light">Klik Foto Profil Untuk Ke About Me</p>
        </div>
        <div className="flex flex-col items-center justify-center group">
          <div className="flex w-60 p-3 border-2 rounded-full group-hover:-translate-y-5 hover:scale-105 transition-all duration-600">
            <buttom onClick={HandleProfileClick}>
              <img className="rounded-full hover:scale-110   transition-all duration-700" src={ProfilePhoto} alt="" />
            </buttom>
          </div>
          <div className="absolute mt-45">
            <h1 className=" text-2xl font-light opacity-0  group-hover:opacity-100 group-hover:translate-y-10 transition-all duration-700 ease-in-out">Halo! aku Faqih!</h1>
          </div>
        </div>
        <div className="flex flex-row mt-5 flex-wrap items-center justify-center">
          <ButtonLink Label="Projects" link="/Projects" />
          <ButtonLink Label="Ganti Mood" link="/" />
          <MyButton Label="Contact" Click={HandleContact} />
        </div>
        <div
          className={`absolute inset-0 transition-transform duration-700 ease-in-out
          ${showAboutMe ? "translate-y-0" : "translate-y-full"}`}
        >
          <AboutME backClick={HandleBackClick} />
        </div>
        <div
          className={`absolute inset-0 transition-transform duration-700 ease-in-out
          ${showContact ? "translate-y-0" : "translate-y-full"}`}
        >
          <Contact backClick={HandleBackFC} />
        </div>
      </div>
    </div>
  );
}

function AboutME({ backClick }) {
  const getMood = localStorage.getItem("StoreMood") || "Biasa";
  const theme = moods[getMood];

  return (
    <div className={` gap-5 flex flex-col items-center justify-center text-center ${theme.secondary} h-full w-full md:h-screen shadow-xl`}>
      <h1 className="text-4xl">About Me</h1>
      <div className="md:mx-50 mx-5">
        <p className="text-xs md:text-lg font-normal">
          Pelajar dengan rasa ingin tahu tinggi dan semangat belajar yang kuat. Memiliki minat besar di bidang teknologi, terutama Jaringan Komputer, Internet of Things (IoT), dan keamanan siber.
          Terbiasa dengan berbagai proyek teknologi dan kepemimpinan organisasi. Termotivasi untuk terus mengembangkan keterampilan dan berkontribusi pada solusi inovatif.
        </p>
      </div>
      <MyButton Label="↑" Click={backClick} />
    </div>
  );
}

function Contact({ backClick }) {
  const getMood = localStorage.getItem("StoreMood") || "Biasa";
  const theme = moods[getMood];
  return (
    <div className={` gap-5 flex flex-col items-center justify-center text-center ${theme.secondary} h-full w-full md:h-screen shadow-xl`}>
      <h1 className="text-3xl">Contact</h1>
      <div className="grid grid-cols-1 gap-5">
        <div className="flex flex-row gap-2 px-4 py-2 outline-2  rounded-lg  ">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
              fill="currentColor"
            />
            <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
              fill="currentColor"
            />
          </svg>
          <a href="https://www.instagram.com/whosthefaq " rel="noopener norefferer" target="blank_">
            Instagram
          </a>
        </div>
        <div className="flex flex-row gap-2 px-4 py-2 outline-2  rounded-lg  ">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
            <path
              d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"
              fill="currentColor"
            ></path>
          </svg>
          <a href="https://www.linkedin.com/in/m-faqih-tsaqifa-addinawa-966895268 " rel="noopener norefferer" target="blank_">
            LinkedIn
          </a>
        </div>
        <div className="flex flex-row gap-2 px-4 py-2 outline-2  rounded-lg  ">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"
              fill="currentColor"
            ></path>
          </svg>
          <a href="https://github.com/Fyvu" rel="noopener norefferer" target="blank_">
            Git Hub
          </a>
        </div>
      </div>

      <MyButton Label="↑" Click={backClick} className="m-0" />
    </div>
  );
}
