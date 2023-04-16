import React from 'react'

export default function Certificate() {
  return (
    <div>
        <h1>Certificates2</h1>
        <div style={{height:"20px"}}></div>
        <ul style={{listStyle:"circle"}} className='d-flex flex-column'>
                {/* {list1?.map((e:EducationModel)=><li><h4>{e.Course} - {e.Semister} Semester</h4></li>)} */}
                <li><a href='./assets/Certificate.pdf' target='_blank'><h4>Scrum Certificate</h4></a></li>
        </ul>
    </div>
  )
}
