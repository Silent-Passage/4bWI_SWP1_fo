export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          🚀 WallStreetBets Trading
        </h1>
        <div className="space-x-4">
          <a
            href="/login"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Start Trading
          </a>
          <a
            href="/dashboard"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
