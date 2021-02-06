import React from "react";
import { connect } from "react-redux";

function SongDetail({ selected }) {

  if (!selected) {
    return <section className="detail">
        <h2>Please Select A Song</h2>
    </section>;
  }
  return (
    <section className="detail">
      <h2>Song Details:</h2>
      <p>Title : {selected.title}</p>
      <p>Duration : {selected.duration}</p>
    </section>
  );
}

const mapStateToProps = (state) => {
  return { selected: state.song.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
