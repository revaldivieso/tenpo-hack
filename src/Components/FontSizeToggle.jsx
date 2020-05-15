import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 100,
    marginTop: "5px",
    //  marginLeft: "30px",
  },
});

const marks = [
  {
    value: 0,
  },
  {
    value: 50,
  },
  {
    value: 100,
  },
];

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={0}
        valueLabelFormat={valueLabelFormat}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        marks={marks}
      />
    </div>
  );
}
