// import React, { Suspense, lazy } from "react";
// import "./App.css";
// import { Background } from "./components/Header/Background";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import IntelliTicksChatbot from "./components/IntelliTicksChatbot";
// import AboutS from "./components/Skeleton/AboutS";
// import Help from "./pages/Help";
// import PageNotFound from "./pages/PageNotFound";

// // Lazy loading components
// const About = lazy(() => import("./pages/About"));
// const AddProject = lazy(() => import("./pages/AddProject"));

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Suspense fallback={<h5>Loading Background...</h5>}>
//                 <Background />
//               </Suspense>
//             }
//           />
//           <Route
//             path="/about"
//             element={
//               <Suspense fallback={<AboutS/>}>
//                 <About />
//               </Suspense>
//             }
//           />
//           <Route path="/abouts" element={<AboutS />} />
//           <Route path="/help" element={<Help />} />
//           <Route path="*" element={<PageNotFound />} />

//           <Route
//             path="/add-project/bhupesh"
//             element={
//               <Suspense fallback={<h5>Loading AddProject...</h5>}>
//                 <AddProject />
//               </Suspense>
//             }
//           />
//         </Routes>
//         <IntelliTicksChatbot />
//         {/* <TawkTo /> */}
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;




import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { GlobalStyle } from './styles/GlobalStyle';
// import ThemeSwitcher from './components/ThemeSwitcher';
import IntelliTicksChatbot from './components/IntelliTicksChatbot';
import AboutS from './components/Skeleton/AboutS';
import Help from './pages/Help';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import { Background } from "./components/Header/Background";
import Starry from './components/Header/Starry';
import { Analytics } from '@vercel/analytics/react';
import Contact from './components/Skeleton/Contact';
// Lazy loading components
const About = lazy(() => import('./pages/About'));
const AddProject = lazy(() => import('./pages/AddProject'));
// const Background = lazy(() => import('./components/Header/Background'));

const ThemedApp = () => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={{ theme }}>
      <GlobalStyle theme={theme} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<h5>Loading Background...</h5>}>
                <Background />
                {/* <Starry/> */}
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<AboutS />}>
                <About />
              </Suspense>
            }
          />
          <Route path="/abouts" element={<AboutS />} />
          <Route path="/help" element={
            <Suspense fallback={<Contact />}><Help /></Suspense>
          } 
            />
          <Route
            path="/add-project/bhupesh"
            element={
              <Suspense fallback={<h5>Loading AddProject...</h5>}>
                <AddProject />
              </Suspense>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <IntelliTicksChatbot />
        <Analytics />
      </BrowserRouter>
    </StyledThemeProvider>
  );
};

const App = () => (
  <ThemeProvider>
    <ThemedApp />
  </ThemeProvider>
);

export default App;
