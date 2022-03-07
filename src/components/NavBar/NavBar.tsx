import React, { useEffect, useState } from 'react'
import './index.css'
import { Nightlight, WbSunny } from '@mui/icons-material'
import CustomSelect from '../CustomSelect'

const NavBar = () => {

  const [mode,setMode ] = useState(false)
  
  useEffect(() => {
    if (mode) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  },[mode])
  

  return (
    <nav className='header__navBar box-lg-12'>
      <div className='navBar__item box-lg-3'></div>
      <div className='navBar__item box-lg-2'></div>
      <div className='navBar__item box-lg-4'></div>
      <div className='navBar__item box-lg-3'>
        <label className='label__toggle-mode' onClick={()=>setMode(!mode)}>
          {mode ?  <Nightlight id='icono' />: <WbSunny id='icono' />}
        </label>
        <label className='label__toggle-lang' htmlFor="">
          <CustomSelect OptionsBD={
            [
              {
                label:'ES - ESPAÑOL',
                value: 'ES',
              },
              {
                label:'EN - INGLES',
                value: 'EN',
              },
            ]
          } defaultOption={'SELECCIONE UNA OPCION'} 
          value={{
              label:'ES - ESPAÑOL',
              value: 'ES',
            }} 
          width={12}/>
        </label>
      </div>
    </nav>
  )
}

export default NavBar