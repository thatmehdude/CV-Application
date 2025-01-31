import '../styles/App.css';
/* eslint-disable react/prop-types */
const WorkExperience = ({ workExperience, onWorkExperienceChange, onAddWorkExperience, isEditing }) => {
    return (
      <div className="work-experience">
        <h2>Work Experience</h2>
        {workExperience.map((work, index) => (
          <div key={index} className="workExperience-entry">
            {isEditing ? (
              <form>
              <div className="form-group">
                <label htmlFor={`placeOfWork-${index}`}>Place of Work:</label>
                <input
                  type="text"
                  id={`placeOfWork-${index}`}
                  name="placeOfWork"
                  value={work.placeOfWork}
                  onChange={(e) => onWorkExperienceChange(index, e)}
                  placeholder="Enter Place of work"
                />
              </div>
              <div className="form-group">
                <label htmlFor={`jobTitle-${index}`}>Job Title:</label>
                <input
                  type="text"
                  id={`jobTitle-${index}`}
                  name="jobTitle"
                  value={work.jobTitle}
                  onChange={(e) => onWorkExperienceChange(index, e)}
                  placeholder="Enter job title"
                />
              </div>
              <div className="form-group">
                <label htmlFor={`year-${index}`}>Year:</label>
                <input
                  type="text"
                  id={`year-${index}`}
                  name="year"
                  value={work.year}
                  onChange={(e) => onWorkExperienceChange(index, e)}
                  placeholder="Enter year of work (e.g., 2015 - 2019)"
                />
              </div>
            </form>
            ) : (
              <div className="submitted-info">
                <p><strong>Place of work:</strong> {work.placeOfWork}</p>
                <p><strong>Job title:</strong> {work.jobTitle}</p>
                <p><strong>Year:</strong> {work.year}</p>
              </div>
            )}
            
          </div>
        ))}
        <button type="button" onClick={onAddWorkExperience} className="add-button">
        Add Work Experience
      </button>
      </div>
    );
  };
  
  export default WorkExperience;