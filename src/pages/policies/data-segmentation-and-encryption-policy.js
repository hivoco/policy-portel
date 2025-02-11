import React, { useState } from "react";
import DIV from "@/Elements/DIV";
import H2 from "@/Elements/H2";
import LI from "@/Elements/LI";
import SPAN from "@/Elements/SPAN";
import { useRouter } from "next/router";

const DataSegmentationAndEncryptionPolicy = ({
  policyName = "Hivoco Data Segmentation and Encryption Policy",
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
      <H2>Hivoco Data Segmentation and Encryption Policy</H2>
      <div className="flex flex-col">
        <SPAN>Version: 1.0</SPAN>
        <SPAN>Owner: Chief Security Officer (CSO)</SPAN>
      </div>

      <DIV>
        <H2>1. Purpose</H2>
        <SPAN>
          The purpose of this policy is to ensure the logical segregation and
          encryption of client data to prevent intentional or accidental access
          by other tenants within Hivoco's multi-tenant environments. This
          policy aligns with industry best practices and compliance requirements
          to maintain data confidentiality, integrity, and availability.
        </SPAN>
      </DIV>

      <DIV>
        <H2>2. Scope</H2>
        <SPAN>
          This policy applies to all client data processed, stored, and
          transmitted across Hivoco’s infrastructure, including:
        </SPAN>
        <div>
          <LI>Cloud environments (AWS, Google Cloud, Azure)</LI>
          <LI>On-premises storage systems</LI>
          <LI>Network communication channels</LI>
          <LI>Backup and archival storage</LI>
        </div>
      </DIV>

      <DIV>
        <H2>3. Data Segmentation Controls</H2>
        <SPAN>
          Hivoco employs logical segregation techniques to ensure data isolation
          at multiple levels:
        </SPAN>

        <div>
          <SPAN className={"!font-bold"}>3.1 Tenant Isolation</SPAN>
          <LI>
            Each tenant’s data is logically segregated using virtual private
            clouds (VPCs), separate encryption keys, and unique database
            schemas.
          </LI>
          <LI>
            Access controls are enforced using role-based access control (RBAC)
            and attribute-based access control (ABAC).
          </LI>
        </div>

        <div>
          <SPAN className={"!font-bold"}>3.2 Network Segmentation</SPAN>

          <LI>
            Client data traffic is isolated using VLANs, firewalls, and
            dedicated VPN tunnels.
          </LI>
          <LI>
            Micro-segmentation strategies are applied to prevent lateral
            movement within the environment.
          </LI>
        </div>

        <div>
          <SPAN className={"!font-bold"}>3.3 Application-Level Isolation</SPAN>

          <LI>
            Multi-tenant applications are designed with tenant-specific access
            control policies.
          </LI>
          <LI>
            Data partitioning techniques are used to restrict cross-tenant data
            access.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>4. Data Encryption Standards</H2>
        <SPAN>
          Hivoco ensures that client data is encrypted both at rest and in
          transit using industry-leading encryption protocols:
        </SPAN>

        <div>
          <SPAN className={"!font-bold"}>
          4.1 Data at Rest Encryption
          </SPAN>
          <LI>All sensitive data is encrypted using AES-256 encryption.</LI>
          <LI>
            Cloud-based storage (AWS S3, Google Cloud Storage) utilizes
            server-side encryption with customer-managed keys (CMKs).
          </LI>
          <LI>
            Databases leverage Transparent Data Encryption (TDE) to secure
            structured data.
          </LI>
        </div>

        <div>

          <SPAN className={"!font-bold"}>
          4.2 Data in Transit Encryption      
          </SPAN>

          <LI>
            TLS 1.2/1.3 encryption is enforced for all data transmissions.
          </LI>
          <LI>
            End-to-end encryption (E2EE) is applied for sensitive
            communications.
          </LI>
        </div>

        <div>
        <SPAN className={"!font-bold"}>
        4.3 Encryption Key Management
        </SPAN>

          <LI>
            Secure key management solutions (AWS KMS, Azure Key Vault) are used
            to control encryption keys.
          </LI>
          <LI>Regular key rotation and auditing practices are followed.</LI>
        </div>
      </DIV>

      <DIV>
        <H2>5. Access Controls and Monitoring</H2>
        <div>
          <LI>
            Access to client encrypted data is restricted to authorized
            personnel only.
          </LI>
          <LI>
            All access is logged, monitored, and reviewed regularly to detect
            unauthorized activities.
          </LI>
          <LI>
            Automated monitoring solutions (SIEM, CloudTrail, GuardDuty) are in
            place to track data access and security events.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>6. Compliance and Regulatory Requirements</H2>
        <div>
          <LI>General Data Protection Regulation (GDPR)</LI>
          <LI>ISO/IEC 27001:2022</LI>
          <LI>NIST Cybersecurity Framework</LI>
          <LI>Client Data Security Guidelines</LI>
        </div>
      </DIV>

      <DIV>
        <H2>7. Incident Response and Data Breach Management</H2>
        <SPAN>
          In the event of a data breach or unauthorized access, Hivoco follows a
          structured incident response plan:
        </SPAN>
        <div>
          <LI>Immediate containment and forensic investigation.</LI>
          <LI>
            Notification to the client’s security team within the agreed SLA.
          </LI>
          <LI>Implementation of corrective actions to prevent recurrence.</LI>
        </div>
      </DIV>

      <DIV>
        <H2>8. Review and Updates</H2>
        <SPAN>
          This policy will be reviewed annually or when significant changes
          occur in Hivoco’s IT environment or client requirements.
        </SPAN>
      </DIV>

      <DIV>
        <H2>9. Contact Information</H2>
        <SPAN>
          For further details regarding data segmentation and encryption, please
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

export default DataSegmentationAndEncryptionPolicy;
