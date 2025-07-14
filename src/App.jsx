import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './views/pages/authPages/Login.jsx';
import Signup from './views/pages/authPages/Signup.jsx';
import PreSignup from './views/pages/authPages/PreSignup.jsx';
import WelcomeScreen from './views/pages/studentPages/resume/WelcomeScreen.jsx';
import TemplateSelection from './views/pages/studentPages/resume/TemplateSelection.jsx';
import ResumeBuilder from './views/pages/studentPages/resume/ResumeBuilder.jsx';

function App() {
  return (
  <Routes>
    <Route path="/preSignup" element={<PreSignup />} />
    <Route path="/signin" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    
    <Route path="/wel" element={<WelcomeScreen />} />
    <Route path="/templates" element={<TemplateSelection />} />
    <Route path="/builder" element={<ResumeBuilder />} />
    
    {/* <Route path="/upload-resume" element={<UploadResume />} /> */}
    {/* <Route path="/connect-accounts" element={<ConnectAccounts />} />
    <Route path="/experience" element={<ExperienceStep />} />
    <Route path="/projects" element={<ProjectsStep />} />
    <Route path="/skills" element={<SkillsStep />} />
    <Route path="/preview" element={<FinalPreview />} /> */}





    
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
  );
}

export default App;