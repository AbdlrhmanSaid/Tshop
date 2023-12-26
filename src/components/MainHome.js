import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import { fetchProducts } from "../rtk/slices/productSlice";
import { addToCart } from "../rtk/slices/cartSlice";
import { Cart } from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faLink } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

function MainHome() {
  let { productId } = useParams();

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const handleNext = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % filteredProducts.length
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredProducts.length) % filteredProducts.length
    );
  };

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
          <div className="btns my-3 ms-3">
            <Button
              variant="primary"
              className={`me-1 ${selectedCategory === null ? "active" : ""}`}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {uniqueCategories.map((category, index) => (
              <Button
                key={index}
                variant="primary"
                className={`me-1 ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                  {filteredProducts.map((product, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to={index}
                      className={index === currentImageIndex ? "active" : ""}
                      aria-current={index === currentImageIndex ? "true" : ""}
                      aria-label={`Slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
                <div className="carousel-inner">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${
                        index === currentImageIndex ? "active" : ""
                      }`}
                    >
                      <Card className="text-center">
                        <Card.Img
                          variant="top"
                          src={product.image}
                          alt={`Slide ${index + 1}`}
                        />
                      </Card>
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                  onClick={handlePrev}
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                  onClick={handleNext}
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={4} className="my-3">
            {filteredProducts.map((product) => (
              <Col key={product.id} className="mb-3">
                <Card className="h-100 shadow d-flex justify-content-evenly ">
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      Price: ${product.price} {/* إضافة عرض السعر */}
                    </Card.Text>
                    <div className="btnsAction d-flex justify-content-evenly">
                      <Button
                        variant="primary"
                        onClick={() => dispatch(addToCart(product))}
                      >
                        Add <FontAwesomeIcon icon={faCartPlus} />
                      </Button>
                      <Link to={`/Product/${product.id}`}>
                        <Button variant="success">
                          View <FontAwesomeIcon icon={faLink} />
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
      <Cart />
    </>
  );
}

export default MainHome;
// <Row className="justify-content-center">
//     <Col xs={12} md={8}>
//       <div id="carouselExampleIndicators" className="carousel slide">
//         <div className="carousel-indicators">
//           {filteredProducts.map((product, index) => (
//             <button
//               key={index}
//               type="button"
//               data-bs-target="#carouselExampleIndicators"
//               data-bs-slide-to={index}
//               className={index === currentImageIndex ? "active" : ""}
//               aria-current={index === currentImageIndex ? "true" : ""}
//               aria-label={`Slide ${index + 1}`}
//             ></button>
//           ))}
//         </div>
//         <div className="carousel-inner">
//           {filteredProducts.map((product, index) => (
//             <div
//               key={index}
//               className={`carousel-item ${
//                 index === currentImageIndex ? "active" : ""
//               }`}
//             >
//               <Image
//                 src={product.image}
//                 className="d-block w-100"
//                 alt={`Slide ${index + 1}`}
//                 style={{ maxWidth: "100%", height: "auto" }}
//               />
//             </div>
//           ))}
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleIndicators"
//           data-bs-slide="prev"
//           onClick={handlePrev}
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleIndicators"
//           data-bs-slide="next"
//           onClick={handleNext}
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </Col>
//   </Row>
