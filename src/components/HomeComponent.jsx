/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/HomeComponent.css";
import Logo from "../asset/allxone.jpg";
import { FiLogOut } from "react-icons/fi";
import { Logout } from "../api/AuthAPI";

export default function HomeComponent() {
  return (
    <div>
      <div className="container" id="en">
        {/* <!-- navbar --> */}
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={Logo} width="135" height="40" alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <input type="checkbox" name="toggle-menu" id="toggle-menu" />
              <label type="button" className="toggle-btn" htmlFor="toggle-menu">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </label>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto ms-auto mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link text-white active"
                    aria-current="page"
                    href="#"
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    INTRO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    CONTACT
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav me-2 d-flex flex-row">
                <li className="nav-item me-3 me-lg-0">
                  <FiLogOut
                    color="white"
                    title="LOGOUT"
                    onClick={Logout}
                    style={{ cursor: "pointer" }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container p-2" style={{ marginTop: "100px" }}>
          <h3 className="text-center text-uppercase">
            Transcribe Image File to Sheet Music
          </h3>
          <p className="text-center fs-5">
            Upload your file or Import URL Link
          </p>
          <div
            className="text-center p-5"
            style={{ backgroundColor: "rgb(33, 32, 32)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12 htmlForm-group files color">
                  <input
                    type="file"
                    className="htmlForm-control"
                    id="fileUpload"
                  />
                  <p id="file-result" style={{ color: "red" }}></p>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="input-group">
                <span className="input-group-text" id="basic-addon3">
                  Getting URL
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="fileUrl"
                  aria-describedby="basic-addon3 basic-addon4"
                />
              </div>
            </div>
            <button
              // onClick={btnConvertClick()"}
              id="btn-convert"
              className="btn btn-light mt-3"
              type="button"
            >
              CONVERT!!!
            </button>
          </div>
          <div id="loading" className="mt-1"></div>
          <div className="row">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                id="btn-play"
                // onClick={btnPlayMusic}
                className="btn btn-dark"
              >
                Play Music
              </button>
              <button
                className="btn btn-dark"
                //onClick={btnDownloadFile}
                id="btn-download"
              >
                Download
              </button>
            </div>
          </div>
        </div>
        <footer className="" style={{ marginTop: "120px" }}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-lg-3">
                <div className="single-box">
                  <img src={Logo} width="135" height="40" alt="" />
                  <p>Allxone </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-3">
                <div className="single-box">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-3">
                <div className="single-box">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <a href="#">IT Consultant Services</a>
                    </li>
                    <li>
                      <a href="#">IT Recruitment Services</a>
                    </li>
                    <li>
                      <a href="#">Business Application</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-lg-3 col-sm-6">
                <div className="single-box">
                  <h2>Contact</h2>
                  <p>Telephone: 0523734193</p>
                  <p>Email: info@allxone.vn</p>
                  <p>
                    Address: 10A Tran Quang Dieu, ST, W.14, D.3, HCMC, Viet Nam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
