import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css';
import { useUserContext } from '../Components/UserProvider';
import { useNavigate } from 'react-router-dom';

function Project() {

  const params = useParams()
  const { user, setUser } = useUserContext()
  const [project, setProject] = useState(null)
  const [form, setForm] = useState({
    amount: 100,
    investment: "true"
  })
  const navigate = useNavigate()

  async function getProject() {
    const result = await axios.get('https://bonos-backend-ecode.vercel.app/api/projects/' + params.id);
    console.log(result.data)
    setProject(result.data);
  }

  useEffect(() => {
    getProject();
  }, []);

  function handleChange(event) {
    let name = event.target.name;

    let formCopy = { ...form };
    formCopy[name] = event.target.value

    setForm(formCopy)
  }

  
  async function handleSubmit(event) {
    event.preventDefault();
    let formCopy = form;
    formCopy.amount = parseInt(formCopy.amount);
    formCopy.userId = user._id;
    formCopy.projectId = project._id;
    formCopy.investment = (formCopy.investment === 'true');
    console.log(formCopy)
    const result = await axios.post('https://bonos-backend-8tth.vercel.app/api/contributions', formCopy);
    console.log(result.status)
    // navigate('/')
  }



  return (
    <div className="content-below-navbar">
      {project && (
        <div className="project-container">
          <h1 className="project-title">"Invest, Impact, Transform"</h1>
          <img
            src={project.picture}
            alt={`Project named ${project.name}`}
            className="project-image"
          />
          <div>
            {
              user ?
                <div>
                  <h3>Want to contribute?</h3>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="amount">Contribution amount: </label>
                      <input type='number' id="amount" name="amount" step={100} value={form.amount} onChange={handleChange} />
                    </div>
                    <div>
                      <fieldset>
                        <legend>Contribution type:</legend>
                        <div>
                          <input type="radio" id="invest" name="investment" value="true" checked={form.investment === "true"} onChange={handleChange} />
                          <label htmlFor="invest">Invest</label>
                        </div>

                        <div>
                          <input type="radio" id="donate" name="investment" value="false" checked={form.investment === "false"} onChange={handleChange} />
                          <label htmlFor="donate">Donate</label>
                        </div>
                      </fieldset>
                    </div>
                    <button>Make a contribution</button>
                  </form>
                </div>
                :
                <Link to='/login'>Want to contribute? Log In here</Link>

            }
          </div>
          <div className="project-table">
            <div className="project-row">
              <span className="project-label">Project name:</span>
              <span className="project-value">{project.name}</span>
            </div>
            <div className="project-row">
              <span className="project-label">Project category:</span>
              <span className="project-value">{project.shortDesc}</span>
            </div>
            <div className="project-row">
              <span className="project-label">Project description:</span>
              <span className="project-value">{project.longDesc}</span>
            </div>
            <div className="project-row">
              <span className="project-label">Project goal:</span>
              <span className="project-value">{project.goal}</span>
            </div>
            <div className="project-row">
              <span className="project-label">Project progression:</span>
              <span className="project-value">{project.progress}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project