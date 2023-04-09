import axios from "axios";
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

  return (
    <div className="h-[calc(100vh-48px)] overflow-y-scroll overflow-x-hidden z-0  scrollbar-thin scrollbar-track-neutral-300 scrollbar-thumb-neutral-800 scrollbar-thumb-rounded-md">
      <div className="flex flex-col justify-between min-h-full">
        <div className="text-neutral-800 text-center my-10">
          <p className="text-sm uppercase tracking-widest">solution for</p>
          <h2 className="text-2xl font-medium first-letter:text-3xl">
            {projects.name}
          </h2>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-evenly max-w-6xl mx-auto my-14">
          {projects.products?.map((project) => {
            return (
              <div
                key={project.id}
                className="p-2 bg-emerald-700 m-4 w-72 rounded-lg group"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    className="hover:scale-125 transition-all duration-700 ease-in-out"
                  />
                </div>
                <div className="cursor-default space-y-3 my-3">
                  <h4 className="text-lg font-medium text-center text-neutral-100 tracking-wide">
                    {project.name}
                  </h4>
                  <p className="text-sm font-thin text-center text-neutral-300">
                    {project.description}
                  </p>
                  <p className="text-2xl font-semibold text-center text-neutral-400 tracking-wide group-hover:text-neutral-100 transition-all duration-300 ease-linear">
                    ${project.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-neutral-900 h-44"></div>
      </div>
    </div>
  );
};

export default Project;
