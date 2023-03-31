import Link from 'next/link'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Next.js 13 + TypeScript + Tailwind CSS Example",
};

const Page = () => {
  return (
    <section>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
    </section>
  )
}

export default Page
