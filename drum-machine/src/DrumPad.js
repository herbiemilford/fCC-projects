import React from 'react';
import './App.css';


  class DrumPad extends React.Component{
    constructor(props){
      super(props);
      
      this.audio = React.createRef();
    }
      
     
componentDidMount() {
  this.audio.current.addEventListener('ended', (e) => {
    const parent = e.target.parentNode;
    parent.classList.remove('active');
  });
}

}

export default DrumPad;

