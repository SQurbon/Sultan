import React, { useState } from 'react'
import './SelectDelivery.css'
import { FaCheck } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";

function SelectDelivery() {
    const data=[
        {
            city:'Taшкент',
            street:'локомотыв 23',
            id:1
        },
        {
            city:'Taшкент',
            street:'мирабад 4',
            id:2
        },
        {
            city:'Taшкент',
            street:'бобур 2',
            id:3
        },
        {
            city:'Taшкент',
            street:'гузар 1',
            id:4
        },
        {
            city:'Taшкент',
            street:'локомотыв 34',
            id:5
        },
        {
            city:'Taшкент',
            street:'локомотыв 55',
            id:6
        },
        {
            city:'Taшкент',
            street:'йаккасарой 3/1',
            id:7
        },
        {
            city:'Taшкент',
            street:'банокатий 4',
            id:8
        },
        {
            city:'Taшкент',
            street:'бобур 4',
            id:9
        },
        {
            city:'Taшкент',
            street:'гузар 21',
            id:10
        },
        {
            city:'Taшкент',
            street:'локомотыв 4',
            id:11
        },
        {
            city:'Taшкент',
            street:'локомотыв 3/61',
            id:12
        },
        {
            city:'Taшкент',
            street:'локомотыв 23',
            id:13
        },
        {
            city:'Taшкент',
            street:'мирабад 4',
            id:14
        },
        {
            city:'Taшкент',
            street:'бобур 2',
            id:15
        },
        {
            city:'Taшкент',
            street:'гузар 1',
            id:16
        },
        {
            city:'Taшкент',
            street:'локомотыв 34',
            id:17
        },
        {
            city:'Taшкент',
            street:'локомотыв 55',
            id:18
        },
        {
            city:'Taшкент',
            street:'локомотыв 23',
            id:19
        },
        {
            city:'Taшкент',
            street:'мирабад 4',
            id:20
        },
        {
            city:'Taшкент',
            street:'бобур 2',
            id:21
        },
        {
            city:'Taшкент',
            street:'гузар 1',
            id:22
        },
        {
            city:'Taшкент',
            street:'локомотыв 34',
            id:23
        },
        {
            city:'Taшкент',
            street:'локомотыв 55',
            id:24
        },
    ]
    const [selected,setSelected]=useState(null)
    const clickHandler=(id)=>{
        setSelected(id)
    }
    return (
        <div className='SelectDelivery'>
            <div className='SelectDelivery-conteiner'>
                {data&&data.map(item=>(

                    <div className='SelectDelivery-card' key={()=>setSelected(item.id)}>
                   { selected ===null ?
                   <input className='input' type="checkbox" name='inp' onClick={()=>clickHandler(item.id)} />
                :
                
                 <div className={selected==item.id?'true' : 'false'}>
                    {item.id===selected?
                <FaCheck/>
                :
<AiOutlineMinus/>
                }
                 </div>
                }
                    <div className='SelectDelivery-card-text'>
<h1>{item.city} </h1>
<h2>{item.street}</h2>
                    </div>

                    </div>
                    ))}
   
            </div>
   <div className="SelectDelivery-footer">
    <button onClick={()=>setSelected(null)} className='chenge'>изменит выбор </button>
    <a href={selected!==null?"/delivery" :''}>

    <button className='allow'>потвердить</button>
    </a>
   </div>

        </div>
    )
}

export default SelectDelivery
