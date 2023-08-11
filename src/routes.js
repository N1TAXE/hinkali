import {
    AUTH_ROUTE,
    CATALOGUE_ROUTE,
    MAIN_ROUTE,
} from "./utils/consts";
import MainPage from "./pages/MainPage";
import Catalogue from "./pages/Catalogue";
import Auth from "./pages/Auth";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },

    {
        path: CATALOGUE_ROUTE,
        Component: Catalogue
    },

    {
        path: AUTH_ROUTE,
        Component: Auth
    },
]