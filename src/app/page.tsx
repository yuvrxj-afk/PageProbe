import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper
      classname=" mb-12 mt-28 
     sm:mt-40 flex flex-col items-center justify-center text-center"
    >
      <div
        className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2
       overflow-hidden rounded-full border border-gray-200 bg-white 
       px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50"
      >
        <p className="text-sm font-semibold text-gray-700">
          PageProbe is here!
        </p>
      </div>
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        <span className="text-blue-600 font-extrabold"> Text </span> to
        <span className="text-blue-600 font-extrabold"> Conversation</span>
        <br />
        in Seconds.
      </h1>
      <p className="mt-5 max-w-prose text-zinc-600 sm:text-lg place-self-start">
        Experience PageProbe: Effortlessly Engage in Conversations with PDF
        Documents. Begin by Uploading Your File and Instantly Chatting with
        <span className="text-zinc-800 font-bold "> Martin </span>
        the bot.
      </p>
    </MaxWidthWrapper>
  );
}
