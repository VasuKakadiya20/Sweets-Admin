import React from 'react'
import { fetchDataFromApi, updatedata } from "../../api";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Divider
} from "@mui/material";
import { useState } from 'react';
import { useEffect } from 'react';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import toast, { Toaster } from "react-hot-toast";
import { ButtonGroup, Menu, MenuItem } from "@mui/material";


function ALLOrderlist() {
  const [order, setOrder] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [open, setOpen] = useState(false);

// feching
  useEffect(() => {
    fetchDataFromApi(`/order/`).then((res) => {
      setOrder(res);
    });
  }, []);

  const handleOpen = (order) => {
    setSelectedOrder(order);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedOrder(null);
    setOpen(false);
  };

// pdf Creating
  const invoice = (item) => {
    const doc = new jsPDF("p", "mm", "a4");

    doc.setFontSize(16);
    doc.text("TAX INVOICE", 105, 15, { align: "center" });

    doc.setFontSize(20);
    doc.text("Marvel Crunch Chikki", 105, 25, { align: "center" });

    doc.setFontSize(10);
    doc.text(
      "Plot no 133, Shreeji textile Velenja sayan road Nr ramvatika Velenja-394150.",
      105,
      31,
      { align: "center" }
    );
    doc.text("GST No. 24GCFPB5431P1ZH", 105, 36, { align: "center" });

    autoTable(doc, {
      startY: 42,
      theme: "grid",
      styles: { fontSize: 10, cellPadding: 3 },

      body: [
        [
          { content: "Bill To\n" + item.Firstname + " " + item.Lastname + "\n" + item.Phonenumber, rowSpan: 2 },
          { content: "Place of Supply\n" + item.Landmark + "\n" + item.City + ", " + item.State + " - " + item.Pin_code, rowSpan: 2 },
          "Order Id",
          item.OrderID
        ],
        ["Dated", item.Date]
      ],
      columnStyles: {
        2: { halign: "center" },
        3: { halign: "center" }
      }
    });

    const productRows = item.items?.map(p => [
      p.name,
      p.hsn || "-",
      p.qty,
      "pcs",
      p.price || p.subtotal / p.qty,
      p.subtotal
    ]);

    const totalAmount = productRows.reduce((sum, r) => sum + Number(r[5]), 0);

    autoTable(doc, {
      head: [["Description", "HSN", "Qty", "Unit", "Rate", "Amount"]],
      body: productRows,
      startY: doc.lastAutoTable.finalY + 2,
      theme: "grid",
      columnStyles: {
        0: { cellWidth: 82 },
        1: { cellWidth: 20, halign: "center" },
        2: { cellWidth: 15, halign: "right" },
        3: { cellWidth: 15, halign: "left" },
        4: { cellWidth: 20, halign: "right" },
        5: { cellWidth: 30, halign: "right" },
      },
    });

    autoTable(doc, {
      startY: doc.lastAutoTable.finalY,
      theme: "grid",
      styles: { fontSize: 10, cellPadding: 3 },

      body: [
        [{ content: "Subtotal" }, { content: totalAmount.toFixed(2), styles: { halign: "right", fontStyle: "bold" } }],
        [{ content: "Shipping" }, { content: "100.00", styles: { halign: "right", fontStyle: "bold" } }],
        [{ content: "Total" }, { content: (Number(item.Total)).toFixed(2), styles: { halign: "right", fontStyle: "bold" } }]
      ]
    });

    autoTable(doc, {
      startY: doc.lastAutoTable.finalY,
      theme: "grid",
      styles: { fontSize: 10, cellPadding: 3 },

      body: [
        [
          {
            content: "Amount Chargeable (in words)\nRupees " +
              numberToWords(item.Total) + "\n" + "\n" + "Payment Method :- " + item.Payment_method,
            colSpan: 3
          },
          {
            content: "For Marvel Crunch Chikki\n\n\nAuthorised Signatory",
            colSpan: 3,
            styles: { halign: "right" }
          }
        ]
      ]
    });

    doc.save(`${item.Firstname}_Invoice_${item.OrderID}.pdf`);
  };

  const numberToWords = (num) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    })
      .format(num)
      .replace("₹", "")
      .trim();
  };

// Status Changing
  const updateStatus = async (orderToUpdate) => {
    try {
      await updatedata(`/order/${orderToUpdate._id}`, {
        Status: orderToUpdate.Status,
      });

      toast.success("Status Updated Successfully!");

      setOrder(prev =>
        prev.map(o =>
          o._id === orderToUpdate._id ? orderToUpdate : o
        )
      );
    } catch (err) {
      toast.error("Failed to Update Status");
    }
  };

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <div className="contact-banner slideUp">
        <div className="overlay"></div>
        <div className="wave-top"></div>
        <div className="content">
          <h1>Order List</h1>

          <div className="breadcrumb">
            <a href="/" className="text-[#E09F40] font-bold text-sm">Home</a>
            <span className='font-bold text-sm text-white'>//</span>
            <span className='font-bold text-sm text-white'>Order List</span>
          </div>
        </div>
      </div>

      <div className="bg-[#F4F1EA]">
        <div className="max-w-5xl mx-auto p-6">
          <h2 className="text-2xl font-bold mb-6 text-[#713722] border-l-4 border-[#713722] pl-3">
            Order List
          </h2>
          <div className="space-y-5">
            {order.sort((a, b) => new Date(b.OrderID) - new Date(a.OrderID)).map((item) => (

              <div key={item._id} className="bg-white rounded-2xl shadow-md border p-5">
                <div className="flex justify-between">
                  <p className="font-bold">
                    Order Id : <span className="font-semibold text-gray-600 text-sm">{item.OrderID}</span>
                  </p>

                  <span className="px-3 py-1 text-sm rounded-lg bg-green-100 text-green-700 font-semibold">
                    {item.Status || "pending"}
                  </span>
                </div>

                <div className="mt-2 text-sm flex justify-between">
                  <p className="font-bold">Date : <span className="font-semibold text-gray-600">{item.Date}</span></p>
                  <p className="font-bold">Payment Method : <span className="font-semibold text-gray-600">{item.Payment_method}</span> </p>
                  <p className="font-bold">Total : <span className="font-semibold text-gray-600">₹ {item.Total}</span></p>
                </div>
                <div className="mt-2 text-sm flex justify-between">
                  <p className="font-bold">Client Name : <span className="font-semibold text-gray-600">{item.Firstname} {item.Lastname}</span></p>
                  <p className="font-bold">City : <span className="font-semibold text-gray-600">{item.City}</span> </p>
                  <p className="font-bold">State: <span className="font-semibold text-gray-600">{item.State}</span></p>
                </div>

                <div className="text-right mt-3">
                  <button
                    className="theme-btn ml-2"
                    onClick={() => invoice(item)}
                  >
                    Download Details
                  </button>
                  <button
                    className="theme-btn ml-2"
                    onClick={() => handleOpen(item)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>
          <div className="flex justify-between text-[18px]">
            <p className='font-bold'>Order Details : <span className="font-semibold text-md text-gray-600">{selectedOrder?.OrderID}</span></p>
              <button
                className="theme-btn"
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                {selectedOrder?.Status || "Select Status"} ▼
              </button>
      
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              {["Pending", "Processing", "Shipped", "Delivered"].map(
                (status) => (
                  <MenuItem
                    key={status}
                    onClick={() => {
                      const updated = { ...selectedOrder, Status: status };
                      setSelectedOrder(updated);
                      setAnchorEl(null);
                      updateStatus(updated);
                      handleClose();
                    }}
                  >
                    {status}
                  </MenuItem>
                )
              )}
            </Menu>
          </div>
        </DialogTitle>

        <DialogContent dividers>

          <div className="flex justify-between">
            {/* <p><b>Status :</b> <span className="px-3 py-1 text-sm rounded-lg bg-green-100 text-green-700">{selectedOrder?.Status}</span></p> */}
            <p><b>Date :</b> {selectedOrder?.Date}</p>
            <p><b>Payment Method :</b> {selectedOrder?.Payment_method || "UPI"}</p>
          </div>

          <Divider sx={{ my: 2 }} />

          <h4 className="font-bold mb-2">Shipping Address</h4>
          <p>{selectedOrder?.Firstname} {selectedOrder?.Lastname}</p>
          <p>{selectedOrder?.Landmark}</p>
          <p>{selectedOrder?.City}, {selectedOrder?.State} — {selectedOrder?.Pin_code}</p>
          <p>Phone : {selectedOrder?.Phonenumber}</p>

          <Divider sx={{ my: 2 }} />

          <h4 className="font-bold mb-2">Items</h4>

          <div className="space-y-4">
            {selectedOrder?.items?.map((p) => (
              <div key={p.productId} className="flex justify-between mb-2">
                <div className="flex gap-3">
                  <img src={p.image} className="w-15 h-15 rounded-full object-cover" />
                  <div>
                    <p className="font-medium">{p.name}</p>
                    <p className="text-sm text-gray-500">Qty: {p.qty}</p>
                  </div>
                </div>
                <p className="font-semibold">₹ {p.subtotal}</p>
              </div>
            ))}
          </div>
          <p className="text-end font-bold">shipping Charge : ₹ 100</p>
          <p className="mt-2 text-end font-bold">Total : ₹ {selectedOrder?.Total}</p>

        </DialogContent>

        <DialogActions>
          <button className='theme-btn ml-2' onClick={handleClose}>Close</button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ALLOrderlist