import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export const dynamoDBClient = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID_AWS as string,
    secretAccessKey: process.env.SECRET_ACCESS_KEY_AWS as string,
  },
  region: process.env.REGION_AWS as string
});