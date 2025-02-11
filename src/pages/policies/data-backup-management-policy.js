import React, { useState } from "react";
import DIV from "@/Elements/DIV";
import H2 from "@/Elements/H2";
import LI from "@/Elements/LI";
import SPAN from "@/Elements/SPAN";
import { useRouter } from "next/router";

const DataBackupAndManagementPolicy = ({
  policyName = "Hivoco Data Backup and Management Policy",
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
      <H2>Hivoco Data Backup and Management Policy</H2>
      <div className="flex flex-col">
        <SPAN>Version: 1.0</SPAN>
        <SPAN>Owner: Chief Security Officer (CSO)</SPAN>
      </div>

      <DIV>
        <H2>1. Purpose</H2>
        <SPAN>
          The purpose of this policy is to define Hivoco's approach to the
          backup and management of client data to ensure business continuity,
          data integrity, and compliance with industry security standards.
        </SPAN>
      </DIV>

      <DIV>
        <H2>2. Scope</H2>
        <SPAN>
          This policy applies to all client-related data managed by Hivoco
          across various platforms, including cloud services, on-premises
          infrastructure, and third-party data repositories.
        </SPAN>
      </DIV>

      <DIV>
        <H2>3. Backup Responsibilities</H2>
        <SPAN>Hivoco is responsible for ensuring:</SPAN>
        <div>
          <LI>Regular and secure backup of client data.</LI>
          <LI>Encryption of all backups to protect sensitive information.</LI>
          <LI>Secure storage and access control to backup media.</LI>
          <LI>Compliance with data security policies and regulations.</LI>
        </div>
      </DIV>

      <DIV>
        <H2>4. Backup Frequency</H2>
        <SPAN>
          Hivoco follows a comprehensive backup schedule to ensure data
          availability and integrity:
        </SPAN>
        <div className="flex flex-col gap-3">
          <SPAN className="!font-bold">Daily Incremental Backups:</SPAN>
          <div>
            <LI>Captures changes made to data during the day.</LI>
            <LI>Stored securely to allow point-in-time recovery.</LI>
          </div>

          <SPAN className="!font-bold">Weekly Full Backups:</SPAN>
          <div>
            <LI>A complete backup of all client data.</LI>
            <LI>
              Retained for a rolling 12-month period or as per contractual
              obligations.
            </LI>
          </div>

          <SPAN className="!font-bold">Monthly Archival Backups:</SPAN>
          <div>
            <LI>
              Long-term storage of critical data for compliance and audit
              purposes.
            </LI>
            <LI>Retention period as per contractual obligations.</LI>
          </div>
        </div>
      </DIV>

      <DIV>
        <H2>5. Data Encryption</H2>
        <SPAN>
          Hivoco ensures all client data is encrypted during backup operations
          using industry-standard encryption protocols:
        </SPAN>
        <div className="flex flex-col gap-4">
          <SPAN className="!font-bold">Encryption Standards:</SPAN>
          <div>
            <LI>AES-256 encryption for data at rest.</LI>
            <LI>TLS 1.2/1.3 encryption for data in transit.</LI>
          </div>

          <SPAN className="!font-bold">Encryption Key Management:</SPAN>
          <div>
            <LI>
              Secure key management systems (AWS KMS, GCP Cloud KMS) are used.
            </LI>
            <LI>
              Access to encryption keys is limited to authorized personnel.
            </LI>
          </div>
        </div>
      </DIV>

      <DIV>
        <H2>6. Backup Storage Locations</H2>
        <SPAN>
          Hivoco securely stores backup media in the following locations:
        </SPAN>
        <div className="flex flex-col gap-4">
          <SPAN className="!font-bold">Primary Storage:</SPAN>
          <div>
            <LI>
              Encrypted cloud storage solutions (AWS S3, Google Cloud Storage)
              with multi-region replication.
            </LI>
            <LI>On-premises secure storage with restricted access.</LI>
          </div>

          <SPAN className="!font-bold">Off-Site Storage:</SPAN>
          <div>
            <LI>
              Backup tapes (if applicable) are stored in off-site,
              climate-controlled, access-controlled facilities.
            </LI>
            <LI>
              Off-site locations are audited periodically for compliance with
              physical security requirements.
            </LI>
          </div>
        </div>
      </DIV>

      <DIV>
        <H2>7. Backup Monitoring and Testing</H2>
        <SPAN>To ensure the reliability of backups, Hivoco performs:</SPAN>
        <div className="flex flex-col gap-4">
          <SPAN className="!font-bold">Automated Backup Monitoring:</SPAN>
          <div>
            <LI>
              Regular monitoring of backup jobs using centralized management
              tools.
            </LI>
            <LI>Alerts for backup failures and immediate corrective action.</LI>
          </div>

          <SPAN className="!font-bold">Periodic Backup Testing:</SPAN>
          <div>
            <LI>
              Monthly data restoration tests to verify data integrity and
              accessibility.
            </LI>
            <LI>
              Test results are documented and shared with stakeholders upon
              request.
            </LI>
          </div>
        </div>
      </DIV>

      <DIV>
        <H2>8. Compliance and Audit</H2>
        <SPAN>
          Hivoco conducts regular audits to ensure compliance with data
          protection requirements and industry best practices:
        </SPAN>
        <div>
          <LI>
            Quarterly internal audits to review backup processes and security
            measures.
          </LI>
          <LI>
            Annual third-party audits to assess adherence to compliance
            standards such as ISO 27001 and GDPR.
          </LI>
          <LI>
            Documentation of all backup activities for regulatory and
            contractual reporting.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>9. Incident Response for Backup Failures</H2>
        <SPAN>
          In the event of a backup failure, Hivoco follows a structured incident
          response process:
        </SPAN>
        <div>
          <LI>Incident logged and escalated to IT Security.</LI>
          <LI>Root cause analysis conducted to prevent recurrence.</LI>
          <LI>
            Immediate notification to stakeholders as per contractual
            obligations.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>10. Review and Updates</H2>
        <SPAN>
          This policy is reviewed annually or whenever significant changes occur
          in client requirements or Hivoco’s infrastructure.
        </SPAN>
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

export default DataBackupAndManagementPolicy;
