App = React.createClass({

  mixins: [ReactMeteorData, SortableMixin],

  sortableOptions: {
    ref: 'task-list',
    model: 'tasks'
  },

  getInitialState: function() {
    console.log(this);
    if (this.data && this.data.tasks) {
      return {
        tasks: this.data.tasks
      }
    } else {
      return {
        tasks: []
      }
    }
  },

  getMeteorData() {
    return {
      tasks: Tasks.find({}).fetch()
    }
  },

  renderTasks() {
    return this.data.tasks.map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },

  handleSubmit(e) {
    e.preventDefault();

    var refs = this.refs;
    // Find the text field via the React ref
    var text = React.findDOMNode(refs.textInput).value.trim();

    Tasks.insert({
      text: text,
      createdAt: new Date() // current time
    });

    // Clear form
    React.findDOMNode(refs.textInput).value = "";
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>

          <form className="new-task" onSubmit={this.handleSubmit} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks" />
          </form>

        </header>

        <ul ref="task-list">
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
});
