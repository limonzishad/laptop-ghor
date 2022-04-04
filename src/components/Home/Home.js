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
                    <h2>YOU NEED A BETTER LAPTOP</h2>
                    <h3>WE PROVIDE THE BEST ONE</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sunt explicabo aliquid vero sed repellat fugit non deleniti possimus quia, dolorum quisquam nesciunt inventore nostrum, alias quam necessitatibus cupiditate nihil.</p>
                    <button className="home-btn">DETAILS</button>
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