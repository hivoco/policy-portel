import React, { useState } from "react";
import DIV from "@/Elements/DIV";
import H2 from "@/Elements/H2";
import LI from "@/Elements/LI";
import SPAN from "@/Elements/SPAN";
import { useRouter } from "next/router";

const DataEncryptionPolicy = ({
  policyName = "Hivoco Data Encryption Policy",
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
      <H2>Hivoco Data Encryption Policy</H2>
      <div className="flex flex-col">
        <SPAN>Version: 1.0</SPAN>
        <SPAN>Owner: Chief Security Officer (CSO)</SPAN>
      </div>

      <DIV>
        <H2>1. Purpose</H2>
        <SPAN>
          The purpose of this policy is to establish guidelines for the
          encryption of sensitive and personal customer data at Hivoco to ensure
          confidentiality, integrity, and compliance with industry best
          practices and regulatory requirements.
        </SPAN>
      </DIV>

      <DIV>
        <H2>2. Scope</H2>
        <SPAN>
          This policy applies to all sensitive and personal data collected,
          stored, processed, and transmitted by Hivoco across:
        </SPAN>
        <div>
          <LI>Cloud platforms (AWS, Google Cloud)</LI>
          <LI>On-premises servers and storage devices</LI>
          <LI>Endpoints such as desktops, laptops, and mobile devices</LI>
          <LI>Communication channels (email, file transfers, APIs)</LI>
        </div>
      </DIV>

      <DIV>
        <H2>3. Encryption Standards</H2>
        <SPAN>
          Hivoco utilizes recognized encryption methods to protect sensitive and
          personal customer data, ensuring compliance with industry standards
          such as ISO 27001, GDPR, and NIST guidelines.
        </SPAN>

        <div>
          <SPAN>3.1 Data at Rest</SPAN>
          <LI>Encryption Algorithm: AES-256 (Advanced Encryption Standard)</LI>
          <LI>
            Key Management: Encrypted data is secured using centralized key
            management solutions such as AWS KMS and Google Cloud KMS.
          </LI>
          <SPAN>
            Storage Locations:
            <div className="ml-6">
              <LI>
                Cloud storage (S3, Google Cloud Storage) with server-side
                encryption enabled.
              </LI>
              <LI>
                Cloud storage (S3, Google Cloud Storage) with server-side
                encryption enabled.
              </LI>
            </div>
          </SPAN>
          <LI>
            Access Control: Encryption keys are accessible only to authorized
            personnel with role-based access controls (RBAC).
          </LI>
        </div>

        <div>
          <SPAN>3.2 Data in Transit</SPAN>
          <LI>
            Encryption Protocols: TLS 1.2/1.3 and IPSec VPNs are used to secure
            data transmitted over public and private networks.
          </LI>
          <SPAN>
            Secure Communication Channels:
            <div className="ml-6">
              <LI>HTTPS encryption for web-based applications.</LI>
              <LI>Encrypted email communication via PGP or S/MIME.</LI>
            </div>
          </SPAN>{" "}
          <LI>
            End-to-End Encryption (E2EE): Applied for sensitive customer
            communications where applicable.
          </LI>
        </div>

        <div>
          <SPAN>3.3 Data in Uset</SPAN>

          <LI>
            Hivoco applies runtime encryption techniques such as confidential
            computing and hardware security modules (HSMs) to protect data
            during processing.
          </LI>
          <LI>
            Secure enclaves are leveraged to process sensitive data in a trusted
            execution environment.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>4. Key Management</H2>
        <SPAN>
          Encryption keys are stored and managed using secure key management
          solutions with the following practices:
        </SPAN>
        <div>
          <LI>Regular key rotation in compliance with security policies.</LI>
          <LI>Key usage logging and monitoring.</LI>
          <LI>Separation of duties to prevent unauthorized key access.</LI>
        </div>
      </DIV>

      <DIV>
        <H2>5. Compliance and Regulatory Alignment</H2>
        <div>
          <SPAN>
            Hivoco’s encryption practices comply with the following regulations
            and standards:
          </SPAN>
          <div>
            <LI>
              General Data Protection Regulation (GDPR) – Ensuring encryption of
              personal data to meet regulatory requirements.
            </LI>
            <LI>
              Payment Card Industry Data Security Standard (PCI-DSS) –
              Protecting payment-related information.
            </LI>
            <LI>
              Health Insurance Portability and Accountability Act (HIPAA) –
              Securing healthcare-related sensitive data.
            </LI>
            <LI>
              ISO/IEC 27001 – Implementing encryption as part of an information
              security management system.
            </LI>
          </div>
        </div>
      </DIV>

      <DIV>
        <H2>6. Monitoring and Auditing</H2>
        <div>
          <LI>
            Regular audits of encryption practices are conducted to ensure
            compliance with security policies and evolving regulatory
            requirements.
          </LI>
          <LI>
            Automated monitoring solutions track encryption events and notify
            security teams of any anomalies.
          </LI>
          <LI>
            Annual penetration tests assess the effectiveness of encryption
            measures.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>7. Incident Response</H2>
        <SPAN>
          In case of a data breach, Hivoco follows an incident response plan
          that includes:
        </SPAN>
        <div>
          <LI>Immediate investigation of encryption failures.</LI>
          <LI>
            Reporting to regulatory authorities and affected stakeholders as
            required by law.
          </LI>
          <LI>
            Implementation of corrective actions to strengthen encryption
            controls.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>8. Employee Responsibilities</H2>
        <div>
          <LI>
            Employees handling sensitive data must adhere to encryption
            policies.
          </LI>
          <LI>
            Proper training and awareness sessions will be conducted to educate
            staff on encryption practices.
          </LI>
          <LI>
            Data encryption guidelines must be followed when transferring files
            externally.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>9. Review and Updates</H2>
        <SPAN>
          This policy is reviewed annually or when significant changes occur in
          technology, regulations, or business operations.
        </SPAN>
      </DIV>

      <DIV>
        <H2>10. Contact Information</H2>
        <SPAN>
          For inquiries related to data encryption practices, please contact the
          IT Security Team at{" "}
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

export default DataEncryptionPolicy;
