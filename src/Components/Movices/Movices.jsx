import React from "react";
import "./Movices.css";
import Movice from "../Movice/Movice";

const Movices = (propes) => {
    
    const allData = propes.modata.map((row) => (
        <Movice key={row.id} modataaa={row}/>
    ));

    return (
        <div className="movice-area container py-4">
            
            <div className="row g-4">
                {allData}
            </div>

            <div className="row justify-content-center">
                <div className="col-md-4">
                <div className="card credits">
                    <div className="card-body">
                    <p>
                        Made with <i className="fas fa-heart"></i> by Sukhmeet Singh.
                    </p>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
};

export default Movices;
