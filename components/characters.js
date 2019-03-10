class Prices extends React.Component {
    state = {
        character : ''
    }
    getCharDetails = (e) => {
        if(e.target.value != null ) {
            let c = this.props.chars.filter(char => char.name === e.target.value)
            this.setState({ character : c })
        }
    }
    render() {
        return(
            <div>
                <select class="form-control" id="exampleSelect2" onChange={this.getCharDetails}>
                <option default>Select Character</option>
                    {this.props.chars.map((char) => (
                        <option key={char.name} value={char.name}>{char.name}</option>
                    ))}
                </select>
                <br/>
                {this.state.character ? (
                     <div className="card border-info mb-3">
                     <div className="card-header">Character Details</div>
                     <div className="card-body">
                         <h4 className="card-title">{this.state.character[0].name}</h4>
                         <p className="card-text">Birth year : {this.state.character[0].birth_year}
                         <small><em> ** using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.</em></small>
                         </p>
                         <p className="card-text">Eye color : {this.state.character[0].eye_color}</p>
                         <p className="card-text">Gender : {this.state.character[0].gender}</p>
                         <p className="card-text">Hair color : {this.state.character[0].hair_color}</p>
                         <p className="card-text">Mass : {this.state.character[0].mass} kg.</p>
                     </div>
                 </div>
                ) : null }
               
                
                
            </div>
        )
    }
};

export default Prices;