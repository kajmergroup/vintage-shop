import "./productdatatable.scss";
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from "@mui/x-data-grid";
import { productColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import  axios  from "axios";

const useStyles = makeStyles({
  root: {
      '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
          outline: 'none',
      },
  }
});

const ProductdataTable = () => {
  const [data, setData] = useState([]);
  const classes = useStyles();
  
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
 
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        
        setData(res.data)
      } catch (err) {}
    };
    getProducts();
  },[]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
             <Link to={`/products/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Product
        <Link to="/products/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className={classes.root}
        rows={data}
        columns={productColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        rowHeight={122.4}
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default ProductdataTable;
