import React, { useState, useEffect } from "react";
import pizza1 from "../assets/alan-hardman-SU1LFoeEUkk-unsplash.jpg";
const Pizzas = () => {
  let [pizzas, setPizzas] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("api/pizzas")
      .then(res => res.json())
      .then(json => {
        setIsLoading(false);
        setPizzas(json);
      });
  }, []);

  return (
    <div>
      <h1>Pizzas</h1>
      <div className="column col-4 col-xs-12">
        {isLoading ? (
          <span className="label label-primary" data-testid="loading">
            Loading...
          </span>
        ) : (
          pizzas.map(pizza => (
            <div key={pizza.id} className="card">
              <div className="card-header">
                <div className="card-title h5">{pizza.name}</div>
                <div className="card-subtitle text-gray">
                  {pizza.description}
                </div>
              </div>
              <div className="card-image">
                <img
                  src={pizza.image || pizza1}
                  className="img-responsive"
                  alt="pizza"
                />
              </div>

              <div className="card-body">
                {pizza.toppings.map((topping, i) => {
                  return (
                    <span className="label label-secondary" key={i}>
                      {(i ? ", " : "") + topping}
                    </span>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Pizzas;
