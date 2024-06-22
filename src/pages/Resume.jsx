// "use client";
// import React from "react";
// import { saveAs } from 'file-saver';
// import resume from '../Assets/Resume.pdf';
// import { FaCloudDownloadAlt } from "react-icons/fa";
// export function Resume() {
//     const handleDownload = (event) => {
//         event.stopPropagation(); // Prevent the parent div's onClick from triggering
//         fetch(resume)
//           .then(response => response.blob())
//           .then(blob => {
//             saveAs(blob, 'Resume.pdf');
//           })
//           .catch(error => console.error('Error fetching the PDF:', error));
//       };

//     return (
//         <div  className="flex items-center justify-center w-full h-full">
//             <button 
//                 onClick={handleDownload} 
//                 borderRadius="1.75rem"
//                 className="bg-black  resume-button  p-2 rounded-lg "
//             >
//              Resume <FaCloudDownloadAlt size={24} color="#fdf1b8" />
//             </button>
//         </div>
//     );
// }

// export default Resume;





import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { saveAs } from "file-saver";
import { FaCloudDownloadAlt, FaSearchPlus, FaSearchMinus, FaTimes } from "react-icons/fa";
import resume from "../Assets/Resume.pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;
export function Resume() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const handleDownload = (event) => {
    event.stopPropagation();
    fetch(resume)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "Resume.pdf");
      })
      .catch((error) => console.error("Error fetching the PDF:", error));
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const zoomIn = () => {
    setScale(scale + 0.1);
  };

  const zoomOut = () => {
    if (scale > 0.2) {
      setScale(scale - 0.1);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <button onClick={openModal} className="bg-black resume-button p-2 rounded-lg text-white">
        Resume 
      </button>
        {/* Resume <FaCloudDownloadAlt size={24} color="#fdf1b8" /> */}

      {modalIsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-zinc-800 w-full max-w-3xl md:max-w-lg sm:max-w-full max-h-[90%] p-4 rounded-lg shadow-lg relative text-white">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500">
              <FaTimes size={24} />
            </button>
            <div className="flex justify-around mb-4">
              <button onClick={zoomOut} className="p-2 bg-gray-700 rounded-full">
                <FaSearchMinus size={20} />
              </button>
              <button onClick={handleDownload} className="p-2 bg-gray-700 rounded-full">
                <FaCloudDownloadAlt size={20} />
              </button>
              <button onClick={zoomIn} className="p-2 bg-gray-700 rounded-full">
                <FaSearchPlus size={20} />
              </button>
            </div>
            <div className="overflow-auto max-h-[70%]">
              <Document
                file={resume}
                onLoadSuccess={onDocumentLoadSuccess}
                className="w-full flex justify-center max-h-[80%]"
              >
                <Page className="text-gray-300" pageNumber={pageNumber} scale={scale} />
              </Document>
            </div>
            <div className="flex justify-between mt-4">
              <p>Page {pageNumber} of {numPages}</p>
              <button onClick={closeModal} className="p-2 bg-gray-700 text-white rounded-lg">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Resume;






