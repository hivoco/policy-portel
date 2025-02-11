import React, { useState } from "react";
import DIV from "@/Elements/DIV";
import H2 from "@/Elements/H2";
import LI from "@/Elements/LI";
import SPAN from "@/Elements/SPAN";
import { useRouter } from "next/router";

const SystemAcquisitionPolicy = ({
  policyName = "Hivoco System Acquisition, Development, and Maintenance Policy",
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
      <H2>Hivoco System Acquisition, Development, and Maintenance Policy</H2>
      <div className="flex flex-col">
        <SPAN>Version: 1.0</SPAN>
        <SPAN>Owner: Chief Security Officer (CSO)</SPAN>
      </div>

      <DIV>
        <H2>1. Purpose</H2>
        <SPAN>
          The purpose of this policy is to ensure that security is integrated
          into the acquisition, development, and ongoing maintenance of Hivoco's
          information systems, ensuring compliance with best practices and
          regulatory requirements.
        </SPAN>
      </DIV>

      <DIV>
        <H2>2. Scope</H2>
        <SPAN>This policy applies to all Hivoco systems, including:</SPAN>

        <div>
          <LI>Applications (internal and customer-facing)</LI>
          <LI>Databases</LI>
          <LI>IT infrastructure (cloud and on-premises)</LI>
          <LI>Third-party vendor software</LI>
        </div>

        <SPAN>
          It covers all stages of the system lifecycle, including planning,
          acquisition, development, deployment, maintenance, and
          decommissioning.
        </SPAN>
      </DIV>

      <DIV>
        <H2>3. Security Requirements Analysis and Specification</H2>
        <div>
          <LI>
            Security requirements shall be identified and documented for all
            systems during the acquisition and development phases.
          </LI>
          <LI>
            A formal Risk Assessment will be conducted to identify potential
            vulnerabilities and define appropriate mitigation measures.
          </LI>
          <LI>
            Compliance with regulatory requirements (e.g., GDPR, ISO 27001) is
            mandatory during system design.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>4. Secure Development Practices</H2>
        <SPAN>
          Hivoco follows secure coding and development best practices,
          including:
        </SPAN>

        <div>
          <SPAN>Secure Software Development Lifecycle (SSDLC):</SPAN>

          <LI>Threat modeling and risk assessments.</LI>
          <LI>Secure code reviews and automated vulnerability scanning.</LI>
          <LI>Use of secure frameworks and libraries.</LI>
        </div>

        <div>
          <SPAN>Development Controls: </SPAN>

          <LI>
            Separation of development, testing, and production environments.
          </LI>
          <LI>Version control and audit trails for all code changes.</LI>
          <LI>Secure handling of sensitive data using encryption.</LI>
        </div>
      </DIV>

      <DIV>
        <H2>5. Change Control and Release Management</H2>

        <SPAN>
          All system changes must go through a formal Change Management Process,
          including:
        </SPAN>

        <div>
          <LI>Risk assessment and impact analysis.</LI>
          <LI>Review and approval by relevant stakeholders.</LI>
          <LI>Testing and validation in a controlled environment.</LI>
          <LI>Documentation of changes and rollback procedures.</LI>
        </div>
        <SPAN>
          No changes shall be made to production systems without proper
          authorization.
        </SPAN>
      </DIV>

      <DIV>
        <H2>6. Ongoing Maintenance and Monitoring</H2>

        <div>
          <SPAN>Regular Security Patching: </SPAN>

          <LI>
            Critical security patches will be applied within 7 days of release.
          </LI>
          <LI>
            Continuous monitoring of system logs and alerts for unauthorized
            activities.
          </LI>
        </div>

        <div>
          <SPAN>Security Monitoring:</SPAN>

          <LI>
            Continuous monitoring of system logs and alerts for unauthorized
            activities.
          </LI>
          <LI>Automated tools for threat detection and anomaly detection.</LI>
          <LI>
            Security audits conducted quarterly to identify and address
            vulnerabilities.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>7. System Decommissioning</H2>
        <div>
          <LI>
            Secure decommissioning procedures must be followed to ensure proper
            removal and disposal of retired systems.
          </LI>
          <LI>
            Data must be securely erased using approved methods to prevent
            unauthorized access.
          </LI>
          <LI>
            A decommissioning report must be generated and stored for audit
            purposes.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>8. Outsourced Development</H2>

        <div>
          <SPAN>
            When system development is outsourced, the following controls must
            be in place:
          </SPAN>
          <LI>
            Security requirements must be included in contracts with vendors.
          </LI>
          <LI>
            Regular security assessments and compliance checks must be
            conducted.
          </LI>
          <LI>
            Confidentiality and data protection agreements must be signed by
            third parties.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>9. Documentation and Evidence </H2>

        <div>
          <SPAN>
            The following records will be maintained to demonstrate compliance
            with this policy:
          </SPAN>
          <LI>Security requirement specifications.</LI>
          <LI>Risk assessment reports.</LI>
          <LI>Change management records.</LI>
          <LI>Vulnerability scan and audit reports.</LI>
          <LI>Incident response records.</LI>
        </div>
      </DIV>

      <DIV>
        <H2>10. Compliance and Review</H2>
        <div>
          <LI>
            Regular internal and external audits will be conducted to assess
            compliance.
          </LI>
          <LI>
            This policy will be reviewed annually or in response to significant
            changes in Hivoco's IT environment.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>11. Contact Information</H2>
        <SPAN>
          For any inquiries related to data backup and management, please
          contact the IT Security Team at{" "}
          <a href="mailto:security@hivoco.com">security@hivoco.com</a>.
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

export default SystemAcquisitionPolicy;
