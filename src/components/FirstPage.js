import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "react-bootstrap/Image";
import { fetchProducts } from "../rtk/slices/productSlice";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function FirstPage() {
  const { productId } = useParams();
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await dispatch(fetchProducts());
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <>
      {loading ? (
        <div className="spinners d-flex justify-content-center">
          <Spinner animation="border m-3" variant="primary" />
          <Spinner animation="border m-3" variant="primary" />
          <Spinner animation="border m-3" variant="primary" />
        </div>
      ) : (
        <>
          <h1>Welcome to Our Online Store</h1>
          <p>
            We offer a wide range of products for both men and women, including
            clothing, jewelry, and electronics.
          </p>
          <Row>
            <Col>
              <h2>Our Product Categories:</h2>
              <ListGroup>
                <ListGroup.Item>Men's Clothing</ListGroup.Item>
                <ListGroup.Item>Women's Clothing</ListGroup.Item>
                <ListGroup.Item>Jewelry</ListGroup.Item>
                <ListGroup.Item>Electronics</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <h2>Contact Us:</h2>
              <p>
                If you have any questions or need assistance, feel free to
                contact us:
              </p>
              <address>
                <p>
                  Email: <a href="mailto:info@example.com">info@example.com</a>
                </p>
                <p>Phone: +1 (123) 456-7890</p>
                <p>Address: 123 Main Street, City, Country</p>
              </address>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="my-3">
                <h2>See More?</h2>
                <Link to="/Prducts">
                  <Button variant="primary">Click Here</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}

export default FirstPage;
