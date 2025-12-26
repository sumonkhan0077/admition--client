// src/components/ApplyModel.jsx
import React, { useRef, useState } from "react";

const ApplyModel = ({ university }) => {
  // university প্রপস থেকে নাম নেব (যাতে মডালে দেখায় "Apply to Harvard University")

  const importModal = useRef(null);
 

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    gpa: "",
    ielts: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handelModal = () => {
    importModal.current.showModal();
  };


 const handleSubmit = async (e) => {
  e.preventDefault();

  // লোডিং দেখানোর জন্য (অপশনাল)
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Submitting...";
  submitBtn.disabled = true;

  try {
    const response = await fetch("https://sumon.tahmied.com/universities/applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        university_id: university.id,
        university_name: university.name,
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        gpa: formData.gpa,
        ielts: formData.ielts,
        message: formData.message,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Application submitted successfully! 🎉\nWe will contact you soon.");
      
      // মডাল বন্ধ করো
      importModal.current.close();
      
      // ফর্ম রিসেট
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        gpa: "",
        ielts: "",
        message: "",
      });
    } else {
      alert("Error: " + (data.error || "Something went wrong"));
    }
  } catch (err) {
    console.error(err);
    alert("Network error. Please try again.");
  } finally {
    // বাটন রিসেট
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
};

  return (
    <>
      {/* Apply Now Button */}
      <button
        className="w-full bg-[#3291B6] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 hover:bg-transparent hover:text-[#3291B6] border-2 border-[#3291B6] transition-all duration-300"
       onClick={handelModal}
      >
        Apply Now
      </button>

      {/* Modal */}
      <dialog ref={importModal} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full max-w-3xl bg-white rounded-2xl shadow-2xl">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3291B6]">
              Apply to <span className="text-gray-900">{university?.name || "University"}</span>
            </h3>
            <form method="dialog">
              <button className="btn btn-ghost btn-circle text-2xl hover:bg-gray-200">✕</button>
            </form>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+880 1XXXXXXXXX"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <option value="">Select Country</option>
                  <option>Bangladesh</option>
                  <option>India</option>
                  <option>Pakistan</option>
                  <option>Nepal</option>
                  <option>Sri Lanka</option>
                  <option>Others</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your GPA
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="4.0"
                  name="gpa"
                  value={formData.gpa}
                  onChange={handleChange}
                  placeholder="e.g. 3.7"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  IELTS Score
                </label>
                <input
                  type="number"
                  step="0.5"
                  min="0"
                  max="9.0"
                  name="ielts"
                  value={formData.ielts}
                  onChange={handleChange}
                  placeholder="e.g. 6.5"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message (Optional)
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Why do you want to study at this university?"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
            </div>

            {/* Buttons */}
            <div className="modal-action flex justify-between gap-4 mt-8">
               <form method="dialog">
                <button className="btn bg-[#e00808ee] text-white hover:bg-secondary-focus">
                  Close
                </button>
              </form>
              <button
                type="submit"
                className="btn bg-[#3291B6] hover:bg-transparent hover:text-[#3291B6] border-2 border-[#3291B6] transition-all duration-300 text-white px-10 py-3 text-lg font-bold rounded-xl shadow-lg"
              >
                Submit Application
              </button>
             
            </div>
          </form>
        </div>

    
      </dialog>
    </>
  );
};

export default ApplyModel;