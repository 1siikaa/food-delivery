import React from 'react'
let imgs= [
  "https://source.unsplash.com/1200x500/?iced-coffee",
  "https://source.unsplash.com/1200x500/?south-food",
  "https://source.unsplash.com/1200x500/?north-indian-food",
  "https://source.unsplash.com/500x500/?west-indian-food",
  "https://source.unsplash.com/500x500/?west-indian-food",
  "https://source.unsplash.com/500x500/?west-indian-food",
  "https://source.unsplash.com/500x500/?west-indian-food",
  "https://source.unsplash.com/500x500/?west-indian-food",
  "https://source.unsplash.com/500x500/?west-indian-food"

]
function Card() {
  return (
    <div><div class="album py-5 bg-light">
    <div class="container">

      <div class="row">
      <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="..." src={imgs[0]} data-holder-rendered="true" style={{"height": "225px", "width": "100%", "display": "block"}}/>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
              <div className="container w-100">
          <select className="m-2 h-100 bg-success">
            {Array.from(Array(6), (e , i) => {
              return (
                <option key={i + 1} value={i + 1}>                   
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 h-100 bg-success rounded">
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <div className="d-inline h-100 fs-5">Total Price</div>
        </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="..." src={imgs[1]} data-holder-rendered="true" style={{"height": "225px", "width": "100%", "display": "block"}}/>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
              <div className="container w-100">
          <select className="m-2 h-100 bg-success">
            {Array.from(Array(6), (e , i) => {
              return (
                <option key={i + 1} value={i + 1}>                   
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 h-100 bg-success rounded">
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <div className="d-inline h-100 fs-5">Total Price</div>
        </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="..." src={imgs[2]} data-holder-rendered="true" style={{"height": "225px", "width": "100%", "display": "block"}}/>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
              <div className="container w-100">
          <select className="m-2 h-100 bg-success">
            {Array.from(Array(6), (e , i) => {
              return (
                <option key={i + 1} value={i + 1}>                   
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 h-100 bg-success rounded">
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <div className="d-inline h-100 fs-5">Total Price</div>
        </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="..." src={imgs[3]} data-holder-rendered="true" style={{"height": "225px", "width": "100%", "display": "block"}}/>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
              <div className="container w-100">
          <select className="m-2 h-100 bg-success">
            {Array.from(Array(6), (e , i) => {
              return (
                <option key={i + 1} value={i + 1}>                   
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 h-100 bg-success rounded">
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <div className="d-inline h-100 fs-5">Total Price</div>
        </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="..." src={imgs[4]} data-holder-rendered="true" style={{"height": "225px", "width": "100%", "display": "block"}}/>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
              <div className="container w-100">
          <select className="m-2 h-100 bg-success">
            {Array.from(Array(6), (e , i) => {
              return (
                <option key={i + 1} value={i + 1}>                   
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 h-100 bg-success rounded">
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <div className="d-inline h-100 fs-5">Total Price</div>
        </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="..." src={imgs[5]} data-holder-rendered="true" style={{"height": "225px", "width": "100%", "display": "block"}}/>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
              <div className="container w-100">
          <select className="m-2 h-100 bg-success">
            {Array.from(Array(6), (e , i) => {
              return (
                <option key={i + 1} value={i + 1}>                   
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 h-100 bg-success rounded">
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <div className="d-inline h-100 fs-5">Total Price</div>
        </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="..." src={imgs[6]} data-holder-rendered="true" style={{"height": "225px", "width": "100%", "display": "block"}}/>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
              <div className="container w-100">
          <select className="m-2 h-100 bg-success">            v
            {Array.from(Array(6), (e , i) => {
              return (
                <option key={i + 1} value={i + 1}>                   
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 h-100 bg-success rounded">
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <div className="d-inline h-100 fs-5">Total Price</div>
        </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="..." src={imgs[7]} data-holder-rendered="true" style={{"height": "225px", "width": "100%", "display": "block"}}/>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
              <div className="container w-100">
          <select className="m-2 h-100 bg-success">
            {Array.from(Array(6), (e , i) => {
              return (
                <option key={i + 1} value={i + 1}>                   
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 h-100 bg-success rounded">
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <div className="d-inline h-100 fs-5">Total Price</div>
        </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="..." src={imgs[8]} data-holder-rendered="true" style={{"height": "225px", "width": "100%", "display": "block"}}/>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
              <div className="container w-100">
          <select className="m-2 h-100 bg-success">
            {Array.from(Array(6), (e , i) => {
              return (
                <option key={i + 1} value={i + 1}>                   
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 h-100 bg-success rounded">
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <div className="d-inline h-100 fs-5">Total Price</div>
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
    
    

  )
}

export default Card;