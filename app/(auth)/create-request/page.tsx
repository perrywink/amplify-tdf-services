import CreateRequestForm from "./create-request-form";

export default function CreateRequestPage() {
  return (
    <main className="container my-10 max-w-xl grid gap-y-4">
      <div className="grid">
        <h1 className="text-2xl font-bold">
          {"Make a service request"}
        </h1>
        <p className="text-sm text-base-content/80">
          {"Provide as much detail as possible to ensure efficient support."}
        </p>
      </div>
      <CreateRequestForm />
    </main>
  );
}
