// // src/ContactForm.js
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { FiSend } from "react-icons/fi";
// import { BsFillSendArrowUpFill } from "react-icons/bs";
// const ContactForm = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();
//    const [successMessage,setSuccessMessage] = useState('');
//    const [errorMessage,setErrorMessage] = useState('');
//    const [loading,setLoading] = useState(false);
//    const apiUrl = process.env.REACT_APP_API_URL;
//    const onSubmit = async (data) => {
//     try {
//       setLoading(true);
//         await axios.post(`${apiUrl}/api/send-email`, data);
//         setSuccessMessage('Message sent successfully!');
//         setTimeout(() => {
//             setSuccessMessage('');
//         }, 5000);
//         reset();
//      setLoading(false);
//     } catch (error) {
//       reset();
//        setLoading(false);
//         setErrorMessage('Failed to send message. Due to Technical Errors, Try after some time');
//         setTimeout(()=>{
//             setErrorMessage('');
//         },5000);
//     }finally{
//         setLoading(false);
//     }
// };

//   return (
//     <div className="container" id="about">
//       <div className="left-col left-col-img">
//         <img
//           src="https://img.freepik.com/free-vector/customer-support-flat-illustration_23-2148889375.jpg?t=st=1717412622~exp=1717416222~hmac=91104101a007491cedacc09b834838535f8b178b972b2b473ba012c18e4868bc&w=740"
//           alt="Contact Form"
//        style={{maxHeight:'450px'}} />
//       </div>
//       <div className="right-col">
//         <h1 className="text-zinc-800 text-xl font-bold">Contact Us</h1>
//        {errorMessage&& <p className="errorMessage">{errorMessage}</p> }
//        {successMessage&&  <p className="successMessage">{successMessage}</p> }
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="formInput">
//             <label>Name</label>
//             <input {...register("name", { required: "Name is required!" })} />
//             {errors.name && <p className="text-red-500">{errors.name.message}</p>}
//           </div>

//           <div className="formInput">
//             <label>Email</label>
//             <input
//               {...register("email", {
//                 required: "Email is required!",
//                 pattern: {
//                   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                   message: "Invalid email address!",
//                 },
//               })}
//             />
//             {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//           </div>

//           <div className="formInput">
//             <label>Message</label>
//             <textarea rows={5}
//               {...register("message", { required: "Message is required!" })}
//             />
//             {errors.message && <p className="text-red-500">{errors.message.message}</p>}
//           </div>
//           <button class="button-29" type="submit">{loading? <>Sending... <BsFillSendArrowUpFill className="m-2" color="white" size="25px"/></>:<>Send <FiSend className="m-2" color="white" size="25px"/></>}</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
// const onSubmit = async (data) => {
//   try {
//     setLoading(true);
//     await axios.post(`${apiUrl}/api/send-email`, data);
//     setSuccessMessage('Message sent successfully!');
//     setTimeout(() => {
//       setSuccessMessage('');
//     }, 5000);
//     reset();
//     setLoading(false);
//   } catch (error) {
//     reset();
//     setLoading(false);
//     setErrorMessage('Failed to send message. Due to Technical Errors, Try after some time');
//     setTimeout(() => {
//       setErrorMessage('');
//     }, 5000);
//   } finally {
//     setLoading(false);
//   }
// };

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import CustomSelect from "./CustomSelect";
import "./CustomStyles.css";
import contact from "../Assets/contact.png";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const [softwareOption, setSoftwareOption] = useState("");
  const [applicationType, setApplicationType] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(`${apiUrl}/api/send-email`, data);
      setSuccessMessage(response.data.message||"Message sent successfully!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
      reset();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setErrorMessage(error.response.data.error || "Sorry,Failed to send message. Try after some time");
      } else {
        setErrorMessage(
          "Sorry, Failed to send message. Due to Technical Errors, Try after some time"
        );
      }
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    } finally {
      setLoading(false);
    }
  };
  const handleSoftwareOptionChange = (value) => {
    setSoftwareOption(value);
    setValue("softwareOption", value); // Register the value with react-hook-form
    if (value === "no") {
      setApplicationType(""); // Reset applicationType if "no" is selected
    }
  };

  const handleApplicationTypeChange = (value) => {
    setApplicationType(value);
    setValue("applicationType", value); // Register the value with react-hook-form
  };

  return (
    <div className="contact-container" id="contact">
      <div className="left-col left-col-img">
        <img src={contact} alt="Contact Form" style={{ maxHeight: "450px" }} />
      </div>
      <div className="right-col">
        <h1 className="text-xl font-bold">Contact Us</h1>
        {errorMessage && <p className="errorMessage"><AiOutlineCloseCircle
                style={{ color: "red", marginLeft: "5px" }}
              />{errorMessage}</p>}
        {successMessage && <p className="successMessage"><AiOutlineCheckCircle
                style={{ color: "green", marginLeft: "5px" }}
              />{successMessage}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formInput">
            <label>Name</label>
            <input
              {...register("name", { required: "Name is required!" })}
              placeholder="Enter your name"
            />
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
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="formInput">
            <label>Are you want to make a Software?</label>
            <CustomSelect
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
              onChange={handleSoftwareOptionChange}
              placeholder="Select an option"
            />
            {errors.softwareOption && (
              <p className="text-red-500">{errors.softwareOption.message}</p>
            )}
          </div>

          {softwareOption === "yes" && (
            <div className="formInput">
              <label>Type of Application</label>
              <CustomSelect
                options={[
                  { value: "web", label: "Web Application (MERN)" },
                  {
                    value: "mobile",
                    label: "Mobile Application (React Native)",
                  },
                ]}
                onChange={handleApplicationTypeChange}
                placeholder="Select application type"
              />
              {errors.applicationType && (
                <p className="text-red-500">{errors.applicationType.message}</p>
              )}
            </div>
          )}

          {(softwareOption === "yes" || softwareOption === "no") && (
            <>
              <div className="formInput">
                <label>Mobile No</label>
                <input
                  {...register("mobileNo", {
                    required: "Mobile No is required!",
                  })}
                  placeholder="Enter your mobile number"
                  maxLength={10}
                  type="number"
                />
                {errors.mobileNo && (
                  <p className="text-red-500">{errors.mobileNo.message}</p>
                )}
              </div>

              <div className="formInput">
                <label>City</label>
                <input
                  {...register("city", { required: "City is required!" })}
                  placeholder="Enter your city"
                />
                {errors.city && (
                  <p className="text-red-500">{errors.city.message}</p>
                )}
              </div>
            </>
          )}

          <div className="formInput">
            <label>Message</label>
            <textarea
              rows={5}
              {...register("message", { required: "Message is required!" })}
              placeholder="Enter your message"
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>
          {/* {errorMessage && (
            <p className="errorMessage">
              <AiOutlineCloseCircle
                style={{ color: "red", marginRight: "5px" }}
              />
              {errorMessage}
            </p>
          )}
          {successMessage && (
            <p className="successMessage">
              <AiOutlineCheckCircle
                style={{ color: "green", marginRight: "5px" }}
              />
              {successMessage}
            </p>
          )} */}
          <button className="button-29" type="submit">
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
    </div>
  );
};

export default ContactForm;
