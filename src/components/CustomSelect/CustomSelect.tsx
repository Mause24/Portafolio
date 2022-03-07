import { ArrowDropDown } from '@mui/icons-material'
import React, { useState } from 'react'
import {ICustomSelect, IOptionsSelect} from 'interfaces/Components.interfaces/CustomSelect.interfaces/CustomSelect.interface'
import ObjectFunctions from 'utils/ObjectFunctions'
import './index.css'

const CustomSelect = ({OptionsBD, defaultOption,width, value}:ICustomSelect) => {

  const [open, setOpen] = useState(false)

 
  const toggleOptions=()=>{
      const optionsBD=document.querySelector(".select-options") as HTMLElement
      if (!open) {
          optionsBD.style.height = `${optionsBD.scrollHeight}px`;
          setOpen(true)
      } else {
          optionsBD.style.height = `0px`;
          setOpen(false)
      }
    }

  const changeValue=(e:React.MouseEvent<HTMLDivElement>)=>{
    const option=e.target as HTMLElement;
    const data={
        label:option.innerHTML,
        value:option.getAttribute("itemID")
    } as IOptionsSelect
    value=data
  }

  

  return (
    <label className={`CustomSelect__container box-lg-${width} ${open ? 'open':''}`} htmlFor='CustomSelect' onClick={()=>toggleOptions()}>
        <div className='CustomSelect__icon'>
            <ArrowDropDown />
        </div>
        <div className='custom-select' >
            <div key={0} className='select-item selected' itemID={`${!ObjectFunctions.isEmpty(value) ? value.value:'0'}`}>{!ObjectFunctions.isEmpty(value) ?  value.label.toUpperCase(): defaultOption}</div>
            <div className={`select-options`}>
                {
                    OptionsBD.map((option,index)=>(
                        <div key={index} className='select-item' itemID={`${option.value}`} onClick={(e)=>changeValue(e)}>{option.label.toUpperCase()}</div>
                    ))
                }
            </div>
        </div>
    </label>
  )
}

export default CustomSelect