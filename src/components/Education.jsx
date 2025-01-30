import '../styles/App.css';
/* eslint-disable react/prop-types */
const Education = ({ education, onEducationChange, onAddEducation, isEditing }) => {
  return (
    <div className="education">
      <h2>Educational Experience</h2>
      {education.map((edu, index) => (
        <div key={index} className="education-entry">
          {isEditing ? (
            <form>
            <div className="form-group">
              <label htmlFor={`schoolName-${index}`}>School Name:</label>
              <input
                type="text"
                id={`schoolName-${index}`}
                name="schoolName"
                value={edu.schoolName}
                onChange={(e) => onEducationChange(index, e)}
                placeholder="Enter school name"
              />
            </div>
            <div className="form-group">
              <label htmlFor={`titleOfStudy-${index}`}>Title of Study:</label>
              <input
                type="text"
                id={`titleOfStudy-${index}`}
                name="titleOfStudy"
                value={edu.titleOfStudy}
                onChange={(e) => onEducationChange(index, e)}
                placeholder="Enter title of study"
              />
            </div>
            <div className="form-group">
              <label htmlFor={`dateOfStudy-${index}`}>Date of Study:</label>
              <input
                type="text"
                id={`dateOfStudy-${index}`}
                name="dateOfStudy"
                value={edu.dateOfStudy}
                onChange={(e) => onEducationChange(index, e)}
                placeholder="Enter date of study (e.g., 2015 - 2019)"
              />
            </div>
          </form>
          ) : (
            <div className="submitted-info">
                    <p><strong>School name:</strong> {edu.schoolName}</p>
                    <p><strong>Title of study:</strong> {edu.titleOfStudy}</p>
                    <p><strong>Date of study:</strong> {edu.dateOfStudy}</p>
                </div>
          )}
        </div>
      ))}
      <button type="button" onClick={onAddEducation} className="add-button">
        Add Education
      </button>
    </div>
  );
};

export default Education;