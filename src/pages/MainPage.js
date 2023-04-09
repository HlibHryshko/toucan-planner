import Calendar from "../components/Calendar";
import CategoriesSidebar from "../components/CategoriesSideBar";
import { GoPerson, GoProject, GoThreeBars } from "react-icons/go";
import { useState } from "react";
import { useSelector } from "react-redux";
import StartingPage from "./StartingPage";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const scrollContainer = document.scrollingElement;

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });

  const navigate = useNavigate();

  return (
    <div>
      <GoPerson  onClick={() => {navigate('/profile')}}/>
      {useSelector((state) => state.categories).length === 0 ? (
        <StartingPage />
      ) : (
        <div className="flex flex-row bg-background-green">
          <div className="flex">
            {isExpanded && <CategoriesSidebar />}
            <GoThreeBars
              size={30}
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
            />
          </div>
          <div id="calendar" className="overflow-auto" onScroll={() => {}}>
            <Calendar />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
