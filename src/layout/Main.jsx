import React, { Component } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Main extends Component {
    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=iron man`)
            .then((response) => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }));
    }

    searchMovies = (searchName, typeName = 'all') => {
        this.setState({ loading: true });
        if (typeName === 'all') {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchName}`)
                .then((response) => response.json())
                .then(data => this.setState({ movies: data.Search, loading: false }));
        } else {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchName}&type=${typeName}`)
                .then((response) => response.json())
                .then(data => this.setState({ movies: data.Search, loading: false }));
        }
    }

    render() {
        const { movies, loading } = this.state;
        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
                {
                    loading ? (
                        <Preloader />
                    ) : (
                        <Movies movies={movies} />
                    )
                }

            </main>
        );
    }
};