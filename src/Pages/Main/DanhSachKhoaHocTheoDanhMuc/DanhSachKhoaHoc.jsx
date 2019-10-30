// import React, { Component } from "react";
// import Slider from "react-slick";
// import KhoaHoc from "./KhoaHoc";

// export default class CenterMode extends Component {
//   render() {
//     const settings = {
//       className: "center",
//       infinite: true,
//       centerPadding: "60px",
//       slidesToShow: 4,
//       speed: 500,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     };
//     return (
//       <div className="container mb-5">
//         <h2>{this.props.tenDanhMuc}</h2>
//         <Slider {...settings}>
//           <div>
//             <KhoaHoc/>
//           </div>

//           <div>
//             <KhoaHoc/>
//           </div>

//           <div>
//             <KhoaHoc/>
//           </div>

//           <div>
//             <KhoaHoc/>
//           </div>

//           <div>
//             <KhoaHoc/>
//           </div>

//           <div>
//             <KhoaHoc/>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }