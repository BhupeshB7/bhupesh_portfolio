import { Card, Grid } from '@mui/material';
import axios from 'axios';
import React from 'react'

const Test = () => {
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
  if(loadingProjects){
    return (<div className="text-slate-200">Loading...</div>)
  }
  const ProjectCard = ({ project }) => {
    return (<div>
        <Card className="card-container work-card">
            <h1>{project.title}</h1>
            <p>{project.technology}</p>
            <p>{project.description}</p>
            <p>{project.link}</p>
        </Card>

    </div>)
  }
  return (
    <div>
        {getprojects.map?.((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard project={project} />
            </Grid>
          ))}
    </div>
  )
}

export default Test