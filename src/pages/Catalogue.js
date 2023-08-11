import React from 'react';
import TabBar from "../components/TabBar";
import {NavLink} from "react-router-dom";
import {MAIN_ROUTE} from "../utils/consts";
import CardPhoto from "../assets/images/cards/Photo.png"
import ProductCard from "../components/Catalogue/ProductCard";
import CatalogStories from "../components/Catalogue/CatalogStories";
import CatalogTopInfo from "../components/Catalogue/CatalogTopInfo";
import CatalogTabs from "../components/Catalogue/CatalogTabs";

const Catalogue = () => {
    const products = [
        {
            id: 0,
            title: 'Хинкали с говядиной',
            discount: 15,
            price: 45,
            oldPrice: 50,
            weight: 35,
            inStock: true
        },
        {
            id: 1,
            title: 'Хинкали с мясом и зеленью',
            discount: 15,
            price: 45,
            oldPrice: 50,
            weight: 35,
            inStock: false
        },
        {
            id: 2,
            title: 'Хинкали с мясом без зелени',
            discount: null,
            price: 45,
            oldPrice: null,
            weight: 35,
            inStock: true
        },
        {
            id: 3,
            title: 'Хинкали с бараниной и зеленью',
            discount: null,
            price: 45,
            oldPrice: null,
            weight: 35,
            inStock: true
        },
        {
            id: 4,
            title: 'Хинкали с бараниной и зеленью',
            discount: null,
            price: 45,
            oldPrice: null,
            weight: 35,
            inStock: true
        },
        {
            id: 5,
            title: 'Хинкали с бараниной и зеленью',
            discount: null,
            price: 45,
            oldPrice: null,
            weight: 35,
            inStock: true
        }
    ]
    return (
        <div className="catalogue">
            <div className="catalogue-header">
                <CatalogTopInfo/>
                <CatalogStories/>
                <CatalogTabs/>
            </div>
            <div className="catalogue-content">
                <div className="catalogue-content__cards">
                    {products && products.map((item)=>(
                        <ProductCard data={item} key={item.id}/>
                    ))}
                </div>
            </div>
            <TabBar/>
        </div>
    );
};

export default Catalogue;