import React from 'react'
import './NewOverviewComponentV2.scss'
import { image_with_phones_overview_component } from "../../assets/images/index"

export const NewOverviewComponentV2: React.FC = () => {
  return (
    <>
        <div className='overview-component'>
            <div className='overview-component__background'>
                <img src={image_with_phones_overview_component} alt="" />
            </div>
        </div>
    </>
  )
}
