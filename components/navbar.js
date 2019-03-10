import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Star Wars Fun Facts</a>
        <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link  href="/"><a className="nav-link">Home</a></Link>
                </li>
                <li className="nav-item">
                    <Link  href="/about"><a className="nav-link">About</a></Link>
                </li>
            </ul>
        </div>
        </nav>
);
export default Navbar;