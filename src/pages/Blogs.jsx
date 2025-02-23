import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import NoImg from "../assets/img/Image_not_available.png";

export default function Blogs() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let url =
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2d78eee2b7844af89801da90c6a8e9ff";
      let response = await fetch(url);
      let data = await response.json();
      setArticles(data.articles);
      //   try {
      //     let response = await fetch(url);
      //     let data = await response.json();
      //     setArticles(data.articles);
      //   } catch (error) {
      //     console.error("Error fetching data: ", error);
      //   }
    };
    fetchData();
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    // Options to format the date and time
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    // Format the date and return it in the desired format
    return date.toLocaleString("en-IN", options);
  };

  return (
    <>
      <section className="py-5">
        <Container>
          <Row>
            {/* {articles.length > 0 ? (
              articles.map((article, index) => (
                <Col sm={12} md={6} lg={3} key={index}>
                  <Card>
                    <Card.Img variant="top" src={article.urlToImage} />
                    <Card.Body>
                      <Card.Title>{article.title}</Card.Title>
                      <Card.Text>{article.description}</Card.Text>
                      <Link variant="primary" to={article.url}>
                        Read More
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p>Loading articles...</p> 
            )} */}

            {articles.map((article, index) => (
              <Col sm={12} md={6} lg={3} key={index}>
                <Card className="mb-4 blogs-card">
                  <Card.Img
                    variant="top"
                    src={article.urlToImage ? article.urlToImage : NoImg}
                  />
                  <Card.Body>
                    <Card.Text>{formatDate(article.publishedAt)}</Card.Text>
                    <Card.Title>
                      {article.title && article.title.length > 60
                        ? article.title.slice(0, 60)
                        : article.title}
                    </Card.Title>
                    <Card.Text>
                      {article.description && article.description.length > 150
                        ? article.description.substring(0, 150) + "..."
                        : article.description}
                    </Card.Text>
                    <Link
                      className="btn btn-primary"
                      to={article.url}
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
