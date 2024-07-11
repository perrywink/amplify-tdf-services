import { dynamoDBClient } from "@/lib/dynamodb-client";
import { ScanCommand } from "@aws-sdk/client-dynamodb";

export default async function RequestsTable() {
  const res = await dynamoDBClient.send(
    new ScanCommand({
      TableName: process.env.DYNAMODB_TABLE_NAME,
    })
  );

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
      <p className="badge badge-neutral mx-2 my-4">
        {res.Count === 0
          ? "No requests"
          : res.Count === 1
          ? "1 request"
          : `${res.Count} requests`}
      </p>
      <section className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              {colNames.map((name) => (
                <th key={name}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {res.Items?.map((item: any) => (
              <tr key={item.id.S}>
                <td>{item.id.S}</td>
                <td>{item.name.S}</td>
                <td>{item.description.S}</td>
                <td>{item.creationDate.S}</td>
                <td>{item.severity.S}</td>
                <td>{item.resolutionDate.S}</td>
                <td>{item.reporterName.S}</td>
                <td>{item.contactInformation.S}</td>
                <td>{item.location.S}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
