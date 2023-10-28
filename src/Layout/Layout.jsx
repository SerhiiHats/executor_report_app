import styles from "./Layout.module.scss";
import {Outlet} from "react-router";
import MainMenu from "./MainMenu/MainMenu.jsx";
import SecondaryMenu from "./SecondaryMenu/SecondaryMenu.jsx";

const Layout = () => {
  return (
    <div className={styles.containerLayout}>
      <div className={styles.containerWrapNav}>
        <aside className={styles.containerAside}>
          <p>FREE</p>
          <h1>СКЗ &quot;Виконавець&quot;</h1>
          <p>Меню</p>
        </aside>
        <nav className={styles.containerNav}>
          <MainMenu/>
        </nav>
      </div>

      <div className={styles.containerWrapMain}>
        <header className={styles.header}><span>HEADER</span> <SecondaryMenu/>
          {/*<span className={styles.test}> ! </span>*/}
        </header>
        <main className={styles.main}>
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default Layout;