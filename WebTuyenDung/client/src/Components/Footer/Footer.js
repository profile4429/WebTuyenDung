import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer text-center">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Đại học quốc gia Hồ Chí Minh</h4>
              <p className="lead mb-0">
                308 đường Tạ Quang Bửu
                <br />
                Linh Trung, Thủ Đức
              </p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">liên quan</h4>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-facebook-f" />
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="far fa-chart-bar"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-internet-explorer" />
              </a>
            </div>
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">Công nghệ Web và ứng dụng</h4>
              <p className="lead mb-0">
                Giảng viên hướng dẫn: Trần Anh Dũng
                <br />
                Nhóm thực hiện: ...
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright © Your Website 2020</small>
        </div>
      </div>
    </>
  );
}

export default Footer;
