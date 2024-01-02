import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://i.ibb.co/ZmQcmLH/IMG-2594.jpg" alt=""></img>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          assumenda, molestias iure fugit voluptates, ducimus quia consequuntur,
          voluptate asperiores quis corporis.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Amigurumi</li>
          <li className="sidebarListItem">Coasters</li>
          <li className="sidebarListItem">Clothing</li>
          <li className="sidebarListItem">Bags</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
