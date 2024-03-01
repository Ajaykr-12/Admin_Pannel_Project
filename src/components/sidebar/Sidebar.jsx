import React, { useContext } from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import MonitorHeartRoundedIcon from "@mui/icons-material/MonitorHeartRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">Admin Pannel</div>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to="/" style={{ textDecoration: "none", width: "100%" }}>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LIST</p>
          <li>
            <Link to="/users" style={{ textDecoration: "none", width: "100%" }}>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Inventory2RoundedIcon className="icon" />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <BorderColorRoundedIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingRoundedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsRoundedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveRoundedIcon className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeartRoundedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyRoundedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsRoundedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AssignmentIndRoundedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutRoundedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
}

export default Sidebar;
