import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import ipad from '../assets/images/ipad.png';
import demoImage1 from '../assets/images/demo-image-01.jpg';
import demoImage2 from '../assets/images/demo-image-02.jpg';
import bgMaster from '../assets/images/bg-masthead.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              Detaylı Bilgi
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Vedat Ölmez Kimdir?</h2>
            <p className="text-white-50">
            10 Yıldır Konya’a kurumsal firmaların Web Tasarım ve SEO çalışmalarını yapıyorum. Sizde Web Tasarım ve SEO Hizmeti almak istiyorsanız bizi arayın.
            </p>
          </div>
        </div>
        <img src={ipad} className="img-fluid" alt="" />
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Konya Web Tasarım</h4>
              <p className="text-black-50 mb-0">
              Konya Web Tasarım Firması arayanların istediklerini karşılamak için kalite ve profesyonelliğimizden ödün vermeden çalışıyoruz.
              <br></br>
Web Tasarım Ajansı
Firmanız için Profesyonel Web Tasarım hizmeti veriyoruz.
<br></br>
İnternet Sitesi Yapıyoruz
Siz ve firmanız için web sitesi yapıyoruz.
  <br></br>
Özel Tasarım
İstekleriniz doğrultusunda size özel web tasarım yapıyoruz.


              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Konya Web Tasarım</h4>
                  <p className="mb-0 text-white-50">
                  Hazır ve klişe web tasarım tasarım istemeyenler için size ve firmanıza özel web yazılım yapıyoruz. Bu konuda konya web yazılım firamaları arasında daha kaliteli ve hızlı çözümler üretiyoruz.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage2} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Konya SEO Uzmanı</h4>
                  <p className="mb-0 text-white-50">
                  Web sitesi olan müşterilerimizin web sitelerinin Google organik arama sonuçlarında ilk sayfada ilk sıralarda çıkabilmesinin tek yolu SEO’dur. SEO’nun açılımı Search Engine Optimization’dır. Konya SEO Hizmeti ve Konya SEO Uzmanı arayanlara profesyonel olarak SEO Hizmeti sunuyoruz. Bu konuda Konya’nın en SEO hizmetini veriyoruz.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Subscribe />

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
