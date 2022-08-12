export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "location",
    headerName: "Location",
    width: 230,
  },


  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
]; 
const PF = "http://localhost:5000/images/"
export const productColumns = [
  {
    field: "product",
    headerName: "Product",
    width: 400,
    renderCell: (params) => {
      return (
        <div className="productWithImg">
          <img className="productImg" src={ PF + params.row.img}
           alt="avatar" />
          {params.row.title}
        </div>
      );
    },
  },
  {
    field: "desc",
    headerName: "Description",
    width: 300,
    colSpan: 1,
    renderCell: (params) => {
      return (
        <div className="desc">
          {params.row.desc}
        </div>
      )
    }
   
  },
  {
    field: "categories",
    headerName: "Categories",
    width: 200,
    headerAlign:"center",
    renderCell: (params) => {
      return (
        <div className="categories">
          <span>{params.row.categories}</span>
        </div>
      )
    }
  },
  {
    field: "price",
    headerName: "Price",
    width: 200,
    headerAlign:"center",
    renderCell: (params) => {
      return (
        <div className="categories">
          <span>{params.row.price}</span>
        </div>
      )
    }
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 200,
    headerAlign:"center",
    renderCell: (params) => {
      return (
        <div className="categories">
          <span>{params.row.quantity}</span>
        </div>
      )
    }
  },
];


//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    location:"İzmir",
    email: "1snow@gmail.com",
    status: "active",
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];
export const productRows = [
  {
    id: 1,
    username: "Jogger Fit Oil Green Şort",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description:"Description",
    quantity:100,
    email: "1snow@gmail.com",
    price: 35,
  },
  {
    id: 2,
    username: "TOS Red Zebra Premium Gömlek ",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description:"Description",
    quantity:100,
    email: "2snow@gmail.com",
    status: "passive",
    price: 42,
  },
  {
    id: 3,
    username: "TOS Purple Leaf Premium Gömlek",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description:"Description",
    quantity:100,
    email: "3snow@gmail.com",
    status: "pending",
    price: 45,
  },
  {
    id: 4,
    username: "Fila Vintage T Shirt",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description:"Description",
    quantity:100,
    email: "4snow@gmail.com",
    status: "active",
    price: 16,
  },
  {
    id: 5,
    username: "Mickey Vintage T Shirt",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description:"Description",
    quantity:100,
    email: "5snow@gmail.com",
    status: "passive",
    price: 22,
  },
  {
    id: 6,
    username: "Cool He-Man American Vintage T Shirt ",
    img: "https://cdn.myikas.com/images/c96b2df0-fbcd-4b1b-8184-2e95b6529078/39d8b0a5-27f9-4ec9-b8a2-54ac7e4449c9/image_1080.webp",
    description:"Description",
    quantity:100,
    email: "6snow@gmail.com",
    status: "active",
    price: 15,
  },
  {
    id: 7,
    username: "Del Bondi Vintage Gömlek",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description:"Description",
    quantity:100,
    email: "7snow@gmail.com",
    status: "passive",
    price: 44,
  },
  {
    id: 8,
    username: "East Lower 90’s Vintage Gömlek",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description:"Description",
    quantity:100,
    email: "8snow@gmail.com",
    status: "active",
    price: 36,
  },
  {
    id: 9,
    username: "Seattle Seahawks Vintage T shirt",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description:"Description",
    quantity:100,
    email: "snow@gmail.com",
    status: "pending",
    price: 65,
  },
  {
    id: 10,
    username: "Dragon 90’s Vintage Gömlek",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description:"Description",
    quantity:100,
    email: "snow@gmail.com",
    status: "active",
    price: 65,
  },
  {
    id: 10,
    username: "Dragon 90’s Vintage Gömlek",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description:"Description",
    quantity:100,
    email: "snow@gmail.com",
    status: "active",
    price: 65,
  },
  {
    id: 10,
    username: "Dragon 90’s Vintage Gömlek",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description:"Description",
    quantity:100,
    email: "snow@gmail.com",
    status: "active",
    price: 65,
  },];

