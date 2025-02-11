import React, { useState } from "react";
import DIV from "@/Elements/DIV";
import H2 from "@/Elements/H2";
import LI from "@/Elements/LI";
import SPAN from "@/Elements/SPAN";
import { useRouter } from "next/router";

const DataAnonymizationPolicy = ({
  policyName = "Hivoco Data Anonymization Policy",
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
      <H2>Hivoco Data Anonymization Policy</H2>
      <div className="flex flex-col">
        <SPAN>Version: 1.0</SPAN>
        <SPAN>Owner: Chief Security Officer (CSO)</SPAN>
      </div>

      <DIV>
        <H2>1. Purpose</H2>
        <SPAN>
          The purpose of this policy is to ensure the anonymization of
          production data before it is used in testing environments. This
          approach safeguards sensitive and personal information, aligns with
          industry best practices, and complies with data privacy regulations
          such as GDPR, CCPA, and ISO 27001.
        </SPAN>
      </DIV>

      <DIV>
        <H2>2. Scope</H2>
        <SPAN>
          This policy applies to all Hivoco employees, contractors, and
          third-party vendors involved in software development, testing, and
          quality assurance processes. It covers all environments, including but
          not limited to:
        </SPAN>
        <div>
          <LI>Development</LI>
          <LI>Testing</LI>
          <LI>Staging</LI>
          <LI>Quality Assurance (QA)</LI>
        </div>
      </DIV>

      <DIV>
        <H2>3. Data Anonymization Principles</H2>
        <SPAN>
          Hivoco follows the below principles to ensure data privacy and
          security when anonymizing production data:
        </SPAN>
        <div>
          <LI>
            <strong>Minimization:</strong> Only necessary data elements are
            retained for testing purposes.
          </LI>
          <LI>
            <strong>Irreversibility:</strong> Anonymized data cannot be reversed
            to reveal the original information.
          </LI>
          <LI>
            <strong>Consistency:</strong> Anonymization techniques are applied
            uniformly across all datasets.
          </LI>
          <LI>
            <strong>Compliance:</strong> Adherence to regulatory and contractual
            obligations.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>4. Anonymization Techniques</H2>
        <SPAN>
          Hivoco implements the following recognized data anonymization
          techniques to ensure the protection of sensitive production data:
        </SPAN>

        <div>
          <SPAN>4.1 Data Masking</SPAN>
          <LI>
            Replacing sensitive values with pseudonymous or random characters.
          </LI>
          <LI>
            Techniques used include static data masking, dynamic data masking,
            and format-preserving encryption (FPE).
          </LI>
        </div>

        <div>
          <SPAN>4.2 Tokenization</SPAN>
          <LI>
            Sensitive data is replaced with unique tokens that map to the
            original data via a secure lookup table.
          </LI>
          <LI>
            Used primarily for personal identifiers such as names, email
            addresses, and financial data.
          </LI>
        </div>

        <div>
          <SPAN>4.3 Synthetic Data Generation</SPAN>
          <LI>
            Generating artificial datasets that maintain the statistical
            properties of the original data.
          </LI>
          <LI>
            Suitable for machine learning, analytics, and performance testing.
          </LI>
        </div>

        <div>
          <SPAN>4.4 Data Subsetting</SPAN>
          <LI>
            Extracting only necessary portions of production data and applying
            anonymization techniques to reduce risk.
          </LI>
        </div>

        <div>
          <SPAN>4.5 Generalization</SPAN>
          <LI>
            Reducing the precision of data fields (e.g., replacing specific
            dates with month/year).
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>5. Implementation Process</H2>

        <div>
          <SPAN>
            The following steps must be followed to anonymize production data
            before using it in testing environments:
          </SPAN>

          <LI>
            <strong>Identification:</strong> Determine sensitive data elements
            requiring anonymization.
          </LI>
          <LI>
            <strong>Classification:</strong> Classify data based on sensitivity
            levels (e.g., PII, financial, health data).
          </LI>
          <LI>
            <strong>Anonymization:</strong> Apply appropriate anonymization
            techniques as per the selected method.
          </LI>
          <LI>
            <strong>Validation:</strong> Test the anonymized dataset to ensure
            usability while protecting privacy.
          </LI>
          <LI>
            <strong>Approval:</strong> Obtain approval from the Data Protection
            Officer before using data in test environments.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>6. Compliance and Monitoring</H2>

        <div>
          <LI>
            Regular audits will be conducted to ensure compliance with
            anonymization procedures.
          </LI>
          <LI>
            Any unauthorized use of production data in testing will be treated
            as a security incident.
          </LI>
          <LI>
            Compliance with data privacy laws and contractual obligations is
            mandatory.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>7. Roles and Responsibilities</H2>

        <div>
          <SPAN>
            <strong>Data Protection Officer (DPO):</strong>
          </SPAN>
          <LI>Ensure compliance with data anonymization policies.</LI>
          <LI>Approve data anonymization techniques and approaches.</LI>
        </div>

        <div>
          <SPAN>
            <strong>IT Security Team:</strong>
          </SPAN>
          <LI>Implement security controls around anonymized datasets.</LI>
          <LI>Perform periodic audits and risk assessments.</LI>
        </div>

        <div>
          <SPAN>
            <strong>Development and QA Teams:</strong>
          </SPAN>
          <LI>Ensure only anonymized data is used in testing environments.</LI>
          <LI>Follow approved data anonymization methods.</LI>
        </div>
      </DIV>

      <DIV>
        <H2>8. Review and Updates</H2>
        <SPAN>
          This policy will be reviewed annually or in response to significant
          changes in regulatory requirements or business operations.
        </SPAN>
      </DIV>

      <DIV>
        <H2>9. Contact Information</H2>
        <SPAN>
          For further information or inquiries regarding this policy, please
          contact the IT Security Team at{" "}
          <a href="mailto:security@hivoco.com">security@hivoco.com</a>.
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
  );
};

export default DataAnonymizationPolicy;
