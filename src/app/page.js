"use client";
import { useEffect, useState } from "react";
import Cart from "./component/Cart";
import { Parent } from "./component/Parent";

const Page = () => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(1);
  const [inputValue, setInputValue] = useState("");
  console.log(data);

  const fetchedData = async () => {
    const dataJSON = await fetch(
      `https://dev.to/api/articles?per_page=9&page=${number}`,
    );
    const blog = await dataJSON.json();
    setData(blog);
  };

  const filteredData = data.filter((blog) => {
    return blog.title.toLowerCase().includes(inputValue.toLowerCase());
  });

  const minusPg = () => {
    if (number >= 2) {
      setNumber(number - 1);
    }
  };
  const addPg = () => {
    return setNumber(number + 1);
  };

  useEffect(() => {
    fetchedData();
  }, [number]);

  return (
    <Parent>
      <div className="container">
        <div style={{ fontSize: "28px", fontWeight: "bold" }}>
          All blog post
        </div>
        <input
          value={inputValue}
          style={{
            borderRadius: "7px",
            border: "solid 1px grey",
            width: "200px",
            height: "20px",
          }}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="search"
        />

        <div className="blogContainer">
          {filteredData.map((data, index) => {
            return <Cart key={index} data={data} />;
          })}
        </div>
        {filteredData.length === 0 ? (
          <div>Not found</div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <h1 onClick={() => minusPg()}>-</h1>
            <h1 onChange={() => fetchedData()}>{number}</h1>
            <h1 onClick={() => addPg()}>+</h1>
          </div>
        )}
      </div>
    </Parent>
  );
};
export default Page;
