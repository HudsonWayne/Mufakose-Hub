import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">🎓 Mufakose Hub</h1>
      <p className="mb-6">Empowering students and instructors to showcase talent and grow careers.</p>
      <Link href="/students" className="text-blue-600 underline">View Students</Link>
    </main>
  );
}
