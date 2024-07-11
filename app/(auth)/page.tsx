import RequestsTable from "./requests-table";
import S3RenderImage from "@/components/s3-render-image";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default function App() {
  return (
    <main className="flex flex-1 flex-col py-10">
      <section className="container flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <S3RenderImage
            objectName="logo-100.png"
            alt="logo"
            width={24}
            height={24}
            className="w-10 h-10"
          />
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-sm text-base-content/80">
              View or create service requests.
            </p>
          </div>
        </div>
        <Link href="/create-request">
          <button className="btn btn-primary">
            <PlusIcon className="w-4 h-4" />
            New Request
          </button>
        </Link>
      </section>
      <section className="container my-10">
        <Suspense fallback="loading...">
          <RequestsTable />
        </Suspense>
      </section>
    </main>
  );
}
