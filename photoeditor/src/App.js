import React, { useState } from 'react';
import './App.css';
import Slider from './Slider';
import SidebarItem from './SidebarItem';

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
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
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
    value: 0,
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

  function handleSliderChange({ target }) // event where we get our value from, and all we really need from the event is our target
  {
    setOptions(prevOptions => { //calling our setOptions and we need make sure we use our prevOptionsas a frame to this function 
      return prevOptions.map((option, index) => { //we then return our prevOptions and loop through our Options until we find the one that we want to change then we change and update it 
        if (index !== selectedOptionIndex) return option //if our index is not equal to our selectedIndex, we know that it is not the option we have  selected and threfore return it as is.
        return {
         ...option, value: target.value //otherwise if its the one we have selected, we want to return a new object for our option, which is going to contain everything from our old option and what we want to do is set the value from our slider(target)
        }
      })
    })
  } 
  
  function getImageStyle(){ //This function takes all the values and adds them to our image to apply the filters
    const filters = options.map(option => {//looping through all our options to get them converted to a css property 
      return `${option.property}(${option.value}${option.unit})` //That's now everything for creating the string of our different filters
    })
    //converting from an array to a style object
    return { filter: filters.join(' ')} //putting a space before each of our different array strings
  }

  return (
    <div className="container">
      <div className="main-image" style={getImageStyle()}/>
      <div className="sidebar">

        {options.map((option, index) => {
          return (
          <SidebarItem 
            key={index}
            name={option.name}
            active={index === selectedOptionIndex} //our active property is going to be true if our index = selectedOptionIndex
            handleClick={() => 
              setSelectedOptionIndex(index) //now whenenver we click on an item, its going to be set active as our selected item.
            }
          />
          )
          })}

        </div>
        
        <Slider //passing all the values here
          min={selectedOption.range.min}
          max={selectedOption.range.max}
          value={selectedOption.value}
          handleChange={handleSliderChange}
        />
    </div>
  );
}

export default App;
