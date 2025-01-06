"use client";

import { trpc } from "@/app/_trpc/client";
import UploadButton from "./UploadButton";
import { File, Ghost, Loader, MessageSquare, Plus, Trash } from "lucide-react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Link from "next/link";
import { format } from "date-fns";
import { Button } from "./ui/button";
import { useState } from "react";
import { getUserSubscriptionPlan } from "@/lib/stripe";

interface PageProps {
  subscriptionPlan: Awaited<ReturnType<typeof getUserSubscriptionPlan>>;
}

const Dashboard = ({ subscriptionPlan }: PageProps) => {
  const [currentDeleteFile, setCurrentDeleteFile] = useState<string | null>(
    null
  );
  const utils = trpc.useContext();

  const { data: files, isLoading } = trpc.getUserFiles.useQuery();

  const { mutate: deleteFile } = trpc.deleteFile.useMutation({
    onSuccess: () => {
      utils.getUserFiles.invalidate();
    },
    onMutate({ id }) {
      setCurrentDeleteFile(id);
    },
    onSettled() {
      setCurrentDeleteFile(null);
    },
  });
  return (
    <main className="mx-auto max-w-7xl md:p-10 ">
      <div className="mt-8 flex flex-col p-4 items-start justify-between gap-4 border-b-2 border-gray-500 pb-5 sm:flex-row sm:items-center sm:gap-0 ">
        <h1 className="text-5xl mb-3 font-bold text-gray-900">My Files</h1>
        <UploadButton isSubscribed={subscriptionPlan.isSubscribed} />
      </div>

      {/* Display All files */}
      {files && files?.length !== 0 ? (
        <ul className="mt-6 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3">
          {files
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((file) => (
              <li
                key={file.id}
                className="col-span-1 divide-y mt-3 mx-3 divide-gray-200 rounded-lg bg-white shadow-sm shadow-black transition hover:shadow-xl hover:shadow-gray-400"
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
                    {currentDeleteFile === file.id ? (
                      <Loader className="h-4 w-4 animate-spin" />
                    ) : (
                      <Trash className="h-4 w-4" />
                    )}
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
