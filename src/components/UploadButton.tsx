"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import Dropzone from "react-dropzone";
import { File, UploadCloud } from "lucide-react";
import { Progress } from "./ui/progress";

const UploadDropzone = () => {
  const [isUploading, setIsUploading] = useState(true);
  const [uploadProgress, setUploadProgress] = useState(0);

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

        await new Promise((resolve) => setTimeout(resolve, 2500));

        clearInterval(progInterval);
        setUploadProgress(100);
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
                <p className="text-sm text-zinc-600">PDF (up to 4MB)</p>
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
                  />
                </div>
              ) : null}
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

const UploadButton = () => {
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
        <UploadDropzone />
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;
