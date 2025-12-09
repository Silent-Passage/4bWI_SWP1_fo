"use client";

import { useAuth } from "@/lib/hooks/useAuth";
import { Menu, Bell, TrendingUp, LogOut } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { user, userData, loading, signOut } = useAuth(); // JETZT mit userData
  const [notifications] = useState(3);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-800 rounded-lg transition md:hidden">
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-emerald-500" />
            <h1 className="text-xl font-bold text-white">WallStreetBets</h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {!loading && user && userData && (
            <>
              <div className="hidden md:flex items-center gap-6">
                <div className="text-right">
                  <p className="text-sm text-gray-400">Balance</p>
                  <p className="font-bold text-emerald-400">
                    ${userData.balance?.toLocaleString() || "100,000"}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-400">Portfolio</p>
                  <p className="font-bold text-white">
                    ${userData.portfolioValue?.toLocaleString() || "0"}
                  </p>
                </div>
              </div>

              <button className="p-2 hover:bg-gray-800 rounded-lg transition relative">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs flex items-center justify-center border-2 border-gray-900">
                    {notifications}
                  </span>
                )}
              </button>

              <div className="flex items-center gap-3">
                <div className="hidden md:block text-right">
                  <p className="font-bold text-white">{user.displayName}</p>
                  <p className="text-sm text-gray-400">{user.email}</p>
                </div>

                <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                  {user.displayName?.charAt(0).toUpperCase() || "T"}
                </div>

                <button
                  onClick={() => signOut()}
                  className="p-2 hover:bg-gray-800 rounded-lg transition text-gray-400 hover:text-white"
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
