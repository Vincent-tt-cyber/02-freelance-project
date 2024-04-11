import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import CartIcon from "../../assets/icons/cart-icon.svg";
import SearchForm from "../SearchForm/SearchForm";
import Tooltip from "../Tooltip/Tooltip";

const Header = () => {
  const [cartCount, setCartCount] = React.useState(0);
  const [isOpenTooltip, setIsOpenTooltip] = React.useState(true);
  const links = [
    {
      id: 1,
      title: "Furniture",
      path: "/furniture",
    },
    {
      id: 2,
      title: "Shop",
      path: "/shop",
    },
    {
      id: 3,
      title: "About Us",
      path: "/about",
    },
    {
      id: 4,
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      <header className={styles["header"]}>
        <div className="container">
          <nav className={styles["header-nav"]}>
            <Link to="/" className={styles["header__logo"]}>
              Panto
            </Link>
            <ul className={styles["header-nav__list"]}>
              {links.map((link) => (
                <li key={link.id} className={styles["header-nav__list-item"]}>
                  {link.title}
                </li>
              ))}
            </ul>
            <div className={styles["header-cart"]}>
              <img src={CartIcon} className={styles["header-cart__image"]} />
              <div className={styles["header-cart__count"]}>{cartCount}</div>
            </div>
          </nav>

          <div className={styles["header-content"]}>
            <h1 className={styles["header-content__title"]}>
              Make your interior more minimalistic & modern
            </h1>
            <p>
              Turn your room with panto into a lot more minimalist and modern
              with ease and speed
            </p>
            <SearchForm />
          </div>

          <div className={styles["header__dot-sofa"]}>
            <button
              onClick={() => setIsOpenTooltip(!isOpenTooltip)}
              className={styles["info-dot"]}
            >
              <div className={styles["info-dot__radius"]}></div>
              <div className={styles["info-dot__circle"]}></div>
            </button>
            {isOpenTooltip && <Tooltip />}
          </div>

          <div className={styles["header__dot-vase"]}>
            <button className={styles["info-dot"]}>
              <div className={styles["info-dot__radius"]}></div>
              <div className={styles["info-dot__circle"]}></div>
            </button>
            {/* {isOpenTooltip && <Tooltip />} */}
          </div>

          <div className={styles["header__dot-item"]}>
            <button className={styles["info-dot"]}>
              <div className={styles["info-dot__radius"]}></div>
              <div className={styles["info-dot__circle"]}></div>
            </button>
            {/* {isOpenTooltip && <Tooltip />} */}
          </div>

          <div className={styles["header__dot-wall"]}>
            <button className={styles["info-dot"]}>
              <div className={styles["info-dot__radius"]}></div>
              <div className={styles["info-dot__circle"]}></div>
            </button>
            {/* {isOpenTooltip && <Tooltip />} */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
