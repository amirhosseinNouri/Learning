import React from "react";
import { connect } from "react-redux";

function SongList({songs}) {
    console.log(songs);
  return <div>Song list</div>;
}

const mapStateToProps = (state) =>{
    return {songs : state.song.songs}
}

export default connect(mapStateToProps)(SongList)
