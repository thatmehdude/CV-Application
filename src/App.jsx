import  { useState } from 'react'
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import WorkExperience from './WorkExperience';
import './App.css'

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

  return (
    <div className='app'>
      <h1>CV Application</h1>
      <GeneralInfo
        generalInfo={userData.generalInfo}
        onGeneralInfoChange={handleGeneralInfoChange}
      />
      <Education
        education={userData.education}
        onEducationChange={handleEducationChange}
        onAddEducation={addEducation}
      />
      <WorkExperience
        workExperience={userData.workExperience}
        onWorkExperienceChange={handleWorkExperienceChange} 
      />
    </div>
  );
}

export default App
