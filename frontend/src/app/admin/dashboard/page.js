import React from "react";

export default function Dashboard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded shadow-lg">
        <h1 className="text-4xl font-bold text-center">Admin Dashboard</h1>
        <p className="mt-4 text-center">Welcome to the admin dashboard! Here you can manage the content and settings of your website.</p>
      </div>
    </div>
  );
}
