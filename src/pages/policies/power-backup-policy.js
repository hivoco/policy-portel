import React, { useState } from "react";
import DIV from "@/Elements/DIV";
import H2 from "@/Elements/H2";
import LI from "@/Elements/LI";
import SPAN from "@/Elements/SPAN";
import { useRouter } from "next/router";

const PowerBackupPolicy = ({policyName="Hivoco Power Backup Policy"}) => {
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
      <H2>Hivoco Power Backup Policy</H2>
      <div className="flex flex-col">
        <SPAN>Version: 1.0</SPAN>
        <SPAN>Owner: Chief Security Officer (CSO)</SPAN>
      </div>

      <DIV>
        <H2>1. Purpose</H2>
        <SPAN>
          The purpose of this policy is to outline Hivoco's power backup
          arrangements to ensure business continuity, protect critical
          operations, and safeguard data during power outages or fluctuations.
        </SPAN>
      </DIV>

      <DIV>
        <H2>2. Scope</H2>
        <SPAN>This policy applies to all Hivoco facilities, including:</SPAN>
        <div>
          <LI>Corporate offices</LI>
          <LI>Remote locations</LI>
          <LI>Third-party hosted environments</LI>
        </div>
      </DIV>

      <DIV>
        <H2>3. Power Backup Solutions</H2>
        <SPAN className="!font-bold">
          3.1 Uninterruptible Power Supply (UPS)
        </SPAN>
        <div>
          <LI>
            UPS systems provide immediate short-term power during outages to
            prevent data loss and equipment damage
          </LI>
          <LI>
            Installed at critical workstations, network infrastructure, and
            server rooms
          </LI>
          <LI>
            Regular maintenance and battery health checks are conducted
            quarterly
          </LI>
        </div>

        <SPAN className="!font-bold">3.2 Inverters</SPAN>
        <div>
          <LI>
            Inverters are used to convert stored battery power into AC
            electricity for essential systems
          </LI>
          <LI>
            Installed in office premises to support critical loads, including
            lighting, ventilation, and essential computing resources
          </LI>
          <LI>
            The system is designed for an automatic switchover in case of power
            failure
          </LI>
        </div>

        <SPAN className="!font-bold">3.3 Battery Backup Systems</SPAN>
        <div>
          <LI>
            Deployed to support key infrastructure elements such as security
            systems, emergency lighting, and communication equipment
          </LI>
          <LI>
            Battery health is monitored continuously to ensure optimal
            performance
          </LI>
          <LI>
            Provides immediate backup during power failures and supports UPS
            systems
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>4. Monitoring and Maintenance</H2>
        <SPAN>
          To ensure the effectiveness of power backup systems, Hivoco has
          implemented the following monitoring and maintenance procedures:
        </SPAN>
        <div>
          <SPAN className={"!font-bold"}>Regular Monitoring: </SPAN>

          <LI>
            Regular monitoring is done to track UPS performance in real-time
          </LI>
          <LI>Alerts sent to IT and facilities teams for proactive response</LI>
        </div>

        <div>
          <SPAN className={"!font-bold"}>Routine Maintenance:</SPAN>

          <LI>
            UPS battery replacements every 3 years or as per manufacturer
            recommendations.
          </LI>
          <LI>Inverter system checks conducted bi-annually.</LI>
        </div>

        <div>
          <SPAN className={"!font-bold"}>Incident Reporting:</SPAN>

          <LI>
            All power failures and system switchovers are logged and analyzed
            for continuous improvement.
          </LI>
          <LI>A root cause analysis is performed for any prolonged outages.</LI>
        </div>
      </DIV>
      <DIV>
        <H2>5. Roles and Responsibilities</H2>
        <div>
          <SPAN className={"!font-bold"}>Facilities Management Team: </SPAN>
          <LI>
            Responsible for the installation, maintenance, and readiness of
            power backup systems.
          </LI>
          <LI>Ensure compliance with safety and environmental regulations.</LI>
        </div>

        <div>
          <SPAN className={"!font-bold"}>IT Department: </SPAN>
          <LI>Monitor power continuity for critical IT infrastructure.</LI>
          <LI>
            Coordinate with facilities for timely maintenance and upgrades.
          </LI>
        </div>

        <div>
          <SPAN className={"!font-bold"}>Employees: </SPAN>
          <LI>
            Report any observed power fluctuations or outages to IT Support.
          </LI>
          <LI>Follow guidelines on safe usage of power backup systems.</LI>
        </div>
      </DIV>

      <DIV>
        <H2>6. Compliance and Safety</H2>

        <SPAN>
          Hivoco ensures compliance with relevant safety standards and
          regulatory requirements, including:
        </SPAN>

        <div>
          <LI>Occupational Health and Safety (OHS) guidelines.</LI>
          <LI>Local electrical codes and regulations.</LI>
          <LI>
            Manufacturer recommendations for equipment operation and
            maintenance.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>7. Business Continuity Integration</H2>

        <SPAN>
          The power backup policy is integrated into Hivoco’s broader Business
          Continuity Plan (BCP) to ensure:
        </SPAN>
        <div>
          <LI>Defined escalation procedures in the event of power failure.</LI>
          <LI>Clear communication channels to notify stakeholders.</LI>
          <LI>Immediate action plans to minimize downtime.</LI>
        </div>
      </DIV>

      <DIV>
        <H2>8. Review and Updates</H2>
        <SPAN>
        This policy will be reviewed annually or in response to major infrastructure changes. All updates will be communicated to stakeholders and employees.
        </SPAN>
      </DIV>

      <DIV>
        <H2>9. Contact Information</H2>
        <SPAN>
          For any power backup-related concerns, contact the Facilities
          Management Team at
          <a href="mailto:facilities@hivoco.com"> facilities@hivoco.com</a>.
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

export default PowerBackupPolicy;
