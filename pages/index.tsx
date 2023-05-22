import React from "react";
function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">My Next.js App</h1>
        </div>
      </nav>
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">
          Welcome to Next.js with Tailwind CSS!
        </h2>
        <p className="text-lg">Start building your awesome web application.</p>
      </div>
    </div>
  );
}

export default Home;
