import Datatable from "../../components/datatable/Datatable"
import Navbar from "../../components/navbar/NavBar"
import SideBar from "../../components/navbar/sidebar/SideBar"

import "./list.scss"


const List = () => {
  return (
    <div className="list">
   <SideBar />
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List