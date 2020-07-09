import React from 'react';
import Draggable from 'react-draggable';
import Calculator from '../components/Calculator';

class Drag extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false ,
      activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    }
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth <475 });
  }

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop}
    const isDesktop = this.state.isDesktop;
    return (
      <>
      {
        isDesktop ? <Calculator></Calculator>:<Draggable {...dragHandlers}>
        <div>
          <Calculator></Calculator>
        </div>
      </Draggable>
      }

      </>
    );
  }
}

export default Drag;