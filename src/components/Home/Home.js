import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import './Home.css';

const Home = () => {
    let navigate = useNavigate();
    const changeRouteToReviews = () => {
        let path = `/reviews`;
        navigate(path);
    }

    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <div className="product-container">
                <img src="https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge_wm_brb/public/field/image/2021/08/hp-pavilion-aero-13-hero1.jpg" alt="laptop.png" />
                <div className="details">
                    <h2 className="title-text-1">YOU NEED A BETTER LAPTOP</h2>
                    <h3 className="title-text-2">WE WILL PROVIDE YOU THE BEST ONE</h3>
                    <hr></hr>
                    <p>HP Envy Ultra Pro Max 13 is recognized as the best Laptop of 2022. It's stylish outlook and light weight is is attracting all potential user of all ages. The laptop has intel i7 12th gen Unlocked processor with 16 GB DDR4 ram.</p>
                    <button className="home-btn-2">DETAILS</button>
                </div>
            </div>
            <div className="review-container">
                <h2>CUSTOMER REVIEWS</h2>
                <div className="reviews-container">
                    {
                        reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
                <button onClick={changeRouteToReviews} className="home-btn">SEE ALL REVIEWS</button>
            </div>
        </div>
    );
}

export default Home;