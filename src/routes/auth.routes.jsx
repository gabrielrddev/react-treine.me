import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Index.jsx';
import { About } from '../pages/About/index.jsx';
import { List } from '../pages/List/index.jsx';
import { Form } from '../pages/Form/index.jsx'


export function AuthRoutes() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="List" element={<List />} />
      <Route path="Form" element={<Form />} />

      {/* Rotas protegidas
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      /> */}
    </Routes>
  );
}

