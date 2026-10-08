import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './Pages/Home';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import Books from './Pages/Books';
import Login from './Pages/Out/Login';
import Register from './Pages/Out/Register';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;