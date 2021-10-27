import React from "react";

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
                      style={{
                        backgroundImage: "url('images/activityicon_green.svg')",
                        backgroundPosition: "cover",
                        backgroundRepeat: "no-repeat",
                        height: "100%"
                      }}
                    >
                      <div className="ActInfo">
                        <h3>{activity.title}</h3>
                        <h4>{activity.tijd}</h4>
                        <h4>{activity.datum}</h4>
                        {/* </div> */}
                        {/* <div className="ActImg" > */}
                        <img
                          src={activity.omslagafbeeldingen[0]}
                          alt={activity.title}
                        ></img>
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
