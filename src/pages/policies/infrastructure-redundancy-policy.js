import React, { useState } from "react";
import DIV from "@/Elements/DIV";
import H2 from "@/Elements/H2";
import LI from "@/Elements/LI";
import SPAN from "@/Elements/SPAN";
import { useRouter } from "next/router";

const InfrastructureRedundancyPolicy = ({
  policyName = "Hivoco Infrastructure Redundancy Policy",
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
      <H2>Hivoco Infrastructure Redundancy Policy</H2>
      <div className="flex flex-col">
        <SPAN>Version: 1.0</SPAN>
        <SPAN>Owner: Chief Security Officer (CSO)</SPAN>
      </div>

      <DIV>
        <H2>1. Purpose</H2>
        <SPAN>
          The purpose of this policy is to ensure the implementation of
          sufficient redundancy measures across Hivoco’s infrastructure,
          including servers, network components, and Internet Service Providers
          (ISPs), to mitigate the risk of outages such as power failures and
          network disruptions.
        </SPAN>
      </DIV>

      <DIV>
        <H2>2. Scope</H2>
        <SPAN>
          This policy applies to all critical IT infrastructure at Hivoco,
          covering:
        </SPAN>
        <div>
          <LI>Servers (on-premises and cloud-based)</LI>
          <LI>Network components (firewalls, switches, routers)</LI>
          <LI>Internet connectivity (multiple ISPs)</LI>
          <LI>Power backup systems</LI>
        </div>
      </DIV>

      <DIV>
        <H2>3. Redundancy Measures</H2>
        <SPAN>
          Hivoco has implemented the following redundancy strategies to ensure
          high availability and business continuity:
        </SPAN>

        <div>
          <H2 className={""}>3.1 Server Redundancy</H2>
          <div>
            <SPAN className={"!font-bold"}>High-Availability Clusters:</SPAN>
            <LI>
              Critical applications are hosted on redundant server clusters to
              ensure failover in case of hardware failures.
            </LI>
            <LI>
              Load balancing mechanisms are employed to distribute workloads
              efficiently.
            </LI>
          </div>

          <div>
            <SPAN className={"!font-bold"}>Data Replication:</SPAN>
            <div>
              <LI>
                Production data is replicated across geographically distributed
                data centers to ensure availability.
              </LI>
              <LI>
                Synchronous and asynchronous replication strategies are used
                based on workload requirements.
              </LI>
            </div>
          </div>

          <div>
            <SPAN className={"!font-bold"}>Automated Failover:</SPAN>
            <div>
              <LI>
                Systems are configured to automatically switch to standby
                servers in the event of a primary system failure.
              </LI>
            </div>
          </div>
        </div>

        <div>
          <H2 className={""}>3.2 Network Component Redundancy</H2>
          <div>
            <SPAN className={"!font-bold"}>Redundant Network Paths:</SPAN>
            <LI>
              Multiple network paths with different routes are established to
              prevent single points of failure.
            </LI>
            <LI>
              Dynamic routing protocols (BGP, OSPF) are used to reroute traffic
              automatically in case of link failures.
            </LI>
          </div>

          <div>
            <SPAN className={"!font-bold"}>
              Redundant Firewalls and Load Balancers:
            </SPAN>
            <div>
              <LI>
                Dual firewalls and load balancers are deployed to provide
                failover capabilities.
              </LI>
            </div>
          </div>

          <div>
            <SPAN className={"!font-bold"}>Multi-ISP Connectivity:</SPAN>
            <div>
              <LI>
                Connections with multiple ISPs ensure continuous access to
                external networks.
              </LI>
              <LI>
                Automated failover configurations route traffic through the
                available provider in case of an outage.
              </LI>
            </div>
          </div>
        </div>

        <div>
          <H2 className={""}>3.3 Power Redundancy</H2>
          <div>
            <SPAN className={"!font-bold"}>
              Uninterruptible Power Supply (UPS):
            </SPAN>
            <LI>
              All critical systems are backed by UPS to provide immediate backup
              power during short-term outages.
            </LI>
            <LI>
              Battery health is monitored regularly to ensure reliability.
            </LI>
          </div>

          <div>
            <SPAN className={"!font-bold"}>Backup Generators:</SPAN>
            <div>
              <LI>
                Diesel generators are available to sustain operations during
                prolonged power outages.
              </LI>
              <LI>Regular testing and fuel level monitoring are conducted.</LI>
            </div>
          </div>

          <div>
            <SPAN className={"!font-bold"}>
              Power Distribution Units (PDUs):
            </SPAN>
            <div>
              <LI>
                Intelligent PDUs are deployed to manage power distribution
                across the infrastructure efficiently.
              </LI>
            </div>
          </div>
        </div>

        <div>
          <H2 className={""}>3.4 Cloud Redundancy</H2>
          <div>
            <SPAN className={"!font-bold"}>Multi-Region Deployments:</SPAN>
            <LI>
              Cloud infrastructure is distributed across multiple geographic
              regions to ensure resilience.
            </LI>
            <LI>
              Data replication and failover strategies are in place to minimize
              service disruption.
            </LI>
          </div>

          <div>
            <SPAN className={"!font-bold"}>Cloud Backup Solutions:</SPAN>
            <div>
              <LI>
                Automated cloud backups are scheduled to ensure data integrity
                and availability.
              </LI>
            </div>
          </div>
        </div>
      </DIV>

      <DIV>
        <H2>4. Monitoring and Testing</H2>
        <div>
          <SPAN>
            Hivoco ensures the effectiveness of redundancy measures through:
          </SPAN>

          <div>
            <SPAN className={"!font-bold"}>24/7 Monitoring:</SPAN>
            <div>
              <LI>
                Infrastructure is monitored using centralized tools to detect
                potential failures in real-time.
              </LI>
              <LI>
                Alerts are configured to notify IT teams for immediate action.
              </LI>
            </div>
          </div>

          <div>
            <SPAN className={"!font-bold"}>Regular Failover Testing</SPAN>
            <div>
              <LI>
                Quarterly failover drills are conducted to validate the
                effectiveness of redundancy systems.
              </LI>
              <LI>
                Documentation of test results and improvement plans are
                maintained.
              </LI>
            </div>
          </div>

          <div>
            <SPAN className={"!font-bold"}>Incident Response Plan</SPAN>
            <div>
              <LI>
                A documented response plan is in place to handle infrastructure
                failures efficiently.
              </LI>
            </div>
          </div>
        </div>
      </DIV>

      <DIV>
        <H2>5. Compliance and Reporting</H2>
        <div>
          <LI>
            Regular audits are conducted to assess compliance with Hivoco's
            redundancy requirements.
          </LI>
          <LI>
            Compliance reports and incident logs are reviewed periodically to
            identify areas for improvement.
          </LI>
          <LI>
            Reports on redundancy performance are shared with stakeholders as
            part of governance requirements.
          </LI>
        </div>
      </DIV>

      <DIV>
        <H2>6. Review and Updates</H2>
        <SPAN>
          This policy will be reviewed annually or when significant changes to
          Hivoco’s infrastructure occur. Updates will be communicated to
          relevant stakeholders.
        </SPAN>
      </DIV>

      <DIV>
        <H2>7. Contact Information</H2>
        <SPAN>
          For further details regarding infrastructure redundancy, please
          contact the IT Operations Team at{" "}
          <a href="mailto:operations@hivoco.com">operations@hivoco.com</a>.
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

export default InfrastructureRedundancyPolicy;
