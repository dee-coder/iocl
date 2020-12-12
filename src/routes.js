/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./views/Dashboard.jsx";
import NewMOC from "./views/NewMOC.js";
import UserProfile from "./views/UserProfile.jsx";
import TableList from "./views/TableList.jsx";
import Typography from "./views/Typography.jsx";
import Icons from "./views/Icons.jsx";
import Maps from "./views/Maps.jsx";
import Notifications from "./views/Notifications.jsx";
import Upgrade from "./views/Upgrade.jsx";
import MyMOC from "./views/MyMOC";
import MOCRecords from "./views/MOCRecords";
import PendingMOC from "./views/PendingMOC";
import ViewMOC from "./views/ViewMOC";
import ContactsPage from "./views/ContactPage";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/newmoc",
    name: "New MOC",
    icon: "pe-7s-plus",
    component: NewMOC,
    layout: "/admin",
  },
  {
    path: "/mymocs",
    name: "My MOCs",
    icon: "pe-7s-copy-file",
    component: MyMOC,
    layout: "/admin",
  },
  {
    path: "/mocrecords",
    name: "MOC Records",
    icon: "pe-7s-portfolio",
    component: MOCRecords,
    layout: "/admin",
  },
  {
    path: "/pendingmoc",
    name: "Pending MOCs",
    icon: "pe-7s-refresh-2",
    component: PendingMOC,
    layout: "/admin",
  },
  {
    path: "/contacts",
    name: "Contacts",
    icon: "pe-7s-user",
    component: ContactsPage,
    layout: "/admin",
  },

  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "pe-7s-news-paper",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "pe-7s-science",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "pe-7s-map-marker",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications,
  //   layout: "/admin",
  // },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
