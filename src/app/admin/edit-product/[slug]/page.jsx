"use client";
import { useFirebase } from "@/app/context/Firebase";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditProduct() {
  const [productData, setProductData] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [height, setHeight] = useState("");
  const [seatingCapacity, setSeatingCapacity] = useState("");
  const [features, setFeatures] = useState("");
  const [imageFileOne, setImageFileOne] = useState(null);
  const [imagePreviewOne, setImagePreviewOne] = useState(null);
  const [imageFileTwo, setImageFileTwo] = useState(null);
  const [imagePreviewTwo, setImagePreviewTwo] = useState(null);
  const [imageFileThree, setImageFileThree] = useState(null);
  const [imagePreviewThree, setImagePreviewThree] = useState(null);
  const [errors, setErrors] = useState({});
  
  const params = useParams();
  const id = params.slug;

  const router = useRouter();
  const firebase = useFirebase();
  const updateToast=()=>toast("Updated Successfully")




  useEffect(() => {
    firebase.getProductById(id).then((data) => {
      const product = data.data();
      setProductData(product);
      setName(product.proName || "");
      setDescription(product.details?.description || "");
      setColor(product.details?.color || "");
      setMaterial(product.details?.material || "");
      setWidth(product.details?.dimensions?.width || "");
      setDepth(product.details?.dimensions?.depth || "");
      setHeight(product.details?.dimensions?.height || "");
      setSeatingCapacity(product.details?.seatingCapacity || "");
      setFeatures(product.details?.features?.join(", ") || "");
      setImagePreviewOne(product.imageUrls[0] || null);
      setImagePreviewTwo(product.imageUrls[1] || null);
      setImagePreviewThree(product.imageUrls[2] || null);
    });
  }, [id]);

  const handleImageChangeOne = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFileOne(file);
      setImagePreviewOne(URL.createObjectURL(file));
    }
  };

  const handleImageChangeTwo = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFileTwo(file);
      setImagePreviewTwo(URL.createObjectURL(file));
    }
  };

  const handleImageChangeThree = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFileThree(file);
      setImagePreviewThree(URL.createObjectURL(file));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Product name is required";
    if (!description) newErrors.description = "Description is required";
    if (!color) newErrors.color = "Color is required";
    if (!material) newErrors.material = "Material is required";
    if (!width) newErrors.width = "Width is required";
    if (!depth) newErrors.depth = "Depth is required";
    if (!height) newErrors.height = "Height is required";
    if (!seatingCapacity || isNaN(seatingCapacity))
      newErrors.seatingCapacity = "Seating capacity must be a number";
    if (!features) newErrors.features = "At least one feature is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdateProduct = async () => {
    if (!validateForm()) {
      alert("Validation failed!");
      return;
    }
  
    try {
      const featureArray = features.split(",").map((feature) => feature.trim());
  
      // Use existing previews as fallback URLs
      const existingImageUrls = [imagePreviewOne, imagePreviewTwo, imagePreviewThree];
  
      // Determine new or existing image sources
      const imageOne = imageFileOne || imagePreviewOne;
      const imageTwo = imageFileTwo || imagePreviewTwo;
      const imageThree = imageFileThree || imagePreviewThree;
  
      console.log(existingImageUrls, "existingImageUrls in edit page");
  
      // Call the update function
      await firebase.updateProductById(
        id,
        name,
        color,
        description,
        material,
        seatingCapacity,
        width,
        depth,
        height,
        featureArray,
        imageOne,
        imageTwo,
        imageThree,
        existingImageUrls
      );
  
      // alert("Product updated successfully!");
      // updateToast()
      setTimeout(()=>{
        router.push('/admin/products-list');
      },2000)
    } catch (error) {
      // console.error("Failed to update product:", error);
      // alert("Failed to update product: " + error.message);
    }
  };
  
  

  return (
    <div className=" vertical-scrollbar max-w-3xl mx-auto p-4 bg-gray-100 border rounded-lg shadow-md">
    <ToastContainer/>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Product</h2>
      {productData ? (
        <div >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2  border rounded"
          />
         
          <input
            type="text"
            placeholder="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full p-2 border rounded"
          />
           {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
           <div className="col-span-2">

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
          </div>

          <input
            type="text"
            placeholder="Material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Depth"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Seating Capacity"
            value={seatingCapacity}
            onChange={(e) => setSeatingCapacity(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Features (comma-separated)"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

          {/* Image Uploads */}
          <div className="flex justify-between  horizontal-scrollbar mt-4">

        
            {/* <p className="text-center">First</p>*/}
            {imagePreviewOne && (
              <div className="w-54 h-48 overflow-hidden">
              <img
                src={imagePreviewOne}
                alt="Preview"
                className="w-full h-full object-contain" 
              />
              </div>
            )}
            {/* <input type="file" accept="image/*" onChange={handleImageChangeOne} /> */}
         
          
            {/* <p  className="text-center">Second</p> */}
            {imagePreviewTwo && (
              <div className="w-54 h-48 overflow-hidden">
              
              <img
                src={imagePreviewTwo}
                alt="Preview"
                className="w-full h-full object-contain"
              />
              </div>
            )}
            {/* <input type="file" accept="image/*" onChange={handleImageChangeTwo} /> */}
          
         
            {/* <p  className="text-center">Third</p> */}
            {imagePreviewThree && (
              <div className="w-54 h-48 overflow-hidden">

              <img
                src={imagePreviewThree}
                alt="Preview"
                className="w-full h-full object-contain"
              />
              </div>
            )}
            {/* <input type="file" accept="image/*" onChange={handleImageChangeThree} /> */}
        
          </div>

          {/* Upload */}
          <div className="flex justify-between">

<div className="col-span-2">
  
  {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}

<div className="text-[12px] text-gray-600">First Image</div>

<input type="file" id="fileInputOne" className="fileInput"  accept="image/*"
    onChange={handleImageChangeOne} />

<label htmlFor="fileInputOne" className="custom-file-upload bg-gray-800">
Upload
</label>
</div>

<div className="col-span-2">

  {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}

<div className="text-[12px] text-gray-600" >Second Image</div>

<input type="file" id="fileInputTwo" className="fileInput"  accept="image/*"
    onChange={handleImageChangeTwo} />

<label htmlFor="fileInputTwo" className="custom-file-upload bg-gray-800">
Upload
</label>
</div>

<div className="col-span-2">
  
  {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
<div className="text-[12px] text-gray-600">Third Image</div>
<input type="file" id="fileInputThree" className="fileInput"   accept="image/*"
    onChange={handleImageChangeThree} />

<label htmlFor="fileInputThree" className="custom-file-upload bg-gray-800">
Upload
</label>
</div>
</div>

        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className="flex justify-between mt-6">

      <button
        onClick={handleUpdateProduct}
        className=" bg-gray-800 text-white py-2 px-4 rounded mt-4 hover:bg-gray-900 transition-colors"
      >
        Update Product
      </button>

      <button
        onClick={()=>{router.back()}}
        className=" bg-gray-800 text-white py-2 px-4 rounded mt-4 hover:bg-gray-900 transition-colors"
      >
        Go Back
      </button>
      </div>

    </div>
  );
}

export default EditProduct;
