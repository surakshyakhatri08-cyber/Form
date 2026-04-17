import { useState } from 'react';
import ProfileCard from './components/ProfileCard';

function App() {
  // Define state: default is true (showing profiles)
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen p-10">

      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="mb-10 px-6 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
      >
        {isVisible ? "Hide ProfileCard" : "Show ProfileCard"}
      </button>

      {/* Conditional Rendering Logic */}
      {isVisible ? (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* First Profile */}
          <ProfileCard
            name="Surakshya Khatri"
            role="Frontend Web Developer"
            image="/my-photo.jpg"
            isOnline={true}
          />

          {/* Second Profile */}
          <ProfileCard
            name="Kranti Pariyar"
            role="UI/UX Designer"
            image="friend1.jpg"
            isOnline={false}
          />

          {/* Third Profile */}
          <ProfileCard
            name="Prabin Basnet"
            role="Backend Developer"
            image="friend2.jpg"
            isOnline={true}
          />
        </div>
      ) : (
        /* Message when profiles are hidden */
        <div className="text-center p-6 bg-amber-100 rounded-xl shadow-inner border-2 border-dashed border-gray-300">
          <p className="text-xl font-semibold text-gray-500">
            Profiles are hidden
          </p>
        </div>
      )}
    </div>
  );
}

export default App;