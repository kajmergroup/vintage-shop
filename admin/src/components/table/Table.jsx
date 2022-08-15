import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = ({ data }) => {

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) =>
            data.products.map((product) => (
              <TableRow key={data._id}>
                <TableCell className="tableCell">{data._id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img
                      src="https://avatarfiles.alphacoders.com/191/191640.png"
                      alt=""
                      className="image"
                    />
                    {product.name}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{data.userId}</TableCell>
                <TableCell className="tableCell">{data.createdAt}</TableCell>
                <TableCell className="tableCell">{product.price}</TableCell>
                <TableCell className="tableCell">Cash</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${data.status}`}>{data.status}</span>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
