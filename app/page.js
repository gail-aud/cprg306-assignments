import StudentInfo from "./StudentInfo";
import week2 from "./week2/page.js";
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <h1 className="font:64">CPRG 306: Web Dev 2 - Assignments</h1>
      <StudentInfo />
      <Link href={`/week2`} className="hover:text-blue-200 "> Week 2 </Link>
    </main>
  );
}