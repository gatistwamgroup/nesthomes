import React, {
  useState,
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";

import AdminLayout from "../layouts/AdminLayout";

import {
  Users,
  PhoneCall,
  TrendingUp,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [recentLeads, setRecentLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([]);
  const [dateFilter, setDateFilter] = useState("7days");

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("adminToken");
      const statsResponse = await API.get(`/dashboard/stats?filter=${dateFilter}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setStats(statsResponse.data);
      setRecentLeads(statsResponse.data.recentActivity || []);
      // Instead of duplicating `/leads`, use recentActivity for chart, or we skip chart if we can't build it without all leads.
      // Wait, `generateChart` needs leads. To be safe we will keep `/leads?limit=500` or something, or better yet, since the backend handles counting, the chart data should ideally come from the backend. 
      // But let's just use `/leads?limit=100` so we don't query 1000s of leads.
      const leadsResponse = await API.get(`/leads?limit=100`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      generateChart(leadsResponse.data.leads);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const generateChart = (leads) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const chart = [];
    for(let i=6;i>=0;i--){
      const date = new Date();
      date.setDate(date.getDate()-i);
      const dayName = days[date.getDay()];
      const count = leads.filter((lead)=>{
        const leadDate = new Date(lead.createdAt);
        return (leadDate.toDateString() === date.toDateString());
      }).length;
      chart.push({ name:dayName, leads:count });
    }
    setChartData(chart);
  };

  useEffect(() => {
    fetchDashboard();
  }, [dateFilter]);

  const cards = [
    {
      title: "Total Leads",
      value: stats?.totalLeads || 0,
      icon: <Users size={22} />,
    },
    {
      title: "New Leads",
      value: stats?.newLeads || 0,
      icon: <PhoneCall size={22} />,
    },
    {
      title: "Follow Ups",
      value: stats?.followUps || 0,
      icon: <TrendingUp size={22} />,
    },
    {
      title: "Closed Leads",
      value: stats?.closed || 0,
      icon: <CheckCircle size={22} />,
    },
  ];

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex justify-center items-center h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#355B5E]"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>

      {/* Stats Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {cards.map((card, index) => (

          <div
            key={index}
            className="bg-white rounded-[30px] p-6 shadow-sm hover:shadow-xl transition-all duration-300"
          >

            <div className="flex justify-between items-center">

              <div className="w-14 h-14 rounded-2xl bg-[#355B5E]/10 flex items-center justify-center text-[#355B5E]">

                {card.icon}

              </div>
            </div>

            <p className="text-gray-500 mt-6 mb-2">

              {card.title}

            </p>

            <h2 className="text-4xl font-bold text-[#355B5E]">

              {card.value}

            </h2>

          </div>

        ))}

      </div>

      {/* Charts */}

      <div className="grid lg:grid-cols-3 gap-8 mt-10">

        {/* Leads Chart */}

        <div className="lg:col-span-2 bg-white rounded-[30px] shadow-sm p-6">

          <div className="flex justify-between items-center mb-6">

            <div>

              <h2 className="text-xl font-semibold">

                Leads Overview

              </h2>

              <p className="text-gray-500 text-sm">

                Last 7 Days Performance

              </p>

            </div>

          </div>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <AreaChart data={chartData}>

              <XAxis dataKey="name" />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="leads"
                stroke="#355B5E"
                fill="#355B5E20"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

        {/* Activity */}

        <div className="bg-white rounded-[30px] shadow-sm p-6">

          <h2 className="text-xl font-semibold mb-6">

            Recent Activity

          </h2>

   <div className="space-y-5">

  {recentLeads.map((lead) => (

    <div key={lead._id}>

      <p className="font-medium">

        {lead.fullName}

      </p>

      <span className="text-sm text-gray-500">

        Lead Status:
        {" "}
        {lead.status}

      </span>

    </div>

  ))}

</div>

        </div>


      </div>

      

    </AdminLayout>
  );

};

export default Dashboard;