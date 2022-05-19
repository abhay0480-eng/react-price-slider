import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';




export default function RangeSlider() {
  const [values, setValues] = React.useState([0,5000 ]);

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValues(newValue);
  };
  

  function handlemin(event){
    const {value} = event.target
    var arr = [...values]
    arr[0] = parseInt(value)
    setValues(arr)
  }

  function handlemax(event){
    const {value} = event.target
    var arr = [...values]
    arr[1] = parseInt(value)
    setValues(arr)
  }

  console.log(values)



  return (

    
    <Box >
      <Slider

        value={values}
        onChange={handleChange}
        valueLabelDisplay="auto"
        
        min={136}
        max={407056}
        marks={marks}
        step={null}
        defaultValue={[300, 3000]}
        allowCross={false}
        draggableTrack
      />
   
      <input
      type="number"
      placeholder={"SG$"+values[0]}
      value={values[0]}
      onChange={handlemin}
      />
      <input
      type="number"
      placeholder={"SG$"+values[1]}
      value={values[1]}
      onChange={handlemax}
      />

    </Box>
  );
}