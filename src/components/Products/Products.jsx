import React, { useState, useEffect } from "react";
import axios from "../../api/Index";
function Products() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    if (window.confirm("Rostan"))
      axios
        .delete(`/users/${id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
  };
  const users = data?.map((user) => (
    <div key={user.id} className="card">
      <img src={user.url} alt="" />
      <h3>
        {user.name} {user.age}
      </h3>
      <p>{user.fullname}</p>
      <button onClick={() => handleDelete(user.id)}>delete</button>
    </div>
  ));

  return (
    <div>
      <h2>Products</h2>
      <div className="wrapper">{users}</div>
    </div>
  );
}

export default Products;
