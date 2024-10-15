import { useRef } from 'react';
import andrew_photo from '../../assets/andrew.png'
import NavBar from '../Navigation/NavBar.tsx';
import NavMenu from '../Navigation/NavMenu.tsx';
import Spiders from '../Spiders.tsx';
function Header(props: any) {
    const headerRef = useRef<any>(null);
    return (
    <header id="header" ref={headerRef} className={props.headerHeight}>
        <Spiders containerRef={headerRef}></Spiders>
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