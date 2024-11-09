import Image from "next/image";
import william_wang from "../public/william_wang.svg";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center h-screen">
        <Image
          src={william_wang}
          alt="William Wang"
          className="invert-on-dark w-3/5" // Tailwind CSS class for 60% width
        />
        <div className="text-sm font-[family-name:var(--font-geist-mono)] mt-8">
          Nullum magnum ingenium fortitudoque sine mixture fortunae fuere.
        </div>
      </div>
    </main>
  );
}
