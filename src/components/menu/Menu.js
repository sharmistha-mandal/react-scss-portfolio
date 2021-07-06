import "./menu.scss";
import MenuItem from '../menuitem/MenuItem';

const Menu = ({ menuOpen, setMenuOpen }) => {

  const menuitems=[
    {
      label: "Home",
      linkref: "#hero",
    },
    {
      label: "Portfolio",
      linkref: "#portfolio",
    },
    {
      label: "Works",
      linkref: "#works",
    },
    {
      label: "Testimonials",
      linkref: "#testimonials",
    },
    {
      label: "Contact",
      linkref: "#contact",
    }
  ]
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
      {
      menuitems.map(menu => <MenuItem key={menu.label} label={menu.label} linkref={menu.linkref} setMenuOpen={setMenuOpen}/>)
      }
      </ul>
    </div>
  );
};

export default Menu;
