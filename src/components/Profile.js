// في ملف Profile.js

import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMapMarkerAlt,
  faBirthdayCake,
  faEdit,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { selectUserData } from "../rtk/slices/userSlice";
import { Spinner } from "react-bootstrap";

const Profile = () => {
  const userData = useSelector(selectUserData);

  if (!userData) {
    return (
      <div className="mt-3">
        {" "}
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Profile Information</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <FontAwesomeIcon icon={faUser} className="me-2" />
              <strong>Username:</strong> {userData.username}
            </li>
            <li className="list-group-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
              <strong>Address:</strong> {userData.address.city},
              {userData.address.twon},{userData.address.details}
            </li>
            <li className="list-group-item">
              <FontAwesomeIcon icon={faBirthdayCake} className="me-2" />
              <strong>Age:</strong> {userData.age}
            </li>
            <li className="list-group-item">
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              <strong>Phone:</strong> {userData.phone}
            </li>
          </ul>
          <Link
            to={"/Settings"}
            className="btn btn-primary mt-3"
            onClick={() => console.log("Edit button clicked")}
          >
            <FontAwesomeIcon icon={faEdit} className="me-2" />
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
