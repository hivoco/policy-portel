import Link from "next/link";

const employees = [
  {
    id: 1,
    name: "Ananya Garg",
    policy: "14/16 Policies Completed",
    actions: "View Details",
  },
  {
    id: 2,
    name: "Varun Gupta",
    policy: "08/16 Policies Completed",
    actions: "View Details",
  },
  {
    id: 3,
    name: "Himanshu Parihar",
    policy: "11/16 Policies Completed",
    actions: "View Details",
  },
  {
    id: 4,
    name: "Ranjan Mehta",
    policy: "07/16 Policies Completed",
    actions: "View Details",
  },
  {
    id: 5,
    name: "Irfan Ahmed",
    policy: "15/16 Policies Completed",
    actions: "View Details",
  },
  {
    id: 6,
    name: "Krishna Murari Yadav",
    policy: "09/16 Policies Completed",
    actions: "View Details",
  },
  {
    id: 7,
    name: "Ann Afreen",
    policy: "10/16 Policies Completed",
    actions: "View Details",
  },
  {
    id: 8,
    name: "Malvika",
    policy: "12/16 Policies Completed",
    actions: "View Details",
  },
];

const AdminTable = ({employeesData,searchTerm}) => {
  
  console.log(employeesData,'e d');

  const filteredData = employeesData?.filter((employee) => {
    return employee?.auth_id?.name
      ?.toLowerCase()
      ?.trim()
      ?.includes(searchTerm.toLowerCase().trim());
  });
  
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
            EMPLOYEE NAME
          </th>

          <th
            style={{ padding: "20px 16px", textAlign: "left" }}
            className="py-6 px-4 text-left"
          >
            EMAIL ID
          </th>

          <th
            style={{ padding: "20px 16px", textAlign: "left" }}
            className="py-6 px-4 text-left"
          >
            POLICY STATUS
          </th>
          <th
            style={{ padding: "20px 16px", textAlign: "left" }}
            // className="py-6 px-4 text-left"
          >
            ACTIONS
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredData?.map((employee, index) => (
          <tr
            key={employee._id}
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
              {index + 1}
            </td>
            <td
              style={{ padding: "20px 16px", textAlign: "left" }}
              className="px-4 py-6 text-left"
            >
              {employee?.auth_id?.name}
            </td>

            <td
              style={{ padding: "20px 16px", textAlign: "left" }}
              className="px-4 py-6 text-left"
            >
              {employee?.auth_id?.email}
            </td>

            <td
              style={{ padding: "20px 16px", textAlign: "left" }}
              className="px-4 py-6 text-left"
            >
              {employee?.policiesCount}/16 Policies Completed
            </td>

            <td
              style={{
                padding: "20px 16px",
                textAlign: "left",
                fontWeight: "700",
              }}
              className="px-4 py-6 font-bold text-left"
            >
              <Link
                className=""
                style={{ color: "#1658FF", textDecorationLine: "underline" }}
                href={{
                  pathname: "/employee-profile",
                  query: {
                    name: employee?.name,
                    email: employee?.email,
                    employeeId: employee?._id,
                  },
                }}
              >
                View Details
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminTable;
