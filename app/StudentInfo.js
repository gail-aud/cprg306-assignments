import Link from "next/link";

export default function StudentInfo() {
    return (
      <div>
        <h1>Name: Gail Audrey Javier</h1>
        <p> Course Section: CPRG 306A</p>
        <Link href={"https://github.com/gail-aud/cprg306-assignments"} className="hover:text-blue-200">Github Repository</Link>
      </div>
      
      
    );
  }