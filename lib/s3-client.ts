import { S3Client } from "@aws-sdk/client-s3";

export const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID_AWS as string,
    secretAccessKey: process.env.SECRET_ACCESS_KEY_AWS as string,
  },
  region: process.env.REGION_AWS as string
})