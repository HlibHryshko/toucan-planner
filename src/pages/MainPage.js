import Calendar from "../components/Calendar";
import CategoriesSidebar from "../components/CategoriesSideBar";
import { GoThreeBars } from "react-icons/go"
import { useState } from "react";

const MainPage = () => {
  const [isExpanded, setIsExpanded] = useState(true)

  // const scrollContainer = document.scrollingElement;

  // scrollContainer.addEventListener("wheel", (evt) => {
  //     evt.preventDefault();
  //     scrollContainer.scrollLeft += evt.deltaY;
  // });
  
  return (
    <div className="flex flex-row">
      <div className="flex">{
        (isExpanded && <CategoriesSidebar />)
      }
      <GoThreeBars size={30} onClick={() => {
        setIsExpanded(!isExpanded)
      }}/>
      </div>
      
      <div id="calendar" style={{overflowX:"scroll"}} onScroll={()=>{
        
      }}><Calendar /></div>
    </div>
  );
};

export default MainPage;
