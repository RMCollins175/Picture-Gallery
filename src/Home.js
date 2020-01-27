import React from "react";
import { NavLink } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css"; // not working

export default function Home() {
  return (
    <div>
      <section id="header" class="jumbotron text-center">
        <h1 class="display-3">Rory Collins</h1>
        <div className="container">
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            accusamus beatae, id dignissimos assumenda facere commodi distinctio
            pariatur, eius iure repellat explicabo! Provident maxime, aliquid
            tempore delectus sit et unde!
          </p>
        </div>
        <NavLink className="nav-link" exact to="/pictures">
          <button className="btn btn-info">Click for More!</button>
        </NavLink>
      </section>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-3">
            <div class="card">
              <img
                src="https://source.unsplash.com/user/rmcollins175/2ZrR9GB6zSk"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">First Pattern</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                <div class="align-items-start">
                  <a href="" class="btn btn-outline-success btn-sm">
                    Download Link
                  </a>
                  <a href="" class="btn btn-outline-danger btn-sm">
                    <i class="far fa-heart"></i>
                    {/* Figure out font awesome stuff */}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-3">
            <div class="card">
              <img
                src="https://source.unsplash.com/user/rmcollins175/OtGgCeARrRc"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">First Pattern</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                <div class="align-items-start">
                  <a href="" class="btn btn-outline-success btn-sm">
                    Download Link
                  </a>
                  <a href="" class="btn btn-outline-danger btn-sm">
                    <i class="far fa-heart"></i>
                    {/* Figure out font awesome stuff */}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-3">
            <div class="card">
              <img
                src="https://source.unsplash.com/user/rmcollins175/-I61V5JDaIE"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">First Pattern</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                <div class="align-items-start">
                  <a href="" class="btn btn-outline-success btn-sm">
                    Download Link
                  </a>
                  <a href="" class="btn btn-outline-danger btn-sm">
                    <i class="far fa-heart"></i>
                    {/* Figure out font awesome stuff */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ADD FOOTER OF SOME KIND
