import React, {propTypes} from 'react';
import md5 from 'md5';

import Avatar from './avatar';
import Email from './email';

export default class Gravatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'someone@example.com',
      src: 'http://placehold.it/200x200'
    }
  }

  updateGravatar() {
    this.setState({
      src: `http://gravatar.com/avatar/${md5(this.state.email)}?s=200`
    });
  }

  updateEmail(event) {
    this.setState({email: event.target.value});
  }

  render() {
    return (
      <div className="react-gravatar">
        <h4>Avatar for:</h4>
        <Avatar email={this.state.email} src={this.state.src}/>
        <Email fetchGravatar={this.updateGravatar.bind(this)} handleEmailChange={this.updateEmail.bind(this)}/>
      </div>
    );
  }
}
