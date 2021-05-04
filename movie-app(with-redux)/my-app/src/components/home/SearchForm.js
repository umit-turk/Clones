import React, { Component } from 'react';
import {connect} from 'react-redux'

import {searchMovie, fetchMovies, setLoading } from '../../actions/searchActions'

 class SearchForm extends Component {

    onChange = (e) =>{
        this.props.searchMovie(e.target.value);  // actions are our props.
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    }


    render() {
        return (
            <div className="mt-5 text-center">
            <div className="container">
            <h1 className="display-4 mb-4 ">
                <i className="fa fa-search me-5" />Search for a movie, TV series
            </h1>
            <form id="searchForm" onSubmit={this.onSubmit}>
            <div className="input-group mb-4">
            
                <input onChange={this.onChange} type="text" className="form-control" placeholder="Search Movies, TV Series..." name="searchText"  />
                
            </div>
            <div class="d-grid col-2 mx-auto mb-4">
                <button class="btn btn-warning" type="button">Search</button>                
            </div>
            </form>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps, {searchMovie, fetchMovies, setLoading})(SearchForm) //First parameter that our component props , second paramater function action
