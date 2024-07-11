// app/page.tsx

import Logout from "@/components/auth/logout";
import CreateRequestForm from "@/components/create-request/create-request-form";
import { cookiesClient } from "@/utils/amplify-server-utils";

export default async function Dashboard() {
  const { data: requests } = await cookiesClient.models.ServiceRequest.list();
  const colNames: string[] = [
    "ID",
    "Service Request Name",
    "Service Request Description",
    "Creation Date",
    "Severity",
    "Resolution Date",
    "Reporter Name",
    "Contact Information",
    "Location",
  ];

  return (
    <>
      <nav className="navbar bg-base-300 flex justify-between px-6">
        <h1 className="text-xl font-bold">Data Foundry Service Requests</h1>
        <Logout />
      </nav>
      <main className="grid">
        <section className="px-6 py-10 bg-base-200">
          <h2 className="font-semibold text-xl">Create a Service Request</h2>
          <p className="text-sm">
            Ensure the information is detailed for an efficient response.
          </p>
          <div className="divider" />
          <CreateRequestForm />
        </section>
        <section className="p-6 bg-base-300 overflow-hidden">
          <h2 className="font-semibold text-xl">Service Requests</h2>
          <p className="text-sm">View service requests logged.</p>
          <div className="divider" />
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  {colNames.map((name) => (
                    <th key={name}>{name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {requests?.map((request) => (
                  <tr key={request.id}>
                    <td>{request.id}</td>
                    <td>{request.name}</td>
                    <td>{request.description}</td>
                    <td>{request.creationDate}</td>
                    <td>{request.severity}</td>
                    <td>{request.resolutionDate}</td>
                    <td>{request.reporterName}</td>
                    <td>{request.contactInformation}</td>
                    <td>{request.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
