import React, { useState } from "react";
import DIV from "@/Elements/DIV";
import H2 from "@/Elements/H2";
import LI from "@/Elements/LI";
import SPAN from "@/Elements/SPAN";
import { useRouter } from "next/router";

const LogicalAccessPolicy = ({
  policyName = "Hivoco Logical Access Management Policy",
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const route = useRouter();

  const updatePolicy = async () => {
    const { employeeId } = JSON.parse(sessionStorage.getItem("userData"));

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

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const result = await response.json();
      alert("Policy accepted successfully");
      route.push("/company-policy");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="pt-14 px-14">
      <H2>Hivoco Logical Access Management Policy</H2>
      <div className="flex flex-col">
        <SPAN>Version: 1.0</SPAN>
        <SPAN>Owner: Chief Security Officer (CSO)</SPAN>
      </div>

      <DIV>
        <H2>1. Purpose</H2>
        <SPAN>
          The purpose of this policy is to ensure that Hivoco follows a
          structured and secure approach to managing logical access to
          information systems, applications, and data. The policy establishes
          controls for granting, modifying, and revoking access to prevent
          unauthorized access and ensure compliance with industry standards and
          regulatory requirements.
        </SPAN>
      </DIV>

      <DIV>
        <H2>2. Scope</H2>
        <SPAN>
          This policy applies to all employees, contractors, and third-party
          users who require access to Hivoco's systems, including but not
          limited to:
        </SPAN>

        <div>
          <LI>Business applications.</LI>
          <LI>Cloud-based platforms (AWS, Google Cloud, etc.).</LI>
          <LI>Internal databases.</LI>
          <LI>Email and communication.</LI>
        </div>
      </DIV>

      <DIV>
        <H2>3. Logical Access Management Process</H2>
        <SPAN className="">
          Hivoco follows the Joiner, Mover, Leaver (JML) process, which ensures
          access is granted, modified, and revoked in a timely and secure
          manner.
        </SPAN>

        <div>
          <SPAN className="!font-bold mt-4">
            3.1 Granting Logical Access for New Joiners{" "}
          </SPAN>

          <LI>
            Access is provisioned only after HR records the employee’s joining
            details and the reporting manager submits an access request.
          </LI>
          <LI>
            Access requests must go through an approval workflow involving IT
            Security and the Data Owner.
          </LI>
          <LI>
            Access is granted based on the principle of Least Privilege,
            ensuring users have only the minimum level of access required.
          </LI>
          <LI>
            Multi-Factor Authentication (MFA) is enforced for all new user
            accounts.
          </LI>
          <LI>
            A formal acknowledgment of access rights must be signed by the
            employee.
          </LI>
        </div>

        <div>
          <SPAN className="!font-bold mt-4">Controls:</SPAN>

          <div>
            <LI>
              Access provisioning must be completed within 24 hours of the
              joiner’s start date.
            </LI>
            <LI>
              Automated onboarding tools such as Identity and Access Management
              (IAM) systems are used to streamline the process.
            </LI>
          </div>
        </div>

        <div>
          <SPAN className="!font-bold mt-4">
            3.2 Modification of Logical Access for Existing Users
          </SPAN>
          <LI>
            Any modification in user access must be requested via an official
            approval workflow.
          </LI>
          <LI>
            Changes are reviewed and approved by the user’s reporting manager
            and the Data Owner before implementation.
          </LI>
          <LI>
            Periodic access reviews are conducted to ensure ongoing compliance
            with security policies.
          </LI>
        </div>

        <div>
          <SPAN className="!font-bold mt-4">Controls:</SPAN>
          <LI>
            Access modification requests must be processed within 48 hours of
            approval.
          </LI>
          <LI>Logs of access changes are maintained and audited quarterly.</LI>
        </div>

        <SPAN className="!font-bold mt-4">
          3.3 Termination of Logical Access for Leavers
        </SPAN>
        <div>
          <LI>
            When an employee resigns or is terminated, HR must initiate the
            deactivation request immediately.
          </LI>
          <LI>
            The IT team ensures all access (network, applications, email, cloud
            systems) is revoked within 24 hours of the employee’s departure.
          </LI>
          <LI>
            A checklist for access decommissioning is followed, ensuring no
            residual access is left.
          </LI>
          <LI>
            Devices assigned to the user must be returned and audited before
            termination is completed.
          </LI>
        </div>

        <SPAN className="!font-bold mt-4">Controls:</SPAN>
        <div>
          <LI>
            Offboarding procedures include disabling user credentials, revoking
            VPN access, and removing access to cloud services.
          </LI>
          <LI>
            Exit audits are conducted to validate compliance with data security
            measures.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>4. Monitoring and Auditing</H2>
        <div>
          <LI>
            Offboarding procedures include disabling user credentials, revoking
            VPN access, and removing access to cloud services.
          </LI>
          <LI>
            Exit audits are conducted to validate compliance with data security
            measures.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>5. Employee Responsibilities</H2>
        <div>
          <LI>
            Employees must use company-provided credentials only for authorized
            business purposes.
          </LI>
          <LI>
            Employees are responsible for reporting any access issues or
            suspicious activity to IT Security.
          </LI>
          <LI>Sharing of login credentials is strictly prohibited.</LI>
        </div>
      </DIV>

      <DIV>
        <H2>6. Compliance and Enforcement</H2>
        <SPAN>
          Failure to comply with this policy may result in disciplinary action,
          including termination of employment and legal consequences. This
          policy is aligned with the following industry standards and
          regulations:
        </SPAN>
        <div>
          <LI>ISO 27001: Information Security Management.</LI>
          <LI>NIST Cybersecurity Framework.</LI>
          <LI>GDPR Data Protection Requirements.</LI>
        </div>
      </DIV>

      <DIV>
        <H2>7. Review and Updates</H2>
        <SPAN>
          This policy will be reviewed annually or whenever there are
          significant changes in business processes or regulatory requirements.
        </SPAN>
      </DIV>

      <DIV>
        <H2>8. Contact Information</H2>
        <SPAN>
          For any questions or clarifications regarding this policy, please
          contact the IT Security Team at &nbsp;
          <a href="mailto:security@hivoco.com">security@hivoco.com</a>
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

        <div className="flex flex-col items-start gap-12 mt-8">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-black rounded"
            />
            <label className="select-none">
              <SPAN className="!font-medium">
                I acknowledge reading and agreeing to the policy terms.
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

export default LogicalAccessPolicy;
