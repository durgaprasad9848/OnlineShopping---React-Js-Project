import React from "react";
import './Home.css';
import {Button, Table} from 'react-bootstrap';
export const Home = () => {
  console.log("Home page");
  return (
    <div> 
    <div className="generics">
      <h1 className="generics-text"> The Generics</h1>{" "}
      <button> Get our Latest Album</button>
      <button className="playbut">►</button>
    </div>
    <div>
       <center><h1>TOURS</h1> </center> 
    </div>

    <Table className="table">
      <thead>
         
      </thead>
      <tbody>
        <tr>
          <td>JUL16</td>
          <td>DETOIT.MI</td>
          <td>DTE ENERGY MUSIC THEATERE</td>
          <td><Button>BUY TICKETS</Button></td>
        </tr>
        <tr>
        <td>JUL16</td>
          <td>DETOIT.MI</td>
          <td>DTE ENERGY MUSIC THEATERE</td>
          <td><Button>BUY TICKETS</Button></td>
        </tr>
        <tr>
        <td>JUL16</td>
          <td>DETOIT.MI</td>
          <td>DTE ENERGY MUSIC THEATERE</td>
          <td><Button>BUY TICKETS</Button></td>
        </tr>
        <tr>
        <td>JUL16</td>
          <td>DETOIT.MI</td>
          <td>DTE ENERGY MUSIC THEATERE</td>
          <td><Button>BUY TICKETS</Button></td>
        </tr>
        <tr>
        <td>JUL16</td>
          <td>DETOIT.MI</td>
          <td>DTE ENERGY MUSIC THEATERE</td>
          <td><Button>BUY TICKETS</Button></td>
        </tr>
        <tr>
        <td>JUL16</td>
          <td>DETOIT.MI</td>
          <td>DTE ENERGY MUSIC THEATERE</td>
          <td><Button>BUY TICKETS</Button></td>
        </tr>
      </tbody>
    </Table>

    </div>
  );
};

 