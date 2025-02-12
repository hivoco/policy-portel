import Link from "next/link";
import React from "react";

const policies = [
  {
    id: 1,
    policyName: "Hivoco Information Security Policy",
  },
  {
    id: 2,
    policyName: "Hivoco's New Information Security Policy",
  },
  {
    id: 3,
    policyName: "Hivoco IT Asset Register Policy",
  },
  {
    id: 4,
    policyName: "Hivoco Physical Security Controls Policy",
  },
  {
    id: 5,
    policyName: "Hivoco Power Backup Policy",
  },
  {
    id: 6,
    policyName: "Hivoco Logical Access Management Policy",
  },
  {
    id: 7,
    policyName: "Hivoco Change Management Policy",
  },

  {
    id: 8,
    policyName: "  Hivoco Quarterly Security Review Policy",
  },

  {
    id: 9,
    policyName: "Hivoco Quarterly Security Compliance Review Policy",
  },

  {
    id: 10,
    policyName: "Hivoco Data Backup and Management Policy",
  },

  {
    id: 11,
    policyName:
      "Hivoco System Acquisition, Development, and Maintenance Policy",
  },
  {
    id: 12,
    policyName: "Hivoco Data Encryption Policy",
  },
  {
    id: 13,
    policyName: "Hivoco Data Anonymization Policy",
  },
  {
    id: 14,
    policyName: "Hivoco Infrastructure Redundancy Policy",
  },
  {
    id: 15,
    policyName: "Hivoco Data Segmentation and Encryption Policy",
  },
];

const EmployeePoliciesTable = ({ selectedPolicies }) => {
  // console.log(policies);
  console.log(selectedPolicies, "selectedPolicies");

  const newPolicies = policies.map((policy) => {
    // console.log(policy);

    // Check if policy exists in the second array (using trimmed comparison)
    const exists = selectedPolicies?.some((selectedPolicy) => {
      // console.log(selectedPolicy,'selectedPolicy');
      return selectedPolicy.policyName.trim() === policy.policyName.trim();
    });

    return {
      ...policy,
      status: exists,
    };
  });

  console.log(newPolicies, "newPolicies");

  return (
    <table className="w-full table-auto ">
      <thead>
        <tr
          style={{
            fontSize: "16px",
            lineHeight: "",
            backgroundColor: "#2A2A2A",
            color: "#fff",
            fontWeight: "600",
          }}
          //   text-lg
          className="
              text-white
              font-semibold 
             "
        >
          <th
            style={{ padding: "20px 16px", textAlign: "left" }}
            className="py-6 px-4 text-left"
          >
            SR NO.
          </th>
          <th
            style={{ padding: "20px 16px", textAlign: "left" }}
            className="py-6 px-4 text-left"
          >
            POLICY NAME{" "}
          </th>
          <th
            style={{ padding: "20px 16px", textAlign: "left" }}
            // className="py-6 px-4 text-left"
          >
            STATUS{" "}
          </th>
        </tr>
      </thead>
      <tbody>
        {newPolicies?.map((policy) => (
          <tr
            key={policy.id}
            style={{
              color: "#2A2A2A",
              //   lineHeight: "24px",
              fontSize: "16px",
              fontWeight: "600",
            }}
            className="text-[#2A2A2A] text-xl  font-semibold"
          >
            <td
              style={{ padding: "20px 16px", textAlign: "left" }}
              className="px-4 py-6 text-left"
            >
              {policy.id}
            </td>

            <td
              style={{ padding: "20px 16px", textAlign: "left" }}
              className="px-4 py-6 text-left"
            >
              {policy.policyName}
            </td>

            {/* <td
              style={{
                padding: "20px 16px",
                textAlign: "left",
                fontWeight: "700",
              }}
              className="px-4 py-6 font-bold text-left"
            >
              <Link href={ policy.id===1 ? "/security-policy" :"#"}>
                <button
                  className=""
                  style={{ color: "#1658FF", textDecorationLine: "underline" }}
                >
                  {policy.actions}
                </button>
              </Link>
            </td> */}

            <td
              style={{
                padding: "20px 16px",
                textAlign: "left",
                color: policy.status ? "#00D100" : "#FF2424",
              }}
              className={`px-4 py-6 text-left capitalize`}
            >
              {policy?.status ? "completed" : "not completed"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeePoliciesTable;
