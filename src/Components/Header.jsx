import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import {  useState } from "react";

const Header = () => {
  const userData = JSON.parse(sessionStorage.getItem("userData")) || {};
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const route = useRouter()

  const handleLogout = () => {
    sessionStorage.clear();
    route.replace("/")
  };

  return (
    <div className="relative py-9 px-14 flex justify-between items-center shadow-[0px_1.12px_13.47px_0px__#0000001A]">
      <Image
        className=""
        src="/images/hivoco-studios.png"
        width={202}
        height={34}
        alt="logo"
        priority
      />

      <div className="flex items-center gap-2">
        <Image
          className=""
          src="/images/user.svg"
          width={36}
          height={37}
          alt="logo"
          priority
        />

        <div className="relative flex ">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center  gap-2 focus:outline-none"
          >
            <div className="flex flex-col items-start">
              <h3 className="text-base font-medium text-black">
                {userData.name}
              </h3>
              <span
                style={{ color: "#656565" }}
                className="text-[#656565] text-sm font-normal"
              >
                {userData.email}
              </span>
            </div>
            <ChevronDown
              size={16}
              className={`transform transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* logout ui */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-12 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
              >
                {/* <LogOut size={16} /> */}
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;