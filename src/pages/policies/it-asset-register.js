import React, { useState } from "react";
// import { UserDataContext } from "@/Context/UserDataContext";
import DIV from "@/Elements/DIV";
import H2 from "@/Elements/H2";
import LI from "@/Elements/LI";
import SPAN from "@/Elements/SPAN";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const Header = dynamic(() => import("../../Components/Header"), { ssr: false });


const ItAssetRegister = ({ policyName = "Hivoco IT Asset Register Ploicy" }) => {
  // 4
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
    <div>
      <Header />

      <div className="pt-14 px-14">
        <H2>Hivoco IT Asset Register
        </H2>

        <DIV>
          <div className="flex flex-col">
            <SPAN>Version: 1.0</SPAN>
            <SPAN> Owner: Chief Security Officer (CSO)</SPAN>
          </div>

          <H2> 1. Purpose </H2>

          <SPAN>
            The purpose of this IT Asset Register is to establish a structured
            approach to managing Hivoco's IT assets. This ensures effective
            tracking, utilization, and security of all IT resources to support
            business operations and compliance requirements.{" "}
          </SPAN>
        </DIV>

        <DIV>
          <H2>2. Scope </H2>
          <SPAN>
            This policy applies to all information assets owned, managed, or
            controlled by Hivoco for all clients, including but not limited to:
          </SPAN>
          <div>
            <LI>Hardware: Servers, laptops, desktops, networking devices</LI>
            <LI>
              Software: Licensed applications, cloud services, operating systems
            </LI>
            <LI>Cloud resources: AWS, Google Cloud assets</LI>
            <LI>Mobile devices: Smartphones, tablets</LI>
            <LI>Peripheral devices: Printers, external storage devices</LI>
          </div>
        </DIV>

        <DIV>
          <H2>3. Asset Categories</H2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "10px",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    padding: "8px 15px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Category
                </th>
                <th
                  style={{
                    padding: "8px 15px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Examples
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "8px 15px", textAlign: "left" }}>
                  Hardware
                </td>
                <td style={{ padding: "8px 15px", textAlign: "left" }}>
                  Laptops, Desktops, Servers, Routers
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px 15px", textAlign: "left" }}>
                  Software
                </td>
                <td style={{ padding: "8px 15px", textAlign: "left" }}>
                  OS, Productivity Tools, Cloud Subscriptions
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px 15px", textAlign: "left" }}>
                  Network Devices
                </td>
                <td style={{ padding: "8px 15px", textAlign: "left" }}>
                  Switches, Firewalls, Access Points
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px 15px", textAlign: "left" }}>
                  Mobile Devices
                </td>
                <td style={{ padding: "8px 15px", textAlign: "left" }}>
                  Smartphones, Tablets
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px 15px", textAlign: "left" }}>
                  Peripherals
                </td>
                <td style={{ padding: "8px 15px", textAlign: "left" }}>
                  Printers, Scanners, USB Drives
                </td>
              </tr>
            </tbody>
          </table>
        </DIV>

        <DIV>
          <H2>4. Asset Information Fields</H2>
          <SPAN>
            Each asset entry in the register must include the following details:
          </SPAN>

          <div>
            <LI>Asset ID: Unique identifier for tracking</LI>
            <LI>Asset Type: Hardware, Software, Cloud Resource, etc.</LI>
            <LI>Description: Details about the asset (make, model, specs)</LI>
            <LI>Owner: Department or individual responsible</LI>
            <LI>Location: Physical or virtual location of the asset</LI>
            <LI>Serial Number: Manufacturer-provided identifier</LI>
            <LI>Purchase Date: Date of acquisition</LI>
            <LI>Warranty Expiry: End date of warranty coverage</LI>
            <LI>
              Lifecycle Status: Active, In Use, Under Maintenance, Retired
            </LI>
            <LI>
              License/Subscription Expiry: Applicable for software and cloud
              assets
            </LI>
          </div>
        </DIV>

        <DIV>
          <H2>5. IT Asset Management Responsibilities</H2>

          <div>
            <SPAN className={"!font-bold"}>IT Department: </SPAN>

            <LI>Maintain an up-to-date inventory of all IT assets</LI>
            <LI>Conduct periodic asset audits to ensure accuracy</LI>
            <LI>
              Monitor and manage software licenses to avoid compliance issues
            </LI>
            <LI>Ensure decommissioned assets are securely disposed of</LI>
          </div>

          <div>
            <SPAN className={"!font-bold"}>Employees: </SPAN>
            <LI>Report any lost or damaged assets immediately</LI>
            <LI>Use assigned IT assets responsibly and securely</LI>
            <LI>
              Comply with company IT policies regarding hardware and software
              usage
            </LI>
          </div>
        </DIV>

        <DIV>
          <H2>6. Asset Tracking and Audits</H2>

          <div>
            <LI>
              IT assets will be reviewed quarterly to ensure data accuracy
            </LI>
            <LI>All assets must be tagged with a unique identifier</LI>
            <LI>
              Unauthorized assets found during audits will be flagged for review
            </LI>
            <LI>Audit reports will be submitted to senior management</LI>
          </div>
        </DIV>

        <DIV>
          <H2>7. Security and Compliance</H2>

          <div>
            <LI>
              All IT assets must adhere to Hivoco's information security
              policies
            </LI>
            <LI>
              Sensitive data stored on IT assets must be encrypted as per
              company guidelines
            </LI>
            <LI>Asset access should be role-based and regularly reviewed</LI>
            <LI>
              Disposal of IT assets must comply with data protection regulations
              (GDPR, CCPA)
            </LI>
          </div>
        </DIV>

        <DIV>
          <H2>8. Reporting and Review</H2>

          <div>
            <LI>
              Asset-related incidents must be reported to the IT team
              immediately
            </LI>
            <LI>This register will be reviewed and updated annually</LI>
            <LI>
              Changes to asset status (e.g., retirement, reallocation) must be
              recorded promptly
            </LI>
          </div>
        </DIV>

        <DIV>
          <H2>9. Contact Information</H2>

          <SPAN>
            For questions or concerns regarding IT assets, contact the IT
            Helpdesk at
            <br />
            <SPAN className={"!font-bold"}>it-support@hivoco.com</SPAN>
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
    </div>
  );
};

export default ItAssetRegister
;
