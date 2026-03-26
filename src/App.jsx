// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "./pages/superadmin/Login";
// import Dashboard from "./pages/superadmin/Dashboard";
// import Companies from "./pages/superadmin/Companies";
// import CompanyVerification from "./pages/superadmin/CompanyVerification";
// import Students from "./pages/superadmin/Students";

// import ProtectedRoute from "./routes/ProtectedRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public Route */}
//         <Route path="/" element={<Login />} />

//         {/* Protected Routes */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/companies"
//           element={
//             <ProtectedRoute>
//               <Companies />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/company-verification"
//           element={
//             <ProtectedRoute>
//               <CompanyVerification />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/students"
//           element={
//             <ProtectedRoute>
//               <Students />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/superadmin/Login";
import Dashboard from "./pages/superadmin/Dashboard";
import Companies from "./pages/superadmin/Companies";
import CompanyVerification from "./pages/superadmin/CompanyVerification";
import Students from "./pages/superadmin/Students";
import StudentProfile from "./pages/superadmin/StudentProfile"; 
import Internships from "./pages/superadmin/Internships";
import ActiveTests from "./pages/superadmin/ActiveTests";
import TotalCompany from "./pages/superadmin/TotalCompany";
import AboutUs from "./pages/superadmin/AboutUs";


import ActiveInternships from "./pages/superadmin/ActiveInternships";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/companies"
          element={
            <ProtectedRoute>
              <Companies />
            </ProtectedRoute>
          }
        />

      


        <Route
          path="/students"
          element={
            <ProtectedRoute>
              <Students />
            </ProtectedRoute>
          }
        />

        {/* ✅ ONLY NEW ROUTE ADDED */}
        <Route
          path="/students/:id"
          element={
            <ProtectedRoute>
              <StudentProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/internships"
          element={
          <ProtectedRoute>
          <Internships />
          </ProtectedRoute>
          }
       />

        <Route
           path="/active-internships"
           element={
           <ProtectedRoute>
            <ActiveInternships />
           </ProtectedRoute>
          }
        />
        <Route
  path="/active-tests"
  element={
    <ProtectedRoute>
      <ActiveTests />
    </ProtectedRoute>
  }
/>

<Route
  path="/company-verification"
  element={
    <ProtectedRoute>
      <TotalCompany />
    </ProtectedRoute>
  }
/>

<Route
  path="/company-verification/:id"
  element={
    <ProtectedRoute>
      <CompanyVerification />
    </ProtectedRoute>
  }
/>
<Route path="/about" element={<AboutUs />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
