import React from "react"
import './index.css';


const App =_=>{
  return(

    <div>

      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div  id="carru" class="carousel-inner rounded-3">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="./public/carrusel4.png" class="d-block w-100" alt="..." width="520px" height="350px"/>
            </div>
            <div class="carousel-item" data-bs-interval="10000">
              <img src="./public/carrusel5.png" class="d-block w-100" alt="..." width="520px" height="350px"/>
            </div>
            <div class="carousel-item">
              <img src="./public/carrusel2.png" class="d-block w-100" alt="..." width="520px" height="350px"/>
            </div>
          </div>
          <button id="botun" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span id="boto1" class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button id="botun" class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span id="boto1" class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div>

    </div>
  )
}

export default App

