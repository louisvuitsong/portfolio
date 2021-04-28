import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
export default function Menu () {
    return (
        <div className="menu">
          <nav className="menu_nav">
            <Link to="/"> Home </Link>
            <Link to="/about/"> About </Link>
            <Link to="/work/"> Work </Link>
          </nav>
          <div className="contact">
              <p>송창욱</p>
              <p>Song Changwook</p>
              <p>Email Address</p>
              <p>scw9327@naver.com</p>
              <p>Phone Number</p>
              <p>010-3575-0126</p>
              <p>Kakao</p>
              <p className="qr"><img src="/source/kakao-qr.png" alt="kakao-qr" /></p>
              <nav>
                  <a href="https://www.instagram.com/louis._vuitsong/">Instagram</a>
                  <a href="#">Github</a>
              </nav>
          </div>
      </div>
    );
}