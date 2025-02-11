import React, { useState } from "react";
import DIV from "@/Elements/DIV";
import H2 from "@/Elements/H2";
import LI from "@/Elements/LI";
import SPAN from "@/Elements/SPAN";
import { useRouter } from "next/router";

const ChangeManagementPolicy = ({
  policyName = "Hivoco Change Management Policy",
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
      <H2>Hivoco Change Management Policy</H2>
      <div className="flex flex-col">
        <SPAN>Version: 1.0</SPAN>
        <SPAN>Owner: Chief Security Officer (CSO)</SPAN>
      </div>

      <DIV>
        <H2>1. Purpose</H2>

        <SPAN>
          The purpose of this policy is to establish a structured approach for
          managing changes to the production environment at Hivoco. This ensures
          that all changes are planned, approved, and implemented with minimal
          disruption to operations and in adherence to regulatory and
          contractual obligations.
        </SPAN>
      </DIV>

      <DIV>
        <H2>2. Scope</H2>
        <SPAN>This policy applies to all changes related to:</SPAN>
        <div>
          <LI>IT systems, applications, and infrastructure.</LI>
          <LI>
            Configuration changes to cloud environments (AWS, Google Cloud).
          </LI>
          <LI>Security updates, patches, and upgrades.</LI>
          <LI>Operational processes impacting business services.</LI>
        </div>
      </DIV>

      <DIV>
        <H2>3. Change Management Process</H2>
        <SPAN>
          Hivoco follows a structured Change Management Process that requires
          prior approval before making any changes in the production
          environment. The process consists of the following key steps:
        </SPAN>
        <SPAN className="!font-bold">3.1 Change Request Submission</SPAN>
        <div>
          <LI>
            All change requests must be documented using the Change Request Form
            (CRF) and submitted to the CSO.
          </LI>
          <LI>The CRF must include:</LI>
          <div className="ml-6">
            <LI>Change description and objectives.</LI>
            <LI>Potential impacts on systems and operations.</LI>
            <LI>Risk assessment and mitigation measures.</LI>
            <LI>Rollback plan in case of failure.</LI>
            <LI>Testing and validation steps.</LI>
          </div>
        </div>

        <SPAN className="!font-bold">3.2 Internal Review and Approval</SPAN>
        <div>
          <LI>
            The change request is reviewed internally by Hivoco's IT, Security,
            and Compliance teams.
          </LI>
          <LI>Approval is required from:</LI>
          <div>
            <LI>Project owner</LI>
            <LI>IT Security lead</LI>
            <LI>Operations manager</LI>
          </div>
          <LI>
            Once approved internally, the change request is submitted for final
            approval where necessary.
          </LI>
        </div>

        <SPAN className="!font-bold">
          3.3 Implementation of Approved Changes
        </SPAN>
        <div>
          <LI>
            Once approval is received, the change is implemented following the
            predefined deployment plan.
          </LI>
          <LI>Implementation includes:</LI>
          <div className="ml-6">
            <LI>Coordination with relevant teams.</LI>
            <LI>Change execution in a controlled and monitored environment.</LI>
            <LI>Real-time monitoring for potential issues.</LI>
          </div>
        </div>

        <SPAN className="!font-bold">3.4 Post-Implementation Review</SPAN>
        <div>
          <LI>
            The change impact is assessed to verify successful implementation.
          </LI>
          <LI>Any issues or deviations are documented and communicated.</LI>
          <LI>
            A final review report is shared, including lessons learned and
            further recommendations.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>4. Change Categories</H2>
        <SPAN>
          Changes are categorized into the following types to determine the
          level of approval required:
        </SPAN>
        <div>
          <LI>
            Standard Changes: Pre-approved, low-risk routine changes (e.g.,
            software patches).
          </LI>
          <LI>
            Normal Changes: Require formal approval before implementation.
          </LI>
          <LI>
            Emergency Changes: Requires expedited approval process and
            post-implementation review.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>5. Roles and Responsibilities</H2>
        <SPAN className="!font-bold">Change Requestor:</SPAN>
        <div>
          <LI>Submits the change request with all required details.</LI>
          <LI>Coordinates with the project and IT teams for implementation.</LI>
        </div>

        <SPAN className="!font-bold">Chief Security Officer (CSO):</SPAN>
        <div>
          <LI>Reviews and approves changes.</LI>
          <LI>Ensures compliance with policies and business objectives.</LI>
          <LI>Evaluates security implications of proposed changes.</LI>
          <LI>Ensures compliance with security best practices.</LI>
        </div>

        <SPAN className="!font-bold">Operations Team:</SPAN>
        <div>
          <LI>Monitors the implementation and reports any anomalies.</LI>
          <LI>Ensures business continuity during change deployment.</LI>
        </div>
      </DIV>

      <DIV>
        <H2>6. Documentation and Evidence</H2>
        <SPAN>
          As part of compliance requirements, the following evidence is
          maintained:
        </SPAN>
        <div>
          <LI>Approved Change Request Forms (CRFs)</LI>
          <LI>Email approvals from stakeholders</LI>
          <LI>Change logs documenting the entire process</LI>
          <LI>Post-implementation review reports</LI>
          <LI>Incident reports (if any issues arise post-implementation)</LI>
        </div>
      </DIV>

      <DIV>
        <H2>7. Monitoring and Compliance</H2>

        <div>
          <LI>
            Regular audits are conducted to ensure adherence to the change
            management policy.
          </LI>
          <LI>
            Non-compliance incidents are reviewed and corrective actions are
            implemented.
          </LI>
          <LI>
            Reports are shared with relevant stakeholders as part of routine
            governance.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>8. Review and Updates</H2>
        <SPAN>
          This policy will be reviewed annually or when significant changes in
          business operations occur. Updates will be communicated to all
          stakeholders.
        </SPAN>
      </DIV>

      <DIV>
        <H2>9. Contact Information</H2>
        <SPAN>
          For any queries regarding this policy, please contact the Change
          Management Team at{" "}
          <a href="mailto:change-management@hivoco.com">
            change-management@hivoco.com
          </a>
          .
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

export default ChangeManagementPolicy;
