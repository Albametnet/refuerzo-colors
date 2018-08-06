import React from 'react';

class Ship extends React.Component {
  render() {
    return (
      <div>
        {this.props.shipcolors.map(item => {
          return (
            <div>
              {item.name}
              <ul>
                {item.colors.map(color => {
                  return (
                    <li style={{ backgroundColor: `#${color}` }}>
                    </li>
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