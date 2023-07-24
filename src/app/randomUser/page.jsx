"use client";

import { UserCard } from "@/components/UserCard";
import { cleanUser, cleanUser } from "@/libs/cleanUser";
import axios from "axios";
import { useState } from "react";

export default function RandomUserPage() {
  //user = null or object
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateBtnOnClick = async () => {
    setIsLoading(true);
    const resp = await axios.get(`https://randomuser.me/api`);
    setIsLoading(false);
    const user = resp.data.results[0];
    // console.log(user);
    const cleanedUser = cleanUser(user);
    setUser(cleanedUser);
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      <p className="display-4 text-center fst-italic m-4">User Generator</p>
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        <button className="btn btn-dark" onClick={generateBtnOnClick}>
          Generate
        </button>
      </div>
      {isLoading && (
        <p className="display-6 text-center fst-italic my-4">Loading ...</p>
      )}
      {user && !isLoading && (
        <UserCard
          name={user.name}
          imgUrl={user.imgUrl}
          address={user.address}
          email={user.email}
        />
      )}
    </div>
  );
}
