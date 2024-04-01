
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import ProjectCard from '../Components/ProjectCard';
import { useUserContext } from '../Components/UserProvider';


function Home() {
  const [projects, setProjects] = useState([])

  async function getProjects() {
    const result = await axios.get('http://localhost:3000/api/projects');
    setProjects(result.data);
  }

  const {user, setUser} = useUserContext()

  useEffect(() => {
    getProjects();
  }, []);

  //Separar los proyectos por categoría
  const projectsByCategory = {
    0: [],
    1: [],
    2: []
  };

  projects.forEach(project => {
    projectsByCategory[project.category].push(project);
  });

  // Función para renderizar los proyectos de una categoría
  const renderProjects = (categoryProjects) => {
    return categoryProjects.map(project => (
      <ProjectCard key={project._id} project={project} />
    ));
  };

  return (
    <div className="content-below-navbar">
      <div>
        <h1 className="page-title">"Coupons"</h1>
        {user && <h3>Welcome, {user.email}!</h3>}
        <div className="projectsContainer">
          <div className={`projectsColumn category-0`}>
            <h2 className="column-title">Urgent</h2> {/* Título para la columna de la categoría 0 */}
            {renderProjects(projectsByCategory[0])}
          </div>
          <div className={`projectsColumn category-1`}>
            <h2 className="column-title">Four-Year Return</h2> {/* Título para la columna de la categoría 1 */}
            {renderProjects(projectsByCategory[1])}
          </div>
          <div className={`projectsColumn category-2`}>
            <h2 className="column-title">Catalytic Donation</h2> {/* Título para la columna de la categoría 2 */}
            {renderProjects(projectsByCategory[2])}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
