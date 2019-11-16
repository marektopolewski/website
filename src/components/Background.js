import React from 'react';

export default class BackgroundImage extends React.Component {
  constructor(props) {
    super(props);
    this.height = this.props.size + 'vh';
    this.txtPos = this.props.pos !== undefined 
      ? (this.props.pos/2) + '%'
      : (this.props.size/2) + '%';
    this.transf = 'translate(-50%, -50%)';
  };
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
