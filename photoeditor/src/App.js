import React, { useState } from 'react';
import './App.css';
import Slider from './Slider';
import SidebarItem from './SidebarItem'

const DEFAULT_OPTIONS = [ //we are going to take this DefaultOptions and turn it to an options object we can use in react and actually modify and by that we will need a state
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast ',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturation',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0, //we don't want a default 100 value for grayscale 
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 100,
    range: {
      min: 0,
      max: 360 //360 because we have 360 deg of hue
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 100,
    range: {
      min: 0,
      max: 50
    },
    unit: 'px'
  }
]

function App() {

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const selectedOption = options[selectedOptionIndex]

  return (
    <div className="container">
      <div className="main-image" />
      <div className="sidebar">

        {options.map((option, index) => {
          return (
          <SidebarItem 
            key={index}
            name={option.name}
            active={index === selectedOptionIndex} //our active property is going to be true if our index = selectedOptionIndex
            handleClick={() => {
              setSelectedOptionIndex(index) //now whenenver we click on an item, its going to be set active as our selected item
            }}
          />
          )
          })}

        </div>
        <Slider />
    </div>
  );
}

export default App;
