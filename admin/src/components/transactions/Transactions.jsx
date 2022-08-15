import "./transactions.scss";

const Transactions = ({ data, id }) => {
  const products = data.map((order)=>
  order.products.map(item => item))
  console.log(products)
 

  return (
    <div className="transactions">
      <div className="transactions-header">
        <ul className="transactions-header-list">
          <li className="transactions-header-list-item">
            <span>Tracking ID</span>
          </li>
          <li className="transactions-header-list-item">
            <span>Product</span>
          </li>
          <li className="transactions-header-list-item">
            <span>Customer</span>
          </li>
          <li className="transactions-header-list-item content-data">
            <span>Date</span>
          </li>
          <li className="transactions-header-list-item">
            <span>Quantity</span>
          </li>
        </ul>
        <div className="spc"></div>
      </div>

      {data.map((order) =>
        order.products.map((item) => (
          <div>
            <div className="transactions-content">
              <span>{order._id}</span>
              <span>{item.name}</span>
              <span>{order.userId}</span>
              <span>{order.createdAt}</span>
              <span>{item.quantity}</span>
            </div>
            <div className="spc"></div>
          </div>
        ))
      )}
    </div>
  );
};

export default Transactions;
