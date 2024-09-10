import React from "react";

const Card = () => {
  return (
    <div>
      <div>
        <div class="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some Important Text.</p>
            <div className="container w-100">
              <select className="m2 h-100 bg-success rounded" name="" id="">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m2 h-100 bg-success rounded" name="" id="">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>

              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
