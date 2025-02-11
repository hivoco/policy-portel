"use client";
import CompanyPolicyTable from "@/Components/CompanyPolicyTable";
import { UserDataContext } from "@/Context/UserDataContext";
import { Search } from "lucide-react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../Components/Header"), { ssr: false });

import React, { useContext, useEffect, useState } from "react";

const CompanyPolicy = () => {
  const { data } = useContext(UserDataContext);
  const [selectedPolicies, setSelectedPolicies] = useState([]);
  const [employeeId, setEmployeeId] = useState();
  const [searchTerm,setSearchTerm]=useState('')
  // console.log(employeeId);
  // console.log(selectedPolicies,'selectedPolicies');

  const getEmployeeData = async () => {
    const accessToken = sessionStorage.getItem("accessToken");
    // console.log(accessToken,'accessToken');
    // console.log(employeeId,'employeeId');
    const url = `https://api.hivoco.com/policy/get-info-of-employee/${employeeId}`;
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
        throw new Error(response.status);
      }

      const result = await response.json();
      setSelectedPolicies(result?.policies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (employeeId) {
      // console.log('run this code');
      
      getEmployeeData();
    }
  }, [employeeId]);

  useEffect(() => {
    const { employeeId } = JSON.parse(sessionStorage.getItem("userData"));
    // console.log(employeeId,'employeeId');
    setEmployeeId(employeeId);
  }, []);

  return (
    <div className="pb-4">
      <Header />

      <section className="flex flex-col gap-y-7 pb-7 px-14">
        <div className="flex justify-between items-center   pt-14 pb-10">
          <h2 className="text-2xl text-[1.75rem]  font-semibold text-black">
            Company Policies
          </h2>

          <div className="flex items-center gap-2 bg-[#F6F6F6] rounded-lg p-3 ">
            <Search size={28} />

            <input
              onChange={(e) => setSearchTerm(e.target.value)}
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
              placeholder="Search policies.."
            />
          </div>
        </div>

        <p className="text-lg leading-6 ">
          Here you’ll find all the company policies designed to maintain a
          professional and transparent environment.
        </p>
      </section>

      <div className="mx-14 rounded-t-xl overflow-hidden">
        <CompanyPolicyTable selectedPolicies={selectedPolicies} searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default CompanyPolicy;
