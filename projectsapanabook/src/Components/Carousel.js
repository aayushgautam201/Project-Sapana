const Carousel = () => {
    return (
        <div className="mt-5 pt-4">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <img src="./images/carousel-1.png" class="d-block w-100" alt="image1"/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="./images/carousel-2.png" class="d-block w-100" alt="image2"/>
                    </div>
                    <div class="carousel-item">
                        <img src="./images/carousel-3.png" class="d-block w-100" alt="image3"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;