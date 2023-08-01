import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const MainPage = observer(() => {
    const {globals} = useContext(Context)

    useEffect(() => {
        console.log(`Город: ${globals.getCity}`)
        console.log(`Заведение: ${globals.getInstitut}`)
    })

    return (
        <div>
            mainPage
        </div>
    );
});

export default MainPage;