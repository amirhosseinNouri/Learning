import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

function SongList({ songs , selectSong }) {

  return (
    <section className="song__list">
      {songs.map((item, index) => {
        return (
          <article key={index} className="song">
            <h4>{item.title}</h4>
            <button onClick={() => selectSong(item)} type="button" className="btn">
              Select
            </button>
          </article>
        );
      })}
    </section>
  );
}

const mapStateToProps = (state) => {
  return { songs: state.song.songs };
};

export default connect(mapStateToProps, {
  selectSong,
})(SongList);
