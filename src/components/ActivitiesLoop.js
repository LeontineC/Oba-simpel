import React from "react";
import ActivityOnPage from "./ActivityOnPage";



function ActivitiesLoop({ activities }) {

 

  return (
    <div>
      <div>
        {activities && activities.length > 0 ? (
          <div className="mainActCal">
            {activities &&
              activities.map((activity) => {
                const day = new Date(activity.datum);
                const dayFormat =
                  day.toLocaleString("nl", { weekday: "short" }) +
                  " " +
                  day.getDate() +
                  " " +
                  day.toLocaleString("nl", { month: "short" });
                return (
                  <>
<ActivityOnPage 
  key={activity.id}
  omslagafbeeldingen={activity.omslagafbeeldingen[0]}
  tijd={activity.tijd}
  title={activity.title}
  dayFormat={dayFormat}
  datum={activity.datum}
  description={activity.beschrijving}
  location={activity.locatie}
/>
                  </>
                );
              })}
          </div>
        ) : (
          <p>sorry no results</p>
        )}
      </div>
    </div>
  );
}

export default ActivitiesLoop;
