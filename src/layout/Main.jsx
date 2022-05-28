import React, { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchMovies = (searchName, typeName = 'all') => {
        setLoading(true);
        if (typeName === 'all') {
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchName}`)
                .then((response) => response.json())
                .then(data => {
                    setMovies(data.Search);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setLoading(false);
                });
        } else {
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchName}&type=${typeName}`)
                .then((response) => response.json())
                .then(data => {
                    setMovies(data.Search);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setLoading(false);
                });
        }
    }

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=iron man`)
            .then((response) => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <main className="container content">
            <Search searchMovies={searchMovies} />
            {
                loading ? (
                    <Preloader />
                ) : (
                    <Movies movies={movies} />
                )
            }

        </main>
    );
};

export default Main;




// import React, { Component } from 'react';
// import Movies from '../components/Movies';
// import Preloader from '../components/Preloader';
// import Search from '../components/Search';

// const API_KEY = process.env.REACT_APP_API_KEY;

// export default class Main extends Component {
//     state = {
//         movies: [],
//         loading: true,
//     }

//     componentDidMount() {
//         fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=iron man`)
//             .then((response) => response.json())
//             .then(data => this.setState({ movies: data.Search, loading: false }))
//             .catch((error) => {
//                 console.error(error);
//                 this.setState({ loading: false });
//             });
//     }

//     searchMovies = (searchName, typeName = 'all') => {
//         this.setState({ loading: true });
//         if (typeName === 'all') {
//             fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchName}`)
//                 .then((response) => response.json())
//                 .then(data => this.setState({ movies: data.Search, loading: false }))
//                 .catch((error) => {
//                     console.error(error);
//                     this.setState({ loading: false });
//                 });
//         } else {
//             fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchName}&type=${typeName}`)
//                 .then((response) => response.json())
//                 .then(data => this.setState({ movies: data.Search, loading: false }))
//                 .catch((error) => {
//                     console.error(error);
//                     this.setState({ loading: false });
//                 });
//         }
//     }

//     render() {
//         const { movies, loading } = this.state;
//         return (
//             <main className="container content">
//                 <Search searchMovies={this.searchMovies} />
//                 {
//                     loading ? (
//                         <Preloader />
//                     ) : (
//                         <Movies movies={movies} />
//                     )
//                 }

//             </main>
//         );
//     }
// };