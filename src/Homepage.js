import React from 'react';

export default class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      q: '',
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const q = this.state.q.trim();
    q && this.props.onSubmit(q);
  }
    

  handleChange(event) {
    this.setState({
      q: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1 className="font-weight-bold text-info">InfoMeter</h1>
        <p>Check your info now!</p>
        <form action="/result" method="get" onSubmit={ this.handleSubmit.bind(this) }>
          <div className="form-group">
            <input className="form-control form-control-lg" type="text" name="q"
                placeholder="e.g. &quot;Kate loves me&quot;" value={ this.state.q }
                onChange={ this.handleChange.bind(this) } />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-info btn-lg">Check</button>
          </div>
        </form>
      </div>
    );
  }
}
