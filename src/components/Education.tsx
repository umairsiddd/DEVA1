import React from 'react'
import { EducationModel, list1 } from '../models/Education'

export default function Education() {
    return (
        <div>
            
            <h1>Education</h1>
            <div style={{height:"20px"}}></div>
            <ul className='d-flex flex-column'>
                {list1?.map((e:EducationModel)=><li><h4>{e.Course} - {e.Semister} Semester</h4></li>)}
                
            </ul>
        </div>
    )
}
