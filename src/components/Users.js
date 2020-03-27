import React, { useState, useEffect } from "react";
const Users = () => {
  let [users, setUsers] = useState([]);
  let [error, setError] = useState(null);
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("api/users")
      .then(response => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch(error => {
        setError("Opss.. Something went wrong");
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error ? (
        <h3>{error}</h3>
      ) : isLoading ? (
        <span className="label label-primary" data-testid="loading">
          Loading...
        </span>
      ) : (
        users.map(user => (
          <p key={user.id} data-testid="user">
            {user.name}
          </p>
        ))
      )}
    </div>
  );
};

export default Users;
