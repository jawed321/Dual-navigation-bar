import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';

function Submenu({ data }) {
  return (
    <div>
      <Menu style={{marginTop:'15px'}}>
      {data.map((i) => {
        return (
          <Menu.Item style={{padding:'0 0 0 35px',fontSize:'15px'}}>
          <a href={i.url}>{i.icon}{i.label}</a>
        </Menu.Item>
        )
      })}
      </Menu>
    </div>
  )
}

export default Submenu