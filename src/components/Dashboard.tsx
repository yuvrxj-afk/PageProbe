import UploadButton from "./UploadButton";

const Dashboard = () => {
  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div
        className="mt-8 flex flex-row items-start justify-between gap-4 border-b-2 border-gray-500 pb-3 px-2 sm:items-center sm:gap-0 "
      >
        <h1 className="text-5xl mb-3 font-bold text-gray-900">My Files</h1>
        <UploadButton />

      </div>
    </main>
  );
};

export default Dashboard;
