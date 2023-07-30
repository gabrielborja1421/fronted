import React from "react"
import './index.css';


const App =_=>{
  return(

    <div>

      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div  id="carru" className="carousel-inner rounded-3">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="./public/carrusel4.png" className="d-block w-100" alt="..." width="520px" height="350px"/>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <img src="./public/carrusel5.png" className="d-block w-100" alt="..." width="520px" height="350px"/>
            </div>
            <div className="carousel-item">
              <img src="./public/carrusel2.png" className="d-block w-100" alt="..." width="520px" height="350px"/>
            </div>
          </div>
          <button id="botun" className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span id="boto1" className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button id="botun" className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span id="boto1" className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </div>

    </div>
  )
}

export default App

