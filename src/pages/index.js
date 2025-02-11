import Image from "next/image";
import { useContext, useState } from "react";
import handler from "./api/hello";
import { useRouter } from "next/router";
import { userAgent } from "next/server";
import { UserDataContext } from "@/Context/UserDataContext";
import { stringify } from "postcss";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const route = useRouter()

  const handleLogin =async()=>{
    // const url= "https://api.hivoco.com/auth/login"
    const url= "https://api.hivoco.com/auth/login-employee"

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        // 200-300 range
        throw new Error(`Error : ${response.status}`); // 400-500 erros range
      }

      const result = await response.json();
      console.log(result);

      sessionStorage.setItem("accessToken", result.accessToken);
      sessionStorage.setItem("refreshToken", result.refreshToken);

      sessionStorage.setItem(
        "userData",
        JSON.stringify({
          name: result?.user?.name,
          role: result?.user?.role,
          email: email,
          employeeId: result.user._id,
          password: result.user.password,
        })
      );

      route.push(
        result?.user?.role?.toLowerCase() === "admin"
          ? "/admin-info"
          : "/company-policy"
      );

    } catch (error) {
      console.log("Error :", error);
    }
  } 


  return (
    <div className="px-14 py-9 min-h-screen w-full flex justify-center items-center">
      <Image
        className="
        absolute
        top-8
        left-12
        "
        src={"/images/hivoco-studios.png"}
        width={202}
        height={34}
        alt="logo"
        priority
      />

      <section className="font-normal flex flex-col gap-8">
        <div className=" text-black flex flex-col items-center gap-3">
          <h2 className="text-2xl tracking-wide font-semibold">LOGIN</h2>

          <h3 className="text-base font-normal trackin">
            Enter your email and password to login:
          </h3>
        </div>

        <form className="flex flex-col gap-6">
          <input
            className="text-base border border-solid border-black/50 focus:border-black h-12 p-3 w-[480px] placeholder:text-black/50"
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="E-mail"
            autoComplete="true"
          />

          <input
            className="text-base border border-solid  border-black/50 focus:border-black h-12 p-3 w-[480px] placeholder:text-black/50"
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            autoComplete="true"
          />

          <button
          onClick={handleLogin}
            type="button"
            className="
          uppercase
          text-lg
          rounded
          h-12
          bg-[#8242FF]
          w-[480px]
          text-white
          "
          >
            LOGIN
          </button>
        </form>
      </section>

    </div>
  );
};

export default Home;
