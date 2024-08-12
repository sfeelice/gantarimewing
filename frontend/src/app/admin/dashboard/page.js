import React from "react";
import AdminCard from "@/components/adminCard";

const Dashboard = () => {
  const tourismItems = [
    { name: "Tourism Name 1" },
    { name: "Tourism Name 2" },
    { name: "Tourism Name 3" },
    // Tambahkan lebih banyak item sesuai kebutuhan
  ];

  const culinaryItems = [
    { name: "Culinary Name 1" },
    { name: "Culinary Name 2" },
    { name: "Culinary Name 3" },
    // Tambahkan lebih banyak item sesuai kebutuhan
  ];

  return (
    <div
      className="min-h-screen bg-gray-100"
      style={{
        backgroundImage: "url('/pattern-white.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Dashboard Administrator</h1>
        <div className="flex justify-around space-x-8">
          <AdminCard title="Tourism Section" items={tourismItems} />
          <AdminCard title="Culinary Section" items={culinaryItems} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
