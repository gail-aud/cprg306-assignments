import Link from "next/link";

export default function StudentInfo() {
    return (
      <div>
        <p>Name: Gail Audrey Javier</p>
        <p> Course Section: CPRG 306A</p>
        <Link href={"https://github.com/gail-aud/cprg306-assignments"} className="hover:text-blue-200">Github Repository</Link>
      </div>
      
      
    );
  }