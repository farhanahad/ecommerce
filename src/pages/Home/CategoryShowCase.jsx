import { useState } from "react";
import { Link } from "react-router-dom";
//import Rating from "../../components/Sidebar/rating";

const title = "Our Products";

const ProductData = [
  {
    //imgUrl: "src/assets/images/categoryTab/01.jpg",
    imgUrl: "https://i.ibb.co/Pmy3mCC/1thermo.jpg",
    cate: "Medical Device",
    title: "Thermometer",
    //author: "assets/images/course/author/01.jpg",
    brand: "Braun Thermoscan",
    price: "৳110.00",
    id: 1,
  },
  {
    imgUrl: "https://i.ibb.co/x8NwdZB/2stethoscope.jpg",
    cate: "Doctors Chamber",
    title: "Stethoscope",
    author: "assets/images/course/author/02.jpg",
    brand: "3M Littmann",
    price: "৳2000.00",
    id: 2,
  },
  {
    imgUrl: "https://i.ibb.co/r04phV6/3bp-mchine.jpg",
    cate: "Medical Device",
    title: "Blood Pressure Machine",
    author: "src/assets/images/categoryTab/brand/apple.png",
    brand: "PROCARE",
    price: "৳2000.00",
    id: 3,
  },
  {
    imgUrl: "https://i.ibb.co/JKhmkxh/hot.jpg",
    cate: "Medical Device",
    title: "Electric Hot Water Bag",
    author: "assets/images/course/author/04.jpg",
    brand: " Procare",
    price: "৳600.00",
    id: 4,
  },
  {
    imgUrl: "https://i.ibb.co/TLqwhgL/can.jpg",
    cate: "O.T Goods",
    title: "IV Cannula",
    author: "assets/images/course/author/05.jpg",
    brand: "Procare",
    price: "৳20.00",
    id: 5,
  },
  {
    imgUrl: "https://i.ibb.co/1ZwpRGv/photo-1567034923558-600a5edab1d1.jpg",
    cate: "O.T Goods",
    title: "Scissors",
    author: "assets/images/course/author/06.jpg",
    brand: "Procare",
    price: "৳120.00",
    id: 6,
  },
  {
    imgUrl: "https://i.ibb.co/JBY6hFs/download-2.jpg",
    cate: "Surge Elastic Room",
    title: "Blood Transfusion Set ",
    author: "assets/images/course/author/01.jpg",
    brand: "Hospitals Store",
    price: "৳199.00",
    id: 7,
  },
  {
    imgUrl: "https://i.ibb.co/85P0n57/istockphoto-547422364-170667a.webp",
    cate: "Surge Textile",
    title: "Bandage",
    author: "assets/images/course/author/02.jpg",
    brand: "Hospitals Store",
    price: "৳199.00",
    id: 8,
  },
];

const CategoryShowCase = () => {
  const [items, setItems] = useState(ProductData);
  const filterItem = (categItem) => {
    const updateItems = ProductData.filter((curElem) => {
      return curElem.cate === categItem;
    });
    setItems(updateItems);
  };
  return (
    <div className="course-section style-3 padding-tb">
      <div className="course-shape one">
        <img src="/src/assets/images/shape-img/icon/01.png" alt="education" />
      </div>
      <div className="course-shape two">
        <img src="/src/assets/images/shape-img/icon/02.png" alt="education" />
      </div>
      <div className="container">
        {/* section header */}
        <div className="section-header">
          <h2 className="title">{title}</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              <li onClick={() => setItems(ProductData)}>All</li>
              <li onClick={() => filterItem("Doctors Chamber")}>
                Doctors Chamber
              </li>
              <li onClick={() => filterItem("Medical Device")}>
                Medical Device
              </li>
              <li onClick={() => filterItem("Surge Elastic Room")}>
                Surge Elastic Room
              </li>
              <li onClick={() => filterItem("Surge Textile")}>
                Surge Textile Materials
              </li>
            </ul>
          </div>
        </div>

        {/* section body */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
            {items.map((elem) => {
              const {
                id,
                imgUrl,
                imgAlt,
                cate,
                title,
                brand,
                authorName,
                price,
              } = elem;
              return (
                <div className="col" key={id}>
                  <div className="course-item style-4">
                    <div className="course-inner">
                      <div className="course-thumb">
                        <img src={imgUrl} alt="" />
                        <div className="course-category">
                          <div className="course-cate">
                            <a href="#">{cate}</a>
                          </div>
                          <div className="course-reiew">{/* <Rating /> */}</div>
                        </div>
                      </div>

                      {/* content  */}
                      <div className="course-content">
                        <Link to="/">
                          <h5>{title}</h5>
                        </Link>
                        <div className="course-footer">
                          <div className="course-author">
                            <Link to="/team-single" className="ca-name">
                              {brand}
                            </Link>
                          </div>
                          <div className="course-price">{price}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowCase;
