import React from "react";
import { Helmet } from "react-helmet";
import M from '../Assets/M.png';
import E from '../Assets/E.png';
import R from '../Assets/R.png';
import N from '../Assets/N.png';
import { IoIosCloseCircle } from "react-icons/io";
const About = () => {
    const skills = [ "CSS", "redux","node.js","react.js","JavaScript","react native","java","express.js","mongoDB","bootstrap","tailwind","git","github","Linux"]
    const mern = [
        {name:"M",
        icon:M,
        color:"#57B55D"
        },
        {name:"E",
        icon:E,
        color:"#FFFFFF"
        },
        {name:"R",
        icon:R,
        color:"#80DEEA"
        },
        {name:"N",
        icon:N,
        color:"#49B54F"
        },
    ]
  return (
    <div>
      <Helmet>
        <title>Bhupesh|About me</title>
        <meta name="description" content="Learn more about Bhupesh Kumar, a full stack developer proficient in HTML, CSS, JavaScript, React, Node.js, and more. Explore my skills and expertise in building scalable web applications." />
        <meta name="keywords" content="Full Stack Developer, MERN Stack, HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Redux, React Native, Web Development" />
        <meta name="author" content="Bhupesh" />
        <link rel="canonical" href="https://bhupeshb7portfolio.vercel.app/about" />
      </Helmet>
      <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:17px_34px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-orange-400 opacity-20 blur-[90px]" />
      </div>
      <div className="about-me">
        <div className="about-icon">
        <IoIosCloseCircle className="close_icon" onClick={() => window.location.href = "/"} />
        </div>
        <h5 className="text-center text-amber-100 text-xl">About me</h5>
        <div className="container-big">
        <p className="about-text">
          I'm a full stack developer with expertise in both front-end and
          back-end technologies. I build seamless, user-friendly web
          applications, handling everything from database management to user
          interface design. My goal is to create efficient, scalable, and
          high-quality software solutions.
        </p>
        
        <div className="container2">
        <div className="left-col2">
        {skills.map((skill, index) => (
        <span
          key={index}
          style={{
            padding: '8px',
            borderRadius: '20px',
            border: '1px solid white',
            color: 'white',
            display: 'inline-block',
            margin: '5px'
          }}
        >
          #{skill}
        </span>
      ))}
        </div>
      <div className="right-col2">
      <h1 className="about-mern">MERN STACK</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {mern.map((tech, index) => (
        <div key={index} className="tooltip">
          <img src={tech.icon} alt={tech.name} style={{ width: '50px', height: '50px' }} />
          <span className="tooltiptext" style={{ backgroundColor: tech.color }}>
            {tech.name}
          </span>
          <div style={{ color: tech.color, fontSize: '20px', textAlign: 'center', marginTop: '10px' }}>
            {tech.name}
          </div>
        </div>
      ))}
    </div>
      </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
