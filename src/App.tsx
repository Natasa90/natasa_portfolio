
import { FC } from 'react' 
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout'
import { HomePage } from './components/pages/homePage'
import { FormData } from './components/pages/contactPage';
import { Navbar } from './components/navBar';

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<FormData />} />
        </Routes>
      </Layout>
    </Router>
);
};

export default App;