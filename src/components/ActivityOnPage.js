import { useState } from "react"
import ActivityDetails from "./ActivityDetails"

const ActivityOnPage = ( {id, dayFormat, location, datum, tijd, title, omslagafbeeldingen, author, publisher, language, series, description }) => {

    const [isOpen, setIsOpen] = useState(false)
    return (

        <article >
            <button className="activitySliderButton ActCal" 

                      key={id}
                      style={{
                        backgroundImage: "url('images/activityicon_green.svg')",
                        backgroundPosition: "cover",
                        backgroundRepeat: "no-repeat",
                        height: "100%"
                      }}
            onClick={() => setIsOpen(true)}> 
            
                    
                      
                      <div className="ActInfo">
                        <h3>{title}</h3>
                        <h4>{tijd}</h4>
                        <h4>{dayFormat}</h4>
                        {/* </div> */}
                        {/* <div className="ActImg" > */}
                        <img
                          src={omslagafbeeldingen}
                          alt={title}
                        ></img>
                      </div>
                    
            </button>
            
            <ActivityDetails 
            omslagafbeeldingen={omslagafbeeldingen}
            datum={datum}
            tijd={tijd}
            title={title} 
            description={description}
            location={location}
            open={isOpen} onClose={() => setIsOpen(false)}>
            </ActivityDetails>
        </article>
    )
}

export default ActivityOnPage