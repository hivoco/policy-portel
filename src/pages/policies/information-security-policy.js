import React, { useState } from "react";
import DIV from "@/Elements/DIV";
import H2 from "@/Elements/H2";
import LI from "@/Elements/LI";
import SPAN from "@/Elements/SPAN";
import { useRouter } from "next/router";

const InformationSecurityPolicy = ({
  policyName = "Hivoco's New Information Security Policy",
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const route = useRouter();

  const updatePolicy = async () => {
    const { employeeId } = JSON.parse(sessionStorage.getItem("userData"));
    console.log(employeeId);

    const url = `https://api.hivoco.com/policy/update-policy/${employeeId}`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          policyName: policyName,
          checked: true,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      alert("Policy accepted successfully");
      route.push("/company-policy");
      console.log(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="pt-14 px-14">
      <H2>
        Important: Hivoco's New Information Security Policy - Action Required
      </H2>

      <DIV className={"!border-none"}>
        <SPAN>Dear Team,</SPAN>
        <SPAN>
          We are pleased to introduce Hivoco's updated Information Security
          Policy, which is designed to safeguard our organization's valuable
          data and ensure compliance with industry standards and regulatory
          requirements.
        </SPAN>
      </DIV>

      <DIV className={"!border-none"}>
        <SPAN className={"!font-bold"}>What You Need to Know:</SPAN>
        <SPAN>
          The new policy outlines key security measures, including but not
          limited to:
        </SPAN>
        <div>
          <LI>
            <strong>Data Protection:</strong> Proper handling, storage, and
            sharing of sensitive information.
          </LI>
          <LI>
            <strong>Access Control:</strong> Adherence to least privilege access
            principles.
          </LI>
          <LI>
            <strong>Incident Reporting:</strong> Steps to report any security
            incidents promptly.
          </LI>
          <LI>
            <strong>Employee Responsibilities:</strong> Expectations for
            ensuring compliance with security guidelines.
          </LI>
        </div>
      </DIV>

      <DIV className={"!border-none"}>
        <H2>Action Required:</H2>
        <div>
            <SPAN>Please take the following steps to comply with the new policy:
            </SPAN>
          <LI>
            <strong>Read the Policy:</strong> The full policy document is
            available in the attachment.
          </LI>
          <LI>
            <strong>Acknowledge Compliance:</strong> All employees must
            acknowledge their understanding and agreement to comply with the
            policy by accessing the acknowledgment page.
          </LI>
        </div>
      </DIV>

      <DIV className={"!border-none"}>
        <H2>Support and Questions:</H2>
        <SPAN>
          If you have any questions or need further clarification, please reach
          out to the IT Security team at{" "}
          <a href="mailto:security@hivoco.com">security@hivoco.com</a>. Your
          cooperation and adherence to this policy are critical in ensuring a
          secure working environment for all.
        </SPAN>
        <SPAN>Thank you for your prompt attention.</SPAN>
      </DIV>

      <DIV className={"!border-none"}>
          <SPAN>
            <strong>Best regards,</strong>
          </SPAN>
          <SPAN>Krishna Murari Yadav</SPAN>
          <SPAN>Chief Security Officer</SPAN>
          <SPAN>Hivoco</SPAN>
      </DIV>

      <DIV className={"!border-none"}>
        <SPAN>
          <strong>Note:</strong> Failure to acknowledge and comply with the
          Information Security Policy may result in restricted access to company
          resources.
        </SPAN>
      </DIV>

      <DIV className={"!border-none"}>
        <div className="flex flex-col items-start gap-12">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="customCheckbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-black rounded"
            />
            <label htmlFor="customCheckbox" className="select-none">
              <SPAN className="!font-medium">
                By proceeding, you acknowledge that you have read and agree to
                the “Terms and Conditions” outlined in this policy.
              </SPAN>
            </label>
          </div>

          <button
            onClick={updatePolicy}
            disabled={!isChecked}
            className={`py-3 px-9 rounded-lg text-white ${
              !isChecked ? "opacity-60 hover:cursor-not-allowed" : ""
            }`}
            style={{
              background: "linear-gradient(90deg, #A679FF 0%, #FF6A92 100%)",
            }}
          >
            <SPAN className="!font-semibold">SUBMIT</SPAN>
          </button>
        </div>
      </DIV>
    </div>
  );
};

export default InformationSecurityPolicy;
