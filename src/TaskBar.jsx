import React, { Component } from 'react';

class TaskBar extends Component {
  render() {
    return (
            <form >
                <label>
                  <input
                    type="text"
                    name="input"
                    placeholder="Task"
                    onChange={this.props.setInput}
                    value={this.props.value}
                  />
                </label>
              <input
                type="submit"
                value="Add Task"
                onClick={this.props.addElement}
                />
            </form>
          );
  }
}

export default TaskBar;
