import React from "react";
import { connect } from "react-redux";
function SongDetail({ selected }) {
  console.log(selected);
  if (!selected) {
    return <h2>Please Select A Song</h2>;
  }
  return (
    <section className="detail">
      <h2>Song Details:</h2>
      <p>{selected.title}</p>
      <p>{selected.duration}</p>
    </section>
  );
}

const mapStateToProps = (state) => {
  return { selected: state.song.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
