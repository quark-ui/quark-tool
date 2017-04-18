/**
 * <%= ComponentName %> Component Demo
 * @author <%= authorName %>
 */
import { Component } from 'react';
import <%= ComponentName %> from '../src';

class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <<%= ComponentName %> />
      </div>
    );
  }
}

export default Demo;
