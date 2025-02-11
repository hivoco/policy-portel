import React, { useState } from "react";
import DIV from "@/Elements/DIV";
import H2 from "@/Elements/H2";
import LI from "@/Elements/LI";
import SPAN from "@/Elements/SPAN";
import { useRouter } from "next/router";

const QuarterlySecurityComplianceReviewPolicy = ({
  policyName = "Hivoco Quarterly Security Compliance Review Policy",
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
      <H2>Hivoco Quarterly Security Compliance Review Policy</H2>
      <div className="flex flex-col">
        <SPAN>Version: 1.0</SPAN>
        <SPAN>Owner: Chief Security Officer (CSO)</SPAN>
      </div>

      <DIV>
        <H2>1. Purpose</H2>
        <SPAN>
          This policy outlines Hivoco's commitment to conducting quarterly
          security reviews and continuous monitoring of applications, databases,
          servers, and network infrastructure to ensure compliance with industry
          security standards and best practices. These measures help safeguard
          client data and meet contractual obligations.
        </SPAN>
      </DIV>

      <DIV>
        <H2>2. Scope</H2>
        <SPAN>
          The quarterly security review process applies to the following IT
          assets used in providing services to clients:
        </SPAN>
        <div>
          <LI>Applications (web and desktop)</LI>
          <LI>Databases (SQL, NoSQL, and cloud-based databases)</LI>
          <LI>Servers (on-premises and cloud infrastructure)</LI>
          <LI>Network infrastructure (firewalls, routers, switches, VPNs)</LI>
          <LI>
            Endpoint devices (laptops and desktops used for client services)
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>3. Security Review Process</H2>

        <SPAN className="!font-bold">3.1 Review and Monitoring Activities</SPAN>

        <div>
          <SPAN>
            Hivoco conducts the following activities as part of the quarterly
            review:
          </SPAN>

          <div className="flex flex-col gap-5">
            <div>
              <SPAN className="!font-bold">Patch Management Review:</SPAN>

              <LI>
                Operating systems, middleware, and applications are reviewed to
                ensure timely application of critical patches.
              </LI>
              <LI>Compliance with client patching standards is verified.</LI>
            </div>

            <div>
              <SPAN className="!font-bold">
                Configuration Compliance Checks :
              </SPAN>

              <LI>
                Systems are checked against CIS Benchmarks and NIST hardening
                guidelines.
              </LI>
              <LI>Deviations are documented and corrected as per policy.</LI>
            </div>

            <div>
              <SPAN className="!font-bold">Access Control Audit:</SPAN>

              <LI>
                Review of user access privileges to applications and databases
                to ensure the principle of least privilege.
              </LI>
              <LI>Immediate revocation of unnecessary access.</LI>
            </div>
          </div>
        </div>
      </DIV>

      <DIV>
        <H2>4. Compliance and Reporting</H2>

        <SPAN className="!font-bold">4.1 Documentation and Evidence</SPAN>
        <div>
          <SPAN>
            Hivoco maintains the following documentation as evidence of
            compliance:
          </SPAN>

          <div className="flex flex-col gap-4">
            <div>
              <SPAN className="!font-bold">
                Quarterly Security Review Reports:
              </SPAN>
              <div>
                <LI>Overview of security assessments conducted</LI>
                <LI>Identified risks and their remediation status</LI>
                <LI>Compliance percentage and improvement recommendations</LI>
              </div>
            </div>

            <div>
              <SPAN className="!font-bold">
                Patch and Vulnerability Reports:
              </SPAN>
              <div>
                <LI>Lists of patched and pending vulnerabilities</LI>
                <LI>Remediation timelines and accountability</LI>
              </div>
            </div>

            <div>
              <SPAN className="!font-bold">Change Management Records:</SPAN>
              <div>
                <LI>Approved and implemented configuration changes</LI>
              </div>
            </div>

            <div>
              <SPAN className="!font-bold">Access Control Review Logs:</SPAN>
              <div>
                <LI>Records of user access adjustments and approvals</LI>
              </div>
            </div>

            <div>
              <SPAN className="!font-bold">Incident Reports:</SPAN>
              <div>
                <LI>
                  Details of any security incidents identified during the review
                </LI>
              </div>
            </div>
          </div>
        </div>
      </DIV>

      <DIV>
        <H2>5. Roles and Responsibilities</H2>
        <div className="flex flex-col gap-4">
          <SPAN className="!font-bold">Security Operations Team:</SPAN>
          <div>
            <LI>Conduct quarterly assessments and report findings.</LI>
            <LI>Implement remediation measures as per security policies.</LI>
            <LI>Review and validate security reports.</LI>
            <LI>Ensure adherence to compliance standards.</LI>
          </div>

          <SPAN className="!font-bold">Infrastructure Team:</SPAN>
          <div>
            <LI>Ensure patching and configuration hardening compliance.</LI>
            <LI>Provide technical support during remediation.</LI>
          </div>

          <SPAN className="!font-bold">Management Team:</SPAN>
          <div>
            <LI>
              Review quarterly reports and approve necessary security
              investments.
            </LI>
          </div>
        </div>
      </DIV>

      <DIV>
        <H2>6. Monitoring and Continuous Improvement</H2>
        <div>
          <LI>
            Security audits are conducted to identify process improvement areas.
          </LI>
          <LI>
            Lessons learned from quarterly reviews are incorporated into future
            policies.
          </LI>
          <LI>
            Feedback is gathered from stakeholders to align with evolving
            security expectations.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>7. Review and Updates</H2>
        <SPAN>
          This policy will be reviewed annually or in response to changes in
          compliance requirements.
        </SPAN>
      </DIV>

      <DIV>
        <H2>8. Contact Information</H2>
        <SPAN>
          For further inquiries regarding this policy, contact the IT Security
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

export default QuarterlySecurityComplianceReviewPolicy;
