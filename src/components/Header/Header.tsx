import logo from "../../assets/icons/logo.svg"
import './Header.scss'

function Header () {
  return (
    <header className="header">
      <div className="header-container">
        <section id="logo">
          <div className="logo-container">
            <h1 className="logo-text">Mall in</h1>
            <img className="logo-img" src={logo} />
          </div>
        </section>

        <section id="search">
          <div className="search-container">
              <div className="search-window">
                <form id="search-input-form" action="">
                  <input className="search-input" type="text" />
                </form>
              </div>
              <button className="search-btn" form="search-input-form"></button>
          </div>
        </section>

        <section id="sign-in">
          <form id="sign-in-form" action="">
            <button className="sign-in-btn btn">
              Sign In<br />
              Account
            </button>
          </form>
        </section>

        <section id="cart">
          <form id="cart-form" action="">
            <button className="cart-btn btn">
              Your cart<br />
              Total
            </button>
          </form>
        </section>
      </div>
      </header>
  )
}

export default Header;