import axios from "axios";
import { Router } from "next/router";
import React, { useEffect, useState } from "react";

export const getServerSideProps = async (context) => {
  var id = await context.query["id"];
  return {
    props: {
      id,
    },
  };
};

const Project = ({ id }) => {
  const [projects, setProjects] = useState([]);
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3031/projects/${id}`)
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(projects.name);

  return (
    <div>
        <h2>{projects.name}</h2>
      <div>
        {(projects.products)?.map((project) => {
          return (
            <div key={project.id}>
                
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Project;
