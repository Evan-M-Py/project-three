import React from 'react';






function Wrapper(props) {

    const style = {
        wrapper: {
            margin:'0'
        }
    }

  return (
    <div style={style.wrapper}>
      {props.inside}
    </div>
  )
}

export default Wrapper;
