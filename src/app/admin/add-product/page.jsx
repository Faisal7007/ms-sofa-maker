
"use client"
import { useFirebase } from "@/app/context/Firebase";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function AddProduct({ onAddProduct }) {

    const firebase = useFirebase()
    // console.log(firebase,'Fire')
  // Form state for each field in the product
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
  const successAdd = () => toast("Added Successfully");
const failureAdd = () => toast("Failed to add product");
  

  // Validation error messages
  const [errors, setErrors] = useState({});

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




  // Validation logic
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
      newErrors.seatingCapacity = "Seating Capacity must be a number";
    if (!features) newErrors.features = "At least one feature is required";
    if (!imageFileOne) newErrors.image = "Image file is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleAddProduct = async () => {
    //   alert('Hey')
    if (!validateForm()) return;
    let featureArray = features.split(',').map(feature => feature.trim());
  
    featureArray = featureArray.flat();
    await firebase.handleNewProduct(name, color, description, material, seatingCapacity, width, depth, height, featureArray, imageFileOne, imageFileTwo, imageFileThree)

       .then(()=>{
       successAdd()
       })

    // Clear form fields and errors
    setName("");
    setDescription("");
    setColor("");
    setMaterial("");
    setWidth("");
    setDepth("");
    setHeight("");
    setSeatingCapacity("");
    setFeatures("");
    setImageFileOne(null);
    setImagePreviewOne(null);
    setErrors({});
  };
  const router = useRouter(); 

  const handleNavigate = () => {
    router.push('/products');  // Example of programmatic navigation
  };

  return (
    <div className=" vertical-scrollbar max-w-4xl mx-auto p-4 bg-gray-100 border rounded-lg shadow-md">
    <ToastContainer/>
      <h2 className="text-2xl text-gray-800 font-bold mb-4 ">Add New Product</h2>

      {/* Grid layout for input fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 media-max-450px:grid-cols-1 ">
        <div className="media-max-450px:col-span-2 ">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        
        <div className="media-max-450px:col-span-2 ">
          <input
            type="text"
            placeholder="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.color && <p className="text-red-500 text-sm">{errors.color}</p>}
        </div>
        
        <div className="col-span-2">
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
             rows="4"
             style={{ maxHeight: "100px", minHeight:'100px' }}
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>
        
        <div className="media-max-450px:col-span-2 ">
          <input
            type="text"
            placeholder="Material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.material && <p className="text-red-500 text-sm">{errors.material}</p>}
        </div>
        
        <div className="media-max-450px:col-span-2 ">
          <input
            type="text"
            placeholder="Seating Capacity"
            value={seatingCapacity}
            onChange={(e) => setSeatingCapacity(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.seatingCapacity && <p className="text-red-500 text-sm">{errors.seatingCapacity}</p>}
        </div>
        
        <div className="media-max-450px:col-span-2 ">
          <input
            type="text"
            placeholder="Width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.width && <p className="text-red-500 text-sm">{errors.width}</p>}
        </div>
        
        <div className="media-max-450px:col-span-2 ">
          <input
            type="text"
            placeholder="Depth"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.depth && <p className="text-red-500 text-sm">{errors.depth}</p>}
        </div>
        
        <div className="media-max-450px:col-span-2 ">
          <input
            type="text"
            placeholder="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.height && <p className="text-red-500 text-sm">{errors.height}</p>}
        </div>
        
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Features (comma-separated)"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.features && <p className="text-red-500 text-sm">{errors.features}</p>}
        </div>
        
        <div className="flex gap-6 justify-between">

        <div className="col-span-2">
          
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}

  <div className="text-[12px] text-gray-600 media-max-450px:text-[10px]">First Image</div>
        
  <input type="file" id="fileInputOne" className="fileInput"  accept="image/*"
            onChange={handleImageChangeOne} />

  <label htmlFor="fileInputOne" className="custom-file-upload bg-gray-800">
    Upload
  </label>
  </div>

  <div className="col-span-2">
          
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}

  <div className="text-[12px] text-gray-600 media-max-450px:text-[10px] media-max-450px:w-[68px]" >Second Image</div>
        
  <input type="file" id="fileInputTwo" className="fileInput"  accept="image/*"
            onChange={handleImageChangeTwo} />

  <label htmlFor="fileInputTwo" className="custom-file-upload bg-gray-800">
    Upload
  </label>
  </div>

  <div className="col-span-2">
          
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
  <div className="text-[12px] text-gray-600 media-max-450px:text-[10px]">Third Image</div>
  <input type="file" id="fileInputThree" className="fileInput"   accept="image/*"
            onChange={handleImageChangeThree} />

  <label htmlFor="fileInputThree" className="custom-file-upload bg-gray-800">
    Upload
  </label>
  </div>
  </div>


      </div>

      {/* Image preview One */}
      <div className="  w-[100%] flex justify-between horizontal-scrollbar ">
      {imagePreviewOne && (
        <div className="mt-4 custom-box-shadow ">
          <p className="font-semibold text-gray-800">First</p>
          <div className='flex justify-center items-center'>

<div className="w-54 h-48 overflow-hidden ">
  <img className="w-full h-full object-contain" src={imagePreviewOne} alt="Preview" />
</div>
</div>
        </div>
      )}

      {imagePreviewTwo && (
        <div className="mt-4 custom-box-shadow ">
          <p className="font-semibold text-gray-800">Second</p>
          <div className='flex justify-center items-center'>

<div className="w-54 h-48 overflow-hidden ">
  <img className="w-full h-full object-contain" src={imagePreviewTwo} alt="Preview" />
</div>
</div>
        </div>
      )}

      {imagePreviewThree && (
        <div className="mt-4 custom-box-shadow ">
          <p className="font-semibold text-gray-800">Third</p>
          <div className='flex justify-center items-center'>

    <div className="w-54 h-48 overflow-hidden ">
      <img className="w-full h-full object-contain" src={imagePreviewThree} alt="Preview" />
    </div>
    </div>
        </div>
      )}
      </div>

      <button
        onClick={handleAddProduct}
        className=" bg-gray-800 text-white py-2 px-4 rounded mt-4 hover:bg-gray-800 transition-colors media-max-450px:py-1 media-max-450px:px-2 media-max-450px:text-[14px]"
        disabled={Object.keys(errors).length > 0}
      >
        Add Product
      </button>
      {/* <button onClick={handleNavigate} >Go to Product</button> */}
    </div>
  );
}

export default AddProduct;
