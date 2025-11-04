"use client";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DrawingCanvas from "@/components/DrawingCanvas";
import Link from "next/link";

export default function PracticePage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [currentWord, setCurrentWord] = useState({
    english: "Water",
    kanji: "水",
    reading: "みず",
    romaji: "mizu",
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  const handleDrawingComplete = (imageData: string) => {
    console.log("Drawing submitted for checking");
    alert(
      "Drawing submitted! This will be checked against the correct kanji once we integrate the recognition API."
    );
  };

  const handleSignOut = async () => {
    await logout();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              日本語の書き練習
            </h1>
            <p className="text-gray-600">Japanese Writing Practice</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
              )}
              <span className="text-gray-700">Hello, {user.displayName}</span>
            </div>
            <Link
              href="/"
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Home
            </Link>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
              Practice Word
            </h2>
            <div className="text-center space-y-6">
              <div>
                <div className="text-sm text-gray-500 mb-2">English</div>
                <div className="text-4xl font-bold text-indigo-600">
                  {currentWord.english}
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-500 mb-2">Kanji</div>
                <div className="text-7xl font-japanese text-gray-800">
                  {currentWord.kanji}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Reading</div>
                  <div className="text-xl text-gray-700">
                    {currentWord.reading}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Romaji</div>
                  <div className="text-xl text-gray-700">
                    {currentWord.romaji}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
              Draw the Kanji
            </h2>
            <DrawingCanvas
              onDrawingComplete={handleDrawingComplete}
              width={500}
              height={400}
              lineColor="#4f46e5"
              lineWidth={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
