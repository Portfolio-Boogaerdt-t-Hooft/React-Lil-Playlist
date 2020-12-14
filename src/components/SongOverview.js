import React, { Component } from 'react'
import SongForm from './SongForm'
import SongList from './SongList'

class SongOverview extends Component {
    constructor() {
        super()
        this.state =
        {
            songs: [
                { id: 1, title: "Hello", artist: 'Lionel Richie', genre: 'Love songs', rating: 5 },
                { id: 2, title: "Master of Puppets", artist: "Metallica", genre: "Hardrock", rating: 5 }
            ],
            title: "",
            artist: "",
            genre: "",
            rating: ""
        }
        this.emptyList = this.emptyList.bind(this)
        this.deleteSong = this.deleteSong.bind(this)

    }
    emptyList = (event) => {
        event.preventDefault()
        this.setState({ songs: [] })
    }

    deleteSong = (id) => {
        this.setState((prevState) => {
            const newState = { ...prevState };
            newState.songs = newState.songs.filter(song => song.id !== id);
            return newState;
        })
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        const addNewSong = event => {
            event.preventDefault()
            const song = {
                id: this.state.songs.length + 1,
                title: this.state.title,
                artist: this.state.artist,
                genre: this.state.genre,
                rating: this.state.rating
            }
            this.setState(prevState => {
                const newList = prevState.songs.concat(song)
                return { songs: newList }
            })
            this.setState({ title: "", artist: "", genre: "", rating: "" })
        }
        return (
            <div className="homepage">
                <SongForm
                    addNewSong={addNewSong}
                    handleChange={this.handleChange}
                    emptyList={this.emptyList}
                    songs={this.state.songs}
                    title={this.state.title}
                    artist={this.state.artist}
                    genre={this.state.genre}
                    rating={this.state.rating}
                    deleteSong={this.deleteSong}
                />
                <SongList
                    songs={this.state.songs}
                    emptyList={this.emptyList}
                    addNewSong={addNewSong}
                    deleteSong={this.deleteSong}
                />
            </div >
        );
    }
}

export default SongOverview;