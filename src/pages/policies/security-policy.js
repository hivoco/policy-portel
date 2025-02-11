import { UserDataContext } from "@/Context/UserDataContext";
import DIV from "@/Elements/DIV";
import H2 from "@/Elements/H2";
import LI from "@/Elements/LI";
import SPAN from "@/Elements/SPAN";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const Header = dynamic(() => import('../../Components/Header'), { ssr: false });

import React, { useState } from "react";

const SecurityPolicy = ({policyName="Hivoco Information Security Policy"}) => {
  const [isChecked, setIsChecked] = useState(false);
  const route=useRouter()


  const updatePolicy = async () => {
    const {employeeId}= JSON.parse(sessionStorage.getItem("userData"))
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
      alert("Policy accepted successfully")
      route.push("/company-policy");
      console.log(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <Header />

      <div className="pt-14 px-14">
        <H2>Hivoco Information Security Policy</H2>

        <DIV>
          <div className="flex flex-col">
            <SPAN>Version: 1.0</SPAN>
            <SPAN> Owner: Chief Security Officer (CSO)</SPAN>
          </div>

          <H2> 1. Purpose </H2>

          <SPAN>
            The purpose of this policy is to establish the minimum standards for
            information security within Hivoco to ensure the confidentiality,
            integrity, and availability of our data and systems. This policy
            applies to all employees, contractors, and third parties who have
            access to Hivoco&apos;s information assets across all clients.
          </SPAN>
        </DIV>

        <DIV>
          <H2>2. Scope </H2>
          <SPAN>
            This policy applies to all information assets owned, managed, or
            controlled by Hivoco for all clients, including but not limited to:
          </SPAN>

          <div>
            <LI>IT Infrastructure (hardware, software, and networks)</LI>
            <LI>Customer and Employee Data</LI>
            <LI>Internal and External Communication Systems</LI>
            <LI>Third-party Services (AWS, Google Cloud)</LI>
          </div>
        </DIV>

        <DIV>
          <H2>3. Roles and Responsibilities </H2>
          <SPAN>Executive Management: </SPAN>

          <div>
            <LI>Ensure alignment of security objectives with business goals</LI>
            <LI>
              Provide necessary resources for implementing security controls
            </LI>
            <LI>Approve and endorse security policies</LI>
          </div>

          <SPAN>Information Security Officer (ISO): </SPAN>

          <div>
            <LI>Oversee security strategy and compliance</LI>
            <LI>
              Monitor security incidents and implement mitigation strategies
            </LI>
            <LI>Conduct risk assessments and audits</LI>
          </div>

          <SPAN>Employees and Contractors:</SPAN>

          <div>
            <LI>Adhere to security policies and guidelines</LI>
            <LI>Report security incidents promptly</LI>
            <LI>Protect company-issued devices and credentials</LI>
          </div>
        </DIV>

        <DIV>
          <H2>4. Information Security Objectives </H2>
          <SPAN>Hivoco is committed to:</SPAN>

          <div>
            <LI>Ensuring secure handling and storage of sensitive data</LI>
            <LI>
              Protecting information from unauthorized access, disclosure,
              alteration, or destruction
            </LI>
            <LI>
              Complying with applicable legal, regulatory, and contractual
              requirements
            </LI>
            <LI>Promoting security awareness among employees</LI>
            <LI>
              Implementing industry best practices such as ISO 27001, NIST, and
              CIS controls
            </LI>
          </div>
        </DIV>

        <DIV>
          <H2>5. Access Control</H2>

          <div>
            <LI>
              Access to systems and data will be granted on a least privilege
              basis
            </LI>
            <LI>
              All access requests must be approved by the appropriate manager
              and IT team
            </LI>
            <LI>
              Multi-factor authentication (MFA) is required for accessing
              sensitive systems
            </LI>
            <LI>
              Employee access will be reviewed quarterly, and terminated
              immediately upon exit
            </LI>
          </div>
        </DIV>

        <DIV>
          <H2>6. Data Protection</H2>

          <div>
            <LI>
              All sensitive data must be encrypted in transit and at rest using
              AES-256 encryption
            </LI>
            <LI>
              Regular backups must be conducted and stored securely in AWS/GCP
              with versioning
            </LI>
            <LI>Data classification levels will be defined and enforced</LI>
            <LI>
              Personal data must comply with GDPR and other applicable privacy
              regulations
            </LI>
          </div>
        </DIV>

        <DIV>
          <H2>7. Incident Response</H2>

          <div>
            <LI>
              A formal incident response plan will be maintained and tested
              annually
            </LI>
            <LI>
              All security incidents must be reported to the ISO within 24 hours
            </LI>
            <LI>
              Incident logs must be kept and reviewed periodically to identify
              trends and risks
            </LI>
            <LI>
              Post-incident reviews will be conducted to prevent recurrence
            </LI>
          </div>
        </DIV>

        <DIV>
          <H2>8. IT Asset Management</H2>

          <div>
            <LI>All IT assets must be inventoried and assigned to an owner</LI>
            <LI>
              Unauthorized hardware and software installations are prohibited
            </LI>
            <LI>Regular audits will be conducted to ensure compliance</LI>
          </div>
        </DIV>

        <DIV>
          <H2>9. Network Security</H2>

          <div>
            <LI>
              Firewalls, intrusion detection/prevention systems, and
              anti-malware solutions must be implemented and monitored
            </LI>
            <LI>
              Cloud environments (AWS/GCP) must follow best practices for
              network segmentation and security group policies
            </LI>
            <LI>
              Remote access must be conducted via VPN with appropriate logging
              enabled
            </LI>
          </div>
        </DIV>

        <DIV>
          <H2>10. Security Awareness and Training</H2>

          <div>
            <LI>
              All employees must undergo security training during onboarding and
              annually thereafter
            </LI>
            <LI>
              Phishing simulations will be conducted periodically to assess
              employee vigilance
            </LI>
            <LI>
              Security bulletins will be published regularly to keep employees
              informed
            </LI>
          </div>
        </DIV>

        <DIV>
          <H2>11. Compliance and Audit</H2>

          <div>
            <LI>
              Regular internal and external audits will be conducted to ensure
              compliance with security policies and regulations
            </LI>
            <LI>
              Non-compliance will be addressed through corrective actions and
              potential disciplinary measures
            </LI>
          </div>
        </DIV>

        <DIV>
          <H2>12. Review and Updates</H2>

          <div>
            <LI>
              This policy will be reviewed annually or upon significant changes
              in business or regulatory requirements
            </LI>
            <LI>Any changes will be communicated to all stakeholders</LI>
          </div>
        </DIV>

        <DIV>
          <H2>13. Contact Information</H2>

          <SPAN>
            For any inquiries or concerns regarding this policy, please contact
            the Information Security Officer at security@hivoco.com.
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
    </div>
  );
};

export default SecurityPolicy;
