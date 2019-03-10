import Head from 'next/head';
import Navbar from './navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Start Wars fun Facts</title>
            <link rel="styleSheet" href="https://bootswatch.com/4/cyborg/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}    
        </div>
    </div>
);

export default Layout;