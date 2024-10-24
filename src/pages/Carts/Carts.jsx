import "./Carts.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Carts({ carts, setCarts }) {
  const handleCheckout = () => {
    const confirmed = window.confirm("Do you want to checkout?");
    if (confirmed) {
      setCarts([]); // ลบของใน cart ทั้งหมด
      alert("Checkout completed!");
    }
  };

  return (
    <div className="carts-container">
      <div className="carts-items-container">
        {carts.map((cart) => {
          return (
            <Card className="card" style={{ width: "18rem" }} key={cart.id}>
              <Card.Img variant="top" src={cart.thumbnailUrl} />
              <Card.Body className="card-body">
                <Card.Title>{cart.title}</Card.Title>
                <Card.Text>
                  <b>${cart.price.toFixed(2)}</b>
                </Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    setCarts(carts.filter((c) => c.id !== cart.id));
                  }}
                >
                  Remove from cart
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <h4>
        Item: {carts.length} items - Total - Price: $
        {carts.reduce((prev, cart) => {
          return prev + cart.price;
        }, 0).toFixed(2)}
      </h4>
      <button className="btn btn-primary" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
}

export default Carts;
