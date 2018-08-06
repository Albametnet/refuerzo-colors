import React from 'react';
import '../stylesheets/Ship.css';

class Ship extends React.Component {
  render() {
    return (
      <div className="comp_box">
        {this.props.shipcolors.map(item => {
          return (
            <div className="color__box">
              <div className="text__box">
                <p className="ship__name">{item.name}</p>
              </div>
              <ul className="each__palette">
                {item.colors.map(color => {
                  return (
                    <div className="color__palettes" style={{ backgroundColor: `#${color}` }} >

                    </div>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Ship;