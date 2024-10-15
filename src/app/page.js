import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600">
      <div className="container mx-auto flex  flex-col justify-center items-center ">
        <h2 className="font-bold text-4xl text-white mb-4">User Collections</h2>
        <Link href={'/user-management'} className="bg-white rounded text-sm text-blue-700 font-semibold px-6 py-2">
        View user Lists</Link>
      </div>

    </div>
  );
}




