// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) =>
      theme === "light" ? "#ffffff" : "#000"};
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  p, h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
     font-family: "JetBrains Mono",monospace;
  }

  .card-container {
    background-color: ${({ theme }) =>
      theme === "light" ? "#f8f9fa" : "#111"} !important;
    // border: 1px solid ${({ theme }) =>
      theme === "light" ? "#ddd" : "#444"} !important;
    border-radius: 8px;
    box-shadow:${({ theme }) =>
      theme === "light"
        ? "0px 2px 4px rgba(0,0,0,0.5) !important"
        : "0px 1px 2px rgba(255,255,255,0.5) !important"};
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
.contact-container {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Optional: space between columns when stacked */
  padding: 20px;
  margin: auto;
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
    
}
  .formInput label{
  color: gray;
}

.formInput input, .formInput textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => (theme === "light" ? "gray" : "#444")};
  border-radius: 5px;
 background-color: ${({ theme }) => (theme === "light" ? "#ffffff" : "#000")};
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
  box-sizing: border-box; 
  outline: none; 
}
  .formInput input:-webkit-autofill,
  .formInput input:-webkit-autofill:focus,
  .formInput textarea:-webkit-autofill,
  .formInput textarea:-webkit-autofill:focus {
    background-color: ${({ theme }) =>
      theme === "light" ? "#fff" : "#000"} !important;
    color: ${({ theme }) =>
      theme === "light" ? "#000000" : "#ffffff"} !important;
    border: 1px solid ${({ theme }) =>
      theme === "light" ? "gray" : "#444"} !important;
    border-radius: 7px !important;
    -webkit-box-shadow: 0 0 0 1000px ${({ theme }) =>
      theme === "light" ? "#fff" : "#000"} inset !important;
    -webkit-text-fill-color: ${({ theme }) =>
      theme === "light" ? "#000000" : "#ffffff"} !important;
  }

.formInput input::placeholder, .formInput textarea::placeholder {
  color: #999; 
}
select {
  color: black;
  border: 1.3px solid black;
  padding: 10px;
  background-color: white;
  font-size: 16px;
}

select option {
  color: black;
  background-color: white;
  padding: 10px;
}
 .custom-select {
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
   background-color: ${({ theme }) => (theme === "light" ? "#ffffff" : "#000")};
    border: 1px solid ${({ theme }) => (theme === "light" ? "gray" : "#444")};
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius:5px;
  }
  
  .custom-options {
    position: absolute;
    width: 100%;
   border: 1px solid ${({ theme }) => (theme === "light" ? "gray" : "#444")};
 background-color: ${({ theme }) => (theme === "light" ? "#ffffff" : "#000")};
    max-height: 150px;
    overflow-y: auto;
    z-index: 1;
    margin-top:5px;
    border-radius:5px;
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
  }
  
  .custom-option {
    padding: 10px;
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
    cursor: pointer;
  }
  
  .custom-option:hover {
     background-color: ${({ theme }) =>
       theme === "light" ? "whiteSmoke" : "#444"} !important;
  }
  .work-title{
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
     font-family: "JetBrains Mono",monospace;
  font-size: 18px;
  font-weight: 550;
    }
  .work-subtitle{
    color: ${({ theme }) => (theme === "light" ? "#444" : "#E2DDDD")};
     font-family: "JetBrains Mono",monospace;
  font-size: 14px;
  font-weight: 500;
    }
  .testimonial-bg{
    background-color: ${({ theme }) =>
      theme === "light" ? "#ffffff" : "#000"};
    }

    
    .button-30{
      background-color: ${({ theme }) =>
        theme === "light" ? "#fff" : "#111"};
    }
`;
