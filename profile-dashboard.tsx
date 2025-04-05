"use client"

import { useState } from "react"
import { ChevronDown, LogOut, BarChart2, Grid, Users, MessageSquare, User, Settings, CheckCircle } from "lucide-react"

export default function ProfileDashboard() {
  const [activeTab, setActiveTab] = useState("Overview")

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      {/* Left Sidebar */}
      <div className="w-full md:w-[220px] border-r border-gray-800">
        <div className="p-4 flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
              <span className="text-black text-xs">V</span>
            </div>
            <span className="font-medium">Vertxlabs, Inc</span>
          </div>
          <ChevronDown size={18} />
        </div>

        <nav className="py-4">
          <SidebarItem icon={<Grid size={18} />} label="Dashboard" />
          <SidebarItem icon={<BarChart2 size={18} />} label="Analytics" />
          <SidebarItem icon={<Users size={18} />} label="Connect" />
          <SidebarItem icon={<MessageSquare size={18} />} label="Dealroom" />
          <SidebarItem icon={<User size={18} />} label="Profile" active />
          <SidebarItem icon={<Settings size={18} />} label="Settings" />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Header */}
        <header className="flex justify-between items-center p-4 border-b border-gray-800">
          <h1 className="font-medium">Profile</h1>
          <div className="flex items-center gap-6">
            <button className="text-sm">Activity</button>
            <button className="text-sm flex items-center gap-2">
              <LogOut size={16} />
              Log out
            </button>
          </div>
        </header>

        {/* Tabs */}
        <div className="flex border-b border-gray-800">
          {["Overview", "Portfolio", "Experience", "Media"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-4 text-sm ${activeTab === tab ? "border-b-2 border-white" : "text-gray-400"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
          <div className="ml-auto px-6 py-4 text-sm">
            <span>More</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Overview</h2>

          {/* Profile Card */}
          <div className="bg-[#111] rounded-lg p-8 mb-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <User size={40} className="text-gray-300" />
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <h3 className="text-xl font-bold">Mr A</h3>
                  <CheckCircle size={18} className="text-blue-500 fill-blue-500" />
                </div>
                <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                  <p className="text-sm">Co-Founder & CEO @Vertx</p>
                  <span className="bg-white rounded-sm p-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" fill="black" />
                    </svg>
                  </span>
                </div>
                <div className="inline-block bg-gray-800 rounded-full px-3 py-1 text-xs mb-4">entrepreneur</div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <a href="#" className="bg-[#0077B5] p-1.5 rounded">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-black border border-gray-700 p-1.5 rounded">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-[#EA4335] p-1.5 rounded">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Founded Companies */}
            <div className="border border-green-500 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Founded Companies</h3>
              <div className="mb-6">
                <span className="text-6xl font-bold">02</span>
              </div>

              {/* Company 1 */}
              <div className="flex items-start justify-between mb-4 pb-4 border-b border-gray-800">
                <div className="flex gap-3">
                  <div className="bg-white rounded-sm w-8 h-8 flex items-center justify-center">
                    <span className="text-black text-xs">V</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">Vertx</h4>
                      <span className="bg-green-800 text-green-400 text-xs px-1 rounded">CEO</span>
                    </div>
                    <p className="text-xs text-gray-400">Founded in 2025, in Fintech</p>
                  </div>
                </div>
                <button className="text-xs">View Profile</button>
              </div>

              {/* Company 2 */}
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="bg-white rounded-sm w-8 h-8 flex items-center justify-center">
                    <span className="text-black text-xs">C</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">Company</h4>
                      <span className="bg-blue-800 text-blue-400 text-xs px-1 rounded">FOUNDER</span>
                    </div>
                    <p className="text-xs text-gray-400">Big data information</p>
                    <p className="text-xs text-gray-400">Has acquired Acme/XYZ</p>
                  </div>
                </div>
                <button className="text-xs">View Profile</button>
              </div>
            </div>

            {/* Experience */}
            <div className="border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Experience</h3>
              <div className="mb-6">
                <span className="text-6xl font-bold">03</span>
              </div>

              {/* Experience 1 */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-800">
                <div className="flex gap-3">
                  <div className="bg-white rounded-sm w-8 h-8"></div>
                  <h4 className="font-medium">Company 1</h4>
                </div>
                <button className="text-xs">View Profile</button>
              </div>

              {/* Experience 2 */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-800">
                <div className="flex gap-3">
                  <div className="bg-white rounded-sm w-8 h-8"></div>
                  <h4 className="font-medium">Company 2</h4>
                </div>
                <button className="text-xs">View Profile</button>
              </div>

              {/* Experience 3 */}
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="bg-white rounded-sm w-8 h-8"></div>
                  <h4 className="font-medium">Company 3</h4>
                </div>
                <button className="text-xs">View Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SidebarItem({ icon, label, active = false }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 ${active ? "bg-gray-900" : ""}`}>
      <div className={`w-6 h-6 rounded-full bg-white flex items-center justify-center ${active ? "" : "opacity-50"}`}>
        {icon}
      </div>
      <span className={`text-sm ${active ? "text-white" : "text-gray-400"}`}>{label}</span>
    </div>
  )
}

