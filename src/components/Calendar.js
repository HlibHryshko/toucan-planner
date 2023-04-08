import CalendarTile from "./CalendarTile";

// Debug var
const defaultTimetable = [
  {startTime: "8:30", endTime: "9:00", name: "Subject1"},
  {startTime: "10:30", name: "Subject2"},
  {startTime: "12:30", endTime: "15:00", name: "Subject3"}
]

const Calendar = () => {
  return <div>
    <CalendarTile day ="Monday, April 10" timetable = {defaultTimetable}/>
    <CalendarTile day ="Monday, April 10" timetable = {defaultTimetable}/>
    <CalendarTile day ="Monday, April 10" timetable = {defaultTimetable}/>
    <CalendarTile day ="Monday, April 10" timetable = {defaultTimetable}/>
    <CalendarTile day ="Monday, April 10" timetable = {defaultTimetable}/>
    <CalendarTile day ="Monday, April 10" timetable = {defaultTimetable}/>
    <CalendarTile day ="Monday, April 10" timetable = {defaultTimetable}/>
  </div>;
};

export default Calendar;
