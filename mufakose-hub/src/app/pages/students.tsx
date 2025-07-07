import useSWR from "swr";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function StudentsPage() {
  const { data, error } = useSWR("/api/students", fetcher);

  if (error) return <div>Failed to load students.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Students 👩‍💻👨‍💻</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.data.map((student: any) => (
          <div key={student._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img
              src={student.avatarUrl || "https://via.placeholder.com/150"}
              alt={student.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{student.name}</h2>
            <p className="text-gray-600">{student.specialization}</p>
            <p className="text-sm text-gray-500">{student.employed ? `Employed at ${student.employer}` : "Looking for opportunities"}</p>
            <Link
              href={`/students/${student._id}`}
              className="mt-2 inline-block text-blue-600 underline"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
