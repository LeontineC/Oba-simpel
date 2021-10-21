import React from 'react'

function CoursesLoop({ courses }) {
    return (
        <div >



            <div>
                {courses && courses.length > 0 ?
                    
                    <div  className="mainActCal">
                        {courses && courses.map(course => {
                            return (
                                <div className="ActCal" key={course.id}>
                                    <div className='ActImg'>
                                        <img src={course.omslagafbeeldingen[0]} alt={course.title}></img>
                                    </div>
                                    <div className="ActInfo">
                                        <p>{course.title}</p>
                                        <p style={{fontSize: ".1rem"}}>{course.info}</p>
                                        <p>{course.prijs}</p>
                                    </div>
                                    


                                </div>
                            )
                        })}




                        </div>
                 
                     : 

                     <p>sorry no results</p>}


            </div>






        </div>


    )
}

export default CoursesLoop
