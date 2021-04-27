import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

export default function Footer() {
    return (
      <Switch>
        <Route exact path="/" component={MainFooter} />
        <Route path="/about" component={AboutFooter} />
      </Switch>
    );
  }

function MainFooter() {
  return (
    <footer>
      <p>@2021 Copyright by changwook Song</p>
      <nav>
          <a href="work.html">my project?</a>
          <a href="about.html">Who am i ?</a>
      </nav>
      <nav>
          <a href="#">Resume</a>
          <a href="https://www.instagram.com/louis._vuitsong/">Instagram</a>
          <a href="#">Github</a>
      </nav>
    </footer>
  );
}

function AboutFooter() {
  return (
    <footer className='about_footer'>
          <div className='skills_btn'>
              <a href="#">SKILLS</a>
              <div>
                  <span></span>
                  <span></span>
              </div>
          </div>
      </footer>
  );
}