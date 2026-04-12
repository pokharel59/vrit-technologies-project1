// App.tsx
import { Routes, Route } from 'react-router-dom'
import AspectsPage from './aspectsPage';
import SkillPage from './skillPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AspectsPage />} />
      <Route path='/skill-page' element={<SkillPage />} />
    </Routes>
  )
}

export default App;