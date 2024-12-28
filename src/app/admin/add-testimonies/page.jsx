"use client";
import { useFirebase } from "@/app/context/Firebase";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddTestimony = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // State for image preview
  const [rating, setRating] = useState(5);

  const firebase = useFirebase()
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const result = await firebase.addTestimonial(name, review, image, rating);
  
    if (result.success) {
      toast.success("Testimonial added successfully!");
      setTestimonials((prevTestimonials) => [
        ...prevTestimonials,
        { name, review, image: imagePreview, rating },
      ]);
  
      // Reset form fields after submission
      setName("");
      setReview("");
      setImage(null);
      setImagePreview(null);
      setRating(5);
    } else {
      toast.error("Failed to add testimonial. Try again later.");
    }
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the preview URL
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="vertical-scrollbar">
      {/* Add Testimonial Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-8">
        <h3 className="text-2xl font-bold mb-4">Add New Testimonial</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Customer Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="review" className="block text-gray-700">
              Review
            </label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows={4}
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="image" className="block text-gray-700">
              Image
            </label>
            <input
              id="image"
              type="file"
              onChange={handleImageChange} // Handle file change
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-md"
              />
            </div>
          )}

          <div>
            <label htmlFor="rating" className="block text-gray-700">
              Rating
            </label>
            <select
              id="rating"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              {[1, 2, 3, 4, 5].map((ratingValue) => (
                <option key={ratingValue} value={ratingValue}>
                  {ratingValue} Star{ratingValue > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="w-full bg-gray-800 text-white p-3 rounded-lg">
            Add Testimonial
          </button>
        </form>
      </div>

      {/* Testimonials Section */}
     
    </div>
  );
};

export default AddTestimony;
