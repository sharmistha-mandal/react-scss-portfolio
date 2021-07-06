import "./menuitem.scss";

function MenuItem({label, linkref,setMenuOpen}) {
  return (
    <li onClick={() => setMenuOpen(false)}>
      <a href={linkref}>{label}</a>
    </li>
  );
}

export default MenuItem;
