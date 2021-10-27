import { useState } from "react"
import ActivityDetails from "./ActivityDetails"

const Activity = ( {location, datum, tijd, title, omslagafbeeldingen, author, publisher, language, series, description }) => {

    const [isOpen, setIsOpen] = useState(false)
    return (

        <article >
            <button  className="activitySliderButton" onClick={() => setIsOpen(true)}> <img className="sliderImageActiviteiten"
src={omslagafbeeldingen} alt={"cover picture of " + title} /> 
            <div className="overlayActiviteiten">
                  <h4>{datum}</h4>
                  <h5>{tijd}</h5>
                  <h4>{title}</h4>
                </div>
            </button>
            
            <ActivityDetails 
            omslagafbeeldingen={omslagafbeeldingen}
            datum={datum}
            tijd={tijd}
            title={title} 
            author={author}
            publisher={publisher}
            language={language}
            series={series}
            description={description}
            location={location}
            open={isOpen} onClose={() => setIsOpen(false)}>
            </ActivityDetails>
        </article>
    )
}

export default Activity