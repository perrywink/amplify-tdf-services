"use server";

import { revalidatePath } from "next/cache";
import { formSchema } from "./form-schema";
import { formatDateToSlash, incrementDateByDays } from "@/utils/misc-utils";
import { cookiesClient } from "@/utils/amplify-server-utils";

export async function addRequest(formData: FormData) {
  const parsed = formSchema.safeParse(Object.fromEntries(formData));

  console.log("FORM DATA", formData);
  console.log("PARSED FORM DATA", parsed);

  if (!parsed.success) {
    console.log(parsed.error.message)
    return { message: "Incorrect data given" };
  }

  if (!parsed.data) {
    return { message: "No data given" };
  }

  const { creationDate, severity } = parsed.data;

  const resolutionDate = new Date(creationDate);
  if (severity === "Low") {
    incrementDateByDays(resolutionDate, 5);
  } else if (severity === "Medium") {
    incrementDateByDays(resolutionDate, 3);
  } else if (severity === "High") {
    incrementDateByDays(resolutionDate, 1);
  }

  const res = await cookiesClient.models.ServiceRequest.create({
    ...parsed.data,
    creationDate: formatDateToSlash(creationDate),
    resolutionDate: formatDateToSlash(resolutionDate),
  });

  if (res.errors) {
    if (res.errors.length) {
      return {message: res.errors[0].message}
    }
    return { message: "Please recheck your submission data" };
  }

  console.log("RES", res)

  revalidatePath("/");
}
