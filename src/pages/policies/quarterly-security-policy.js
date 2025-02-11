import React, { useState } from "react";
import DIV from "@/Elements/DIV";
import H2 from "@/Elements/H2";
import LI from "@/Elements/LI";
import SPAN from "@/Elements/SPAN";
import { useRouter } from "next/router";

const QuarterlySecurityReviewPolicy = ({
  policyName = "Hivoco Quarterly Security Review Policy",
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
      <H2>Hivoco Quarterly Security Review Policy</H2>
      <div className="flex flex-col">
        <SPAN>Version: 1.0</SPAN>
        <SPAN>Owner: Chief Security Officer (CSO)</SPAN>
      </div>

      <DIV>
        <H2>1. Purpose</H2>
        <SPAN>
          The purpose of this policy is to establish a structured approach for
          conducting quarterly security reviews of desktops and laptops used to
          provide services to Hivoco's clients. These reviews ensure that all
          antivirus signatures and operating system (OS) patches are up to date,
          minimizing security risks and ensuring compliance with industry
          security standards.
        </SPAN>
      </DIV>

      <DIV>
        <H2>2. Scope</H2>
        <SPAN>
          This policy applies to all desktops, laptops, and other endpoint
          devices used for client projects, whether managed directly by Hivoco
          or provided by third-party service providers. The scope includes but
          is not limited to:
        </SPAN>
        <div>
          <LI>Windows and macOS operating systems</LI>
          <LI>Antivirus and endpoint protection software</LI>
          <LI>Security patches and updates</LI>
          <LI>Compliance with industry security requirements</LI>
        </div>
      </DIV>

      <DIV>
        <H2>3. Quarterly Security Review Process</H2>

        <SPAN className="!font-bold">3.1 Monitoring</SPAN>
        <div>
          <LI>
            Monitoring teams notify IT teams of outdated antivirus signatures or
            missing patches.
          </LI>
          <LI>
            Compliance dashboards provide real-time insights into endpoint
            security posture.
          </LI>
        </div>

        <SPAN className="!font-bold">3.2 Scheduled Security Reviews</SPAN>
        <div>
          <LI>
            Security reviews are conducted every quarter (Q1, Q2, Q3, Q4) by the
            IT Security Team.
          </LI>
          <LI>Each review includes:</LI>
          <div className="ml-6">
            <LI>Verification of antivirus definition updates.</LI>
            <LI>
              Assessment of OS patch levels against vendor-recommended updates.
            </LI>
            <LI>Evaluation of endpoint compliance with security baselines.</LI>
          </div>
        </div>

        <SPAN className="!font-bold">3.3 Remediation Plan</SPAN>
        <div>
          <LI>
            Devices found to be non-compliant are subject to immediate
            remediation.
          </LI>
          <LI>
            Non-compliance reports are escalated to the IT Security Manager for
            further action.
          </LI>
          <LI>
            Affected users are informed of corrective actions and given a
            timeline to resolve issues.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>4. Evidence and Documentation</H2>
        <SPAN>
          The following documents and reports serve as evidence of compliance
          with the quarterly security review process:
        </SPAN>
        <div>
          <SPAN className="!font-bold">Quarterly Security Review Reports:</SPAN>
          <div>
            <LI>Review dates and devices assessed</LI>
            <LI>Status of antivirus signatures and OS patches</LI>
            <LI>Identified risks and remediation actions taken</LI>
          </div>
        </div>

        <div>
          <SPAN className="!font-bold">Patch Management Logs:</SPAN>
          <div>
            <LI>Automated logs detailing patch installation status</LI>
            <LI>Confirmation of successful patch deployments</LI>
          </div>
        </div>

        <div>
          <SPAN className="!font-bold">Incident Reports:</SPAN>
          <div>
            <LI>
              Any issues or vulnerabilities identified and addressed during the
              review
            </LI>
          </div>
        </div>

        <div>
          <SPAN className="!font-bold">Compliance Dashboards:</SPAN>
          <div>
            <LI>Real-time compliance status for all managed devices</LI>
          </div>
        </div>
      </DIV>

      <DIV>
        <H2>5. Employee Responsibilities</H2>
        <div>
          <LI>
            Employees must ensure their devices are connected to the corporate
            network for timely updates.
          </LI>
          <LI>
            Any issues with antivirus or OS updates must be reported to the IT
            Helpdesk immediately.
          </LI>
          <LI>
            Employees are required to follow the IT security guidelines related
            to patch management.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>6. Auditing and Compliance Monitoring</H2>
        <div>
          <LI>
            Quarterly internal audits will be conducted to verify adherence to
            the security review process.
          </LI>
          <LI>
            Compliance findings will be reported as part of regulatory
            obligations.
          </LI>
          <LI>
            Corrective actions from audit findings will be implemented within
            agreed timelines.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>7. Review and Updates</H2>
        <SPAN>
          This policy will be reviewed annually or in response to changes in
          regulatory requirements or security mandates.
        </SPAN>
      </DIV>

      <DIV>
        <H2>8. Contact Information</H2>
        <SPAN>
          For any queries related to this policy, please contact the IT Security
          Team at <a href="mailto:security@hivoco.com">security@hivoco.com</a>.
        </SPAN>
      </DIV>

      <DIV>
        <div className="flex flex-col">
          <SPAN className="!font-semibold">Approval:</SPAN>
          <SPAN className="!font-semibold">
            Approved by: Krishna Murari Yadav
          </SPAN>
          <SPAN className="!font-semibold">Title: Chief Security Officer</SPAN>
        </div>
      </DIV>

      <DIV>
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

export default QuarterlySecurityReviewPolicy;
