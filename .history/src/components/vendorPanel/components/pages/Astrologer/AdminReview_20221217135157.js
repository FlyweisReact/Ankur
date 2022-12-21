
import React, { useCallback, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import HOC from "../../layout/HOC";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import { Container, Table, Modal, Form, Button } from "react-bootstrap";

const AdminReview = () => {
  return (
    <div>Review</div>
  )
}

export default HOC(AdminReview)