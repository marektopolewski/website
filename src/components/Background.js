import React from 'react';

export default class BackgroundImage extends React.Component {
  constructor(props) {
    super(props);
    this.height = this.props.size + 'vh';
    this.txtPos = this.getPos(
      this.props.pos !== undefined 
                     ? (this.props.pos) 
                     : (this.props.size)
      ) + '%';
    this.transf = 'translate(-50%, -50%)';
  };
  getPos(size) {
    return Math.round(size / 3);
  }

  render() {
    return (
        <div className="bg" style={{height: this.height}}>
          <div className="title" style={{top: this.txtPos}}>
            {this.props.children}
          </div>
        </div>
    );
  }
}
