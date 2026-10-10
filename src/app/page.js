import BannerPage from "@/components/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <BannerPage />
      <p className="flex justify-center items-center text-8xl h-screen font-bold">Home Page</p>
    </div>
  );
}
