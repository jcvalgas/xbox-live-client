import { RoutePath } from './types/routes';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />
            {/* <Route path={RoutePath.REGISTER} element={<Register />} />
            <Route path={RoutePath.LOGIN} element={<Login />} />
            <Route path={RoutePath.PROFILES} element={<Profiles />} /> */}
        </Routes>
    )
}

export default Router;