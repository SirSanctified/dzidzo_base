import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight  sm:text-[5rem]">
          DzidzoBase
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              Smarter schools start here. Get started with DzidzoBase, the
              ultimate school management system.
            </div>
            </div>
            <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">Deep Dive →</h3>
            <div className="text-lg">
              Explore the features of DzidzoBase and see how it can help your
              school.
            </div>
            </div>
        </div>
      </div>
    </main>
  );
}
