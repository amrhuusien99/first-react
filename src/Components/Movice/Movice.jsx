import React from "react";

const Movice = (propes) => {
    
    const mo = propes.modataaa;
    return (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      
            <div className="card movie_card h-100">
              <img src={mo.poster} className="card-img-top" alt={mo.title} />
              <div className="card-body">
                <i className="fas fa-play play_button" title="Play Trailer"></i>
                <h5 className="card-title">{mo.title}</h5>
                <div className="d-flex justify-content-between">
                  <span className="movie_info">{mo.year}</span>
                  <span className="movie_info">
                    <i className="fas fa-star"></i> {mo.id} / 10
                  </span>
                </div>
              </div>
            </div>
        
        </div>
    );
}

export default Movice;