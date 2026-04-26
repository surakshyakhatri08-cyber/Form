import { useEffect, useState } from 'react'
import UserCard from './components/user-card'
import { LoadingSpinner, ErrorMessage } from './components/status-messages'

type User = {
  id: number;
  name: string;
  email: string;
  company: { name: string };
};

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log(`%c📏 Window Resized: ${window.innerWidth}px`, "color: #aa3bff; font-weight: bold");
    };

    window.addEventListener('resize', handleResize);

    return () => {
      console.log("Cleaning up resize listener...");
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      try {
        console.log("%c🚀 API Fetching Started...", "color: blue; font-weight: bold");
        setLoading(true);
        setError(null);

        await new Promise((resolve) => setTimeout(resolve, 3000));

        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if (!response.ok) throw new Error("Failed to fetch data from server");

        const json: User[] = await response.json();

        console.log("%c✅ Data Received Successfully:", "color: green; font-weight: bold", json);

        setUsers(json);
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        console.error("%c❌ Fetch Error:", "color: red; font-weight: bold", errorMessage);
        setError(errorMessage);
      } finally {
        setLoading(false);
        console.log("%c🏁 Loading Sequence Finished.", "color: gray; font-style: italic");
      }
    }

    getUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-2xl">
        <header className="mb-10 text-center border-b pb-6 border-gray-200">
          <h1 className="text-4xl font-black text-gray-900 mb-2">User Hub</h1>
          <p className="text-sm font-mono text-gray-500 bg-white px-4 py-1 rounded-full shadow-sm inline-block">
            Window Width: <strong>{width}px</strong>
          </p>
        </header>

        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}

        {!loading && !error && (
          <div className="grid gap-5">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;