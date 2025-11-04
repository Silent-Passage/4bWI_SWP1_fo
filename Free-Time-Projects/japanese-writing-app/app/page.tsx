"use client";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import LoginButton from "@/components/LoginButton";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      <header className="bg-white/60 backdrop-blur-sm sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-500 to-indigo-300 flex items-center justify-center text-white font-bold">
              日
            </div>
            <div className="text-lg font-semibold text-gray-800">
              日本語練習
            </div>
          </Link>
          <div>
            {user ? (
              <div className="flex items-center gap-3">
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <span className="text-sm text-gray-700">
                  {user.displayName}
                </span>
                <Link
                  href="/practice"
                  className="ml-4 px-3 py-2 bg-indigo-600 text-white rounded-md text-sm"
                >
                  Practice
                </Link>
              </div>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div>
            <div className="glass rounded-2xl p-10 shadow-2xl">
              <h1 className="text-5xl font-extrabold mb-4 font-japanese">
                日本語の練習
              </h1>
              <p className="text-lg muted mb-8">
                Master Japanese writing with your graphics tablet. Practice
                kanji, hiragana, and katakana with real-time feedback and track
                your progress over time.
              </p>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                {user ? (
                  <Link
                    href="/practice"
                    className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-semibold shadow"
                  >
                    Start Practicing
                  </Link>
                ) : (
                  <LoginButton />
                )}
                <Link
                  href="#features"
                  className="px-6 py-3 border border-white/10 rounded-lg text-sm muted hover:bg-white/5"
                >
                  How it works
                </Link>
              </div>
            </div>
            <div className="mt-6 text-sm muted">
              Tip: Use a graphics tablet for best stroke control. Works on touch
              devices too.
            </div>
          </div>

          <div className="flex items-center justify-center">
            {/* Mock tablet / canvas illustration */}
            <div className="w-full max-w-md">
              <div className="bg-linear-to-b from-white/6 to-white/3 rounded-2xl p-6 shadow-2xl border border-white/6">
                <div className="h-64 bg-[#f8fafc] rounded-lg overflow-hidden flex items-center justify-center">
                  {/* Very simple kanji mock - stays light so it reads on dark background */}
                  <div className="text-7xl font-japanese text-[#0f172a]">
                    水
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="h-10 bg-white/5 rounded"></div>
                  <div className="h-10 bg-white/5 rounded"></div>
                  <div className="h-10 bg-white/5 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="glass p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Real-time feedback</h3>
            <p className="text-sm muted">
              Get instant feedback on stroke order and shape so you can correct
              mistakes quickly.
            </p>
          </div>
          <div className="glass p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">
              Personalized practice
            </h3>
            <p className="text-sm muted">
              Practice words tailored to your level and track improvement with
              saved sessions.
            </p>
          </div>
          <div className="glass p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Cloud sync</h3>
            <p className="text-sm muted">
              Save your progress to your Google account and continue from any
              device.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Japanese Writing Practice — Made with ♥
        </div>
      </footer>
    </div>
  );
}
