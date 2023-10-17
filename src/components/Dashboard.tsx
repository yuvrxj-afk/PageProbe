"use client";

import { trpc } from "@/app/_trpc/client";
import UploadButton from "./UploadButton";
import { Ghost } from "lucide-react";

const Dashboard = () => {
  const { data: files, isLoading } = trpc.getUserFiles.useQuery();
  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="mt-8 flex flex-row items-start justify-between gap-4 border-b-2 border-gray-500 pb-3 px-2 sm:items-center sm:gap-0 ">
        <h1 className="text-5xl mb-3 font-bold text-gray-900">My Files</h1>
        <UploadButton />
      </div>

      {/* Display All files */}
      {files && files?.length !== 0 ? (
        <div></div>
      ) : isLoading ? (
        <div></div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-2">
          <Ghost className="h-8 w-8 text-zinc-800" />
          <h3 className="font-semibold text-xl">Empty here</h3>
          <p>Let&apos;s upload your first PDF</p>
        </div>
      )}
    </main>
  );
};

export default Dashboard;
