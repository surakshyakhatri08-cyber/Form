export default function PostCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-4 bg-white shadow rounded-lg border border-gray-200">
      <h2 className="font-bold text-blue-700 capitalize">{title}</h2>
      <p className="text-gray-500 text-sm mt-2">{body.substring(0, 80)}...</p>
    </div>
  );
}