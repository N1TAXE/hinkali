import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes} from "./routes";
import {ERROR_ROUTE} from "./utils/consts";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Navigate to={ERROR_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;