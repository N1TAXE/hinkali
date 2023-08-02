import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {GeolocationControl, Map, Placemark, Rectangle, YMaps, ZoomControl} from "react-yandex-maps";
import icon from '../assets/images/icons/marker_static.png'
import axios from "axios";
import {iconSearch} from "../components/Icons";
import InstituteMiniCard from "../components/MapScreen/InstituteMiniCard";

const InstitutSelect = observer(() => {
    const [places, setPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {globals} = useContext(Context)

    const mult = 0.1

    const cityCoordinates = globals.getCity.coords;
    const bboxN = [
        [cityCoordinates[0]-mult, cityCoordinates[1]-mult],
        [cityCoordinates[0]+mult, cityCoordinates[1]+mult]
    ];

    const searchPlaces = async () => {
        const apiKey = 'bd392102-eceb-4507-a5c0-7b5e9d7bf816';
        const searchQuery = 'Старик Хинкалыч';
        const category = 'biz';
        const bbox = `${bboxN[0][1]},${bboxN[0][0]}~${bboxN[1][1]},${bboxN[1][0]}`;

        try {
            const data = await axios.get(
                `https://search-maps.yandex.ru/v1/?text=${searchQuery}&type=${category}&lang=ru_RU&apikey=${apiKey}&bbox=${bbox}&rspn=1`
            );

            return data.data.features.map((feature) => ({
                name: feature.properties.name,
                lat: feature.geometry.coordinates[1],
                lng: feature.geometry.coordinates[0],
            }))
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        searchPlaces().then((data) => {
            setPlaces(data);
        });
    }, []);


    const handleMarkClick = () => {
        console.log('text')
    }

    useEffect(() => {
        if (places) {
            setIsLoading(false)
        }
    }, [places])

    if (isLoading) {
        return (
            <div>Loading</div>
        )
    }

    const handleBack = () => {
        globals.setCity(null)
    }

    return (
        <div className="map">
            {/*<InstituteMiniCard/>*/}
            <div onClick={handleBack} className="map__topbar">
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
                                center: cityCoordinates,
                                zoom: 13
                            }}
                            width="100vw"
                            height="100vh"
                            options={{
                                size: "small",
                                suppressMapOpenBlock: true,
                            }}
                        >
                            <ZoomControl options={{ position: { right: 10, bottom: 150 }, zoomSize: 'small' }} />
                            <GeolocationControl options={{ position: { right: 10, bottom: 100 }}} />
                            {places && places.map((place, index) => (
                                <Placemark
                                    key={index}
                                    onClick={handleMarkClick}
                                    geometry={[place.lat, place.lng]}
                                    options={{
                                        iconLayout: 'default#image',
                                        iconImageHref: icon,
                                        iconImageSize: [44, 60],
                                        iconImageOffset: [-20, -35],
                                    }}
                                    properties={{
                                        balloonContent: place.name, // Содержимое всплывающей подсказки при клике на метку
                                    }}
                                />
                            ))}
                        </Map>
                    </div>
                </YMaps>
            </div>
            <div className="map__search">
                <div className="input__item input_icon_left">
                    <div className="input__container">
                        <img src={iconSearch} alt=""/>
                        <input placeholder="Найти по адресу" name="search" type="text"/>
                    </div>
                </div>
                <button className="btn btn-icon btn-tiny btn-red">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 18H13C13.55 18 14 17.55 14 17C14 16.45 13.55 16 13 16H11C10.45 16 10 16.45 10 17C10 17.55 10.45 18 11 18ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7ZM7 13H17C17.55 13 18 12.55 18 12C18 11.45 17.55 11 17 11H7C6.45 11 6 11.45 6 12C6 12.55 6.45 13 7 13Z" fill="white"/>
                    </svg>
                </button>
            </div>
        </div>
    );
});

export default InstitutSelect;