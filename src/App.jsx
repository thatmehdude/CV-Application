import  { useState } from 'react'
import GeneralInfo from './GeneralInfo';
import './App.css'

const App  = () => {
  const [userData, setUserData] = useState({
    generalInfo: {name: "", email: "", phoneNo: ""},
    education: [],
    workExperience: [],
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

  return (
    <div className='app'>
      <h1>CV Application</h1>
      <GeneralInfo
        generalInfo={userData.generalInfo}
        onGeneralInfoChange={handleGeneralInfoChange}
      />
    </div>
  );
}

export default App
