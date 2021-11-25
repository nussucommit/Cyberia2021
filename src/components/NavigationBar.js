import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Schedule">Schedule</Link>
            </li>
            <li>
              <Link to="/Competition">Competition</Link>
            </li>
            <li>
              <Link to="/Contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default NavigationBar
