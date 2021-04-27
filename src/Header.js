import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import Menu from './Menu';
import Copy from './Copy';

export default function Header() {
    return (
        <header>
        <div className="menu-trigger">
            <span></span>
            <span></span>
        </div>
        <Switch>
            <Route exact path="/" component={Copy} />
        </Switch>
        <Menu />
      </header>
    );
}
  