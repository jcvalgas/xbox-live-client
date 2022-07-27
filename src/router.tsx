import { RoutePath } from './types/routes';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profiles from './pages/Profiles';
import ProfileSettings from './pages/ProfileSettings';
import Homepage from './pages/Homepage';

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.REGISTER} element={<Register />} />
            <Route path={RoutePath.LOGIN} element={<Login />} /> 
            <Route path={RoutePath.PROFILES} element={<Profiles />} />
            <Route path={RoutePath.SETTINGS_PROFILES} element={<ProfileSettings />} />
            <Route path={RoutePath.HOMEPAGE} element={<Homepage />} />
        </Routes>
    )
}

export default Router;