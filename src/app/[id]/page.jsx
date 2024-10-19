"use client";

import { useEffect, useState } from "react";

const { usePathname } = require("next/navigation");
import { Parent } from "../component/Parent";

const Page = () => {
  const path = usePathname();
  const [blog, setBlog] = useState([]);
  const test = async () => {
    const a = await fetch(`https://dev.to/api/articles/${path}`);
    const b = await a.json();
    setBlog(b);
  };
  useEffect(() => {
    test();
  }, []);
  console.log(blog);
  return (
    <Parent>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <div style={{ fontSize: "30px", fontWeight: "bold" }}>
            🎀 {blog.title}
          </div>
          <img
            style={{ height: "300px", width: "550px", borderRadius: "15px" }}
            src={blog.cover_image}
          />

          <div
            style={{
              color: "blue",
              backgroundColor: "lightblue",
              height: "25px",
              width: "55px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              fontSize: "20px",
            }}
          >
            {blog.type_of}
          </div>
          <div style={{ fontSize: "25px" }}>📌 {blog.description}</div>
          <div style={{ fontSize: "25px" }}>
            {" "}
            📌 {blog.comments_count} comments
          </div>
          <div style={{ fontSize: "25px" }}>📌 tag lists: {blog.tag_list}</div>
          <div style={{ fontSize: "25px" }}>📌 {blog.slug}</div>
          <div
            style={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
            }}
          >
            <img className="pfp" src={blog.user?.profile_image} />
            <div style={{ fontSize: "20px" }}>{blog.user?.name}</div>
            <div style={{ color: "grey" }}>{blog.readable_publish_date}</div>
          </div>
        </div>
      </div>
    </Parent>
  );
};
export default Page;
