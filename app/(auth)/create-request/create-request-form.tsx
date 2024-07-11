"use client";

import { useForm } from "react-hook-form";
import { formSchema } from "./form-schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError, FormLabel } from "@/components/ui/form";
import { useState } from "react";
import { castToFormData } from "@/utils";
import { createRequest } from "./actions";
import toast from "react-hot-toast"
import { Loader } from "lucide-react";

export type Request = z.infer<typeof formSchema>;

export default function CreateRequestForm() {
  const form = useForm<Request>({
    resolver: zodResolver(formSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = async (data: Request) => {
    setIsSubmitting(true);
    const formData = castToFormData(data);
    const error = await createRequest(formData);

    if (error) {
      toast.error("Something went wrong :(");
    } else {
      toast.success("Request successfully made!");
    }
    setIsSubmitting(false);
  };

  return (
    <form className="grid gap-y-4" onSubmit={form.handleSubmit(onSubmit)}>
      <div className="grid">
        <FormLabel text="Name" />
        <input
          type="text"
          placeholder="Unable to upload data."
          className="input input-bordered w-full placeholder:text-base-content/50"
          {...form.register("name")}
        />
        <FormError error={form.formState.errors.name?.message} />
      </div>

      <div className="grid">
        <FormLabel text="Description" />
        <textarea
          placeholder="When user tries to upload specific files, they are getting a timeout error..."
          className="textarea textarea-bordered w-full placeholder:text-base-content/50"
          {...form.register("description")}
        />
        <FormError error={form.formState.errors.description?.message} />
      </div>

      <div className="grid">
        <FormLabel text="Creation Date" />
        <input
          type="date"
          className="input input-bordered w-full placeholder:text-base-content/50"
          {...form.register("creationDate")}
        />
        <FormError error={form.formState.errors.creationDate?.message} />
      </div>

      <div className="grid">
        <FormLabel text="Severity" />
        <select
          className="select select-bordered w-full"
          {...form.register("severity")}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <FormError error={form.formState.errors.severity?.message} />
      </div>

      <div className="grid">
        <FormLabel text="Reporter Name" />
        <input
          type="text"
          placeholder="Elliot Alderson"
          className="input input-bordered w-full placeholder:text-base-content/50"
          {...form.register("reporterName")}
        />
        <FormError error={form.formState.errors.reporterName?.message} />
      </div>

      <div className="grid">
        <FormLabel text="Contact Information" />
        <input
          type="email"
          placeholder="elliot@fsociety.com"
          className="input input-bordered w-full placeholder:text-base-content/50"
          {...form.register("contactInformation")}
        />
        <FormError error={form.formState.errors.contactInformation?.message} />
      </div>

      <div className="grid">
        <FormLabel text="Location" />
        <input
          type="text"
          placeholder="3035 W Thunderbird Rd"
          className="input input-bordered w-full placeholder:text-base-content/50"
          {...form.register("location")}
        />
        <FormError error={form.formState.errors.location?.message} />
      </div>

      <button className="btn btn-primary mt-4" type="submit">
        {isSubmitting ? <Loader className="w-6 h-6 animate-spin" /> : "Submit"}
      </button>
    </form>
  );
}
