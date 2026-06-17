import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllPosts from "./components/AllPosts";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<AllPosts />} />
                <Route path="/create" element={<Create />} />
                <Route path="/edit" element={<Edit />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;