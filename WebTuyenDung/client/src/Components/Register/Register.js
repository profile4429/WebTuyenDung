import React, { useState, useEffect, useRef } from "react";
import AccountService from "../../Services/AccountService";
import "./index.css";
import Message from "../Message/Message";
import { Helmet } from "react-helmet";

function Register(props) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfig: "",
    role: "",
  });

  const [valiRole, setValiRole] = useState(true);
  const [valiPass, setValiPass] = useState(true);
  const [valiem, setValiEm] = useState(true);
  const [valiUs, setValiUs] = useState(true);
  const [valiPassCF, setValiPassCF] = useState(true);

  let timeID = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(timeID);
    };
  }, []);

  const [message, setMessage] = useState(false);
  const [valiEmail, setValiEmail] = useState(true);

  const resetForm = () => {
    setUser({ username: "", password: "", email: "", passwordConfig: "" });
    setValiPass(true);
    setValiEm(true);
    setValiUs(true);
    setValiPassCF(true);
  };

  const onChange = (e) => {
    e.preventDefault();
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const Reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const onSubmit = (e) => {
    const testEmail = new RegExp(Reg).test(user.email);
    window.scrollTo({ top: 0, behavior: "smooth" });
    e.preventDefault();
    if (
      testEmail &&
      user.role !== "" &&
      user.username !== "" &&
      user.username.length + 1 > 3 &&
      user.password !== "" &&
      user.password.length + 1 > 6 &&
      user.passwordConfig === user.password &&
      user.email !== "" &&
      user.passwordConfig !== ""
    ) {
      AccountService.register(user).then((data) => {
        const { message } = data;
        setMessage(message);
        if (!message.msgError) {
          resetForm();
          setValiEmail(true);
          setValiPassCF(true);
          setValiRole(true);
          setValiPass(true);
          setValiUs(true);
          setValiEm(true);
          timeID = setTimeout(() => {
            props.history.push("/login");
          }, 2500);
          setMessage(message);
        }
      });
    } else {
      if (!testEmail) {
        setValiEmail(false);
      } else {
        setValiEmail(true);
      }
      if (user.role === "") {
        setValiRole(false);
      } else {
        setValiRole(true);
      }
      if (user.username === "" || user.username.length + 1 < 3) {
        setValiUs(false);
      } else {
        setValiUs(true);
      }
      if (user.password === "" || user.password.length + 1 < 6) {
        setValiPass(false);
      } else {
        setValiPass(true);
      }
      if (user.passwordConfig === "" || user.passwordConfig !== user.password) {
        setValiPassCF(false);
      } else {
        setValiPassCF(true);
      }
      if (user.email === "") {
        setValiEm(false);
      } else {
        setValiEm(true);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>????ng K??</title>
      </Helmet>
      <section className="page-section my-3 register">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            ????ng K??
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-star" />
            </div>
            <div className="divider-custom-line" />
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              {message ? <Message message={message} /> : null}
              <form
                id="contactForm"
                name="sentMessage"
                noValidate="novalidate"
                onSubmit={onSubmit}
              >
                <div className="control-group">
                  <div className="form-group controls mb-0 pb-2">
                    <p className={valiRole === false ? "onVali" : "offVali"}>
                      <i>Vui l??ng nh???p ch???n lo???i t??i kho???n</i>
                    </p>
                    <select
                      className="form-control"
                      name="role"
                      value={user.role}
                      onChange={onChange}
                    >
                      <option value="" disabled>
                        {" "}
                        -- Ch???n Lo???i T??i Kho???n --
                      </option>
                      <option value="candidate">???ng Vi??n</option>
                      <option value="recruiter">Tuy???n D???ng</option>
                    </select>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>Username</label>
                    <p className={valiUs === false ? "onVali" : "offVali"}>
                      <i>Vui l??ng nh???p username v?? t??? 3 k?? t??? tr??? l??n</i>
                    </p>
                    <input
                      className="form-control"
                      name="username"
                      type="text"
                      placeholder="User Name"
                      autoFocus={true}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>E-mail</label>
                    <p className={!valiem || !valiEmail ? "onVali" : "offVali"}>
                      <i>Vui l??ng nh???p email v?? h???p l???</i>
                    </p>
                    <input
                      name="email"
                      className="form-control"
                      onChange={onChange}
                      placeholder="E-Mail"
                      type="email"
                    />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>M???t Kh???u</label>
                    <p className={valiPass === false ? "onVali" : "offVali"}>
                      <i>Vui l??ng nh???p m???t kh???u v?? t??? 6 k?? t??? tr??? l??n</i>
                    </p>
                    <input
                      className="form-control"
                      name="password"
                      type="password"
                      onChange={onChange}
                      placeholder="M???t Kh???u"
                    />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                    <label>M???t Kh???u</label>
                    <p className={valiPassCF === false ? "onVali" : "offVali"}>
                      <i>
                        Vui l??ng nh???p l???i m???t kh???u v?? kh??p v???i m???t kh???u tr??n
                      </i>
                    </p>
                    <input
                      className="form-control"
                      name="passwordConfig"
                      type="password"
                      onChange={onChange}
                      placeholder="Nh???p L???i M???t Kh???u"
                    />
                  </div>
                </div>
                <br />
                <div id="success" />
                <div className="form-group">
                  <button
                    className="btn btn-primary btn-xl"
                    id="sendMessageButton"
                    type="submit"
                  >
                    ????ng K??
                  </button>
                </div>
                <div className="form-group">
                  <p className="text-register">
                    B???n ???? c?? t??i kho???n <a href="/login">????ng Nh???p</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Register;
