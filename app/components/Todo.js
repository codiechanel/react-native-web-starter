import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import { connect } from 'react-redux'

import { Touchable } from './Touchable';
import { NavLink } from './NavLink';
import { Match, MemoryRouter as Router } from 'react-router';
import * as actions from '../common/actions'

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      
    }

    todoRow(item, index) {
        return <Text key={index}>{item}</Text>
    }

    render() {
     
        return <View> <Touchable onPress={() => this.props.dispatch(actions.save())}>
            <Text> cool </Text>
        </Touchable>
            {this.props.todos.map(this.todoRow)}
        </View>
    }


}

// Todo.contextTypes = {
//     store: React.PropTypes.object.isRequired,
// }

Todo.propTypes = {
    dispatch : React.PropTypes.func.isRequired,
    todos: React.PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
    return { todos: state.todos }
}


// const VisibleTodoList = connect(mapStateToProps)(Todo)
// console.log(VisibleTodoList)
// export default VisibleTodoList

export default connect(mapStateToProps)(Todo)
// export default connect(state => ({
//     state: state.todos
//   })

// )(Todo);
