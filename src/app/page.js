"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>This is just index an page</p>
      <Link href="/todolist">Go to todolist page</Link>
      <br />
      <Link href="/randomUser">Go to randomUser page</Link>
    </div>
  );
}
