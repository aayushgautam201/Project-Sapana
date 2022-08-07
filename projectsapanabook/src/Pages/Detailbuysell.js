import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import './Carddetailpage.css';
import axios from "axios";

const Detailbuysell = () => {

  const slugs = useParams();
  const secondslug = slugs["id"];

  const [Detailbuysellpage, setDetailbuysellpage] = useState([]);
  console.log(Detailbuysellpage);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/oldbooks/${secondslug}/`)
      .then((res) => {
        console.log(res.data);
        setDetailbuysellpage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(slugs);
  return (
    <>
      <section class="container product my-5 pt-5">
        {/* {Detailpages.map(Detailpage=>( */}
        <div class="row mt-1">
          <div class="col-lg-5 col-md-12 col-12">
            <img
              class="img-fluid w-100"
              src={Detailbuysellpage.book_image}
              alt=""
              id="main-img"
            />
            {/* <div class="small-img-group">
                        <div class="small-img-col">
                            <img src={Detailpage.product_frontimage} class="small-img" width="100%" id="small-img" alt=""/>
                        </div>
                        <div class="small-img-col">
                            <img src={Detailpage.product_sideimage} class="small-img" width="100%" id="small-img" alt=""/>
                        </div>
                        <div class="small-img-col">
                            <img src={Detailpage.product_backimage}class="small-img" width="100%" id="small-img"  alt=""/>
                        </div>
                    </div> */}
          </div>
          <div class="col-lg-6 col-md-12 col-12">
            {/* <h6>{Detailpage.product_category_name}/{Detailpage.product_subcategory_name}</h6> */}
            <h3 class="py-4">{Detailbuysellpage.book_name}</h3>
            {/* <button class="whatsapp-btn">Whatsapp Now</button> */}
            <h4 class="mt-5 mb-5">Description</h4>
            <p>{Detailbuysellpage.book_description1}</p>
            <p>{Detailbuysellpage.book_description2}</p>
            <p>{Detailbuysellpage.book_description3}</p>
          </div>
        </div>
        {/* )) */}
      </section>
    </>
  );
};
export default Detailbuysell;
