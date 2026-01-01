import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { postData } from "../../api";


export default function AddNewItem() {
  const [form, setForm] = useState({
    itemtitle: "",
    price: "",
    Description: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState([]);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleAddImage = () => {
    if (selectedFile) {
      setImages((prev) => [...prev, selectedFile]);
      setSelectedFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("itemtitle", form.itemtitle);
    formData.append("price", form.price);
    formData.append("Description", form.Description);

    images.forEach((img) => {
      formData.append("images", img);
    });

    try {
      const res = await postData("/Item/create", formData);
      toast.success("Chikki added successfully!");
      setForm({ itemtitle: "", price: "", Description: "" });
      setImages([]);
    } catch (error) {
      toast.error("Error saving item");
      console.log(error);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <section className="w-full py-10 px-4 flex justify-center">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-[0_5px_40px_rgba(0,0,0,0.1)] p-10">

          <h2 className="text-center text-[#713722] text-3xl font-bold mb-8">
            Add New Chikki
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="font-semibold text-gray-700">Chikki Title *</label>
              <input
                type="text"
                name="itemtitle"
                value={form.itemtitle}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-[#E09F40]"
                placeholder="Enter Chikki title"
              />
            </div>
            <div>
              <label className="font-semibold text-gray-700">Price *</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-[#E09F40]"
                placeholder="Enter price"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">Description *</label>
              <textarea
                name="Description"
                rows="3"
                value={form.Description}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-[#E09F40]"
                placeholder="Write description"
              ></textarea>
            </div>

            <div>
              <label className="font-semibold text-gray-700">Upload Images *</label>

              <div className="flex gap-3">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="mt-2 w-[80%] bg-gray-50 border border-gray-300 p-3 rounded-md
                  focus:outline-none focus:ring-2 focus:ring-[#E09F40]"
                />

                {selectedFile && (
                  <button
                    type="button"
                    onClick={handleAddImage}
                    className="mt-2 px-5 py-2 border-2 border-[#E09F40] text-[#E09F40] rounded-md w-[20%]"
                  >
                    Add
                  </button>
                )}
              </div>
              {images.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-4">
                  {images.map((img, index) => (
                    <div key={index} className="border-2 border-[#E09F40] p-2 rounded-lg">
                      <img
                        src={URL.createObjectURL(img)}
                        className="w-full h-24 object-cover rounded"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#E09F40] text-white py-4 rounded-md 
              text-lg font-semibold hover:bg-[#b2843f] transition btn-viewall"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}