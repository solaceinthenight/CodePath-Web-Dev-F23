import React from "react";
import Event from "./Event";

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 am</td>
            <Event event="Church" location="UCI DCE" color="yellow" />
            <td></td>
            <td></td>
            <Event event="Morning Jog" location="Outside" color="blue" />
            <td></td>
            <td></td>
            <Event event="Morning Jog" location="Outside" color="blue" />
          </tr>
          <tr>
            <td className="time">9 am</td>
            <td></td>
            <td></td>
            <Event event="Internship Work" location="Zoom" color="pink" />
            <td></td>
            <td></td>
            <Event event="Internship Work" location="Zoom" color="pink" />
            <td></td>
          </tr>
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">11 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">12 pm</td>
            <td></td>
            <Event event="Special Lunch" location="AYCE Sushi" color="green" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <Event
              event="Bible Study"
              location="Student Center"
              color="yellow"
            />
            <Event event="Mock Interview" location="Zoom" color="pink" />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <Event event="Resume Review" location="Zoom" color="pink" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <td></td>
            <Event event="Gym Session" location="LA Fitness" color="blue" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">5 pm</td>
            <Event event="Family Call" location="Home" color="green" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Game Night" location="Home" color="green" />
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
