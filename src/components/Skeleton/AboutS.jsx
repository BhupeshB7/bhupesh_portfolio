import React from "react";
import { Skeleton } from "@mui/material";
const AboutS = () => {
    const skills = [ "HTML", "CSS", "redux","node.js","react native","JavaScript","react.js","express.js","mongoDB","bootstrap","tailwind","git","github","java"]
    const mern = [
        {name:"M",
        },
        {name:"E",
        },
        {name:"R",
        },
        {name:"N",
        },
    ]
  return (
    <div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:17px_34px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-orange-400 opacity-20 blur-[90px]" />
      </div>
      <div className="about-me">
        <div className="about-icon">
        <Skeleton variant="circular" width={30} height={30} />
        </div>
        <div className="about-text-skeleton">
        <Skeleton width="40%"  height={40}/>
        </div>
        <Skeleton width="100%"  height={140}/>
        
        <div className="container2">
        <div className="left-col2">
        {skills.map((skill, index) => (
        <Skeleton
        width="18%"  height={50}
          key={index}
          style={{
            padding: '8px',
            borderRadius: '20px',
            display: 'inline-block',
            margin: '5px'
          }}
        >
        </Skeleton>
      ))}
        </div>
      <div className="right-col2">
      <div className="about-text-skeleton">
        <Skeleton width="40%"  height={60}/>
        </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {mern.map(( index) => (
        <div key={index} >
          <Skeleton
        width="100%"  height={50}
          key={index}
          style={{
            padding: '8px',
            borderRadius: '7px',
            display: 'inline-block',
            margin: '5px'
          }}
        >
        </Skeleton>
        <Skeleton width="100%"  height={40}/>
        </div>
      ))}
    </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default AboutS;
