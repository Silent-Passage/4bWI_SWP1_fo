"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  TrendingUp,
  PieChart,
  Trophy,
  Users,
  BarChart3,
  FileSpreadsheet,
  Settings,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/trade", icon: TrendingUp, label: "Trade" },
  { href: "/portfolio", icon: PieChart, label: "Portfolio" },
  { href: "/options", icon: BarChart3, label: "Options" },
  { href: "/leaderboard", icon: Trophy, label: "Leaderboard" },
  { href: "/friends", icon: Users, label: "Friends" },
  { href: "/export", icon: FileSpreadsheet, label: "Export" },
  { href: "/settings", icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:block w-64 border-r border-gray-800 bg-gray-900 min-h-[calc(100vh-4rem)]">
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-lg font-bold text-white mb-2">Trading Panel</h2>
          <p className="text-sm text-gray-400">Manage your $100K portfolio</p>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-12">
          <h3 className="text-sm font-bold text-gray-400 mb-4">Watchlist</h3>
          <div className="space-y-3">
            {[
              { symbol: "GME", change: "+5.2%", color: "text-emerald-400" },
              { symbol: "AMC", change: "+3.8%", color: "text-emerald-400" },
              { symbol: "TSLA", change: "-1.2%", color: "text-red-400" },
              { symbol: "AAPL", change: "+0.8%", color: "text-emerald-400" },
              { symbol: "NVDA", change: "+2.5%", color: "text-emerald-400" },
            ].map((stock) => (
              <div
                key={stock.symbol}
                className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition cursor-pointer"
              >
                <div>
                  <span className="font-bold text-white">{stock.symbol}</span>
                  <span className="text-sm text-gray-400 ml-2">NYSE</span>
                </div>
                <span className={`font-bold ${stock.color}`}>
                  {stock.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
          <p className="text-sm text-gray-300">
            <span className="text-emerald-500 font-bold">Tip:</span> Start with
            small trades to learn the platform
          </p>
        </div>
      </div>
    </aside>
  );
}
