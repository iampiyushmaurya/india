import React from "react";
import Card from "./Card";
function Content(props) {
  return (
    <div className="App">
      <div className="header">
        <div className="para">
          <p>वसुधैव कुटुम्बकम्</p>
        </div>
      </div>
      <div className="full">
        <hr />
        <br />
        <br />
        <br />
        <h1>Must Visit Destinations</h1>
        <div className="card3">
          <div className="card3inner">
            <Card
              h1="Statue of Unity"
              p="It’s huge, almost gigantic! That is the first reaction most people..."
              img="./img/unity.jpeg"
            />
            <Card
              h1="Shillong"
              p="Colonial-era charm, a landscape of rolling green and pristine..."
              img="./img/shillong.jpeg"
            />
            <Card
              h1="Bekal"
              p="An emerald gem set amidst honey-hued beaches, pristine waterfalls and..."
              img="./img/bekal.jpeg"
            />
          </div>
        </div>
        <button style={{ textAlign: "center" }}>More..</button>
        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />
        <h1>Popular Arts In India</h1>
        <div className="card3">
          <div className="card3inner">
            <Card
              h1="Dance forms"
              p="Dance is an eloquent form of expression. From classical and traditional..."
              img="./img/dance.jpeg"
            />
            <Card
              h1="Painting"
              p="The earliest paintings found in India were scratched onto the walls of caves..."
              img="./img/paint.jpeg"
            />
            <Card
              h1="Cinema"
              p="The hub of Hindi cinema and the powerhouse of Hindi film industry,..."
              img="./img/cinema.jpeg"
            />
          </div>
        </div>
        <button style={{ textAlign: "center" }}>More..</button>

        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />

        <h1>Popular Adventure Destinations In India</h1>
        <div className="card3">
          <div className="card3inner">
            <Card
              h1="Kedarnath"
              p="Ensconced in the snow-capped Garwal Himalayas surrounded by a lush..."
              img="./img/kedarnath.jpeg"
            />
            <Card
              h1="Manali"
              p="The magnetic town of Manali beckons to the soul of adventurers,..."
              img="./img/manali.jpeg"
            />
            <Card
              h1="Shimla"
              p="Enveloped in mist, nestled within dense forests and silhouetted..."
              img="./img/shimla.jpeg"
            />
          </div>
        </div>
        <button style={{ textAlign: "center" }}>More..</button>

        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />

        <h1>Popular Food Destinations In India</h1>
        <div className="card3">
          <div className="card3inner">
            <Card
              h1="Amritsar"
              p="A bustling city with an indomitable spirit, Amritsar holds one of the..."
              img="./img/amritsar.jpeg"
            />
            <Card
              h1="Chennai"
              p="Ancient temples, vibrant arts, natural wonders and a bustling..."
              img="./img/chennai.jpeg"
            />
            <Card
              h1="Hyderabad"
              p="A vibrant city with the imposing Charminar at its heart, Hyderabad,..."
              img="./img/hyderabad.jpeg"
            />
          </div>
        </div>
        <button style={{ textAlign: "center" }}>More..</button>

        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />

        <h1>Popular Heritage Destinations In India</h1>
        <div className="card3">
          <div className="card3inner">
            <Card
              h1="Varanasi"
              p="One of the oldest living inhabitatons of the world the sacred city..."
              img="./img/varanasi.jpeg"
            />
            <Card
              h1="Hampi"
              p="A legendary lost city that was once the powerhouse of an ancient..."
              img="./img/hampi.jpeg"
            />
            <Card
              h1="Agra"
              p="The city of the Taj Mahal, one of the seven wonders of the world,..."
              img="./img/Taj.jpeg"
            />
          </div>
        </div>
        <button style={{ textAlign: "center" }}>More..</button>

        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Content;
