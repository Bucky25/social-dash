import React from "react";
import CardSmall from "../card-small";
import "./index.css";
import CardsSmall from "../../data/cardsSmall.json";

const Overview = () => {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {CardsSmall.map(({ icon, pageViews, growth, key }) => (
            <CardSmall
              icon={icon}
              key={key}
              pageViews={pageViews}
              growth={growth}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Overview;
