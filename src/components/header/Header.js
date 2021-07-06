import { Mail, Person } from "@material-ui/icons";
import "./header.scss";

//Received state as props from App component
const Header = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={"header " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#hero" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+44 776 125 678</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>er.sharmistha@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
