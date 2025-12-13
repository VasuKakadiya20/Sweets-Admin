import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../../utils/Api';

function Itemdetailpage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); 
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    fetchDataFromApi(`/Item/${id}`).then((res) => {
      setProduct(res);
      if (res.images && res.images.length > 0) {
        setActiveImage(res.images[0]); 
      }
    });
  }, [id]);

  if (!product) return <div className='text-2xl text-center text-[#c19b5a] mt-20 '>Loading...</div>;

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        <div>
          <img
            src={activeImage}
            alt={product.itemtitle}
            className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-md transition-all"
          />

          <div className="flex gap-4 mt-4">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumb ${i}`}
                onClick={() => setActiveImage(img)}
                className={`w-20 h-20 object-cover cursor-pointer rounded-md border
                  ${activeImage === img ? "border-[#c19b5a] border-2" : "border-gray-300"}
                `}
              />
            ))}
          </div>
        </div>


        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{product.itemtitle}</h2>
          <div className="text-xl font-bold text-[#c19b5a] mt-2">₹ {product.price}</div>

          <div className="mt-2">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600">{product.Description}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Refund Policy</h3>
            <p className="text-gray-600">
              We do not accept returns. Refunds are provided in certain cases. Please email us at
              <span className="font-bold"> care@Dairy.net</span> with relevant information and images for assistance.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default Itemdetailpage;
