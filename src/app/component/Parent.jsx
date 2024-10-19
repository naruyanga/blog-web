import { useRouter } from "next/navigation";

export const Parent = ({ children }) => {
  const { push } = useRouter();
  const redirect = () => {
    push("new");
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "50px",
          backgroundColor: "white",
          paddingRight: "25px",
          paddingLeft: "25px",
        }}
      >
        <a href="/">
          <img
            src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            style={{ height: "40px" }}
          />
        </a>
        <button
          style={{
            height: "28px",
            width: "100px",
            borderRadius: "6px",
            border: "1px grey solid",
          }}
          onClick={redirect}
        >
          Create post
        </button>
      </div>
      <div style={{ borderTop: "1px solid lightgrey" }}></div>
      <div>{children}</div>
    </div>
  );
};
