import  { useState } from 'react'
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import './styles/App.css'

const App  = () => {
  const [userData, setUserData] = useState({
    generalInfo: {name: "", email: "", phone: ""},
    education: [
      {
        schoolName: "",
        titleOfStudy: "",
        dateOfSTudy: "",
      },
    ],
    workExperience: [
      {
        placeOfWork: "",
        jobTitle: "",
        year: "",
      }
    ],
  });

  // Tracks if form is in edit mode
  const [isEditing, setIsEditing] = useState(true);

  // Function of update info change
  const handleGeneralInfoChange = (e) => {
    const {name, value } = e.target;
    setUserData ((prevData) => ({
      ...prevData,
      generalInfo : {
        ...prevData.generalInfo, [name]: value,
      },
    }));
  };

  // Function to update educational experience
  const handleEducationChange = (index, e) => {
    const { name, value} = e.target;
    const newEducation = [...userData.education];
    newEducation[index] = { ...newEducation[index], [name]: value };
    setUserData((prevData) => ({
      ...prevData,
      education: newEducation,
    }));
  };

  // Function to add Education
  const addEducation = () => {
    setUserData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        { schoolName: "", titleOfStudy: "", dateOfStudy: "" },
      ],
    }));
  };

  // Function to update wwork experience
  const handleWorkExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newWorkExperience = [...userData.workExperience];
    newWorkExperience[index] = {...newWorkExperience[index], [name]: value };
    setUserData((prevData) => ({
      ...prevData,
      workExperience: newWorkExperience,
    }));
  };

  // Function to add Work Experience
  const addWorkExperience = () => {
    setUserData((prevData) => ({
      ...prevData,
      workExperience: [
        ...prevData.workExperience,
        { placeOfWork: "", jobTitle: "", year: "" },
      ],
    }));
  };

  // Function to handle form submission
  const handleSubmit = () => {
    setIsEditing(false);
  };

  // Function to handle editing
  const handleEdit = () => {
    setIsEditing(true);
  }

  return (
    <div className='app'>
      <h1>CV Application</h1>
      <GeneralInfo
        generalInfo={userData.generalInfo}
        onGeneralInfoChange={handleGeneralInfoChange}
        isEditing={isEditing}
      />
      <Education
        education={userData.education}
        onEducationChange={handleEducationChange}
        onAddEducation={addEducation}
        isEditing={isEditing}
      />
      <WorkExperience
        workExperience={userData.workExperience}
        onWorkExperienceChange={handleWorkExperienceChange}
        onAddWorkExperience={addWorkExperience}
        isEditing={isEditing} 
      />
      <div className='actions'>
        {isEditing ? (
          <button type='button' onClick={handleSubmit} className='submit-button'>Submit</button>
        ) : (
          <button type='button' onClick={handleEdit} className='edit-button'>Edit</button>
        )
        }
      </div>
    </div>
  );
}

export default App
