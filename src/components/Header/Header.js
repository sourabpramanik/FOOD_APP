import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn} from './Header.elements'
import {MenuData} from '../../data/MenuData'
import { Button } from '../Button'
export default function Header() {
  return (
    <Nav>
      <NavLink to = '/'>
        Food
      </NavLink>
      <Bars/>
      <NavMenu>
        {MenuData.map((item, index)=>(
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to='/'>
          Eat Now
        </Button>
      </NavBtn>
    </Nav>
  )
}
