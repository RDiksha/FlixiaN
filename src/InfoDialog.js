import React from "react";

export default function InfoDialog(props) {
  console.log(props.movie.overview, "props");
  return (
    <div>
      {console.log("hello")}
      <dialog
        open
        style={{ height: 600, width: "100%", position: "center center" }}
      >
        {props.movie.overview}{" "}
      </dialog>
    </div>
  );
}
