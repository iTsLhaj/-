import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';
import Resume from './pages/Resume';

import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;