import React from "react";
import classes from "./TitreH1.module.css";

const TitreH1 = (props) => {
  const monCss = `${classes.policeTitre}`;

  return <div className="border border-dark p2 mt-2 bg-primary rounded">
    <h1 className={monCss}>{props.children}</h1>
  </div>

};

export default TitreH1;



