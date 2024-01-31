import Image from "next/image";
import styles from "./page.module.css";
//import { Button } from "react-bootstrap";
import { Grid, Button, Card, CardContent, CardMedia, CardActions, Typography } from '@mui/material';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div style={{ overflowY: "scroll"}}>
      <div>
  {/* <Sidebar>
            <h1>Hello</h1>
            </Sidebar> */}
      </div>
      <h1 style={{ fontSize: "150px"}}>this is col set</h1>
      <div className="hover-text">
      This text will change color on hover!
    </div>
      {/* <h1 style={{ fontSize: "150px" }}>this is col set</h1>
      <h1 style={{ fontSize: "150px" }}>this is col set</h1>
      <h1 style={{ fontSize: "150px" }}>this is col set</h1>
      <h1 style={{ fontSize: "150px" }}>this is col set</h1>
      <h1 style={{ fontSize: "150px" }}>this is col set</h1>
      <h1 style={{ fontSize: "150px" }}>this is col set</h1>
      <h1 style={{ fontSize: "150px" }}>this is col set</h1>
      <h1 style={{ fontSize: "150px" }}>this is col set</h1>
      <h1 style={{ fontSize: "150px" }}>this is col set</h1>
      <h1 style={{ fontSize: "150px" }}>this is col set</h1>
      <h1 style={{ fontSize: "150px" }}>this is col set</h1> */}
    </div>
  );
}
