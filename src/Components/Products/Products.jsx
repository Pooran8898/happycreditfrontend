import React from "react";
import "./Products.css";
import { FiSearch } from "react-icons/fi";
import { data } from "./Productsdata";
import { v4 as uuid } from "uuid";

export const Products = () => {
    return (
        <div className="productsContainer">
            <div className="searchContainer">
                <FiSearch className="searchIcon" />
                <input type="text" placeholder="Search" />
            </div>
            <div className="detailContainer">
                <h3>93 deals</h3>
                <h3>Featured</h3>
            </div>
            <div className="products">
                {data.length > 0 && data.map((el) => {
                    return <div key={uuid()} className="eachProduct">
                       <img src={`${el.image_url}`} alt="" />
                       <h2>{el.name}</h2>
                       <p>{el.description}</p>
                    </div>
                })}
            </div>
        </div>
    )
}