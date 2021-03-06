import React, { useState } from 'react';

const Search = (props) => {
    const {
        searchMovies = Function.prototype,
    } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search || 'iron man', type);
        }
    }

    const handleFilter = (event) => {
        setType(event.target.dataset.type)
        searchMovies(search || 'iron man', event.target.dataset.type);
    }

    return (
        <div className="row">
            <div className="input-field">
                <input
                    className="validate"
                    placeholder='search'
                    type='search'
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    onKeyDown={handleKey}
                />
                <button
                    className="btn search-btn deep-purple lighten-3"
                    onClick={() => searchMovies(search || 'iron man', type)}
                >
                    Search
                </button>
            </div>
            <div className='filter'>
                <label>
                    <input
                        type="radio"
                        className="with-gap"
                        name="type"
                        data-type='all'
                        onChange={handleFilter}
                        checked={type === 'all'}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        type="radio"
                        className="with-gap"
                        name="type"
                        data-type='movie'
                        onChange={handleFilter}
                        checked={type === 'movie'}
                    />
                    <span>Movies</span>
                </label>
                <label>
                    <input
                        type="radio"
                        className="with-gap"
                        name="type"
                        data-type='series'
                        onChange={handleFilter}
                        checked={type === 'series'}
                    />
                    <span>Series</span>
                </label>
            </div>
        </div>
    );
};

export default Search;







// import React, { Component } from 'react';

// export default class Search extends Component {
//     state = {
//         search: '',
//         type: 'all'
//     }

//     handleKey = (event) => {
//         if (event.key === 'Enter') {
//             this.props.searchMovies(this.state.search || 'iron man', this.state.type);
//         }
//     }

//     handleFilter = (event) => {
//         this.setState(
//             () => ({ type: event.target.dataset.type }),
//             () => {
//                 this.props.searchMovies(this.state.search || 'iron man', this.state.type)
//             }
//         );
//     }

//     render() {
//         return (
//             <div className="row">
//                 <div className="input-field">
//                     <input
//                         className="validate"
//                         placeholder='search'
//                         type='search'
//                         value={this.state.search}
//                         onChange={(event) => this.setState({ search: event.target.value })}
//                         onKeyDown={this.handleKey}
//                     />
//                     <button
//                         className="btn search-btn deep-purple lighten-3"
//                         onClick={() => this.props.searchMovies(this.state.search || 'iron man', this.state.type)}
//                     >
//                         Search
//                     </button>
//                 </div>
//                 <div className='filter'>
//                     <label>
//                         <input
//                             type="radio"
//                             className="with-gap"
//                             name="type"
//                             data-type='all'
//                             onChange={this.handleFilter}
//                             checked={this.state.type === 'all'}
//                         />
//                         <span>All</span>
//                     </label>
//                     <label>
//                         <input
//                             type="radio"
//                             className="with-gap"
//                             name="type"
//                             data-type='movie'
//                             onChange={this.handleFilter}
//                             checked={this.state.type === 'movie'}
//                         />
//                         <span>Movies</span>
//                     </label>
//                     <label>
//                         <input
//                             type="radio"
//                             className="with-gap"
//                             name="type"
//                             data-type='series'
//                             onChange={this.handleFilter}
//                             checked={this.state.type === 'series'}
//                         />
//                         <span>Series</span>
//                     </label>
//                 </div>
//             </div>
//         );
//     }
// };