import React, { useState, useEffect } from "react";

const Companies = () => {
  let [companies, setCompanies] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("api/companies").then(response =>
      response.json().then(json => {
        setIsLoading(false);
        setCompanies(json);
      })
    );
  }, []);

  return (
    <div>
      <h1>Companies</h1>
      <div className="column col-4 col-xs-12">
        {isLoading ? (
          <span className="label label-primary" data-testid="loading">
            Loading...
          </span>
        ) : (
          companies.map(companies => (
            <div className="tile" key={companies.id}>
              <div className="tile-icon">
                <div className="example-tile-icon">
                  <i className="icon icon-2x icon-mail"></i>
                </div>
              </div>
              <div className="tile-content">
                <h4 className="tile-title">{companies.name}</h4>
                <p className="tile-subtitle">{companies.phrase}</p>
              </div>
              <div className="tile-action">
                <span className="label label-rounded label-primary">
                  {companies.suffix}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Companies;
