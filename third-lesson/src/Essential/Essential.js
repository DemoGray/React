import React from 'react'
import "./Essential.css"
import {useState} from "react"


const Essential = () => {
    const[index , setIndex] = useState(1)
    const[mode , setMode] = useState(false)

    const handleClick = (e) => {
      setIndex(e)
    }

    
  return (
    <div className={mode?"container dark_theme":"container"}>
    <header>
        <h1>MakeUp Essentials</h1>
        <p>The ultimate guide to creating the ultimate makeup collection</p>
        <i onClick={() => setMode(!mode)} className={mode?"fa-solid fa-sun":"fa-solid fa-moon"}></i>
    </header>
   <main>
    <div className="tabs">
        {
          data.map((item) => {
            return <div onClick={() => handleClick(item.id)} className={item.id === index?"tab active":"tab"} key={item.id}>
              {item.name}
            </div>
          })
        }
    </div>
    <div className="tabs_text">
        <div className="text">
          <h1>
            {data[index -1].name}
          </h1>
          <p>
            {data[index -1].text}
          </p>
        </div>
    </div>
   </main>
</div>
  )
}

export default Essential

const data = [
    {name:"Face Primer", id:1 , text:" 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla possimus voluptate eum saepe inventore voluptatibus, perferendis quasi ipsum accusantium. Voluptatum corporis cum asperiores aliquam explicabo."},
    {name:"Foundation", id:2 , text:" 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla possimus voluptate eum saepe inventore voluptatibus, perferendis quasi ipsum accusantium. Voluptatum corporis cum asperiores aliquam explicabo."},
    {name:"BB Cream", id:3 , text:"3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla possimus voluptate eum saepe inventore voluptatibus, perferendis quasi ipsum accusantium. Voluptatum corporis cum asperiores aliquam explicabo."},
    {name:"Concealer", id:4 , text:"4 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla possimus voluptate eum saepe inventore voluptatibus, perferendis quasi ipsum accusantium. Voluptatum corporis cum asperiores aliquam explicabo."},
    {name:"Blush", id:5 , text:" 5 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla possimus voluptate eum saepe inventore voluptatibus, perferendis quasi ipsum accusantium. Voluptatum corporis cum asperiores aliquam explicabo."},
  ]