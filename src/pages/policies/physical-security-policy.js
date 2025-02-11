import React, { useState } from "react";
import DIV from "@/Elements/DIV";
import H2 from "@/Elements/H2";
import LI from "@/Elements/LI";
import SPAN from "@/Elements/SPAN";
import { useRouter } from "next/router";

const PhysicalSecurityPolicy = ({policyName="Hivoco Physical Security Controls Policy"}) => {
  // 5
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
      <H2>Hivoco Physical Security Controls Policy</H2>
      <div className="flex flex-col">
        <SPAN>Version: 1.0</SPAN>
        <SPAN>Owner: Chief Security Officer (CSO)</SPAN>
      </div>

      <DIV>
        <H2>1. Purpose</H2>
        <SPAN>
          The purpose of this document is to outline the physical security
          controls implemented at Hivoco to protect personnel, assets, and
          sensitive information from unauthorized access, theft, and
          environmental hazards.
        </SPAN>
      </DIV>

      <DIV>
        <H2>2. Scope</H2>
        <SPAN>
          This policy applies to all Hivoco facilities, data centers, and remote
          offices, including:
        </SPAN>
        <div>
          <LI>Office premises</LI>
          <LI>Data storage locations</LI>
          <LI>Third-party managed facilities</LI>
          <LI>Cloud service provider data centers (AWS, Google Cloud)</LI>
        </div>
      </DIV>

      <DIV>
        <DIV>
          <H2>3. Physical Security Measures</H2>

          <SPAN className={"!font-bold"}>3.1 Access Control Measures</SPAN>

          <div>
            <SPAN className={"!font-bold"}>
              Access Control & Security Personnel:{" "}
            </SPAN>
            <LI>Only authorised personnel have access to the premises</LI>
            <LI>
              Trained security guards monitor key locations and conduct random
              patrols
            </LI>
            <LI>
              Security personnel verify visitor identities and grant access only
              to authorized personnel
            </LI>
          </div>
        </DIV>

        <DIV>
          <H2>3.2 Surveillance and Monitoring</H2>

          <SPAN className={"!font-bold"}>CCTV Surveillance:</SPAN>

          <div>
            <LI>CCTV cameras are installed at all entry/exit points</LI>
            <LI>
              Cameras record 24/7 with footage stored securely for 90 days
            </LI>
          </div>
        </DIV>

        <DIV>
          <H2>3.3 Environmental Controls</H2>

          <SPAN className={"!font-bold"}>Fire Protection:</SPAN>

          <div>
            <LI>Fire suppression systems are installed and tested regularly</LI>
            <LI>Fire drills are conducted quarterly to ensure preparedness</LI>
          </div>

          <SPAN className={"!font-bold"}>Climate Control:</SPAN>

          <div>
            <LI>
              Air Conditioning systems are in place to maintain optimal
              temperature and humidity levels in data storage areas
            </LI>
            <LI>Systems are monitored and maintained regularly</LI>
          </div>
        </DIV>

        <DIV>
          <H2>3.4 Policies and Procedures</H2>

          <SPAN className={"!font-bold"}>Visitor Management:</SPAN>
          <div>
            <LI>
              Visitors are required to register at the reception and must be
              accompanied at all times
            </LI>
            <LI>Visitor logs are maintained and reviewed regularly</LI>
          </div>

          <SPAN className={"!font-bold"}>Clear Desk Policy:</SPAN>
          <div>
            <LI>
              Employees are required to lock away sensitive documents and
              devices when not in use
            </LI>
            <LI>Unattended workstations must be locked and secured</LI>
          </div>
        </DIV>

        <DIV>
          <H2>3.5 Audits and Compliance</H2>

          <SPAN className={"!font-bold"}>Security Audits:</SPAN>
          <div>
            <LI>
              Quarterly audits are conducted to assess compliance with security
              policies and identify areas for improvement
            </LI>
            <LI>Reports are reviewed by senior management</LI>
          </div>

          <SPAN className={"!font-bold"}>Compliance Standards:</SPAN>
          <div>
            <LI>
              Hivoco adheres to ISO 27001 and NIST standards for physical
              security
            </LI>
            <LI>
              Compliance checks are performed annually to ensure alignment with
              regulatory requirements
            </LI>
          </div>
        </DIV>
      </DIV>

      <DIV>
        <H2>4. Reporting Security Incidents</H2>
        <SPAN>
          Employees must report any physical security incidents, such as
          unauthorized access attempts or equipment theft, to the IT Security
          Team at  &nbsp;  <a className="" href="mailto:security@hivoco.com"> security@hivoco.com</a>.
        </SPAN>
      </DIV>

      <DIV>
        <H2>5. Review and Updates</H2>
        <SPAN>
          This policy will be reviewed annually or in response to changes in
          regulatory requirements or operational needs. Updates will be
          communicated to all employees.
        </SPAN>
      </DIV>

      <DIV>
        <div className="flex flex-col ">
          <SPAN className={"!font-semibold"}>Approval:</SPAN>
          <SPAN className={"!font-semibold"}>
            Approved by: Krishna Murari Yadav
          </SPAN>
          <SPAN className={"!font-semibold"}>
            Title: Chief Security Officer{" "}
          </SPAN>
        </div>

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
              <SPAN className={"!font-medium"}>
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
            <SPAN className={"!font-semibold"}>SUBMIT</SPAN>
          </button>
        </div>
      </DIV>
    </div>
  );
};

export default PhysicalSecurityPolicy;
