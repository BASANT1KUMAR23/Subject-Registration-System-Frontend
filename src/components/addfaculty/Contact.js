import React from "react";
import "./contact3.css";
import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
const Contact = () => {
  return (
    <div className="body">
      <div className="container1">
        <div className="top-bar2">
          <h2>Add Faculty Form</h2>
          <form className="card-main" action=" app">
            <div className="title">
              <h5 className="h1">Faculty details*:</h5>
            </div>
            &nbsp;&nbsp;
            <div>
              Session Year:
              <select className="box1" name="Academic year">
                <option value={-1} selected>
                  -- select Years --
                </option>
                <option value="year">2023-2024</option>
                <option value="year">2022-2023</option>
                <option value="year">2021-2022</option>
                <option value="year">2020-2021</option>
              </select>
              &nbsp;&nbsp; Semester:
              <select className="box1" name="semester">
                <option value={-1} selected>
                  -- Select Class --
                </option>
                <option value="sem">B.Tech CSE Sem 1</option>
                <option value="sem">B.Tech CSE Sem 2</option>
                <option value="sem">B.Tech CSE Sem 3</option>
                <option value="sem">B.Tech CSE Sem 4</option>
                <option value="sem">B.Tech CSE Sem 5</option>
                <option value="sem">B.Tech CSE Sem 6</option>
                <option value="sem">B.Tech CSE Sem 7</option>
                <option value="sem">B.Tech CSE Sem 8</option>
              </select>
              <br />
              <br />
              Practical Types:{" "}
              <select className="box1" name="program">
                <option value={-1} selected>
                  -- Select Subject --
                </option>
                <option value="cse">All</option>
                <option value="civil">Theory</option>
                <option value="ece">Practical</option>
                <option value="eee">Tutorial</option>
              </select>
              <br />
              <br />
              Faculty Name:
              <input
                className="box1"
                type="text"
                name="facname"
                placeholder="Enter Faculty Name"
              />
            </div>
            &nbsp;
            <div>
              <h3>Subject details*:</h3>
            </div>
            <br />
            Subject Name:
            <input
              className="box1"
              type="text"
              name="subjname"
              placeholder="Enter Subject name"
            />
            &nbsp;&nbsp; Course Code:{" "}
            <input
              className="box1"
              type="code"
              name="code"
              placeholder="Enter course Code"
            />
            <br />
            <br />
            Subject Credit:{" "}
            <input
              className="box1"
              type="credit"
              name="credit"
              placeholder="Enter Sub credit"
            />
            <br />
            <br />
            &nbsp;&nbsp;
            <Link className="btn btn-primary" to="/">
              back to Home
            </Link>
            <input className="button" type="submit" Value="Add Faculty" />
            <input className="botton" type="submit" Value="reset" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
