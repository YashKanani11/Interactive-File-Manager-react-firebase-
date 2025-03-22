import React, { useState } from 'react'

function UploadCard({onClose}) {

    const [file, setFile] = useState(null);
    const [fileType, setFileType] = useState("");
    const [description, setDescription] = useState("");
    const [isDownloadable, setIsDownloadable] = useState(false);
  
    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log({
        file, fileType, description, isDownloadable
      })
      alert("Your file has been uploaded succesfully")
    }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-violet-400 bg-opacity-20 backdrop-blur-lg">
        <div className="w-[40%] h-[70%] bg-emerald-500 absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 rounded-3xl shadow-zinc-800 shadow-lg">
          <form onSubmit={handleSubmit} className="px-32 border border-black m-4 h-[93%]">
          <div>
          
          <input 
            type="file" 
            onChange={(e) => setFile(e.target.files[0])} 
            className="mt-1 block w-full border p-2 rounded-md mb-3"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium">File Type</label>
          <select 
            value={fileType} 
            onChange={(e) => setFileType(e.target.value)} 
            className="mt-1 block w-full border p-2 rounded-md mb-3"
          >
            <option value="">Select Type</option>
            <option value="document">Document</option>
            <option value="image">image</option>
            <option value="music">Music</option>
            <option value="video">Video</option>
          </select>
        </div>
        <div className="flex items-center mb-3">
          <input 
            type="checkbox" 
            checked={isDownloadable} 
            onChange={() => setIsDownloadable(!isDownloadable)} 
            className="h-4 w-4 text-blue-600 border-gray-300"
          />
          <label className="ml-2 text-gray-600">Make Downloadable</label>
        </div>

        {/* Description Input */}
        <div>
          <label className="block text-gray-600 font-medium">File Description</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="mt-1 block w-full border p-2 rounded-md resize-none mb-6"
            rows="3"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button 
          onClick={onClose}
          type="submit" 
          className="w-full bg-violet-700 text-white py-2 rounded-md active:bg-violet-900 active:scale-95 transition shadow-zinc-800 shadow-lg active:shadow-sm active:shadow-zinc-800"
        >
          Upload File
        </button>

          </form>
        </div>
      </div>
  )
}

export default UploadCard