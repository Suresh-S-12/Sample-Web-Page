import React from 'react';
import '../ChildComponent/ChildComponent.css'

function ChildComponent(props) {
  return (
    <div className='child_container'>
      <div className="product_image">
        <img src={props.image} alt="shoe" className="shoe" />
      </div>
      <div className="product_content">
        <p className="product_name">{props.id}</p>
        <p className="product_name">{props.price}</p>
        <p className="product_name">{props.name}</p>
      </div>
    </div>
  )
}

export default ChildComponent