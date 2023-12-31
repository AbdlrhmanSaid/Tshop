import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import { selectUserData } from "../rtk/slices/userSlice";
import { deleteFromCart, clearCart } from "../rtk/slices/cartSlice";
import { addOrder, clearOrders } from "../rtk/slices/orderSlice";

export const Cart = () => {
  const userData = useSelector(selectUserData);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * (999 - 100 + 1) + 100)
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  const handleDoneClick = () => {
    const orderData = {
      orderNumber: randomNum,
      products: cart.map((product) => ({
        id: product.id,
        name: product.name,
        quantity: product.quantity,
        price: product.price,
        image: product.image,
      })),
      totalPrice: totalPrice,
      orderTime: new Date().toLocaleTimeString(),
      orderDate: new Date().toLocaleDateString(),
      username: userData.username,
      address: {
        city: userData.address.city,
        town: userData.address.twon,
        details: userData.address.details,
      },
    };

    dispatch(addOrder(orderData));
    dispatch(clearCart());
    setRandomNum(Math.floor(Math.random() * (999 - 100 + 1) + 100));
    handleModalShow();
  };

  const showCancelAlert = () => {
    Swal.fire({
      title: "Cancel?",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
      }
    });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="z-3 cart-icon">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="total-length w-25 h-25 "> {cart.length}</span>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h5>
              Your Products <FontAwesomeIcon icon={faCartShopping} />
            </h5>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="cart">
            <div className="header">
              <h2 className="mb-3">Products: {cart.length}</h2>
              <h5> Order Number: {randomNum}</h5>
              <Button
                variant="danger"
                className="m-3 mt-0"
                onClick={() => dispatch(clearCart())}
              >
                Clear All
              </Button>
            </div>
            <div className="products h-50 px-3">
              <div className="catch">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product, index) => (
                      <tr key={index} className="my-1">
                        <td>
                          <Image
                            className="min-pic"
                            src={product.image}
                            roundedCircle
                          />
                        </td>
                        <td>
                          <p>{product.price} $</p>
                        </td>
                        <td>
                          <p>{product.quantity}</p>
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => dispatch(deleteFromCart(product))}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="done mb-3 h-25">
              <h3 className="mx-3">Total: {totalPrice.toFixed(2)}</h3>
              {cart.length === 0 ? (
                <Button variant="success" className="mx-3" disabled>
                  <FontAwesomeIcon icon={faCheck} />
                </Button>
              ) : (
                <Button
                  variant="success"
                  className="me-2"
                  onClick={handleModalShow}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </Button>
              )}
              <Button variant="danger" onClick={showCancelAlert}>
                <FontAwesomeIcon icon={faTimes} />
              </Button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header>
          <Modal.Title>
            Order Confirmation <FontAwesomeIcon icon={faCartShopping} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Thanks {userData.username}</h2>
          <p>Order Number: {randomNum}</p>
          <p>
            To:{" "}
            {`${userData.address.city},${userData.address.twon},${userData.address.details}`}
          </p>
          <p>Date: {new Date().toLocaleDateString()}</p>
          <p>Time: {new Date().toLocaleTimeString()}</p>
          <h4>Price: {totalPrice.toFixed(2)}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              handleDoneClick();
              handleModalClose();
              handleClose();
            }}
          >
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
