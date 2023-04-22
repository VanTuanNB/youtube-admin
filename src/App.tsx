import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './layouts/components/Auth/index.component';
import PrimaryLayout from './layouts/PrimaryLayout/index.component';
import VideoPage from './layouts/components/Videos/index.component';
import UserPage from './layouts/components/User/index.component';
import ProtectRouter from './layouts/components/Auth/ProtectRoute/index.component';
import HomePage from './layouts/components/Home/index.component';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" Component={LoginPage} />
                <Route
                    path="/"
                    element={
                        <ProtectRouter>
                            <PrimaryLayout />
                        </ProtectRouter>
                    }
                >
                    <Route path="user" Component={UserPage} />
                    <Route path="video" Component={VideoPage} />
                    <Route path="/" Component={HomePage} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
