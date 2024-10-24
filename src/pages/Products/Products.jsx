import "./Products.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Products({ products, carts, setCarts }) {
  return (
    <div className="products-container">
      <div className="products-items-container">
        {products.map((product) => {
          return (
            <Card className="product-card" key={product.id}>
              <Card.Img variant="top" src={product.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  <b>${product.price.toFixed(2)}</b>
                </Card.Text>

                {carts.find((cart) => cart.id === product.id) ? (
                  <button className="btn btn-secondary">Added</button>
                  // <span className="badge bg-danger">Added</span>
                ) : (
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      setCarts([...carts, product]);
                    }}
                  >
                    Add to cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
