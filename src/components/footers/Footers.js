import React from "react";
import { GoLocation, GoArrowLeft } from "react-icons/go";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import "./footer.css";
const Footers = () => {
  return (
    <>
      <div className="bgcolor text-light">
        <div className="container  text-md-end ">
          <div className="row">
            <div className="col-md-4 col-lg-3 col-xl-3 mb-md-0 mb-4">
              <h6 className="text-light my-4">تماس با ما</h6>
              <p className="h5"> شهر زنجان</p>
              <GoLocation /> <span>خیابان شهرداری ساختمان 7</span>
              <p className="h5 mt-4"> شهر تهران</p>
              <GoLocation /> <span>خیابان شهرداری ساختمان 7</span>
              <p className="mt-4 text-success"> 123456789 (+98)</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
              <h6 className="text-light my-4 ">منابع مهم ما</h6>
              <p>میدان فروش کالا</p>
              <p>مستندات</p>
              <p>مشتریان</p>
              <p>فرصت های شغلی</p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto ">
              <h6 className="text-light my-4">لینک های میانبر </h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  درباره ما
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  خدمات ما
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  دریافت نقل و قول
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  محصولات
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 ">
              <h6 className="text-light my-4">خبرنامه</h6>
              <div></div>
              <form action="">
                <div class="row d-flex justify-content-center">
                  <div class="col-auto">
                    <p class="pt-2">
                      <strong>
                        ثبت نام برای دریافت پیشنهادات ویژه ,آموزش , اخبار و به
                        روز رسانی ها.
                      </strong>
                    </p>
                  </div>

                  <div class="col-md-5 col-12">
                    <div class="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="form5Example21"
                        class="form-control rounded-pill"
                        placeholder="ایمیل شما"
                      />
                    </div>
                  </div>

                  <div class="col-auto">
                    <button
                      type="submit"
                      class="btn btn-success mb-4 rounded-circle"
                    >
                      <GoArrowLeft />
                    </button>
                  </div>
                  <div className="d-flex justify-content-around h5">
                    <AiFillFacebook />
                    <AiFillInstagram />
                    <AiFillTwitterSquare />
                    <AiFillGithub />
                    <AiFillLinkedin />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="underFooter">
          <div class=" p-3 text-light justify-content-between d-flex container ">
            <p> 1400کلیه حقوق متعلق به رشدانا است . طراحی توسط مهران وجدانی </p>
            <p className="text-uppercase">roshdana</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footers;
