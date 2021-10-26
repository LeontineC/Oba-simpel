import React from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";

function ActivitiesLoop({ activities }) {
  return (
    <div>
      <div>
        {activities && activities.length > 0 ? (
          <div className="mainActCal">
            {activities &&
              activities.map((activity) => {
                return (
                  <>
                   
                    <div
                      className="ActCal"
                      key={activity.id}
                    >
                      <img src="images/activityicon_green.svg"
                      alt="background agenda outline"
                      className="activityicon"/>
                      
                      <div className="ActImg">
                        <img
                          src={activity.omslagafbeeldingen[0]}
                          alt={activity.title}
                        ></img>
                      </div>
                      <div className="ActInfo">
                        <p>{activity.title}</p>
                        <p>{activity.tijd}</p>
                        <p>{activity.datum}</p>
                      </div>
                    </div>
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
