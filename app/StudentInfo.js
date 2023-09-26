import React from 'react';
import Link from 'next/link';

function StudentInfo() {
  return (
    <div>
      <h2>Your Name: Gail Audrey Javier</h2>
      <p>Your Course Section: CPRG 306A</p>
      <p>
        <Link href="hhttps://github.com/gail-aud/cprg306-assignments">
          <a target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </Link>
      </p>
    </div>
  );
}

export default StudentInfo;
