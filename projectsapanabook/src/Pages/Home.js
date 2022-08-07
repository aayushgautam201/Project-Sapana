// import Card from "../Components/Card";
import Carousel from "../Components/Carousel";
import './Home.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,useParams
  } from "react-router-dom";
  // import Blogpagedetail from "./Pages/Blogpagedetail";
  import React, { useState, useEffect } from "react";
//   import './Card.css';
  import axios from "axios";
import './Card.css'


const Home = () => {
    // const slug = useParams();
    // const Newslug = slug['id'];
    const [Data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/newbooks/`)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <Carousel />
            <h2 style={{
                color: "#171C24",
                margin: "0px",
                padding: "20px",
                backgroundColor: "#F6F6F6",
                fontSize: "40px",
                fontWeight: "bold"

            }}>Featured Products</h2>


            <div className="bodyjastai">
                {Data.map(datas => (
                    <Link to = {`/detail/${datas.id}`}>
                    <div className="card">
                        <img src={datas.book_image} />
                        <div className="card-info">
                            <h6>{datas.book_name}</h6>
                            <button>Price:${datas.book_price}
                                {/* <Link to="/card/detail" ></Link> */}
                            </button>
                        </div>
                    </div>
                    </Link>
                ))}
                {/* <Card
                    title={props.books[0].title}
                    image={props.books[0].image}
                    price={props.books[0].price}
                />
                <Card
                    title={props.books[1].title}
                    image={props.books[1].image}
                    price={props.books[1].price}
                />
                <Card
                    title={props.books[2].title}
                    image={props.books[2].image}
                    price={props.books[2].price}
                />
                <Card
                    title={props.books[3].title}
                    image={props.books[3].image}
                    price={props.books[3].price}
                /> */}
                {/* <Card
                    title={props.books[4].title}
                    image={props.books[4].image}
                    price={props.books[4].price}
                /> */}
            </div>

        </div>
    );
}

export default Home;