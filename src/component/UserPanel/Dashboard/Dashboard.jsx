import React, { Fragment } from "react";
import Heading from '../../common/Heading/Heading';
import dashData from "../../../core/DashfakeData";
import CardDash from "./CardDash";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="my-5">
      <Heading head={'داشبرد'} />
      </div>
      <div className="row mx-auto justify-content-evenly">
        {dashData.map((card) => (
          <CardDash
            cardpicture={card.picture}
            carddescription={card.description}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Dashboard;
