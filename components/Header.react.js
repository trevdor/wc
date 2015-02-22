require('react');

class Header extends React.Component {
  render() {
    return <div>Hello {this.props.date}</div>;
  }
}

React.render(<Header date="2/22/14" />);