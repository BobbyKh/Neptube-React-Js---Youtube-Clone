import React, { useState, useEffect } from 'react'
import filesize from 'filesize'

const Upload = () => {
  const [dragActive, setDragActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [videoSrc, setVideoSrc] = useState(null)
  const [error, setError] = useState(null)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
  }

  useEffect(() => {
    if (selectedFile) {
      const video = document.createElement('video')
      const url = URL.createObjectURL(selectedFile)
      video.src = url
      video.preload = 'metadata'
      video.onloadedmetadata = () => {
        setVideoSrc(url)
      }
      video.onerror = () => {
        setError('Error loading video')
      }
    }
  }, [selectedFile])

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData()
      formData.append('video', selectedFile)
      // call api to upload video
    }
  }

  return (
    <div className="flex flex-col flex-grow mb-3">
      <div
        className={`block w-full py-2 px-3 relative bg-white appearance-none border-2 border-gray-300 border-solid rounded-md hover:shadow-outline-gray ${dragActive ? 'active' : ''}`}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <input type="file" multiple className="absolute inset-0 z-50 m-0 p-0 w-full h-full outline-none opacity-0" onChange={handleFileChange} />
        {selectedFile && (
          <div className="flex flex-col space-y-1">
            <div className="flex flex-row items-center space-x-2">
              <i className="far fa-file-video fa-fw"></i>
              <span className="font-medium text-gray-900">{selectedFile.name}</span>
              <span className="text-xs self-end text-gray-500">{filesize(selectedFile.size)}</span>
            </div>
          </div>
        )}
        {!selectedFile && (
          <div className="flex flex-col space-y-2 items-center justify-center">
            <i className="fas fa-cloud-upload-alt fa-3x text-currentColor"></i>
            <p className="text-gray-700">Drag your files here or click in this area.</p>
            <button className="flex items-center mx-auto py-2 px-4 text-white text-center font-medium border border-transparent rounded-md outline-none bg-red-700">Select a file</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Upload

