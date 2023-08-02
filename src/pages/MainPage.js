import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import CitySelect from "./CitySelect";
import InstitutSelect from "./InstitutSelect";

const MainPage = observer(() => {
    const {globals} = useContext(Context)

    switch(globals.getCity) {
        case null:
            return (
                <CitySelect/>
            );
        case globals.getCity:
            return (
                <InstitutSelect/>
            );
        default:
            return (
                <CitySelect/>
            );
    }
});

export default MainPage;