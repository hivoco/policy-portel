"use client";

import AdminTable from "@/Components/AdminTable";
const Header = dynamic(() => import("../Components/Header"), { ssr: false });
import { Search } from "lucide-react";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const AdminInfo = () => {
  const [employeesData, setEmployeesData] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  
  // console.log(employeesData);
  
  const getEmployeeList = async () => {
    const url = "https://api.hivoco.com/policy/get-list-of-employee";
    const accessToken = sessionStorage.getItem("accessToken") ;    

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setEmployeesData(result);

    } catch (error) {
      console.log("catch error", error);
    }
  };

  useEffect(()=>{
    getEmployeeList();
  },[])

  return (
    <div>
      <Header />

      <div className="flex justify-between items-center  px-14 pt-14 pb-10">
        <h2 className="text-2xl text-[1.75rem]  font-semibold text-black">
          Admin Dashboard
        </h2>

        <div className="flex items-center gap-2 bg-[#F6F6F6] rounded-lg p-3 ">
          <Search size={28} />

          <input
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
            className="
            bg-transparent
            outline-none
            text-black
            border-b-2
          border-black
            w-80
          placeholder:text-[#656565]

                    [&:-webkit-autofill]:bg-transparent
          [&:-webkit-autofill:hover]:bg-transparent
          [&:-webkit-autofill:focus]:bg-transparent
          [&:-webkit-autofill:active]:bg-transparent
          [&:-webkit-autofill]:[transition-delay:9999s]
          [&:-webkit-autofill]:[-webkit-text-fill-color:inherit]

          "
            type="text"
            id="name"
            name="name"
            placeholder="Search Employee by Name.."
          />
        </div>
      </div>

      <div className="mx-14 rounded-t-xl overflow-hidden">
        <AdminTable searchTerm={searchTerm} employeesData={employeesData} />
      </div>
    </div>
  );
};

export default AdminInfo;
