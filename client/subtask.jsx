SubTask = React.createClass({
 propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    // subTask: React.PropTypes.object.isRequired
  },
  render() {
    console.log('this: ', this);
    return (
      <li>SubTask</li>
    );
  }
});