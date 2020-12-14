function SongList(props) {
    return (
        <div className="list">
            <table className="song-table">
                <thead>
                    <tr className="song-header">
                        <th className="song-row__item">Song</th>
                        <th className="song-row__item">Artist</th>
                        <th className="song-row__item">Genre</th>
                        <th className="song-row__item">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map((song, id) => (
                        <tr key={id} className="song">
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>
                            <td>{song.rating}</td>
                            <td><button className="song-button" onClick={() => props.deleteSong(song.id)}>Delete</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div >
    )
}
export default SongList