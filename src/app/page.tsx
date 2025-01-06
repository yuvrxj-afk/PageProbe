import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper
        classname=" mb-12 mt-28 
     sm:mt-40 flex flex-col items-center justify-center text-center"
      >
        <div
          className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2
       overflow-hidden rounded-full border border-gray-200 bg-white 
       px-7 py-2 shadow-md backdrop-blur transition-all hover:bg-stone-600
        hover:text-white hover:border-gray-300 "
        >
          <p className="text-sm font-bold ">PageProbe is up now.</p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          <span className="text-blue-600 font-extrabold">Docs? </span>
          Let&apos;s Talk.
          <br />
          with
          <span className="text-blue-600 font-extrabold"> Dialouges !</span>
        </h1>
        <p className="mt-5 max-w-prose text-zinc-600 sm:text-lg ">
          Effortlessly Engage in Conversations with PDF Documents. Begin by
          Uploading Your File and Instantly Chatting with
          <span className="text-zinc-800 font-bold "> Martin </span>
          the bot.
        </p>
        <Link
          href="/dashboard"
          target="_blank"
          className={buttonVariants({
            size: "lg",
            className: "mt-5 text-lg",
          })}
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>

      {/* Value proposition section */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden
            className="absolute inset-x-0 -top-40 -z-10 pointer-events-none transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.126rem] 
            -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr
             from-[#df2089] to-[#6464d6] opacity-30
              sm:left-[calc(50%-30rem)] sm:w-[75.1875rem]"
            />
          </div>

          {/* Preview Image */}
          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.jpg"
                    alt="product preview"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* just gradient */}

          <div
            aria-hidden
            className="absolute inset-x-0 -top-40 -z-10 pointer-events-none transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-1rem)] aspect-[1155/678] w-[36.126rem] 
            -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr
             from-[#eb78b7] to-[#4c4ce7] opacity-30
              sm:left-[calc(50%-30rem)] sm:w-[75.1875rem]"
            />
          </div>
        </div>
      </div>

      {/* Feature Section */}

      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Start chatting in minutes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Conversation with your document has never been easier than
              Page-Probe.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          {/* step 1 */}
          <li className="md:flex-1">
            <div className=" flex flex-col space-y-2 border-1-4 border-zinc-300 py-2 pl-4 md:border-t-2 md:ob-0 md:pt-4">
              <span className="text-lg font-medium text-blue-600">Step 1</span>
              <span className="text-2xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-2 text-zinc-700">
                Either start free plan or choose our{" "}
                <Link
                  href="/pricing"
                  className="text-blue-700 underline underline-offset-2"
                >
                  pro plan.
                </Link>
              </span>
            </div>
          </li>
          {/* step 2 */}
          <li className="md:flex-1">
            <div className=" flex flex-col space-y-2 border-1-4 border-zinc-300 py-2 pl-4 md:border-t-2 md:ob-0 md:pt-4">
              <span className="text-lg font-medium text-blue-600">Step 2</span>
              <span className="text-2xl font-semibold">
                Upload the PDF file
              </span>
              <span className="mt-2 text-zinc-700">
                We&apos;ll process your file and make it ready for you to chat
                with.
              </span>
            </div>
          </li>
          {/* step 3 */}
          <li className="md:flex-1">
            <div className=" flex flex-col space-y-2 border-1-4 border-zinc-300 py-2 pl-4 md:border-t-2 md:ob-0 md:pt-4">
              <span className="text-lg font-medium text-blue-600">Step 3</span>
              <span className="text-2xl font-semibold">
                Start asking questions.
              </span>
              <span className="mt-2 text-zinc-700">
                It&apos;s that simple. Try out Page-Probe today.
              </span>
            </div>
          </li>
        </ol>

        {/* Upload Preview */}
        <div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="/file-upload-preview.jpg"
                  alt="upload preview"
                  width={1419}
                  height={732}
                  quality={100}
                  className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
