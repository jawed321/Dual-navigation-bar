import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import "../App.css"
import { Menuitems } from './Menuitems';
import Submenu from './Submenu';
import { Menu } from 'antd';
import { MenuOutlined, CloseOutlined, SettingOutlined } from '@ant-design/icons';
function Nav() {
  const [close, setClose] = useState(true);
  const [Index, setIndex] = useState(0);
  const handleClick = () => {
    setClose(!close);
  };
  return (
    <div className="containernav">
      <div className='sub1' style={{ width: close ? "55px" : "100%" }}>
        <div className="logo">
          <i className="fa-brands fa-accusoft"></i>
        </div>
        <div className='btn'>
          <a style={{ transition: '0.5s' }} onClick={handleClick}>
            {close ? <MenuOutlined /> : <CloseOutlined />}
          </a>
        </div>
        <div className="middlelogo">

          <Menu style={{ backGround: "#151b30" }}>
            {Menuitems.map((menu, index) => {
              return (
                <Menu.Item style={{ padding: '0 20px' }}>
                  <a onClick={() => setIndex(index)}>{menu.icon}</a>
                </Menu.Item>
              );
            })}
          </Menu>
        </div>
      </div>
      <div className='sub2' style={{ width: close ? "195px" : "0px" }}>
        <div style={{ display: "flex", flexDirection: 'row' }}>
          <h1 style={{ marginLeft: '10px', padding: '7px 0 0 0', color: 'white' }}>
            {<SettingOutlined style={{ marginRight: '0px' }} />}
          </h1>

          <h1 style={{ marginLeft: '10px', padding: '7px 0 0 0', color: 'white' }}>
            Settings
          </h1>
        </div>
        <div className='sub2cont'>
          <Submenu data={Menuitems[Index].children} />
        </div>
      </div>
    </div>
  )
}

export default Nav
