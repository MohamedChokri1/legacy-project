const Footer = () => {
    return (
      <footer>
        <div className="footer__container">
          <div className="footer__items__container">
            <div className="footer__help__container">
              <div className="footer__help__header">
                <h1>Help</h1>
              </div>
              <ul className="fotter__help__links">
                <li className="help__link">
                  <a href="/"> Shipping</a>
                </li>
  
                <li className="help__link">
                  <a href="/">FAQ</a>
                </li>
                <li className="help__link">
                  <a href="/">Accessiblity</a>
                </li>
              </ul>
            </div>
            <div className="footer__contact__container">
              <div className="footer__contact__header">
                <h1>Contact Us</h1>
              </div>
              <ul className="footer__contacts">
                <li className="footer__contact">
                  {/* <LocalPhoneIcon />  */}
                  <span>+55000000</span>
                </li>
                <li className="footer__contact">
                  {/* <EmailIcon /> */}
                   <span>Contact@Contact.tn</span>
                </li>
                <li className="footer__contact">

                  {/* <LocationOnIcon />  */}
                  <span>tunis tunis </span>
                </li>
              </ul>
            </div>
            <div className="footer__social__link__container">
              <div className="footer__social__link__header">
                <h1>Stay Connected</h1>
              </div>
              <ul className="footer__social__links">
                <li className="social__link">
                  {/* <TwitterIcon /> */}
                </li>
                <li className="social__link">
                  {/* <InstagramIcon /> */}
                </li>
                <li className="social__link">
                  {/* <YouTubeIcon /> */}
                </li>
                <li className="social__link">
                  {/* <TelegramIcon /> */}
                </li>
                <li className="social__link">
                  {/* <PinterestIcon /> */}
                </li>
              </ul>
            </div>
          </div>
          <div className="fotter__copyright__container">
            <ul className="nav">
              <li className="footer__copyright">©2023 RBK students |</li>
              <li className="footer__terms__condition"> | Terms & Condition |</li>
              <li className="footer__privacy__policy">| Privacy Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;