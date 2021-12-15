import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Main from "./pages/Main";
import GalleryPage from "./pages/GalleryPage";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/gallery" element={<GalleryPage />} exact />
            </Routes>
        </HashRouter>
    );
}

export default App;
