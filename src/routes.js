import {
    AUTH_ROUTE, BASKET_ROUTE,
    CATALOGUE_ROUTE, DELIVERYADDRESSES_ROUTE,
    MAIN_ROUTE, ORDERS_ROUTE, PERSONAL_ROUTE, PROFILE_ROUTE,
} from "./utils/consts";
import MainPage from "./pages/MainPage";
import Catalogue from "./pages/Catalogue";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Personal from "./pages/Personal";
import DeliveryAddresses from "./pages/DeliveryAddresses";
import Orders from "./pages/Orders";
import Basket from "./pages/Basket";

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

    {
        path: PROFILE_ROUTE,
        Component: Profile
    },

    {
        path: PERSONAL_ROUTE,
        Component: Personal
    },

    {
        path: DELIVERYADDRESSES_ROUTE,
        Component: DeliveryAddresses
    },

    {
        path: ORDERS_ROUTE,
        Component: Orders
    },

    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]