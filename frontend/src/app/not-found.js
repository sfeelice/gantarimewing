import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <Image src="/404.svg" alt="404 Page Not Found" width={400} height={400} />
        <Link href="/">
          <button className="font-bold">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
}
