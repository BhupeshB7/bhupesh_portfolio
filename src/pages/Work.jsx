import React, { Suspense, lazy,useRef } from "react";
import { MovingBorder } from "../components/Header/MovingBorder";
import axios from "axios";
import {
  Container,
  Grid,
  Box,
  Tooltip,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  Visibility,
  GitHub,
  //   Code,
  DeveloperMode,
  Storage,
} from "@mui/icons-material";
import Contact from "../components/Skeleton/Contact";
import { FaBackward, FaForward } from "react-icons/fa6";
// import ParticleComponent from "../components/ParticleComponent";
const Footer = lazy(() => import("../components/Footer/Footer"));
const Testimonials = lazy(() => import("./Testimonial"));
const ContactForm = lazy(() => import("./ContactForm"));

const Work = () => {
  const [getprojects, setGetProjects] = React.useState([]);
  const [loadingProjects, setLoadingProjects] = React.useState(true);
  const [pageInfo, setPageInfo] = React.useState({
    page: 1,
    totalPages: 1,
  });
  // const apiUrl = "http://localhost:5000";
  const apiUrl = process.env.REACT_APP_API_URL;

  React.useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        setLoadingProjects(true);
        const response = await axios.get(
          `${apiUrl}/api/getAllprojects?page=${pageInfo.page}`
        );
        if (response.status === 200) {
          const data = response.data;
          setGetProjects(data.data.allProjects);
          setPageInfo((prevPageInfo) => ({
            ...prevPageInfo,
            totalPages: data.data.totalPages,
          }));
          setLoadingProjects(false);

          // console.log("Total Pages:", data.data.totalPages); // Log totalPages here
          // console.log(data);
          // console.log(data.data.allProjects);
          // console.log("Data:", data);
          // alert(`Projects fetched successfully. Total Pages: ${data.data.totalPages}`);
        } else {
          console.error("Failed to fetch projects");
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoadingProjects(false);
      }
    };

    fetchAllProjects();
  }, [pageInfo.page]);

  const handlePagination = (action) => {
    setPageInfo((prevPageInfo) => {
      const newPage =
        action === "prev" ? prevPageInfo.page - 1 : prevPageInfo.page + 1;
      return {
        ...prevPageInfo,
        page: newPage,
      };
    });
  };
  // const apiUrl1 = "http://localhost:5000";
  // const apiUrl = process.env.REACT_APP_API_URL;
  
  const ProjectCard = ({ project }) => {
    const [loading, setLoading] = React.useState(true);
    const [loadingImage, setLoadingImage] = React.useState(true);
    const [showCodeIcons, setShowCodeIcons] = React.useState(false);
    const [image, setImage] = React.useState(null);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    React.useEffect(() => {
      let timer;
      if (inView) {
        timer = setTimeout(() => {
          setLoading(false);
        }, 10);
      }
      return () => clearTimeout(timer);
    }, [inView]);

    React.useEffect(() => {
        const fetchImage = async () => {
          try {
            const response = await axios.get(`${apiUrl}/api/projects/${project._id}/image`, {
              // responseType: 'blob'
            });
            const imageUrl =(response.data);
            setImage(imageUrl);
          } catch (error) {
            console.error("Error fetching image:", error);
          } finally {
            setLoadingImage(false);
          }
        };
    
        if (inView) {
          fetchImage();
        }
      }, [inView, project._id]);
  
    const handleImageLoad = () => {
      setLoadingImage(false);
    };
  
    const handleGitHubClick = () => {
      setShowCodeIcons(!showCodeIcons);
    };
  
    if (loadingProjects) {
      return (
        <>
          <Card className="skeleton-card">
            <Skeleton
              variant="rectangular"
              width="100%"
              height={60}
              style={{ borderRadius: 2, padding: '10px' }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={60}
              style={{ borderRadius: 2, padding: '10px' }}
            />
            <CardContent>
              <>
                <Skeleton width="60%" />
                <Skeleton width="40%" />
                <div className="skeleton-circle-card">
                  <Skeleton variant="circular" width={30} height={30} />
                  <Skeleton variant="circular" width={30} height={30} />
                </div>
              </>
            </CardContent>
          </Card>
        </>
      );
    }
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        style={{
          position: "relative",
          overflow: "visible",
          // boxShadow: "0px  3px 7px rgba(0, 0, 0, 0.6) !important",
          borderRadius: 8,
          margin: "1px",
        }}
      >
        <Card className="card-container work-card">
          <div style={{ position: 'relative', height: '140px' }}>
            {loadingImage && (
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                style={{ borderRadius: 8, position: 'absolute', top: 0, left: 0 }}
              />
            )}
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt={project.title}
              onLoad={handleImageLoad}
              style={{
                display: loadingImage ? "none" : "block",
                borderRadius: 8,
                transition: 'opacity 0.5s ease-in-out',
                opacity: loadingImage ? 0 : 1,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <CardContent>
            {loading ? (
              <>
                <Skeleton width="60%" />
                <Skeleton width="40%" />
                <div className="skeleton-circle-card">
                  <Skeleton variant="circular" width={30} height={30} />
                  <Skeleton variant="circular" width={30} height={30} />
                </div>
              </>
            ) : (
              <>
                <Typography variant="h6" component="div" className="work-title">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary"  className="work-subtitle">
                  {project.technology}
                </Typography>
                <Box display="flex" justifyContent="space-around" >
            <Tooltip title="View Project">
              <IconButton component="a" href={project.link} target="_blank">
                <div  className="work-title">
                  <Visibility />
                </div>
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub">
              <IconButton  className="work-title" onClick={handleGitHubClick}>
                <GitHub />
              </IconButton>
            </Tooltip>
            {showCodeIcons && (
              <Box display="flex">
                <Tooltip title="Frontend Code">
                  <IconButton
                    component="a"
                    href={project.code.frontend}
                    target="_blank"
                  >
                    <DeveloperMode  className="work-title"/>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Backend Code">
                  {project.code.backend && (
                    <IconButton
                      component="a"
                      href={project.code.backend}
                      target="_blank"
                    >
                      <Storage  className="work-title"/>
                    </IconButton>
                  )}
                </Tooltip>
              </Box>
            )}
          </Box>
              </>
            )}
          </CardContent>
          
        </Card>
      </motion.div>
    );
  };
  
  const containerRef = useRef(null);

  const scrollToTop = () => {
    containerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:17px_34px]">
    </div> */}
      <div className="p-2" style={{ background: "#0a0a0a" }}>
        <MovingBorder />
        <button className="button-29 m-2" onClick={scrollToTop}>
          Latest Work ↓
        </button>
        <p className="text-slate-400" style={{ marginLeft: "100px" }}>
          |
        </p>
      </div>
      {/* <ParticleComponent/> */}
      <div className=" help-bg bg-[linear-gradient(to_right,#8080800a_2px,transparent_2px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:21px_30px]">
      <Container ref={containerRef} className="pt-3">
        <Grid container spacing={3}>
          {getprojects.map?.((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
        <Box display="flex" justifyContent="center" alignItems="center" marginTop={2}>
          <button 
           className="button-30"
            disabled={pageInfo.page === 1}
            onClick={() => handlePagination("prev")}
          >
            <FaBackward className="m-2" color="gray" size="25px"/>
          </button>
          <Typography variant="body2" style={{ margin: "0 10px",fontSize:'18px' }}>
             {pageInfo.page}/{pageInfo.totalPages}
          </Typography>
          <button
          className="button-30"
            disabled={pageInfo.page === pageInfo.totalPages}
            onClick={() => handlePagination("next")}
          >
           <FaForward className="m-2" color="gray" size="25px"/>
          </button>
        </Box>
      </Container>
      <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<Contact/>}>
        <ContactForm />
      </Suspense>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
    </div>
  );
};

export default Work;