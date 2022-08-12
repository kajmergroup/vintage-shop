import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    categories: "",
    price: "",
    inStock: "",
    size: [],
    color: [],
  });


  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      product.img = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("http://localhost:5000/api/products", product);
    } catch (err) {}
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="wrapper">
          <div className="bottom">
            <div className="left">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <div className="right">
              <form onSubmit={handleSubmit}>
                <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>

                {inputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input
                      onChange={handleChange}
                      type={input.type}
                      placeholder={input.placeholder}
                      name={input.name}
                    />
                  </div>
                ))}
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
