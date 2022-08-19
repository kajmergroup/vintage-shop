import "./transactions.scss";

const Transactions = ({ data, id }) => {

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
              <span className="content-item">{order._id}</span>
              <span className="content-item">{item.name}</span>
              <span className="content-item">{order.userId}</span>
              <span className="content-item">{order.createdAt}</span>
              <span className="content-item">{item.quantity}</span>
            </div>
            <div className="spc"></div>
          </div>
        ))
      )}
    </div>
  );
};

export default Transactions;
