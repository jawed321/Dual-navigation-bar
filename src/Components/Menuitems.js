import userimg from '../Images/User_2022-05-06/User.png'
import calculatorimg from '../Images/Calculator_2022-05-06/Calculator.png'
import coinimg from '../Images/Coins 02_2022-05-06/Coins 02.png'
import coininsertimg from '../Images/Coin Insert_2022-05-06/Coin Insert.png'
import calenderexportimg from '../Images/Calendar Export in-lc_2022-05-06/Calendar Export in-lc.png'
import filelistimg from '../Images/File List_2022-05-06/File List.png'

import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
export const Menuitems=[{
    label:"Home",
    url:"/home",
    icon:<img src={userimg} style={{ marginRight: '14px'}}/>,
    children:[{
      label: 'Home 1',
      url: '/home/1',
      icon:null
    },
    {
      label: 'Home 2',
      url: '/home/2',
      icon:null
    },]
  },{
    label:"About",
    url:"/about",
    icon:<img src={coinimg} style={{ marginRight: '14px'}}/>,
    children:[{
      label: 'About 1',
      url: '/about/1',
      icon:null
    },
    {
      label: 'About 2',
      url: '/about/2',
      icon:null
    },]
  },{
    label:"Contact",
    url:"/contact",
    icon:<img src={coininsertimg} style={{ marginRight: '14px'}}/>,
    children:[{
      label: 'contact 1',
      url: '/home/1',
      icon:null
    },
    {
      label: 'contact 2',
      url: '/home/2',
      icon:null
    },]
  }]