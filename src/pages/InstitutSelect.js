import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {GeoObject, Map, YMaps} from "react-yandex-maps";

const InstitutSelect = observer(() => {
    const {globals} = useContext(Context)

    useEffect(() => {
        console.log(globals.getCity)
    })

    return (
        <div className="map">
            <div className="map__topbar">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31 23.0002H19.83L24.71 18.1202C25.1 17.7302 25.1 17.0902 24.71 16.7002C24.32 16.3102 23.69 16.3102 23.3 16.7002L16.71 23.2902C16.32 23.6802 16.32 24.3102 16.71 24.7002L23.3 31.2902C23.69 31.6802 24.32 31.6802 24.71 31.2902C25.1 30.9002 25.1 30.2702 24.71 29.8802L19.83 25.0002H31C31.55 25.0002 32 24.5502 32 24.0002C32 23.4502 31.55 23.0002 31 23.0002Z" fill="#8D191D"/>
                </svg>

                {globals.getCity.title}
            </div>
            <div className="map__map">
                <YMaps>
                    <div>
                        <Map
                            defaultState={{
                                center: [44.948237, 34.100327],
                                zoom: 15
                            }}
                            width="100vw"
                            height="100vh"
                            options={{
                                suppressMapOpenBlock: true
                            }}
                        >
                            <GeoObject
                                geometry={{
                                    type: "Placemark",
                                    coordinates: [

                                    ]
                                }}
                            >

                            </GeoObject>
                        </Map>
                    </div>
                </YMaps>
            </div>
            <div className="map__search">

            </div>
        </div>
    );
});

export default InstitutSelect;