"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import Dropzone from "react-dropzone";
import { File, Loader2, UploadCloud } from "lucide-react";
import { Progress } from "./ui/progress";
import { useUploadThing } from "@/lib/uploadthing";
import { useToast } from "./ui/use-toast";
import { trpc } from "@/app/_trpc/client";
import { redirect, useRouter } from "next/navigation";

const UploadDropzone = ({ isSubscribed }: { isSubscribed: boolean }) => {
  const router = useRouter();

  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const { startUpload } = useUploadThing(
    isSubscribed ? "proPlanUploader" : "freePlanUploader"
  );
  const { toast } = useToast();

  const { mutate: startPolling } = trpc.getFile.useMutation({
    onSuccess: (file) => {
      router.push(`/dashboard/${file.id}`);
    },
    retry: true,
    retryDelay: 500,
  });

  const startProgress = () => {
    setUploadProgress(0);
    const interval = setInterval((i) => {
      setUploadProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        }
        return prev + 5;
      });
    }, 500);
    return interval;
  };

  return (
    <Dropzone
      multiple={false}
      onDrop={async (acc) => {
        setIsUploading(true);

        const progInterval = startProgress();

        await new Promise((resolve) => setTimeout(resolve, 1500));

        const res = await startUpload(acc);
        if (!res) {
          return toast({
            title: "Something went wrong.",
            description: "Please try again later",
            variant: "destructive",
          });
        }

        const [fileResponse] = res;
        const key = fileResponse?.key;

        if (!key) {
          return toast({
            title: "Something went wrong.",
            description: "Please try again later",
            variant: "destructive",
          });
        }

        clearInterval(progInterval);
        setUploadProgress(100);

        startPolling({ key });
      }}
      onError={() => {
        redirect("/dashboard");
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className="border h-64 sm:m-10 m-2 border-dashed border-gray-400 transform hover:scale-105 transition-transform duration-30"
        >
          <div className="flex items-center justify-center h-full w-full">
            <label
              htmlFor="dropzone-file"
              className="items-center flex flex-col justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <UploadCloud className="h-8 w-8 text-zinc-900 mb-2" />
                <p className="mb-2 text-sm text-zinc-700">
                  <span className="font-semibold">Click to upload </span>
                  <span className="font-sm">or </span>drop here.
                </p>
                <p className="text-sm text-zinc-600">
                  PDF (up to {isSubscribed ? "16" : "4"}MB )
                </p>
              </div>
              {acceptedFiles && acceptedFiles[0] ? (
                <div className="max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-zinc-300 divide-x divide-zinc-300">
                  <div className="px-3 py-2 h-full grid place-items-center">
                    <File className="h-5 w-5" />
                  </div>
                  <div className="px-3 py-2 h-full text-sm truncate">
                    {acceptedFiles[0].name}
                  </div>
                </div>
              ) : null}

              {isUploading ? (
                <div className="w-full mt-4 max-w-xs mx-auto">
                  <Progress
                    value={uploadProgress}
                    className="h-1 bg-zinc-200"
                    indicatorColor={
                      uploadProgress === 100 ? "bg-green-500" : ""
                    }
                  />
                  {uploadProgress === 100 ? (
                    <div className="flex gap-1 items-center justify-center text-sm text-zinc-700 text-center pt-2 ">
                      <Loader2 className="h-3 w-3 animate-spin" /> Redirecting
                      to Martin&apos;s View...
                    </div>
                  ) : null}
                </div>
              ) : null}
              <input
                type="file"
                id="dropzone-file"
                className="hidden"
                {...getInputProps()}
              />
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

const UploadButton = ({ isSubscribed }: { isSubscribed: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        <Button>Upload PDF</Button>
      </DialogTrigger>
      <DialogContent className="p-7">
        <UploadDropzone isSubscribed={isSubscribed} />
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;
