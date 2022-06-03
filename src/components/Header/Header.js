import andrew_photo from '../../assets/andrew.png'
import NavBar from '../Navigation/NavBar';
import NavMenu from '../Navigation/NavMenu';
function Header(props) {
    return (
    <header id="header" className={props.headerHeight}>
        <div id="header-left">
          <img id="self-photo" alt="Andrew Nelson" src={andrew_photo}/>
          <div id="namearea">
              <h1 id="site-title">Andrew Nelson</h1>
              <h3 id="sub-title">Software Engineer</h3>
          </div>
        </div>
        <NavBar></NavBar>
        <NavMenu></NavMenu>
    </header>
    );
}


export default Header;