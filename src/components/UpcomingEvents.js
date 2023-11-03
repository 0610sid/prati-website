import React, { useState, useEffect } from "react";
import { fire } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const UpcomingEvents = () => {
  const [info, setInfo] = useState([]);

  async function getEvents(db) {
    const events_col = collection(db, "Upcoming_Events");
    const events_snapshot = await getDocs(events_col);
    const events_list = events_snapshot.docs.map((doc) => doc.data());
    setInfo(events_list);
  }

  useEffect(() => {
    getEvents(fire);
    // eslint-disable-next-line
  }, []);

  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="upcoming-events-table">
      <h1>Upcoming Events</h1>
      <table className="events-list">
        <tbody>
          {info.map((x) => {
            return (
              <tr key={x.name}>
                <td>
                  <div className="event-date">
                    <div className="event-day">{x.time.toDate().getDate()}</div>
                    <div
                      className="event-month"
                      style={{ textTransform: "uppercase" }}
                    >
                      {months[x.time.toDate().getMonth()]}
                    </div>
                  </div>
                </td>
                <td>{x.name}</td>
                <td>
                  {x.link === "" ? null : (
                    <a href={x.link} className="btn btn-grey btn-sm event-more">
                      Join
                    </a>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingEvents;
