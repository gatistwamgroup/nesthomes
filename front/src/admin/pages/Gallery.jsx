import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import API from "../api/axios";
import AdminLayout from "../layouts/AdminLayout";
import {
  Upload,
  Trash2,
  Search,
  Image as ImageIcon,
  X,
  Plus,
} from "lucide-react";

const Gallery = () => {

  const [category, setCategory] =
    useState("All");

  const [search, setSearch] =
    useState("");

  const [showUpload, setShowUpload] =
    useState(false);

  const [loading, setLoading] =
useState(true);

const [uploading, setUploading] =
useState(false);

const [title, setTitle] =
useState("");

const [selectedCategory, setSelectedCategory] =
useState("Bedrooms");

const [selectedFile, setSelectedFile] =
useState(null);

  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const limit = 20;

const fetchGallery =
async () => {

 try {

  const token =
  localStorage.getItem(
   "adminToken"
  );

      const response = await API.get(`/gallery?page=${currentPage}&limit=${limit}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setImages(response.data.images);
      if (response.data.pages) setTotalPages(response.data.pages);
      if (response.data.total) setTotalRecords(response.data.total);

 } catch(error){

  console.log(error);

 } finally {

  setLoading(false);

 }

};
  useEffect(() => {
    fetchGallery();
  }, [currentPage]);

const handleUpload =
async () => {

 try {

  if(!selectedFile){
   return toast.error("Please select an image");
  }
  if (!title.trim()) {
   return toast.error("Please provide an image title");
  }

  setUploading(true);

  const token =
  localStorage.getItem(
   "adminToken"
  );

  const formData =
  new FormData();

  formData.append(
   "title",
   title
  );

  formData.append(
   "category",
   selectedCategory
  );

  formData.append(
   "image",
   selectedFile
  );

  await API.post(
   "/gallery",
   formData,
   {
    headers:{
     Authorization:
     `Bearer ${token}`
    }
   }
  );

  await fetchGallery();

  toast.success("Image uploaded successfully!");
  setShowUpload(false);
  setSelectedFile(null);
  setTitle("");

 } catch(error){

  console.log(error);
  toast.error(error.response?.data?.message || "Upload Failed");

 } finally {

  setUploading(false);

 }

};
  const filteredImages = images.filter((img) => {

    const categoryMatch =
      category === "All"
        ? true
        : img.category === category;

    const searchMatch =
      img.category
        .toLowerCase()
        .includes(search.toLowerCase());

    return categoryMatch && searchMatch;

  });

  const handleDelete =
async (id) => {

 const confirmDelete =
 window.confirm(
  "Delete image?"
 );

 if(!confirmDelete)
 return;

 try{

  const token =
  localStorage.getItem(
   "adminToken"
  );

  await API.delete(
   `/gallery/${id}`,
   {
    headers:{
     Authorization:
     `Bearer ${token}`
    }
   }
  );

  fetchGallery();
  toast.success("Image deleted successfully!");

 }catch(error){

  console.log(error);
  toast.error("Failed to delete image.");

 }

};

  return (

    <AdminLayout>

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between gap-5 mb-8">

        <div>

          <h1 className="text-3xl font-bold text-[#355B5E]">

            Gallery Management

          </h1>

          <p className="text-gray-500 mt-2">

            Manage website images and categories

          </p>

        </div>

        <button
          onClick={() =>
            setShowUpload(true)
          }
          className="bg-[#355B5E] text-white px-6 py-4 rounded-2xl flex items-center gap-3"
        >

          <Plus size={18} />

          Upload Images

        </button>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-2 gap-6 mb-8">

        <div className="bg-white rounded-[25px] p-6 shadow-sm">

          <p className="text-gray-500">

            Total Images

          </p>

          <h2 className="text-4xl font-bold text-[#355B5E] mt-3">

            {totalRecords}

          </h2>

        </div>

        <div className="bg-white rounded-[25px] p-6 shadow-sm">

          <p className="text-gray-500">

            Categories

          </p>

          <h2 className="text-4xl font-bold text-[#355B5E] mt-3">

            4

          </h2>

        </div>

        

      </div>

      {/* Search + Filters */}

      <div className="bg-white rounded-[30px] p-6 shadow-sm mb-8">

        <div className="flex flex-col lg:flex-row gap-5 justify-between">

          <div className="relative lg:w-[350px]">

            <Search
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search images..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full pl-12 pr-4 py-4 bg-[#F5F7F9] rounded-2xl outline-none"
            />

          </div>

          <div className="flex flex-wrap gap-3">

            {[
              "All",
              "Bedrooms",
              "Living Areas",
              "Community Spaces",
              "Outdoor Areas",
            ].map((item) => (

              <button
                key={item}
                onClick={() =>
                  setCategory(item)
                }
                className={`px-5 py-3 rounded-full transition ${
                  category === item
                    ? "bg-[#355B5E] text-white"
                    : "bg-[#F5F7F9]"
                }`}
              >

                {item}

              </button>

            ))}

          </div>

        </div>

      </div>

      {/* Gallery */}

      {loading ? (
        <div className="flex justify-center items-center h-[40vh] w-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#355B5E]"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        {filteredImages.map((image) => (

          <div
            key={image._id}
            className="group bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition"
          >

            <div className="relative">

              <img
                src={image.imageUrl}
                alt=""
                className="w-full h-[250px] object-cover"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                <button
                  onClick={() =>
                    handleDelete(image._id)
                  }
                  className="bg-red-500 text-white p-3 rounded-full"
                >

                  <Trash2 size={18} />

                </button>

              </div>

            </div>

            <div className="p-5">

              <span className="bg-[#F5F7F9] px-3 py-1 rounded-full text-sm">

                {image.category}

              </span>

            </div>

          </div>

        ))}

      </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between p-6 bg-white rounded-[30px] shadow-sm mt-8">
          <span className="text-gray-500 text-sm">
            Showing page {currentPage} of {totalPages} ({totalRecords} images)
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

      {/* Upload Modal */}

      {showUpload && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-5">

          <div className="bg-white rounded-[35px] p-8 w-full max-w-xl">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold">

                Upload Images

              </h2>

              <button
                onClick={() =>
                  setShowUpload(false)
                }
              >

                <X />

              </button>

            </div>

            
                <div className="space-y-5">

<input
type="text"
placeholder="Image Title"
value={title}
onChange={(e)=>
setTitle(
 e.target.value
)
}
className="w-full border p-4 rounded-xl"
/>

<select
value={selectedCategory}
onChange={(e)=>
setSelectedCategory(
 e.target.value
)
}
className="w-full border p-4 rounded-xl"
>

<option>
Bedrooms
</option>

<option>
Living Areas
</option>

<option>
Community Spaces
</option>

<option>
Outdoor Areas
</option>

</select>

<input
type="file"
accept="image/*"
onChange={(e)=>
setSelectedFile(
 e.target.files[0]
)
}
className="w-full border p-4 rounded-xl"
/>

</div>
            <button
onClick={handleUpload}
disabled={uploading}
className="w-full mt-6 bg-[#355B5E] text-white py-4 rounded-2xl"
>

{
uploading
?
"Uploading..."
:
"Upload Image"
}

</button>

          </div>

        </div>

      )}

    </AdminLayout>

  );
};

export default Gallery;