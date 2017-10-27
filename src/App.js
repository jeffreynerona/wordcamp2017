import React, { Component } from 'react';
import { DropDownNav, Presentation, PresenterModePlugin, Slide } from 'react-presents';
import './App.css';

const slides = require.context('./slides/', false, /\.js$/)
  .keys()
  .map((filename) => filename.replace('./', ''))
  .map((filename) => require(`./slides/${filename}`).default)

const options = slides
  .map((slide, index) => ({
	label: slide.title,
	value: index
  }))
.filter((option) => option.label)

class App extends Component {
  render() {
    return (
     <Presentation>
	    <PresenterModePlugin />

	    {slides.map((Component, index) => (
	      <Slide
	        component={Component}
	        key={index}
	      />
	    ))}

	    <DropDownNav
	      key='DropDownNav'
	      options={options}
	    />
	  </Presentation>
    );
  }
}

export default App;
