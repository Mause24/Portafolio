import { ArrowDropDown } from '@mui/icons-material'
import React, { useState } from 'react'
import {ICustomSelect} from '../../interfaces/Components.interfaces/CustomSelect.interfaces/CustomSelect.interface'
import './index.css'

const CustomSelect = ({OptionsBD,onlyIcon, defaultOption,width}:ICustomSelect) => {

  const [open, setOpen] = useState(false)

  const toggleOptions=()=>{
    const optionsBD=document.querySelector(".select-options") as HTMLElement
    if (optionsBD.clientHeight===0) {
        optionsBD.style.height = `${optionsBD.scrollHeight}px`;
    } else {
        optionsBD.style.height = `0px`;
    }
  }

  return (
    <label className={`CustomSelect__container box-lg-${width} ${open ? 'open':''}`} htmlFor='CustomSelect' onClick={()=>toggleOptions()}>
        <div className='CustomSelect__icon'>
            <ArrowDropDown />
        </div>
        <div className='custom-select' onClick={()=>setOpen(!open)}>
            <div className='select-item selected' itemID={'0'}>{defaultOption}</div>
            <div className={`select-options`}>
                {
                    OptionsBD.map((option)=>(
                        <div className='select-item' itemID={`${option.value}`}>{option.label}</div>
                    ))
                }
            </div>
            {/* <select style={{opacity:`${onlyIcon ? '0':''}`}} name="CustomSelect" id="CustomSelect">
                {
                    OptionsBD.map((item)=>(
                        <option value={`${item.value}`}>{item.label.toUpperCase()}</option>
                    ))
                }
            </select> */}
        </div>
    </label>
  )
}

export default CustomSelect