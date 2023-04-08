const CalendarTile = ({day, timetable}) => {

  return <div className="shadow-tile box-border w-96 p-6 border-2 border-secondary-green rounded-[14px]">
      <div className="font-bold text-xl uppercase">{day} <br /></div>
      <hr className="my-1 bg-primary-green" style={{border: "none", height: "2px"}}/>
      <div className="font-medium">
      {
        timetable.map(item => {
          return <div className="flex flex-wrap place-items-center">
            <div name="left-time-divider" className="">
              <hr className="bg-primary-green w-3px h-8"/>
            </div>
            <div name="time" className={`my-2 p-1`}> 
              {item.startTime} {(item.endTime) ? ` - ${item.endTime}` : ""}
            </div>
            <div name="right-time-divider" className="">
              <hr className="bg-primary-green w-3px h-8 mr-2"/>
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
