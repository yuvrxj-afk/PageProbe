"use client";

import { trpc } from "@/app/_trpc/client";
import UploadButton from "./UploadButton";
import { File, Ghost, MessageSquare, Plus, Trash } from "lucide-react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Link from "next/link";
import { format } from "date-fns";
import { Button } from "./ui/button";

const Dashboard = () => {
  const { data: files, isLoading } = trpc.getUserFiles.useQuery();

  const { mutate: deleteFile } = trpc.deleteFile.useMutation();
  return (
    <main className="mx-auto max-w-7xl md:p-10 ">
      <div className="mt-8 flex flex-row items-start justify-between gap-4 border-b-2 border-gray-500 pb-3 px-2 sm:items-center sm:gap-0 ">
        <h1 className="text-5xl mb-3 font-bold text-gray-900">My Files</h1>
        <UploadButton />
      </div>

      {/* Display All files */}
      {files && files?.length !== 0 ? (
        <ul className="mt-8 grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3">
          {files
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((file) => (
              <li
                key={file.id}
                className="col-span-1 divide-y mx-4  divide-gray-200 rounded-lg bg-white shadow-lg shadow-gray-300 transition hover:shadow-lg"
              >
                <Link
                  href={`/dashboard/${file.id}`}
                  className="flex flex-col gap-2"
                >
                  <div className="p-6 flex w-full items-center justify-between space-x-6">
                    <div className="h-10 w-10 flex-shrink-0 items-center rounded-full">
                      <File className="w-auto h-10" />
                    </div>
                    <div className="flex-1 truncate">
                      <div className="items-center flex space-x-3">
                        <h3 className="truncate text-lg font-medium text-zinc-900">
                          {file.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="px-6 mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-xs text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />{" "}
                    {format(new Date(file.createdAt), "MMM yyyy")}
                  </div>

                  <div className="flex items-center gap-2">
                    <MessageSquare />
                    mocked
                  </div>

                  <Button
                    className="w-full"
                    size="sm"
                    onClick={() => {
                      deleteFile({ id: file.id });
                    }}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </li>
            ))}
        </ul>
      ) : isLoading ? (
        <SkeletonTheme baseColor="#e3e1e1" highlightColor="#a6a8ad">
          <Skeleton height={100} className="m-2" count={6} />
        </SkeletonTheme>
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
