import andrew_photo from '../../assets/andrew.png'
import NavBar from '../Navigation/NavBar.tsx';
import NavMenu from '../Navigation/NavMenu.tsx';
function Header(props: any) {
    return (
    <header id="header" className={props.headerHeight}>
        <div id="header-left">
          <img id="self-photo" alt="Andrew Nelson" src={andrew_photo}/>
          <div id="namearea">
              <h1 id="site-title">Andrew Nelson</h1>
          </div>
        </div>
        <NavBar></NavBar>
        <NavMenu></NavMenu>
    </header>
    );
}


export default Header;