import React, {PropTypes} from 'react';

export default class Email extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="form-group">
        <input onChange={this.props.handleEmailChange} className="form-control" style={{
          width: 200
        }} type="text"/>
        <button onClick={this.props.fetchGravatar} className="btn-success btn ">Fetch</button>
      </div>
    );
  }
}

Email.propTypes = {
  handleEmailChange: PropTypes.func,
  fetchGravatar: PropTypes.func,
};
