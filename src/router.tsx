import { RoutePath } from 'assets/types/routes';
import { Routes, Route } from 'react-router-dom';

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