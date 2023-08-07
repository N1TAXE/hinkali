import {
    CATALOGUE_ROUTE,
    MAIN_ROUTE,
} from "./utils/consts";
import MainPage from "./pages/MainPage";
import Catalogue from "./pages/Catalogue";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },

    {
        path: CATALOGUE_ROUTE,
        Component: Catalogue
    },
]