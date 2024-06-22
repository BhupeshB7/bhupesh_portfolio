import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import Footer from "../components/Footer/Footer";
import support from "../Assets/contact.png"
import { Step } from "./Step";
const Help = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  // const apiUrl = "http://localhost:5000";
  const apiUrl = process.env.REACT_APP_API_URL;
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await axios.post(`${apiUrl}/api/send-email`, data);
      setSuccessMessage("Message sent successfully!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
      reset();
      setLoading(false);
    } catch (error) {
      reset();
      setLoading(false);
      setErrorMessage(
        "Failed to send message. Due to Technical Errors, Try after some time"
      );
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <section className="contact-container mt-5" id="about">
      <div className="left-col left-col-img">
        <img
        src={support}
           alt="Contact Form"
          style={{ maxHeight: "450px" }}
        />
      </div>
      <div className="right-col">
        <h1 className=" text-xl font-bold">
          How Can We Assist You?
        </h1>

        <h1 className=" text-md">
          We're committed to responding as swiftly as we can!
        </h1>
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        {successMessage && <p className="successMessage">{successMessage}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formInput">
            <label>Name</label>
            <input {...register("name", { required: "Name is required!" })}
            placeholder="Enter your Name" 
            style={{borderRadius:"0px"}}/>
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="formInput">
            <label>Email</label>
            <input
              {...register("email", {
                required: "Email is required!",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address!",
                },
              })}
              placeholder="Enter your Email"
              style={{borderRadius:"0px"}}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="formInput">
            <label>Mobile No</label>
            <input
              {...register("mobileNo", { required: "Mobile No is required!" })}
              placeholder="Enter your mobile number"
              style={{borderRadius:"0px"}}
              maxLength={10}
              type="number"
            />
            {errors.mobileNo && (
              <p className="text-red-500">{errors.mobileNo.message}</p>
            )}
          </div>
          <div className="formInput">
            <label>Message</label>
            <textarea
              rows={5}
              {...register("message", { required: "Message is required!" })}
            placeholder="Enter your message"
            style={{borderRadius:"0px"}}
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>
          <button class="button-29" type="submit">
            {loading ? (
              <>
                Sending...{" "}
                <BsFillSendArrowUpFill
                  className="m-2"
                  color="white"
                  size="25px"
                />
              </>
            ) : (
              <>
                Send <FiSend className="m-2" color="white" size="25px" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
    <Step/>
    <Footer/>
    </>
  );
};

export default Help;
