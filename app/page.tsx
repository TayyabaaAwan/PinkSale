import "bootstrap/dist/css/bootstrap.min.css";
import pinkswap from "../app/img/pinkswap.png";
import LaunchPads from "./Component/LaunchPads";
export default function Home() {
  const cardBlocks = [
    {
      title: "Baby Snow",
      value: "1 BNB = 2,200,000 CR7INU ",
    },
    {
      title: "Baby Snow",
      value: "1 BNB = 2,200,000 CR7INU ",
    },
    {
      title: "Baby Snow",
      value: "1 BNB = 2,200,000 CR7INU ",
    },
    {
      title: "Baby Snow",
      value: "1 BNB = 2,200,000 CR7INU ",
    },
  ];

  return (
    <div className="col-md-12">
      <div
      // className="trendingBar"
      // style={{
      //   color: "black",
      //   width: "100%",
      //   marginTop: "4px",
      //   borderBottom: "solid 1px",
      //   borderColor: "#d3d3d3",
      //   paddingTop: "50px",
      //   paddingLeft: "0px",
      //   gap: "7px",
      //   display: "flex",
      //   gridTemplateColumns: "repeat(4, 1fr)",
      // }}
      >
        <section style={{ display: "flex", alignItems: "center" }}>
          <h6>
            {" "}
            <i
              className="bi bi-graph-up-arrow"
              style={{ color: "#f95192" }}
            ></i>{" "}
            Trending
          </h6>
          {/* <ul style={{ color: "#f95192" }}>#1 MYRO2.0</ul>
          <ul style={{ color: "#f95192" }}>#2 CHARIZARD</ul>
          <ul style={{ color: "#f95192" }}>#3 SMILEY</ul>
          <ul style={{ color: "#f95192" }}>#4 $OMNI</ul>
          <ul style={{ color: "#f95192" }}>#5 CBAI</ul>
          <ul style={{ color: "#f95192" }}>#6 VENOM AI</ul>
          <ul style={{ color: "#f95192" }}>#7 TIF</ul>
          <ul style={{ color: "#f95192" }}>#8 POPEYE</ul>
          <ul style={{ color: "#f95192" }}>#9 TENC</ul> */}
        </section>
      </div>
      <LaunchPads />{" "}
    </div>
  );
}
