"use server"
import {
  PutItemCommand,
} from "@aws-sdk/client-dynamodb";
import * as uuid from "uuid";
import { formSchema } from "./form-schema";
import { redirect } from "next/navigation";
import { formatDateToSlash, incrementDateByDays } from "@/utils";
import { dynamoDBClient } from "@/lib/dynamodb-client"
import { revalidatePath } from "next/cache";

type FormState = { message: string };

export async function createRequest(formData: any): Promise<FormState> {
  // const data = Object.fromEntries(formData);
  const parsed = formSchema.safeParse(formData);

  if (!parsed.success || !parsed.data) {
    return { message: "Incorrect data parsed" };
  }

  const {
    name,
    description,
    creationDate,
    severity,
    reporterName,
    contactInformation,
    location,
  } = parsed.data;

  const resolutionDate = new Date(creationDate);
  if (severity === "Low") {
    incrementDateByDays(resolutionDate, 5);
  } else if (severity === "Medium") {
    incrementDateByDays(resolutionDate, 3);
  } else if (severity === "High") {
    incrementDateByDays(resolutionDate, 1);
  }

  const requestPayload = {
    id: { S: uuid.v4() },
    name: { S: name },
    description: { S: description },
    creationDate: { S: formatDateToSlash(creationDate) },
    severity: { S: severity },
    reporterName: { S: reporterName },
    contactInformation: { S: contactInformation },
    location: { S: location },
    resolutionDate: { S: formatDateToSlash(resolutionDate) },
  };

  try {
    await dynamoDBClient.send(
      new PutItemCommand({
        TableName: process.env.DYNAMODB_TABLE_NAME,
        Item: requestPayload
      })
    );
  } catch (error: any) {
    return {message: error as string}
  }

  revalidatePath("/")
  redirect("/");
}
