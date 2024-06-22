import React from 'react'
import { FaBackspace } from "react-icons/fa";
const PageNotFound = () => {
    const handleGoHome = () => {
        window.location.href = "/";
      };
  return (
    <>
    <section>
        <h1 className='text-center mt-5 text-zinc-400 text-2xl uppercase'>Page not found</h1>
        <div className="pageNot-img">
            <img src="https://img.freepik.com/premium-vector/error-404-unavailable-web-page-file-found-concept_1198-833.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=ais_user" alt="404 error page" />
        </div>
        <div className="pageNot-button">
        <button className='button-30 mt-5' type="button" onClick={handleGoHome}>Go home <FaBackspace className="m-2" color="black" size="25px"/></button>
        </div>
    </section>
    </>
  )
}

export default PageNotFound