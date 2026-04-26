import { useState, useEffect } from "react";
import { getPostsData } from "./components/axios-fetching";
import PostCard from "./components/post-card";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLoad = async () => {
    setLoading(true);
    console.log("🔄 API Fetching started...");
    try {

      await new Promise(resolve => setTimeout(resolve, 1000));
      const data = await getPostsData();

      console.log("✅ Data Received Successfully!");
      console.table(data.slice(0, 5));

      setPosts(data);
    } catch (e) {
      console.error("❌ Error fetching data:", e);
    } finally {
      setLoading(false);
      console.log("🏁 Fetch process finished.");
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="p-10 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">

        <button
          onClick={handleLoad}
          disabled={loading}
          className={`mb-8 px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2 mx-auto
            ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg active:scale-95'}`}
        >
          {loading && (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}
          {loading ? "Fetching..." : "Refresh Posts"}
        </button>

        <div className={`grid md:grid-cols-2 gap-6 transition-opacity duration-300 ${loading ? 'opacity-30' : 'opacity-100'}`}>
          {posts.map((p: any) => (
            <PostCard key={p.id} title={p.title} body={p.body} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;