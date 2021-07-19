const Card = (props) => {
  return (
    <div className="containor">
      <div className="card">
        <img src={props.img} alt="meme" />
        <div className="data">
          <h1>{props.h1 || "title"}</h1>
          <p>{props.p || "info"}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
