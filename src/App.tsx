import { useState } from "react";
import "./App.css";
import {
  CompanyLogo,
  Gift,
  Github,
  Letter,
  Menu,
  Message,
  Sale,
  Setting,
} from "./assets/icon";

const NavLink = [Letter, Gift, Sale, Message];
const filter = [
  "All",
  "Enabled",
  "Disable",
  "Tracking",
  "Compilance",
  "Finance",
];
function App() {
  const [active, setActive] = useState(0);
  return (
    <div className="w-[100vw] h-[100vh] flex items-center relative">
      <div className="rounded-[50%] w-[30vw] z-10 h-[60%] md:h-[36%]  bg-orange-400/80 blur-[120px] absolute left-[-150px] top-[-300px] shadow-[16px] rotate-[-45deg]   "></div>
      <div className="rounded-[50%] w-[30vw] -z-10 h-[32%] md:h-[50%] bg-orange-400/20 blur-[120px] absolute  top-[100px] left-[180px] shadow-[16px] rotate-[-45deg]"></div>
      <div className="rounded-[50%] w-[15vw] -z-10 h-[32%] md:h-[50%] bg-orange-400/20 blur-[120px] absolute  top-[20vh] left-[40vw] shadow-[16px] rotate-[-45deg]"></div>
      <div className="m-auto flex flex-col md:flex-row  rounded-2xl h-[92%] w-[96%] backdrop-blur-xs bg-[black]/5 border-1 border-primary/10 ">
        <nav className="h-[64px] flex md:flex-col md:py-4 md:h-[100%] w-[100%] md:border-r md:border-b-0 md:w-[64px] border-b border-primary/10 ">
          <div className="h-[100%] hidden md:flex flex-col">
            <div className="w-fit h-fit mx-auto  block bg-white/10 p-2 rounded-xl">
              <CompanyLogo />
            </div>
            <ul className="flex  mt-8 flex-col justify-center h-fit mx-auto gap-y-4">
              {NavLink.map((Component, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`${active === index && "bg-[#F8610E]/10"} cursor-pointer flex justify-center items-center mx-auto size-[42px] rounded-xl`}
                >
                  <Component active={active === index} />
                </button>
              ))}
            </ul>
            <div className="mt-auto flex flex-col  items-center gap-y-4 w-[100%] p-2">
              <button className="cursor-pointer">
                <Setting />
              </button>
              <img
                src="https://avatars.githubusercontent.com/u/152392780?v=4"
                alt="Profile-img"
                className="rounded-full cursor-pointer"
              />
            </div>
          </div>
          <div className="md:hidden px-4 items-center justify-between w-full h-full flex ">
            <button className="w-fit h-fit block py-2 rounded-xl">
              <Menu />
            </button>
            <div className="w-[42px] h-[42px]  block bg-white/10  rounded-full">
              <img
                src="https://avatars.githubusercontent.com/u/152392780?v=4"
                alt="Profile-img"
                className="rounded-full cursor-pointer"
              />
            </div>
          </div>
        </nav>
        <div className="w-[100%] flex flex-col  h-[calc(100%-64px)]">
          <div className="h-[64px] flex items-center p-4 w-full border-b-0 md:border-b border-primary/10">
            <h1 className="text-3xl">
              Intergations<span className="text-sm mx-1">(32)</span>
            </h1>
          </div>
          <div className="flex p-2 md:p-8">
            <div
              id="filter"
              className="flex gap-x-2 text-gray-200 overflow-scroll w-full"
            >
              {filter.map((ele) => (
                <button className="py-2 px-4 bg-white/10 rounded-xl">
                  {ele}
                </button>
              ))}
            </div>
          </div>
          <div className="flex p-2 flex-wrap md:gap-x-4 md:justify-between  md:p-8   gap-y-4 text-gray-200 overflow-scroll w-full">
            <div className="w-[96%] md:w-[40%] lg:w-[30%]  mx-auto md:m-0 rounded-xl border-1 border-primary/10 bg-linear-to-b from-white/10 to-black-10 ">
              <div className="gap-y-4 flex flex-col p-8 border-b border-primary/10">
                <button className="p-2 w-fit bg-white/10 rounded-xl">
                  <Github />
                </button>
                <div className="flex justify-between items-center">
                  <h1 className="text-4xl md:text-xl lg:text-4xl">Github</h1>
                  <button className=" rounded-full px-4 py-2 bg-white/10">
                    Automation
                  </button>
                </div>
                <p className="text-gray-400">
                  GitHub, Inc. is an AI-powered developer platefrom that allow
                  developer to create, store and manage code.
                </p>
              </div>
              <div className="flex justify-between py-2 px-8 ">
                <div className="flex  justify-center items-center gap-x-2 ">
                  <Setting />
                  <a href="" className="text-xl text-gray-400 underline">
                    Configure App
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[96%] md:w-[40%] lg:w-[30%] mx-auto md:m-0 rounded-xl border-1 border-primary/10 bg-linear-to-b from-white/10 to-black-10 ">
              <div className="gap-y-4 flex flex-col p-8 border-b border-primary/10">
                <button className="p-2 w-fit bg-white/10 rounded-xl">
                  <Github />
                </button>
                <div className="flex justify-between items-center">
                  <h1 className="text-4xl md:text-xl lg:text-4xl">Github</h1>
                  <button className=" rounded-full px-4 py-2 bg-white/10">
                    Automation
                  </button>
                </div>
                <p className="text-gray-400">
                  GitHub, Inc. is an AI-powered developer platefrom that allow
                  developer to create, store and manage code.
                </p>
              </div>
              <div className="flex justify-between py-2 px-8 ">
                <div className="flex  justify-center items-center gap-x-2 ">
                  <Setting />
                  <a href="" className="text-xl text-gray-400 underline">
                    Configure App
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[96%] md:w-[40%] lg:w-[30%] mx-auto md:m-0 rounded-xl border-1 border-primary/10 bg-linear-to-b from-white/10 to-black-10 ">
              <div className="gap-y-4 flex flex-col p-8 border-b border-primary/10">
                <button className="p-2 w-fit bg-white/10 rounded-xl">
                  <Github />
                </button>
                <div className="flex justify-between items-center">
                  <h1 className="text-4xl md:text-xl lg:text-4xl">Github</h1>
                  <button className=" rounded-full px-4 py-2 bg-white/10">
                    Automation
                  </button>
                </div>
                <p className="text-gray-400">
                  GitHub, Inc. is an AI-powered developer platefrom that allow
                  developer to create, store and manage code.
                </p>
              </div>
              <div className="flex justify-between py-2 px-8 ">
                <div className="flex  justify-center items-center gap-x-2 ">
                  <Setting />
                  <a href="" className="text-xl text-gray-400 underline">
                    Configure App
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[96%] md:w-[40%] lg:w-[30%] mx-auto md:m-0 rounded-xl border-1 border-primary/10 bg-linear-to-b from-white/10 to-black-10 ">
              <div className="gap-y-4 flex flex-col p-8 border-b border-primary/10">
                <button className="p-2 w-fit bg-white/10 rounded-xl">
                  <Github />
                </button>
                <div className="flex justify-between items-center">
                  <h1 className="text-4xl">Github</h1>
                  <button className=" rounded-full px-4 py-2 bg-white/10">
                    Automation
                  </button>
                </div>
                <p className="text-gray-400">
                  GitHub, Inc. is an AI-powered developer platefrom that allow
                  developer to create, store and manage code.
                </p>
              </div>
              <div className="flex justify-between py-2 px-8 ">
                <div className="flex  justify-center items-center gap-x-2 ">
                  <Setting />
                  <a href="" className="text-xl text-gray-400 underline">
                    Configure App
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[96%] md:w-[40%] lg:w-[30%] mx-auto md:m-0 rounded-xl border-1 border-primary/10 bg-linear-to-b from-white/10 to-black-10 ">
              <div className="gap-y-4 flex flex-col p-8 border-b border-primary/10">
                <button className="p-2 w-fit bg-white/10 rounded-xl">
                  <Github />
                </button>
                <div className="flex justify-between items-center">
                  <h1 className="text-4xl">Github</h1>
                  <button className=" rounded-full px-4 py-2 bg-white/10">
                    Automation
                  </button>
                </div>
                <p className="text-gray-400">
                  GitHub, Inc. is an AI-powered developer platefrom that allow
                  developer to create, store and manage code.
                </p>
              </div>
              <div className="flex justify-between py-2 px-8 ">
                <div className="flex  justify-center items-center gap-x-2 ">
                  <Setting />
                  <a href="" className="text-xl text-gray-400 underline">
                    Configure App
                  </a>
                </div>
              </div>
            </div>

            <div className="w-[96%] md:w-[40%] lg:w-[30%] mx-auto md:m-0 rounded-xl border-1 border-primary/10 bg-linear-to-b from-white/10 to-black-10 ">
              <div className="gap-y-4 flex flex-col p-8 border-b border-primary/10">
                <button className="p-2 w-fit bg-white/10 rounded-xl">
                  <Github />
                </button>
                <div className="flex justify-between items-center">
                  <h1 className="text-4xl">Github</h1>
                  <button className=" rounded-full px-4 py-2 bg-white/10">
                    Automation
                  </button>
                </div>
                <p className="text-gray-400">
                  GitHub, Inc. is an AI-powered developer platefrom that allow
                  developer to create, store and manage code.
                </p>
              </div>
              <div className="flex justify-between py-2 px-8 ">
                <div className="flex  justify-center items-center gap-x-2 ">
                  <Setting />
                  <a href="" className="text-xl text-gray-400 underline">
                    Configure App
                  </a>
                </div>
              </div>
            </div>

            <div className="w-[96%] md:w-[40%] lg:w-[30%] mx-auto md:m-0 rounded-xl border-1 border-primary/10 bg-linear-to-b from-white/10 to-black-10 ">
              <div className="gap-y-4 flex flex-col p-8 border-b border-primary/10">
                <button className="p-2 w-fit bg-white/10 rounded-xl">
                  <Github />
                </button>
                <div className="flex justify-between items-center">
                  <h1 className="text-4xl">Github</h1>
                  <button className=" rounded-full px-4 py-2 bg-white/10">
                    Automation
                  </button>
                </div>
                <p className="text-gray-400">
                  GitHub, Inc. is an AI-powered developer platefrom that allow
                  developer to create, store and manage code.
                </p>
              </div>
              <div className="flex justify-between py-2 px-8 ">
                <div className="flex  justify-center items-center gap-x-2 ">
                  <Setting />
                  <a href="" className="text-xl text-gray-400 underline">
                    Configure App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
