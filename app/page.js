import StudentInfo from "./StudentInfo";
import Link from "next/link";

export default function Page() {

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <h1 className="font:64">CPRG 306: Web Dev 2 - Assignments</h1>
      <StudentInfo />
      <Link href={`/week2`} className="hover:text-blue-200 text-sm "> Week 2 </Link>
      <Link href={`/week3`} className="hover:text-blue-200 text-sm "> Week 3 </Link>
      <Link href={`/week4`} className="hover:text-blue-200 text-sm "> Week 4 </Link>  
      <Link href={`/week5`} className="hover:text-blue-200 text-sm "> Week 5 </Link>
      <Link href={`/week6`} className="hover:text-blue-200 text-sm "> Week 6 </Link>
    </main>
  );

  }