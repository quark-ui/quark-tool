/**
 * <%= ComponentName %> Component
 * @author <%= authorName %>
 */
import { Component } from 'react';

class <%= ComponentName %> extends Component {

  static displayName = '<%= ComponentName %>'

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div><%= name %> component</div>
    );
  }
}

export default <%= ComponentName %>;
