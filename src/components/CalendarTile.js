const CalendarTile = ({day, timetable}) => {

  return <div className="shadow-tile box-border w-96 p-6 border-2 border-secondary-green rounded-[14px]">
      <div className="font-bold text-xl uppercase">{day} <br /></div>
      <hr className="my-1 bg-primary-green" style={{border: "none", height: "2px"}}/>
      <div className="font-medium">
      {
        timetable.map(item => {
          return <div className="flex flex-wrap place-items-center">
            <div className={`border-x-2 m-2 p-1 border-primary-green`}> 
              {item.startTime} {(item.endTime) ? ` - ${item.endTime}` : ""}
            </div>
            <div className="underline underline-offset-1">
              {item.name}
            </div>
          </div>
        })
      }
      </div>
    </div>;
};

export default CalendarTile;
