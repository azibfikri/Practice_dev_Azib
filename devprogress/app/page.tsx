import Image from "next/image";

export default function Home() {
  return (
      <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="max-w-xl w-full px-4">
        <h1 className="text-3xl font-bold mb-4">DevProgress</h1>
        <p className="mb-2">
          Welcome to your coding progress tracker.
        </p>
        <p className="text-sm text-slate-300">
          Soon you will be able to log your daily learning sessions here.
        </p>
      </div>
    </main>
  );
}
