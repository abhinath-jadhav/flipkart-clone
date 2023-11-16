import React, { useEffect, useState } from "react";

interface User {
  name: string;
  id: string;
  contact: string;
  email1: string;
}

const SearchBody = ({ className }: { className: string }) => {
  const user1 = {
    name: "",
    id: "",
    contact: "",
    email1: "",
  };
  const [user, setUser] = useState<User>(user1);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:8081/flipkart/1", {
        method: "POST",
      });
      const user = await res.json();
      setUser(user);
    };

    console.log(user);
    getData();
  }, []);

  console.log(user);

  return (
    <div className={`${className} bg-white`}>
      <h1>{user?.name}</h1>
      <h1>{user?.id}</h1>
      <h1>{user?.contact}</h1>
      <h1>{user.email1}</h1>
    </div>
  );
};

export default SearchBody;
