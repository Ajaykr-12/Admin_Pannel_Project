import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import HomeTable from "../../components/homeTable/HomeTable";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="Container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Last 6 Months Revenue" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transaction</div>
          <HomeTable />
        </div>
      </div>
    </div>
  );
}

export default Home;
