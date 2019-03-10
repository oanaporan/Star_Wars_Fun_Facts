import Fetch from 'isomorphic-unfetch';
import Layout from "../components/layout";
import Characters from '../components/characters';

const Index = (props) => (
    <Layout>
        <div>
            <h3>Welcome</h3>
            <p>Check some fun facts of your favorite character.</p>
            <Characters chars={props.chars}/>
        </div>
    </Layout>
    
);

Index.getInitialProps = async function () {
    const res = await fetch('https://swapi.co/api/people/');
    const data = await res.json();

    return {
        chars: data.results
    };
  
}

export default Index;