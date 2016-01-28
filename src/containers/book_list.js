import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map ((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
            {book.title}
          </li>
      );
    });
  }

  render() {
    return(
      <ul className="list-group col-md-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
//whatever gets returned will show up as props in BookList.
  return {
    books: state.books
  }
}

//Anything returned from the function will end up as props
//on the bookList container
function mapDispatchToProps(dispatch) {
// Whenever select book is called, results should be passed to all reducers.
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Connect function
//takes function and Component and makes a connection
// Promote BookList from a component to a container
// it needs to know about this new dispatch method, selectBook.
//Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
