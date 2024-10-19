"use client";

import { Parent } from "../component/Parent";
import { useState } from "react";
const Page = () => {
  const [inputValue, setInputValue] = useState("");
  const [valueError, setValueError] = useState(null);
  const [inputValue2, setInputValue2] = useState("");
  const [valueError2, setValueError2] = useState(null);
  const check1 = () => {
    if (inputValue === "") {
      setValueError("Zaaval bicheh ystoi");
    } else {
      setValueError(null);
    }
  };

  const check2 = () => {
    if (inputValue2 === "") {
      setValueError2("Zaaval bicheh ystoi");
    } else {
      setValueError2(null);
    }
  };
  const amjilttai = () => {
    if (inputValue != "" && inputValue2 != "") {
      alert("amjilttai");
    }
  };

  const check = () => {
    check1();
    check2();
    amjilttai();
  };
  return (
    <Parent>
      <div className="createBox">
        <div className="inputBox">
          <div className="newpost">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="New post title here..."
              style={{ border: "none", fontSize: "50px", fontWeight: " bold " }}
            ></input>
            <div style={{ color: "red" }}>{valueError ? valueError : ""}</div>
          </div>
          <div className="content">
            <input
              value={inputValue2}
              onChange={(e) => setInputValue2(e.target.value)}
              placeholder="Write your post content here..."
              style={{ border: "none", fontSize: "30px", width: "700px" }}
            ></input>
            <div style={{ color: "red" }}>{valueError2 ? valueError2 : ""}</div>
          </div>
        </div>
        <button
          onClick={() => check()}
          style={{
            height: "35px",
            width: "75px",
            fontSize: "20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "blue",
            color: "white",
          }}
        >
          Publish
        </button>
      </div>
    </Parent>
  );
};
export default Page;
