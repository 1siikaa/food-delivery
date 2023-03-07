import React from 'react'
let img= [
    "https://source.unsplash.com/1200x500/?iced-coffee",
    "https://source.unsplash.com/1200x500/?south-food",
    "https://source.unsplash.com/1200x500/?north-indian-food",
    "https://source.unsplash.com/500x500/?west-indian-food",

]
function Components() {
  return (
    <div> 
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img[0]} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Italian Cappuccino</h5>
        <p>We offer beverages</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img[1]} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>South-Indian Cuisine</h5>
        <p>We offer South-Indian Cuisine</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img[2]} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Horn of Africa and South Arabian Coffee Beans</h5>
        <p>~60% of the coffee produced worldwide is Arabica and ~40% is Robusta</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div></div>
  )
}

export default Components