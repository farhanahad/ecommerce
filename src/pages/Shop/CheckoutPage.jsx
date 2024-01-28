import React, { useState } from "react";
import "../../components/modal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useLocation, useNavigate } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";
const CheckoutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa"); // Initial active tab

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // order confirmation and redirect to home page
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleOrderConfirm = () => {
    alert("Your order placed successfully!");
    localStorage.removeItem("cart");
    navigate(from, { replace: true });
  };

  return (
    <div className="modalCard">
      <ReactWhatsapp
        number="+8801521218490"
        class="btn btn-outline-dark"
        message="I am interested"
      >
        WhatsApp Inquiry
      </ReactWhatsapp>
    </div>
  );
};

export default CheckoutPage;
