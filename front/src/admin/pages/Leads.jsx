import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import AdminLayout from "../layouts/AdminLayout";
import API from "../api/axios";
import {
  Search,
  Download,
  Eye,
  Users,
  UserPlus,
  PhoneCall,
  CheckCircle,
} from "lucide-react";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const Leads = () => {

  const exportToExcel = () => {
    const excelData = filteredLeads.map((lead) => ({
      Name: lead.fullName || lead.name || "Unknown",
      Email: lead.email,
      Phone: lead.phone,
      Status: lead.status,
      Message: lead.message || "",
      Date: new Date(lead.createdAt || lead.date).toLocaleDateString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const fileData = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8" });
    saveAs(fileData, `Leads_${new Date().toISOString().split("T")[0]}.xlsx`);
  };

  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [leadStatus, setLeadStatus] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedLead, setSelectedLead] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [stats, setStats] = useState({
    totalLeads: 0,
    newLeads: 0,
    followUps: 0,
    closed: 0,
  });
  const leadsPerPage = 10;

  const filteredLeads = leads.filter((lead) => {
    const statusMatch = statusFilter === "All" ? true : lead.status === statusFilter;
    const searchMatch = lead.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        lead.email?.toLowerCase().includes(searchTerm.toLowerCase());
    return statusMatch && searchMatch;
  });

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  const currentLeads = filteredLeads;

  const getStatusStyle = (status) => {
    switch (status) {
      case "New": return "bg-green-100 text-green-700";
      case "Contacted": return "bg-blue-100 text-blue-700";
      case "Follow Up": return "bg-yellow-100 text-yellow-700";
      case "Closed": return "bg-gray-100 text-gray-700";
      default: return "bg-gray-100";
    }
  };

  const fetchLeads = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await API.get(`/leads?page=${currentPage}&limit=${leadsPerPage}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLeads(response.data.leads);
      if (response.data.pagination) {
        setTotalPages(response.data.pagination.totalPages);
        setTotalRecords(response.data.pagination.totalRecords);
      }
      if (response.data.stats) {
        setStats(response.data.stats);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const displayStats = [
    { title: "Total Leads", value: stats.totalLeads, icon: <Users size={22} /> },
    { title: "New Leads", value: stats.newLeads, icon: <UserPlus size={22} /> },
    { title: "Follow Up", value: stats.followUps, icon: <PhoneCall size={22} /> },
    { title: "Closed", value: stats.closed, icon: <CheckCircle size={22} /> }
  ];

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      await API.put(
        `/leads/${selectedLead._id}`,
        { status: leadStatus, notes },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchLeads();
      toast.success("Lead Updated Successfully");
      setDrawerOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Update Failed");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Delete this lead?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("adminToken");
      await API.delete(`/leads/${selectedLead._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchLeads();
      setDrawerOpen(false);
      toast.success("Lead Deleted");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete lead.");
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [currentPage]);

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

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between gap-5 mb-8">

        <div>

          <h1 className="text-3xl font-bold text-[#355B5E]">

            Lead Management

          </h1>

          <p className="text-gray-500 mt-2">

            Track and manage all inquiries

          </p>

        </div>

        <button
              onClick={exportToExcel}
              className="
              bg-[#355B5E]
              text-white
              px-6
              py-4
              rounded-2xl
              flex
              items-center
              gap-3
              "
            >

              <Download size={18} />

              Export Excel

            </button>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        {displayStats.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-lg transition"
          >

            <div className="flex justify-between">

              <div>

                <p className="text-gray-500">

                  {item.title}

                </p>

                <h3 className="text-4xl font-bold text-[#355B5E] mt-3">

                  {item.value}

                </h3>

              </div>

              <div className="bg-[#F5F7F9] w-12 h-12 rounded-xl flex items-center justify-center text-[#355B5E]">

                {item.icon}

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Search + Filters */}

      <div className="bg-white rounded-[30px] p-6 shadow-sm mb-8">

        <div className="flex flex-col lg:flex-row gap-5 justify-between">

          {/* Search */}

          <div className="relative w-full lg:w-[350px]">

            <Search
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#F5F7F9] outline-none"
            />

          </div>

          {/* Filters */}

          <div className="flex flex-wrap gap-3">

            {[
              "All",
              "New",
              "Contacted",
              "Follow Up",
              "Closed",
            ].map((status) => (

              <button
                key={status}
                onClick={() =>
                  setStatusFilter(status)
                }
                className={`px-5 py-3 rounded-full transition ${
                  statusFilter === status
                    ? "bg-[#355B5E] text-white"
                    : "bg-[#F5F7F9]"
                }`}
              >

                {status}

              </button>

            ))}

          </div>

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-[30px] shadow-sm overflow-hidden">

        <div className="p-6 border-b">

          <h2 className="text-xl font-semibold">

            Recent Leads

          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="bg-[#F8F9FB]">

                <th className="text-left p-5">

                  Name

                </th>

                <th className="text-left p-5">

                  Phone

                </th>

                <th className="text-left p-5">

                  Email

                </th>

                <th className="text-left p-5">

                  Status

                </th>

                <th className="text-left p-5">

                  Date

                </th>

                <th className="text-left p-5">

                  Action

                </th>

              </tr>

            </thead>

            <tbody>

              {currentLeads.map((lead) => (

                <tr
                  key={lead._id}
                  className="border-b hover:bg-gray-50 transition"
                >

                  <td className="p-5 font-medium">

                    {lead.fullName}

                  </td>

                  <td className="p-5">

                    {lead.phone}

                  </td>

                  <td className="p-5">

                    {lead.email}

                  </td>

                  <td className="p-5">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${getStatusStyle(
                        lead.status
                      )}`}
                    >

                      {lead.status}

                    </span>

                  </td>

                  <td className="p-5">

                    {new Date(
lead.createdAt
).toLocaleDateString()}

                  </td>

                  <td className="p-5">

                    <button
                        onClick={() => {

                            setSelectedLead(lead);

                            setLeadStatus(lead.status);

                            setNotes(
 lead.notes || ""
);

                            setDrawerOpen(true);

                            }}
                        className="bg-[#355B5E] text-white px-4 py-2 rounded-xl flex items-center gap-2"
                        >

                        <Eye size={16}/>

                        View

                        </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
        
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between p-6 border-t">
            <span className="text-gray-500 text-sm">
              Showing page {currentPage} of {totalPages} ({totalRecords} leads)
            </span>
            <div className="flex gap-2">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-100 rounded-xl text-sm font-medium disabled:opacity-50"
              >
                Previous
              </button>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-[#355B5E] text-white rounded-xl text-sm font-medium disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Overlay */}

{
drawerOpen && (

<div
onClick={()=>setDrawerOpen(false)}
className="fixed inset-0 bg-black/40 z-40"
/>

)
}

{/* Drawer */}

<div
className={`
fixed top-0 right-0 h-screen w-full md:w-[500px]
bg-white z-50 shadow-2xl
transition-all duration-500
overflow-y-auto
${drawerOpen ? "translate-x-0" : "translate-x-full"}
`}
>

<div className="p-8">

<div className="flex justify-between items-center mb-8">

<h2 className="text-2xl font-bold text-[#355B5E]">

Lead Details

</h2>

<button
onClick={()=>setDrawerOpen(false)}
className="w-10 h-10 rounded-full bg-gray-100"
>

✕

</button>

</div>

{
selectedLead && (

<>

{/* Profile */}

<div className="bg-[#F5F7F9] rounded-[25px] p-6 mb-6">

<div className="w-16 h-16 rounded-full bg-[#355B5E] text-white flex items-center justify-center text-2xl font-bold mb-4">

{selectedLead.fullName.charAt(0)}

</div>

<h3 className="text-xl font-semibold">

{selectedLead.fullName}

</h3>

<p className="text-gray-500">

{selectedLead.email}

</p>

</div>

{/* Information */}

<div className="space-y-5">

<div>

<label className="text-sm text-gray-500">

Phone Number

</label>

<input
value={selectedLead.phone}
readOnly
className="w-full mt-2 bg-[#F5F7F9] p-4 rounded-xl"
/>

</div>

<div>

<label className="text-sm text-gray-500">

Email Address

</label>

<input
value={selectedLead.email}
readOnly
className="w-full mt-2 bg-[#F5F7F9] p-4 rounded-xl"
/>

</div>

<div>

<label className="text-sm text-gray-500">

Lead Status

</label>

<select
value={leadStatus}
onChange={(e)=>
setLeadStatus(e.target.value)
}
className="w-full mt-2 bg-[#F5F7F9] p-4 rounded-xl"
>

<option>New</option>

<option>Contacted</option>

<option>Follow Up</option>

<option>Closed</option>

</select>

</div>

<div>

<label className="text-sm text-gray-500">

Message

</label>

<textarea value={selectedLead.message || ""} readOnly rows="4"
placeholder="Lead message will appear here..."
className="w-full mt-2 bg-[#F5F7F9] p-4 rounded-xl resize-none"
/>

</div>

<div>

<label className="text-sm text-gray-500">

Internal Notes

</label>

<textarea
rows="5"
value={notes}
onChange={(e)=>
setNotes(e.target.value)
}
placeholder="Add notes..."
className="w-full mt-2 bg-[#F5F7F9] p-4 rounded-xl resize-none"
/>

</div>

</div>

{/* Actions */}

<div className="grid grid-cols-2 gap-4 mt-8">

<a
href={`tel:${selectedLead.phone}`}
className="bg-[#355B5E] text-white text-center py-4 rounded-xl"
>

Call

</a>

<a
href={`mailto:${selectedLead.email}`}
className="bg-[#355B5E] text-white text-center py-4 rounded-xl"
>

Email

</a>

</div>

<button
onClick={handleSave}
className="w-full mt-4 bg-green-600 text-white py-4 rounded-xl"
>

Save Changes

</button>

<button
onClick={handleDelete}
className="w-full mt-4 bg-red-500 text-white py-4 rounded-xl"
>

Delete Lead

</button>

</>

)

}

</div>

</div>

    </AdminLayout>
  );
};

export default Leads;