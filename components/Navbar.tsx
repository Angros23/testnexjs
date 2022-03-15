import React from 'react'
import { ActionLink } from './ActionLink'
import styles from './Navbar.module.css';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map(({text, href}) => (

          <ActionLink text={text} href={href} key={href}/>

        ))
      }
    </nav>
  )
}
