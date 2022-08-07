import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import './Carddetailpage.css';
import axios from 'axios';


// const Carddetailpage = () => {
//     const slug = useParams();
//     const Newslug = slug['id'];
//     const [Detailpage, setDetailpage] = useState([]);
 
//     useEffect(()=>
//     {
//         axios.get(`http://localhost:8000/newbooks/${Newslug}/`)
//     .then((res)=>{
//         console.log(res.data);
//         setDetailpage(res.data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
//     },[])

//     console.log(slug);

//     return (
//         <>
//         <br/>
//         <br/>
//         <br/>
//           <div className="bib">
//          <div className="flo">
//              <div className="flo">

//                  <div className="mol">
//                      <div className="glider">
//                         <div className="dreview">
//                             <img src={Detailpage.book_image} id="imagebox" alt=""/>

//                           </div> 
//                         </div>
//                     </div>


//                     <div className="mol">
//                        <div className="content">
//                          <h2>{Detailpage.book_name}</h2>
//                          <p className="grice">Price:${Detailpage.book_price}</p>
//                          <a href="/Buy_now" className="btn">Buy Through insta</a>
//                      </div>
//                  </div>
//              </div>
//          </div>
//      </div>
//      <div>
//          <p>{Detailpage.book_description}</p>
//      </div>
//         </>
//      );
// }
 
const Carddetailpage =()=>{
    const slug= useParams();
    const Newslug = slug['id'];

    const [Detailpage, setDetailpage] = useState([]);
    console.log(Detailpage)

    useEffect(()=>
    {
        axios.get(`http://localhost:8000/newbooks/${Newslug}/`)
    .then((res)=>{
        console.log(res.data);
        setDetailpage(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
    },[])

    console.log(slug);
    return(
        <>
            <section class="container product my-5 pt-5">
            {/* {Detailpages.map(Detailpage=>( */}
            <div class="row mt-1">
                <div class="col-lg-5 col-md-12 col-12">
                    <img class="img-fluid w-100" src={Detailpage.book_image} alt="" id="main-img"/>
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
                    <h3 class="py-4">{Detailpage.book_name}</h3>
                    {/* <button class="whatsapp-btn">Whatsapp Now</button> */}
                    <h4 class="mt-5 mb-5">Description</h4>
                    <p>
                    {Detailpage.book_description1}
                    </p>
                    <p>
                    {Detailpage.book_description2}
                    </p>
                    <p>
                    {Detailpage.book_description3}
                    </p>
                </div>
            </div>
            {/* )) */}
    </section>
        </>
    )
}
export default Carddetailpage;