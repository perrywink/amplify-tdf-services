import { s3 } from "@/lib/s3-client";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import Image from "next/image";

type S3RenderImageProps = {
  objectName: string;
} & Omit<React.ComponentProps<typeof Image>, "src">;

export default async function S3RenderImage({
  objectName,
  ...imgProps
}: S3RenderImageProps) {
  const command = new GetObjectCommand({
    Bucket: process.env.BUCKET_NAME_AWS!,
    Key: objectName,
  });

  const url = await getSignedUrl(s3, command);

  return <Image {...imgProps} src={url} />;
}
