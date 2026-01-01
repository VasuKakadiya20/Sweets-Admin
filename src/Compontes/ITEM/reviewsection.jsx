import React, { useState } from "react";
import Rating from '@mui/material/Rating';
import { useEffect } from "react";
import { fetchDataFromApi } from "../../api";

function Reviewsection() {
  const [clientreview, setclientreview] = useState([])
  const fetchreview = () => {
    fetchDataFromApi("/review/").then((data) => {
      setclientreview(data)
    })
  }

  useEffect(() => {
    fetchreview();
  }, [])

  const totalReviews = clientreview.length;
  const avgRating = clientreview.reduce((sum, r) => sum + r.Rating, 0) / totalReviews;
  const starCounts = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  clientreview.forEach((r) => {
    const rounded = Math.ceil(r.Rating);
    starCounts[rounded] += 1;
  });

  const starData = [5, 4, 3, 2, 1].map((star) => {
    const count = starCounts[star];
    const percent = totalReviews ? (count / totalReviews) * 100 : 0;
    return { star, count, percent: Math.round(percent) };
  });

  return (
    <>
      <div className="bg-[#F4F1EA]">
        <div className="max-w-5xl mx-auto py-10 px-4">
          <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
          <div className="flex flex-col md:flex-row md:items-start gap-20 border-b pb-6">
            <div>
              <div className="flex items-center gap-1 text-yellow-500 text-xl">
                <Rating value={avgRating} precision={0.5} readOnly />
              </div>

              <p className="text-sm text-gray-600 mt-2">
                Based on <span className="font-semibold">{totalReviews} Reviews</span>
              </p>
            </div>

            <div className="w-full max-w-sm">
              {starData.map((item) => (
                <div key={item.star} className="flex items-center mb-2">
                  <div className="text-yellow-500 mr-2 text-sm">
                    {"★".repeat(item.star)}
                  </div>
                  <div className="relative w-44 h-2 bg-gray-200 rounded mr-3">
                    <div
                      className="absolute h-2 bg-yellow-400 rounded"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-700">{item.count}</p>
                </div>
              ))}
            </div>
          </div>
         

          <div className="space-y-10 mt-3">
            {clientreview.sort((a, b) => new Date(b.Date) - new Date(a.Date)).map((item, index) => (
              <div className="border-b pb-6" key={item._id}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold"> {item.Name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <Rating name="read-only" value={item.Rating} readOnly />
                      <p className="text-gray-600 text-sm">{item.Date}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="bg-black text-white text-xs px-2 py-1 rounded">
                        Verified
                      </span>
                      <p className="font-medium">{item.Name}</p>
                    </div>
                  </div>
                </div>
                <p className="mt-3 font-medium">{item.Review_Title}</p>
                <p className="text-gray-700 text-sm mt-1">{item.Review_msg}</p>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviewsection
