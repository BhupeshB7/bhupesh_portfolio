import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddProject = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const abortController = useRef(new AbortController());
  const apiUrl = process.env.REACT_APP_API_URL;
  const onSubmit = async (data) => {
    if (!imageFile)  {
      setErrorMessage("Image is required");
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("technology", data.technology);
    formData.append("link", data.link);
    formData.append("frontend", data.frontend);
    formData.append("backend", data.backend);
    formData.append("img", imageFile);

    try {
      setUploading(true);
      const response = await axios.post(`${apiUrl}/api/projects`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        signal: abortController.current.signal,
        timeout: 10000, // timeout after 10 seconds
      });

      setSuccessMessage(response.data.message);
      setErrorMessage("");
      // Reset form state
      setImagePreview(null);
      setImageFile(null);
      reset();
    } catch (error) {
      if (axios.isCancel(error)) {
        setErrorMessage("Upload cancelled");
      } else if (error.code === "ECONNABORTED") {
        setErrorMessage("Upload timed out");
      } else {
        setErrorMessage(error.response?.data?.message || "Upload failed");
      }
    } finally {
      setUploading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const handleImageCancel = () => {
    setImagePreview(null);
    setImageFile(null);
  };

  const handleAbort = () => {
    abortController.current.abort();
    setUploading(false);
    setErrorMessage("Upload aborted by user");
  };

  return (
    <div>
      <h2 className="text-xl text-slate-600 text-center m-1">Create Project</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="project-form">
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <div className="formInput">
          <label>Title</label>
          <input {...register("title", { required: true })} />
          {errors.title && <p className="text-red-500">Title is required</p>}
        </div>
        <div className="formInput">
          <label>Technology</label>
          <input {...register("technology", { required: true })} />
          {errors.technology && (
            <p className="text-red-500">Technology is required</p>
          )}
        </div>
        <div className="formInput">
          <label>Link</label>
          <input {...register("link", { required: true })} />
          {errors.link && <p className="text-red-500">Link is required</p>}
        </div>
        <div className="formInput">
          <label>Frontend</label>
          <input {...register("frontend", { required: true })} />
          {errors.frontend && (
            <p className="text-red-500">Frontend code is required</p>
          )}
        </div>
        <div className="formInput">
          <label>Backend</label>
          <input {...register("backend")} />
        </div>
        <div className="formInput">
          <label>Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {imagePreview && (
            <div style={{ position: "relative", display: "inline-block" }}>
              <img src={imagePreview} alt="Preview" width={150} height={80} />
              <button
                type="button"
                onClick={handleImageCancel}
                style={{
                  position: "absolute",
                  top: "2%",
                  left: "40%",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer",
                  width: "30px",
                  height: "30px",
                  textAlign: "center",
                }}
              >
                X
              </button>
            </div>
          )}
          {!imageFile && <p className="text-red-500">Image is required</p>}
        </div>
        <button className="button-29" type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Submit"}
        </button>
        {uploading && (
          <button
            type="button"
            onClick={handleAbort}
            style={{ marginLeft: "10px", color: "red" }}
          >
            Abort Upload
          </button>
        )}
      </form>
      
    </div>
  );
};

export default AddProject;
