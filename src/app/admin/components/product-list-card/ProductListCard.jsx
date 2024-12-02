"use client";
import { useFirebase } from "@/app/context/Firebase";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import CustomModal from '../custom-modal/CustomModal'

export default function ProductListCard({ products, setProducts }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [editId, setEditId] = useState(null); // Track which product is being edited
  const [editedProduct, setEditedProduct] = useState({}); // Hold edited values
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const firebase = useFirebase();
  const router=useRouter()
  // Function to delete a product by ID

  const handleDelete = (product) => {
     setProductToDelete(product); // Store the product that is being deleted
    setIsModalOpen(true); // Open the modal for confirmation
  };

  // Function to confirm deletion
  const confirmDelete = async () => {
    console.log(productToDelete,'productToDelete')
     if (!productToDelete) return;
    
    try {
      await firebase.deleteProductById(productToDelete);

      const updatedProducts = products.filter((product) => product.id !== productToDelete);
      setProducts(updatedProducts);

      // Close modal after successful deletion
      setIsModalOpen(false);
       setProductToDelete(null);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Close modal without deleting
  const closeModal = () => {
    setIsModalOpen(false);
    setProductToDelete(null);
  };

  // Filtered products based on search term


  const handleEdit=(product)=>{
    router.push(`edit-product/${product.id}`)
    // console.log(product.id)
    setEditId(product.id);
    setEditedProduct(product);
  }
  // Function to save edited product
  const handleSave = async (id) => {
    // console.log(id,'Edit ID')
    try {
      // Update Firestore document
      await firebase.updateProductById(id, editedProduct);

      // Update local state
      const updatedProducts = products.map((product) =>
        product.id === id ? { ...product, ...editedProduct } : product
      );
      setProducts(updatedProducts);

      setEditId(null); // Exit edit mode
      setEditedProduct({});
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Filtered products based on search term
  const filteredProducts = products.filter((product) =>
    product.proName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" vertical-scrollbar">
      <div className="sticky top-0 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Product List</h1>
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 w-56 mb-4 rounded"
        />
      </div>

      {/* Product List */}
      {filteredProducts.length > 0 ? (
        <div>
          <ul className="space-y-4">
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                className="flex justify-between  items-center p-4 bg-gray-100 hover:bg-gray-200 rounded border-b border-gray-500 media-max-450px:justify-end media-max-450px:p-0"
              >
                {editId === product.id ? (
                  <div className="flex flex-col w-full">
                  </div>
                ) : (
                  <div className="flex justify-between items-center w-full">
                    {/* Display Mode */}
                    <div className="flex items-center gap-4">
                      <img
                        className="h-14 w-14"
                        src={product.imageUrls}
                        alt={product.proName}
                      />
                      <div>
                        <p className="font-medium media-max-450px:text-[14px]">{product.proName.slice(0,18)}..</p>
                        <p className="text-sm text-gray-500 media-max-450px:text-[12px]">{product.details.color}</p>
                      </div>
                    </div>
                    <div className="flex gap-8 media-max-450px:gap-4 items-start ">
                    <Tooltip id="edit" place="top" style={{
          backgroundColor: 'blue',
          color: 'white',
          borderRadius: '5px',
          padding: '4px',
        }} />
                    <FaRegEdit data-tooltip-id="edit" data-tooltip-content="Edit" className=" size-6 text-blue-700 cursor-pointer media-max-450px:size-5"  onClick={() =>handleEdit(product)}/>
                      <Tooltip id="delete" place="top" style={{
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '5px',
          padding: '4px',
        }} />
                      <FaRegTrashCan data-tooltip-id="delete" data-tooltip-content="Delete" className=" size-6 text-red-600 cursor-pointer media-max-450px:size-5" onClick={() => handleDelete(product.id)}/>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-500">No products found.</p>
      )}
      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
