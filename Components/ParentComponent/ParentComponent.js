import React, { useState } from 'react'
import '../ParentComponent/ParentComponent.css'
import shoe_1 from '../../Assets/flipkart_props/Shoe_1.webp';
import shoe_2 from '../../Assets/flipkart_props/Shoe_2.webp';
import ChildComponent from '../ChildComponent/ChildComponent';
import shoe_3 from '../../Assets/flipkart_props/Shoe_3.webp'
import shoe_4 from '../../Assets/flipkart_props/Shoe_4.webp';
import shoe_6 from '../../Assets/flipkart_props/shoe_6.webp';
import shoe_5 from '../../Assets/flipkart_props/Shoe_5.webp';
const parentData =[
  {
    id:1,
    product_name: 'Shoe_1',
    price:'₹'+299,
    image: shoe_1
  },
  {
    id:2,
    product_name: 'Shoe_2',
    price:'₹'+399,
    image: shoe_2
  },
  {
    id:3,
    product_name: 'Shoe_3',
    price:'₹'+499,
    image: shoe_3
  },
  {
    id:4,
    product_name: 'Shoe_4',
    price:'₹'+399,
    image: shoe_4
  },
  {
    id:5,
    product_name: 'Shoe_4',
    price:'₹'+399,
    image: shoe_6
  }
]
function ParentComponent() {
  const [data,setData] =useState(1);
  
  let [count,setCount]=useState(0)

  return (
    <div className='parent_container'>
      
    <h1>Products</h1>

    <div className="input_container">
      <label htmlFor="name">Name</label>
      <input type="text" onChange={(event)=>setData(event.target.value)} className='name_input' placeholder='your name'/>
      <p>initial value: {data}</p>
      

      <button className="print_button">Click it</button>
    </div>
    
    <div className="counter">
      
      
      <button onClick={()=>setCount(count-2)} className="sub_2">&lt;&lt;</button>
      <button type='count' onClick={(event)=>setCount(count-1)}  className="sub">Decrement</button>
     {count}
      <button type='count' onClick={()=>setCount(count+1)} className="add">Increment</button>
      <button onClick={()=>setCount(count+2)} className='add_2'>&gt;&gt;</button>
    </div>
    <div className="main_container">
      {
        parentData.map(product=>
          {
            return <ChildComponent image={product.image} name={product.product_name} price={product.price}
            key={product.id}/>  })
      }
      </div>
      
    </div>
  )
}

export default ParentComponent