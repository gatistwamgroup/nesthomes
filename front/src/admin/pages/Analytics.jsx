import React, { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";

import {
  Globe,
  Eye,
  Activity,
  MousePointerClick,
  RefreshCw,
  Monitor,
  Smartphone,
  TrendingUp,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Analytics = () => {
  const [range, setRange] = useState("30 Days");

  const visitorData = [
    { day: "Mon", visitors: 120 },
    { day: "Tue", visitors: 210 },
    { day: "Wed", visitors: 180 },
    { day: "Thu", visitors: 260 },
    { day: "Fri", visitors: 320 },
    { day: "Sat", visitors: 280 },
    { day: "Sun", visitors: 410 },
  ];

  const trafficSources = [
    { name: "Organic", value: 55 },
    { name: "Direct", value: 25 },
    { name: "Social", value: 20 },
  ];

  const COLORS = [
    "#355B5E",
    "#5F7A7C",
    "#AFC8B5",
  ];

  const stats = [
    {
      title: "Visitors",
      value: "12,540",
      growth: "+18%",
      icon: <Globe size={24} />,
    },
    {
      title: "Page Views",
      value: "21,800",
      growth: "+12%",
      icon: <Eye size={24} />,
    },
    {
      title: "Sessions",
      value: "8,220",
      growth: "+9%",
      icon: <MousePointerClick size={24} />,
    },
    {
      title: "Bounce Rate",
      value: "32%",
      growth: "-4%",
      icon: <Activity size={24} />,
    },
  ];

  return (
    <AdminLayout>

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between gap-5 mb-8">

        <div>

          <h1 className="text-3xl font-bold text-[#355B5E]">

            Website Analytics

          </h1>

          <p className="text-gray-500 mt-2">

            Monitor website traffic & user engagement

          </p>

        </div>

        <div className="flex flex-wrap gap-3">

          {["7 Days", "30 Days", "90 Days"].map((item) => (

            <button
              key={item}
              onClick={() => setRange(item)}
              className={`px-5 py-3 rounded-full transition ${
                range === item
                  ? "bg-[#355B5E] text-white"
                  : "bg-white"
              }`}
            >

              {item}

            </button>

          ))}

        </div>

      </div>

      {/* GA Status */}

      <div className="bg-gradient-to-r from-[#355B5E] to-[#4D6C6F] rounded-[30px] p-6 text-white mb-8">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-5">

          <div>

            <h3 className="text-2xl font-bold">

              Google Analytics 4

            </h3>

            <p className="text-white/80 mt-2">

              Connect GA4 to fetch real-time website analytics.

            </p>

          </div>

          <button className="bg-white text-[#355B5E] px-6 py-3 rounded-2xl font-semibold">

            Connect GA4

          </button>

        </div>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        {stats.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-[30px] p-6 shadow-sm hover:shadow-xl transition"
          >

            <div className="flex justify-between">

              <div>

                <p className="text-gray-500">

                  {item.title}

                </p>

                <h2 className="text-4xl font-bold text-[#355B5E] mt-3">

                  {item.value}

                </h2>

                <span className="text-green-600 text-sm font-medium">

                  {item.growth} this month

                </span>

              </div>

              <div className="w-14 h-14 rounded-2xl bg-[#F5F7F9] flex items-center justify-center text-[#355B5E]">

                {item.icon}

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Main Charts */}

      <div className="grid xl:grid-cols-3 gap-8 mb-8">

        {/* Visitors Chart */}

        <div className="xl:col-span-2 bg-white rounded-[30px] p-6 shadow-sm">

          <div className="flex justify-between items-center mb-6">

            <h3 className="text-xl font-semibold">

              Visitor Trend

            </h3>

            <TrendingUp className="text-[#355B5E]" />

          </div>

          <ResponsiveContainer width="100%" height={320}>

            <AreaChart data={visitorData}>

              <defs>

                <linearGradient
                  id="colorVisitors"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="5%"
                    stopColor="#355B5E"
                    stopOpacity={0.3}
                  />

                  <stop
                    offset="95%"
                    stopColor="#355B5E"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="visitors"
                stroke="#355B5E"
                fillOpacity={1}
                fill="url(#colorVisitors)"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

        {/* Realtime */}

        <div className="bg-white rounded-[30px] p-6 shadow-sm">

          <div className="flex justify-between items-center">

            <h3 className="font-semibold">

              Realtime Users

            </h3>

            <RefreshCw size={18} />

          </div>

          <h2 className="text-6xl font-bold text-[#355B5E] mt-8">

            24

          </h2>

          <p className="text-gray-500 mt-4">

            Active users on website

          </p>

          <div className="mt-8 p-4 rounded-2xl bg-green-50 text-green-700">

            +12% from last hour

          </div>

        </div>

      </div>

      {/* Bottom Widgets */}

      <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">

        {/* Traffic Source */}

        <div className="bg-white rounded-[30px] p-6 shadow-sm">

          <h3 className="font-semibold mb-6">

            Traffic Sources

          </h3>

          <ResponsiveContainer width="100%" height={220}>

            <PieChart>

              <Pie
                data={trafficSources}
                dataKey="value"
                outerRadius={80}
                label
              >

                {trafficSources.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />

                ))}

              </Pie>

            </PieChart>

          </ResponsiveContainer>

        </div>

        {/* Devices */}

        <div className="bg-white rounded-[30px] p-6 shadow-sm">

          <h3 className="font-semibold mb-6">

            Devices

          </h3>

          <div className="space-y-5">

            <div className="flex justify-between">

              <div className="flex gap-3">

                <Monitor />

                Desktop

              </div>

              <span>68%</span>

            </div>

            <div className="flex justify-between">

              <div className="flex gap-3">

                <Smartphone />

                Mobile

              </div>

              <span>32%</span>

            </div>

          </div>

        </div>

        {/* Countries */}

        <div className="bg-white rounded-[30px] p-6 shadow-sm">

          <h3 className="font-semibold mb-6">

            Top Countries

          </h3>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>USA</span>
              <span>48%</span>
            </div>

            <div className="flex justify-between">
              <span>Canada</span>
              <span>18%</span>
            </div>

            <div className="flex justify-between">
              <span>UK</span>
              <span>12%</span>
            </div>

            <div className="flex justify-between">
              <span>Australia</span>
              <span>8%</span>
            </div>

          </div>

        </div>

        {/* Top Pages */}

        <div className="bg-white rounded-[30px] p-6 shadow-sm">

          <h3 className="font-semibold mb-6">

            Top Pages

          </h3>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Home</span>
              <span>4,820</span>
            </div>

            <div className="flex justify-between">
              <span>About</span>
              <span>2,340</span>
            </div>

            <div className="flex justify-between">
              <span>Contact</span>
              <span>1,920</span>
            </div>

            <div className="flex justify-between">
              <span>Gallery</span>
              <span>1,420</span>
            </div>

          </div>

        </div>

      </div>

    </AdminLayout>
  );
};

export default Analytics;