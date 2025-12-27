import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { fetchDataFromApi, updatedata } from "../../api";

export default function UpdateItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    itemtitle: "",
    price: "",
    Description: "",
  });

  const [images, setImages] = useState([]);        
  const [newImages, setNewImages] = useState([]);  
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchDataFromApi(`/Item/${id}`).then((res) => {
      setForm({
        itemtitle: res.itemtitle,
        price: res.price,
        Description: res.Description,
      });

      setImages(res.images || []); 
    });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleAddNewImage = () => {
    if (file) {
      setNewImages((prev) => [...prev, file]);
      setFile(null);
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  let formData = new FormData();
  formData.append("itemtitle", form.itemtitle);
  formData.append("price", form.price);
  formData.append("Description", form.Description);

  newImages.forEach((img) => {
    formData.append("images", img);
  });

  try {
    await updatedata(`/Item/${id}`, formData);
    toast.success("Item updated successfully!");
    navigate("/productpage");
  } catch (error) {
    toast.error("Error updating item");
    console.log(error);
  }
};


  return (
    <>
      <Toaster position="top-right" />

      <section className="w-full py-10 px-4 flex justify-center">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-[0_5px_40px_rgba(0,0,0,0.1)] p-10">

          <h2 className="text-center text-[#713722] text-3xl font-bold mb-8">
            Update Item
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="font-semibold text-gray-700">Item Title *</label>
              <input
                type="text"
                name="itemtitle"
                value={form.itemtitle}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E09F40]"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">Price *</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E09F40]"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">Description *</label>
              <textarea
                name="Description"
                rows="3"
                value={form.Description}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E09F40]"
              ></textarea>
            </div>

            <div>
              <label className="font-semibold text-gray-700">Current Images</label>
              <div className="grid grid-cols-3 gap-4 mt-2">
                {images.map((img, i) => (
                <div key={i} className="border-2 border-[#E09F40] p-2 rounded-lg">
                  <img
                    key={i}
                    src={img}
                    className="w-full h-24 object-cover"
                  />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="font-semibold text-gray-700">Upload New Images</label>

              <div className="flex gap-3 mt-2 ">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-[80%] bg-gray-50 border-1 border-gray-300 p-3 rounded-md"
                />

                {file && (
                  <button
                    type="button"
                    onClick={handleAddNewImage}
                    className="px-5 py-2 border-1 border-[#E09F40] text-[#E09F40] rounded-md"
                  >
                    Add
                  </button>
                )}
              </div>
              {newImages.length > 0 && (
                <div className="grid grid-cols-3 gap-4 mt-3">
                  {newImages.map((img, index) => (
                     <div key={index} className="border-2 border-[#E09F40] p-2 rounded-lg">
                    <img
                      key={index}
                      src={URL.createObjectURL(img)}
                      className="w-full h-24 object-cover"
                    />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full text-white py-4 rounded-md 
              text-lg font-semibold btn-viewall"
            >
              Update Now
            </button>
          </form>
        </div>
      </section>
    </>
  );
}