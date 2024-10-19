import { useRouter } from "next/navigation";

const Cart = (props) => {
  const object = props.data;
  const router = useRouter();
  const push = () => {
    console.log(object.id);
    const test = object.id.toString();
    router.push(test);
  };
  return (
    <div className="box" onClick={push}>
      <img src={object.social_image} className="img" />
      <div>
        <div className="box2">
          <div
            style={{
              color: "blue",
              backgroundColor: "lightblue",
              height: "20px",
              width: "45px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {object.type_of}
          </div>
          <div style={{ fontWeight: "bold" }}>{object.title}</div>
          <div
            style={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
            }}
          >
            <img className="pfp" src={object.user.profile_image} />
            <div>{object.user.name}</div>
            <div style={{ color: "grey" }}>{object.readable_publish_date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
