import React,{ useState, useEffect } from "react";

import API from "../api/axios";
import AdminLayout from "../layouts/AdminLayout";

import {
  Plus,
  Trash2,
  Eye,
  EyeOff,
  Star,
  Search,
  X,
  Quote,
  Award,
} from "lucide-react";
import toast from "react-hot-toast";

const Testimonials = () => {

  const [search, setSearch] =
    useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [loading,setLoading] =
useState(true);

const [uploading,setUploading] =
useState(false);

const [name,setName] =
useState("");

const [review,setReview] =
useState("");

const [rating,setRating] =
useState(5);

const [status,setStatus] =
useState("Published");

const [image,setImage] =
useState(null);

  const [testimonials, setTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [publishedCount, setPublishedCount] = useState(0);
  const [featuredCount, setFeaturedCount] = useState(0);
  const limit = 20;

  const filteredTestimonials =
    testimonials.filter((item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );


  const fetchTestimonials =
async()=>{

 try{

  const token =
  localStorage.getItem(
   "adminToken"
  );

      const response = await API.get(`/testimonials?page=${currentPage}&limit=${limit}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTestimonials(response.data.testimonials);
      if (response.data.pages) setTotalPages(response.data.pages);
      if (response.data.total) setTotalRecords(response.data.total);
      
      // Calculate from entire returned page or backend
      // Normally we'd want this from backend stats, but let's just do length for now
      // Or we can add it to the backend too, let's keep it simple.

 }catch(error){

  console.log(error);

 }finally{

  setLoading(false);

 }

};

  useEffect(() => {
    fetchTestimonials();
  }, [currentPage]);

const handleCreate =
async()=>{

 try{

  if (!name.trim()) return toast.error("Please provide a name");
  if (!review.trim()) return toast.error("Please provide a review");
  if (!image) return toast.error("Please upload an image");

  setUploading(true);

  const token =
  localStorage.getItem(
   "adminToken"
  );

  const formData =
  new FormData();

  formData.append(
   "name",
   name
  );

  formData.append(
   "review",
   review
  );

  formData.append(
   "rating",
   rating
  );

  formData.append(
   "status",
   status
  );

  if(image){

   formData.append(
    "image",
    image
   );

  }

  await API.post(
   "/testimonials",
   formData,
   {
    headers:{
     Authorization:
     `Bearer ${token}`
    }
   }
  );

  await fetchTestimonials();

  toast.success("Testimonial added successfully!");
  setShowModal(false);

  setName("");
  setReview("");
  setImage(null);

 }catch(error){

  console.log(error);
  toast.error(error.response?.data?.message || "Failed to add testimonial");

 }finally{

  setUploading(false);

 }

};

  const toggleStatus = (id) => {

    setTestimonials(
      testimonials.map((item) =>
        item.id === id
          ? {
              ...item,
              status:
                item.status === "Published"
                  ? "Hidden"
                  : "Published",
            }
          : item
      )
    );

  };

  const toggleFeatured = (id) => {

    setTestimonials(
      testimonials.map((item) =>
        item.id === id
          ? {
              ...item,
              featured: !item.featured,
            }
          : item
      )
    );

  };

  const handleDelete =
async(id)=>{

 const confirmDelete =
 window.confirm(
  "Delete testimonial?"
 );

 if(!confirmDelete)
 return;

 try{

  const token =
  localStorage.getItem(
   "adminToken"
  );

  await API.delete(
   `/testimonials/${id}`,
   {
    headers:{
     Authorization:
     `Bearer ${token}`
    }
   }
  );

  fetchTestimonials();
  toast.success("Testimonial deleted successfully!");

 }catch(error){

  console.log(error);
  toast.error("Failed to delete testimonial.");

 }

};

  return (

    <AdminLayout>

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between gap-5 mb-8">

        <div>

          <h1 className="text-3xl font-bold text-[#355B5E]">

            Testimonials

          </h1>

          <p className="text-gray-500 mt-2">

            Manage resident reviews and success stories

          </p>

        </div>

        <button
          onClick={() =>
            setShowModal(true)
          }
          className="bg-[#355B5E] text-white px-6 py-4 rounded-2xl flex items-center gap-3"
        >

          <Plus size={18} />

          Add Testimonial

        </button>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white rounded-[25px] p-6 shadow-sm">

          <p className="text-gray-500">

            Total Reviews

          </p>

          <h2 className="text-4xl font-bold text-[#355B5E] mt-3">

            {totalRecords}

          </h2>

        </div>

        <div className="bg-white rounded-[25px] p-6 shadow-sm">

          <p className="text-gray-500">

            Published

          </p>

          <h2 className="text-4xl font-bold text-[#355B5E] mt-3">

            {
              testimonials.filter(
                (item) =>
                  item.status ===
                  "Published"
              ).length
            }

          </h2>

        </div>

        <div className="bg-white rounded-[25px] p-6 shadow-sm">

          <p className="text-gray-500">

            Featured

          </p>

          <h2 className="text-4xl font-bold text-[#355B5E] mt-3">

            {
              testimonials.filter(
                (item) =>
                  item.featured
              ).length
            }

          </h2>

        </div>

      </div>

      {/* Search */}

      <div className="bg-white rounded-[25px] p-5 shadow-sm mb-8">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search testimonials..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full pl-12 pr-4 py-4 bg-[#F5F7F9] rounded-2xl outline-none"
          />

        </div>

      </div>

      {/* Cards */}

      {loading ? (
        <div className="flex justify-center items-center h-[40vh] w-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#355B5E]"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {filteredTestimonials.map(
          (item) => (

            <div
              key={item._id}
              className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition"
            >

              <div className="relative">

                <img
                  src={item.imageUrl}
                  alt=""
                  className="w-full h-[260px] object-cover"
                />

                {item.featured && (

                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm flex items-center gap-2">

                    <Award size={14}/>

                    Featured

                  </div>

                )}

              </div>

              <div className="p-6">

                <div className="flex justify-between items-center mb-4">

                  <h3 className="font-bold text-xl">

                    {item.name}

                  </h3>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status ===
                      "Published"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >

                    {item.status}

                  </span>

                </div>

                <div className="flex gap-1 mb-4 text-yellow-500">

                  {[...Array(item.rating)].map(
                    (_, i) => (

                      <Star
                        key={i}
                        size={18}
                        fill="currentColor"
                      />

                    )
                  )}

                </div>

                <div className="flex gap-2 mb-4 text-[#355B5E]">

                  <Quote size={18} />

                  <span className="text-sm font-medium">

                    Resident Review

                  </span>

                </div>

                <p className="text-gray-500 leading-7 mb-6">

                  {item.review}

                </p>

                <div className="grid grid-cols-3 gap-3">

                  <button
                    onClick={() =>
                      toggleStatus(
                        item.id
                      )
                    }
                    className="bg-[#F5F7F9] p-3 rounded-xl"
                  >

                    {item.status ===
                    "Published" ? (
                      <EyeOff size={18}/>
                    ) : (
                      <Eye size={18}/>
                    )}

                  </button>

                  <button
                    onClick={() =>
                      toggleFeatured(
                        item.id
                      )
                    }
                    className={`p-3 rounded-xl ${
                      item.featured
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-[#F5F7F9]"
                    }`}
                  >

                    <Award size={18}/>

                  </button>

                  <button
                    onClick={() =>
                      handleDelete(item._id)
                    }
                    className="bg-red-100 text-red-600 p-3 rounded-xl"
                  >

                    <Trash2 size={18}/>

                  </button>

                </div>

              </div>

            </div>

          )
        )}

        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between p-6 bg-white rounded-[30px] shadow-sm mt-8">
          <span className="text-gray-500 text-sm">
            Showing page {currentPage} of {totalPages} ({totalRecords} testimonials)
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

      {/* Add Modal */}

      {showModal && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-5">

          <div className="bg-white rounded-[35px] p-8 w-full max-w-xl">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold">

                Add Testimonial

              </h2>

              <button
                onClick={() =>
                  setShowModal(false)
                }
              >

                <X />

              </button>

            </div>

            <div className="space-y-4">

              <input value={name}
onChange={(e)=>
setName(e.target.value)
}
                placeholder="Name"
                className="w-full p-4 bg-[#F5F7F9] rounded-xl outline-none"
              />

              <textarea value={review}
onChange={(e)=>
setReview(
 e.target.value
)
}
                rows="4"
                placeholder="Review"
                className="w-full p-4 bg-[#F5F7F9] rounded-xl outline-none resize-none"
              />

              <input onChange={(e)=>
setImage(
 e.target.files[0]
)
}
                type="file"
                className="w-full"
              />

            </div>

            <button
onClick={handleCreate}
disabled={uploading}
className="w-full mt-6 bg-[#355B5E] text-white py-4 rounded-2xl"
>

{
uploading
?
"Saving..."
:
"Save Testimonial"
}

</button>

          </div>

        </div>

      )}

    </AdminLayout>

  );
};

export default Testimonials;