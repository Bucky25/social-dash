import React from "react";
import Card from "../card";
import "./index.css";
import Cards from "../../data/cards.json";

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {Cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopCardList;
