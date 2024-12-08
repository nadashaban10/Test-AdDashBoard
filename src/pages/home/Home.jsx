import React from 'react'
import './home.scss'
import SideBar from '../../components/navbar/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/featured'
import Charts from '../../chart/Charts'
import List from '../../components/widget/table/Table'
function Home() {
  return (
    <div className='home'>
      <SideBar  />
    <div className='homeContainer'>
      <NavBar />
      <div className='homeWidgets'>
      <Widget type="users" />
      <Widget type="order"  />
      <Widget type="earning"  />
      <Widget type="balance"  />
      </div>
      <div className="charts">
        <Featured />
        <Charts title="Last 6 Months (Revenue)" />
      </div>
      <div className='ListContainer' >
        <div className='ListTitle'>
          <List />
        </div>

      </div>
      </div>
    </div>
  )
}

export default Home
