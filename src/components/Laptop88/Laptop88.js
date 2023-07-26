import React from "react";
import Data from "../Data/Data.json";

const Laptop88 = () => {
  console.log(Data);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex border h-[76px] justify-center items-center bg-black w-full">
        <div className="flex items-center gap-3 mr-3">
          <img
            className="h-[60px] w-[214px]"
            src="https://laptop88.vn/media/banner/logo_logo882022.png"
            alt="#"
          ></img>
          <input
            className="border rounded-full h-[40px] w-[300px] pl-3"
            placeholder="Tìm kiếm ..."
          ></input>
          <button className="text-[14px] text-orange-400">
            Góp ý khiếu nại
          </button>
          <button className="text-[14px] text-orange-400">
            Tra cứu bảo hành
          </button>
          <button className="text-[14px] text-orange-400">
            Liên hệ trực tiếp
          </button>
          <button className="text-[14px] text-orange-400">
            Tư vấn mua hàng
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-[100px]">
          <button className="border rounded-full w-full bg-orange-400">
            Chính sách
          </button>
          <button className="border rounded-full w-full bg-orange-400">
            Tuyển dụng
          </button>
        </div>
      </div>
      <div className="flex h-[38px]  w-[1070px] border">
        <div className=" bg-orange-400 h-full w-[200px] flex items-center justify-center">
          <p className="text-[14px] ">DANH MỤC SẢN PHẨM</p>
        </div>
        <div className="flex justify-center items-center w-[270px] ">
          <button className="text-[13px] text-center hover:text-red-500">
            Zenbook Q409 Gen 12-Màn Đẹp 15.xxx
          </button>
        </div>
        <div className="flex justify-center items-center w-[300px] ">
          <button className="text-[13px] text-center hover:text-red-500">
            Dell Gaming G15 2022 Rẻ Nhất TT chỉ 18 Triệu!
          </button>
        </div>
        <div className="flex justify-center items-center w-[270px] ">
          <button className="text-[13px] text-center hover:text-red-500 ">
            Victus chính hãng RTX 3050-Giá Shock
          </button>
        </div>
      </div>

      <div className="bg-gray-100 w-full flex flex-col justify-center items-center">
        <div className=" w-[1070px]">
          <div className="flex">
            <div className="w-[200px] ">
              <div className="border h-[40px] flex items-center">
                <i class="fa-solid fa-laptop"></i>
                <p>Laptop Mới</p>
                <i className="fa-solid fa-play"></i>
              </div>
              <div className="border h-[40px] flex items-center">
                <p>Laptop Cũ</p>
              </div>
              <div className="border h-[40px] flex items-center">
                <p>Linh kiện PC-Máy tính</p>
              </div>
              <div className="border h-[40px] flex items-center">
                <p>PC-Máy tính để bàn</p>
              </div>
              <div className="border h-[40px] flex items-center">
                <p>Màn hình máy tính</p>
              </div>
              <div className="border h-[40px] flex items-center">
                <p>Bảo hành-Hậu mãi</p>
              </div>
              <div className="border h-[40px] flex items-center">
                <p>Phụ kiện máy tính</p>
              </div>
              <div className="border h-[40px] flex items-center">
                <p>Cho thuê laptop</p>
              </div>
            </div>
            <div>data</div>
          </div>
          <div className="flex gap-1 mt-5 mb-5">
            <img
              className="w-[350px] h-[160px]"
              src="https://laptop88.vn/media/banner/13_Julb1a06db968322d1ea3a6156aa0ba87da.png"
              alt="#"
            ></img>
            <img
              className="w-[350px] h-[160px]"
              src="https://laptop88.vn/media/banner/13_Jul06e54f00fb5120048c904440a854aea1.png"
              alt=""
            ></img>
            <img
              className="w-[350px] h-[160px]"
              src="https://laptop88.vn/media/banner/13_Jul6bfad21b19fff4ba3068733626e4c7cd.png"
              alt=""
            ></img>
          </div>
          <div className="border bg-orange-400 w-full h-[500px] rounded-3xl ">
            <div className="flex h-[90px] ">
              <div className="w-[950px] flex justify-center items-center gap-5">
                <div>
                  <i className="icon_2022 flash"></i>
                  <h3 className="text-4xl font-bold text-white">FLASH SALE</h3>
                </div>
                <div className="flex gap-3">
                  <p className="border bg-black text-white text-[20px] rounded-lg px-3 py-1">
                    1 ngày
                  </p>

                  <p className="border bg-black text-white text-[20px] rounded-lg px-3 py-1">
                    13 giờ
                  </p>
                  <p className="border bg-black text-white text-[20px] rounded-lg px-3 py-1">
                    10 phút
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button className="text-white text-[15px]">XEM TẤT CẢ</button>
              </div>
            </div>
            <div>data</div>
          </div>
          <div className="mt-5">
            <div className="flex ">
              <div>
                <p className="w-[500px] font-semibold text-[17px]">
                  SẢN PHẨM HOT
                </p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <button className="border rounded-2xl h-[36px] w-[60px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Acer
                </button>
                <button className="border rounded-2xl h-[36px] w-[76px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Lenovo
                </button>
                <button className="border rounded-2xl h-[36px] w-[66px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Asus
                </button>
                <button className="border rounded-2xl h-[36px] w-[60px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Dell
                </button>
                <button className="border rounded-2xl h-[36px] w-[86px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Gigabyte
                </button>
                <button className="border rounded-2xl h-[36px] w-[70px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Apple
                </button>
                <button className="text-[13px] hover:text-red-500">
                  Xem tất cả
                </button>
              </div>
            </div>
            <div className="grid grid-cols-5 mt-5 gap-3">
              {Data.body.map((item, index) =>(
                <div key={index} className="border w-[210px] bg-white p-2">
                <div className="w-[190px]">
                  <div>
                    <img
                      src={item.image}
                      alt=""
                    ></img>
                    <p className="text-[13px] font-semibold w-[185px] px-2 line-clamp-2">
                      {item.name}
                    </p>
                  </div>
                  <div className="mt-2">
                    <div>
                      <img
                        src="https://laptop88.vn/template/giaodien_2022/images/sticker-4.png"
                        alt=""
                      ></img>
                    </div>
                    <div className="mt-4 flex">
                      <div className="w-[60px]">
                        <p className="text-[13px]">CPU</p>
                        <p className="text-[13px]">RAM</p>
                        <p className="text-[13px]">Ổ cứng</p>
                        <p className="text-[13px]">Card</p>
                        <p className="text-[13px]">M.Hình</p>
                      </div>
                      <div>
                        <p className="text-[13px]">{item.cpu}</p>
                        <p className="text-[13px]">16GB DDR4</p>
                        <p className="text-[13px]">SSD 512GB NVMe</p>
                        <p className="text-[13px]">Nvidia RTX 3050Ti</p>
                        <p className="text-[13px]">15.6" Full HD 120Hz</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center mt-3">
                    <p className="border rounded-full w-[150px] text-center bg-orange-400 text-white font-bold text-[18px]">19.290.000 đ</p>
                  </div>
                </div>
              </div>
              ))
              }
            </div>
          </div>
          <div className="mt-5">
            <div className="flex ">
              <div>
                <p className="w-[500px] font-semibold text-[17px]">
                  HỌC TẬP-VĂN PHÒNG
                </p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <button className="border rounded-2xl h-[36px] w-[60px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Acer
                </button>
                <button className="border rounded-2xl h-[36px] w-[76px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Lenovo
                </button>
                <button className="border rounded-2xl h-[36px] w-[66px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Asus
                </button>
                <button className="border rounded-2xl h-[36px] w-[60px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Dell
                </button>
                <button className="border rounded-2xl h-[36px] w-[86px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Gigabyte
                </button>
                <button className="border rounded-2xl h-[36px] w-[70px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Apple
                </button>
                <button className="text-[13px] hover:text-red-500">
                  Xem tất cả
                </button>
              </div>
            </div>
            <div>data</div>
          </div>
          <div className="mt-5">
            <div className="flex ">
              <div>
                <p className="w-[500px] font-semibold text-[17px]">
                  ĐỒ HỌA-KỸ THUẬT
                </p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <button className="border rounded-2xl h-[36px] w-[60px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Acer
                </button>
                <button className="border rounded-2xl h-[36px] w-[76px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Lenovo
                </button>
                <button className="border rounded-2xl h-[36px] w-[66px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Asus
                </button>
                <button className="border rounded-2xl h-[36px] w-[60px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Dell
                </button>
                <button className="border rounded-2xl h-[36px] w-[86px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Gigabyte
                </button>
                <button className="border rounded-2xl h-[36px] w-[70px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Apple
                </button>
                <button className="text-[13px] hover:text-red-500">
                  Xem tất cả
                </button>
              </div>
            </div>
            <div>data</div>
          </div>
          <div className="mt-5">
            <div className="flex ">
              <div>
                <p className="w-[500px] font-semibold text-[17px]">
                  LAPTOP GAMING
                </p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <button className="border rounded-2xl h-[36px] w-[60px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Acer
                </button>
                <button className="border rounded-2xl h-[36px] w-[76px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Lenovo
                </button>
                <button className="border rounded-2xl h-[36px] w-[66px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Asus
                </button>
                <button className="border rounded-2xl h-[36px] w-[60px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Dell
                </button>
                <button className="border rounded-2xl h-[36px] w-[86px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Gigabyte
                </button>
                <button className="border rounded-2xl h-[36px] w-[70px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Apple
                </button>
                <button className="text-[13px] hover:text-red-500">
                  Xem tất cả
                </button>
              </div>
            </div>
            <div>data</div>
          </div>
          <div className="mt-5">
            <div className="flex ">
              <div>
                <p className="w-[500px] font-semibold text-[17px]">
                  CAO CẤP-SANG TRỌNG
                </p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <button className="border rounded-2xl h-[36px] w-[60px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Acer
                </button>
                <button className="border rounded-2xl h-[36px] w-[76px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Lenovo
                </button>
                <button className="border rounded-2xl h-[36px] w-[66px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Asus
                </button>
                <button className="border rounded-2xl h-[36px] w-[60px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Dell
                </button>
                <button className="border rounded-2xl h-[36px] w-[86px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Gigabyte
                </button>
                <button className="border rounded-2xl h-[36px] w-[70px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Apple
                </button>
                <button className="text-[13px] hover:text-red-500">
                  Xem tất cả
                </button>
              </div>
            </div>
            <div>data</div>
          </div>
          <div className="mt-5">
            <div className="flex ">
              <div>
                <p className="w-[500px] font-semibold text-[17px]">
                  CASE-PC GIÁ RẺ
                </p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <button className="border rounded-2xl h-[36px] w-[60px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Acer
                </button>
                <button className="border rounded-2xl h-[36px] w-[76px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Lenovo
                </button>
                <button className="border rounded-2xl h-[36px] w-[66px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Asus
                </button>
                <button className="border rounded-2xl h-[36px] w-[60px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Dell
                </button>
                <button className="border rounded-2xl h-[36px] w-[86px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Gigabyte
                </button>
                <button className="border rounded-2xl h-[36px] w-[70px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Apple
                </button>
                <button className="text-[13px] hover:text-red-500">
                  Xem tất cả
                </button>
              </div>
            </div>
            <div>data</div>
          </div>
          <div className="mt-5">
            <div className="flex ">
              <div>
                <p className="w-[500px] font-semibold text-[17px]">PHỤ KIỆN</p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <button className="border rounded-2xl h-[36px] w-[60px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Acer
                </button>
                <button className="border rounded-2xl h-[36px] w-[76px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Lenovo
                </button>
                <button className="border rounded-2xl h-[36px] w-[66px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Asus
                </button>
                <button className="border rounded-2xl h-[36px] w-[60px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Dell
                </button>
                <button className="border rounded-2xl h-[36px] w-[86px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Gigabyte
                </button>
                <button className="border rounded-2xl h-[36px] w-[70px]  bg-gray-200 text-[13px] items-center justify-center flex hover:text-red-500">
                  Apple
                </button>
                <button className="text-[13px] hover:text-red-500">
                  Xem tất cả
                </button>
              </div>
            </div>
            <div>data</div>
          </div>
          <div className="bg-white border h-[420px] pt-10 rounded-3xl mt-5">
            <div className="grid grid-cols-5 w-full px-52 gap-5 ">
              <div className="flex flex-col gap-2">
                <img
                  src="https://laptop88.vn/media/lib/17-06-2022/icon_chuot.png"
                  alt=""
                ></img>
                <button className="text-[14px] hover:text-red-500">
                  Chuột máy tính
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="https://laptop88.vn/media/lib/17-06-2022/icon_banphim.png"
                  alt=""
                ></img>
                <button className="text-[14px] hover:text-red-500">
                  Bàn phím
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="https://laptop88.vn/media/lib/17-06-2022/icon_balo.png"
                  alt=""
                ></img>
                <button className="text-[14px] hover:text-red-500">
                  Balo, túi xách
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="https://laptop88.vn/media/lib/17-06-2022/icon_tainghe.png"
                  alt=""
                ></img>
                <button className="text-[14px] hover:text-red-500">
                  Loa, tai nghe
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="https://laptop88.vn/media/lib/17-06-2022/icon_o_cung.png"
                  alt=""
                ></img>
                <button className="text-[14px] hover:text-red-500">
                  Ổ cứng di động
                </button>
              </div>
            </div>
            <div className="grid grid-cols-5 w-full px-52 gap-5 mt-10">
              <div className="flex flex-col gap-2">
                <img
                  src="https://laptop88.vn/media/lib/17-06-2022/icon_daychuyendoi.png"
                  alt=""
                ></img>
                <button className="text-[14px] hover:text-red-500">
                  Cổng chuyển đổi
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="https://laptop88.vn/media/lib/17-06-2022/icon_bandi.png"
                  alt=""
                ></img>
                <button className="text-[14px] hover:text-red-500">
                  Bàn di chuột
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="https://laptop88.vn/media/lib/17-06-2022/icon_usb.png"
                  alt=""
                ></img>
                <button className="text-[14px] hover:text-red-500">
                  USB flash
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="https://laptop88.vn/media/lib/17-06-2022/icon_keotainhiet.png"
                  alt=""
                ></img>
                <button className="text-[14px] hover:text-red-500">
                  keo dán nhiêt
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="https://laptop88.vn/media/lib/17-06-2022/icon_banquuyen.png"
                  alt=""
                ></img>
                <button className="text-[14px] hover:text-red-500">
                  Phần mềm bản quyền
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-5 mb-5">
            <img
              className="w-[350px] h-[160px]"
              src="https://laptop88.vn/media/banner/14_Feb106fb2e4fa26a8e9108f6868c4a0ab9e.png"
              alt=""
            ></img>
            <img
              className="w-[350px] h-[160px]"
              src="https://laptop88.vn/media/banner/08_Febde78649a3de2f1ff7425b8034e7d03eb.png"
              alt=""
            ></img>
            <img
              className="w-[350px] h-[160px]"
              src="https://laptop88.vn/media/banner/14_Feb50819b9c8940a1887f3f3c1eec9a4818.png"
              alt=""
            ></img>
          </div>
        </div>
        <div className="border w-full h-[90px] bg-gray-300 flex justify-center items-center">
          <div className="w-[1070px] flex">
            <div className="w-[500px] ">
              <p className="font-bold text-[15px]">KÊNH THÔNG TIN</p>
              <p className="text-[13px]">
                Mời bạn nhập email để nhận những thông tin khuyến mại mới nhất
                từ Laptop88
              </p>
            </div>
            <div>
              <input
                className="h-[30px] w-[400px] text-[13px] pl-3"
                placeholder="Nhập email của bạn"
              ></input>
            </div>
          </div>
        </div>
        <div className="w-[1070px] mt-5">
          <div className="flex">
            <div className="w-[265px]">
              <p className="font-semibold text-[16px]">THÔNG TIN CÔNG TY</p>
              <button className="text-[13px]">laptop88.vn</button>
              <p className="text-[13px]">CÔNG TY CỔ PHẦN 88 GROUP VIỆT NAM</p>
              <p className="text-[13px]">
                Số 28/2/49/53 Đức Giang, Phường Thượng Thanh, Quận Long Biên,
                Thành phố Hà Nội, Việt Nam
              </p>
              <p className="text-[13px]">SĐT: 024.7106.9999 - Email:</p>
              <p className="text-[13px]">contact@laptop88.vn</p>
              <p className="text-[13px]">Website: laptop88.vn</p>
              <p className="text-[13px]">
                Mã số doanh nghiệp: 0108529423, cấp lần đầu ngày 28/11/2018
              </p>
              <p className="text-[13px]">Sở KHĐT TP. Hà Nội cấp</p>
            </div>
            <div>
              <p className="font-semibold text-[16px]">VỀ LAPTOP88.VN</p>
              <button className="text-[13px]">Giới thiệu chung</button>
              <p></p>
              <button className="text-[13px]">Tuyển dụng</button>
              <p className="text-[13px]">Chăm sóc khách hàng</p>
              <p className="text-[13px]">* Hotline: 0247.106.9999</p>
              <p className="text-[13px]">* Thời gian: 24/7</p>
              <p className="text-[13px]">* Email: contact@laptop88.vn</p>
              <button className="text-[13px]">Liên hệ</button>
              <img
                className="w-[180px]"
                src="https://laptop88.vn/template/giaodien_2022/images/20150827110756-dathongbao.png"
                alt=""
              ></img>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop88;
