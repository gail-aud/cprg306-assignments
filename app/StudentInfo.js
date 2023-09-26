import Link from "next/link";

export default function StudentInfo() {
    return (
      <main>
        <p className="text-sm">
            Name: Gail Audrey Javier <br></br>
            Course Section: CPRG 306A <br></br>
    
            <Link href={"https://github.com/gail-aud/cprg306-assignments"} className="hover:text-blue-200">Github Repository</Link>
        </p>
      </main>
    );
  }