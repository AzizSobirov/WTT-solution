<template>
  <section id="home" class="page">
    <section class="home">
      <div class="home_content">
        <div class="home_content-text">
          <h2>
            MAKE YOUR EDTEC COMPANY MORE PROFITABLE WITH A RELIABLE TECH
            PARTNER.
          </h2>
          <router-link to="/" class="btn">Get Started</router-link>
        </div>
        <span>
          <p>
            We make complex solutions for business, as well as integration with
            products from leading global brands. Our solutions are made to make
            your business work better.
          </p>
          <a href="#">Our cases <i class="ai-circle-chevron-right"></i></a>
          <a href="#"
            >Clients about us <i class="ai-circle-chevron-right"></i
          ></a>
        </span>
      </div>
      <div class="home_img">
        <img
          src="https://wtt-solutions.com/_next/image?url=%2Fimages%2Fhome%2FmanDesk.png&w=1200&q=50"
          alt=""
        />
      </div>
      <social-network></social-network>
      <a href="#services" class="home_mouse"></a>
    </section>

    <section class="services" id="services">
      <div class="title">
        <h2>
          LOOKING FOR RELIABLE CUSTOM SOFTWARE <br />
          DEVELOPMENT SERVICES?
        </h2>
      </div>
      <ul>
        <li v-for="service in services" :key="service">
          <img :src="service.img" :alt="service.title" />
          <h2>{{ service.title }}</h2>
          <p>{{ service.description }}</p>
          <router-link :to="service.href"
            ><b>{{ service.link }}</b> <i class="ai-circle-chevron-right"></i
          ></router-link>
        </li>
      </ul>
      <div id="swiper">
        <button @click="servicePrev()" :disabled="prevBtnDisabled">
          <i class="ai-circle-chevron-left"></i>
        </button>
        <div class="sliders">
          <div
            class="slider"
            v-for="index in services"
            :key="index"
            @click="serviceSlideTo(index.id)"
          ></div>
        </div>
        <button @click="serviceNext()" :disabled="nextBtnDisabled">
          <i class="ai-circle-chevron-right"></i>
        </button>
      </div>
    </section>

    <section class="clients">
      <h2>WHAT OUR CLIENTS ARE SAYING</h2>
      <ul>
        <li v-for="client in clients" :key="client">
          <div class="clients_text">
            <img :src="client.img" :alt="client.name" />
            <span>
              <h3>{{ client.name }}</h3>
              <p>{{ client.company }}</p>
              <b>{{ client.hobby }}</b>
            </span>
          </div>
          <p>{{ client.description }}</p>
          <a :href="client.href"
            >View full review <i class="ai-arrow-right"></i
          ></a>
        </li>
      </ul>
      <div class="clients_content">
        <social-network></social-network>
        <div id="swiper">
          <button @click="clientsPrev()">
            <i class="ai-circle-chevron-left"></i>
          </button>
          <div class="sliders">
            <div
              class="slider"
              v-for="index in clients"
              :key="index"
              @click="clientsSlideTo(index.id)"
            ></div>
          </div>
          <button @click="clientsNext()">
            <i class="ai-circle-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>

    <section class="reasons">
      <div class="reasons_text">
        <h2>REASONS TO CHOOSE US</h2>
        <p>
          When it comes to custom development, we can be your ideal software
          development partner. We do our best to ensure customer satisfaction.
        </p>
        <router-link to="/" class="btn">How we work</router-link>
      </div>
      <ul>
        <li v-for="value in reasons" :key="value">
          <img
            src="https://wtt-solutions.com/images/elements/check.svg"
            alt="WTT Solution"
          />
          <p>{{ value }}</p>
        </li>
      </ul>
    </section>

    <section class="study">
      <h2>CASE STUDY</h2>
      <div class="study_content">
        <ul>
          <li>
            <h3>
              Connect with students for live 1-on-1 college insights and tours
            </h3>
            <h4>EXPERTISE</h4>
            <router-link to="/" class="lang">Education</router-link>
          </li>
          <li>
            <h4>TECHNOLOGIES</h4>
            <div class="langs">
              <router-link
                :to="value.href"
                v-for="value in langs"
                :key="value"
                class="lang"
                >{{ value.name }}</router-link
              >
            </div>
          </li>
          <li>
            <router-link to="/" class="btn">Read More</router-link>
            <router-link to="/" class="btn">See all cases</router-link>
          </li>
        </ul>
        <img
          src="https://wtt-solutions.com/_next/image?url=%2Fimages%2Fcases%2Fluk%2FimgDesk.png&w=1200&q=90"
          alt="case study"
        />
      </div>
    </section>

    <section class="pains">
      <h2>BUSINESS PAINS WE’VE SOLVED</h2>
      <p>
        Our experienced analysts, full-stack engineers, digital marketers,
        <br />
        and UI/UX designers team up to guide you through increasing the profit
        of your business.
      </p>
      <ul>
        <li v-for="pain in pains" :key="pain.id">
          <img :src="pain.img" :alt="pain.title" />
          <h3>{{ pain.title }}</h3>
          <p>{{ pain.description }}</p>
        </li>
      </ul>
      <div id="swiper">
        <button @click="painsPrev()">
          <i class="ai-circle-chevron-left"></i>
        </button>
        <div class="sliders">
          <div
            class="slider"
            v-for="index in pains"
            :key="index"
            @click="painsSlideTo(index.id)"
          ></div>
        </div>
        <button @click="painsNext()">
          <i class="ai-circle-chevron-right"></i>
        </button>
      </div>
    </section>

    <contact title="HERE’S HOW YOU CAN GET IN TOUCH"></contact>
    <Footer></Footer>
  </section>
</template>

<script>
import SocialNetwork from "../components/TheSocialNetworks.vue";
import Contact from "../components/TheContact.vue"
import Footer from "../components/TheFooter.vue"
export default {
  name: "Home",
  components: {
    SocialNetwork,Contact,Footer
  },
  data() {
    return {
      serviceSlide: 0,
      clientsSlide: 0,
      painSlide: 0,
      services: [
        {
          id: 0,
          img: "https://wtt-solutions.com/images/home/services/img1.svg",
          title: "STARTUP",
          description:
            "Launch your idea. An agile development process that will break your project development process.",
          link: "See Startup Services",
          href: "startups",
        },
        {
          id: 1,
          img: "https://wtt-solutions.com/images/home/services/img2.svg",
          title: "STAFF",
          description:
            "Scale your teams. An agile development process that will break your project development process.",
          link: "More Details",
          href: "about-us",
        },
        {
          id: 2,
          img: "https://wtt-solutions.com/images/home/services/img3.svg",
          title: "MIDSIZE",
          description:
            "Develop your solution. An agile development process that will break your project development process.",
          link: "More About Platform Development",
          href: "platform-dev",
        },
        {
          id: 3,
          img: "https://wtt-solutions.com/images/home/services/img4.svg",
          title: "ENTERPRISE",
          description:
            "Develop your solution. An agile development process that will break your project development process.",
          link: "Go to Our Enterprise Solutions",
          href: "enterprise-dev",
        },
      ],
      clients: [
        {
          id: 0,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSUS5mOweDblS7Uv3UQgHF9eyxh8aErdq-0A&usqp=CAU",
          name: "MICHAEL KAUFFMAN",
          company: "Werkcrush",
          hobby: "Founder",
          description:
            "WTT Solutions has integrated APIs, improved user experience, and launched a working platform. The updated platform has become more convenient and scalable. Clear communication and a high level of knowledge were the hallmarks of this collaboration. The work of WTT will allow us to launch and scale a business much faster and more efficiently.",
          href: "#",
        },
        {
          id: 1,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvktAM2BkT5a2ctfPgXJTvMPeSOga290bXA&usqp=CAU",
          name: "SEAN KELLY",
          company: "Moreton Blue Software",
          hobby: "Director",
          description:
            "WTT Solutions maintained an excellent communication style throughout the timeline. Our client wanted an app that their clients could use to track their job's progress, costs incurred, communicate back and forth, receive alerts for certain milestones. They offered UX/UI design services to create clickable demonstrations of an application. I highly r...",
          href: "#",
        },
        {
          id: 2,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXsHVt4XlVf7aHjVG0xciDpRFAjhRX84XQA&usqp=CAU",
          name: "BRYAN THOMAS",
          company: "P.E.",
          hobby: "Owner",
          description:
            "The team provided designs for the mobile and desktop versions of the SaaS platform. The UI design exceeded the expectations of the internal team. WTT Solutions as a software development service provider high-quality deliverables in a timely manner. The team is understanding and hard-working.",
          href: "#",
        },
        {
          id: 3,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOAiLpqJZ4W9-Q-GLTTVDj57hsZu2X_ZF4sw&usqp=CAU",
          name: "SHAI ROSENZWEIG",
          company: "Intentify",
          hobby: "CEO",
          description:
            "WTT Solutions offers custom software development services to support creating a SaaS product that automates marketing tasks. This is a transparent team that offers valuable suggestions on how to optimize processes. They deeply understand business requirements, always meet deadlines, and remain highly organized. We recommend WTT-Solutions as an ente...",
          href: "#",
        },
        {
          id: 4,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq4zV_8a3AZRoWTZ3gYfM6IwBd1lT52xD29g&usqp=CAU",
          name: "MELANIE KAMBADUR",
          company: "Podcast Startup",
          hobby: "Co-Founder",
          description:
            "WTT Solutions implemented a pixel-perfect design on time. The project was successful because it was finished on time and up to our (admittedly high) technical standards. It will enable us to test our startup idea.",
          href: "#",
        },
        {
          id: 5,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwdcDPHmEPz96MQWxtHXW0k-Sp2rmR_vc2qA&usqp=CAU",
          name: "COLIN CARDENAZ",
          company: "Lynxit LLC",
          hobby: "Founder and CEO",
          description:
            "The client has been very happy with the result of the project so far. WTT Solutions holds bi-weekly meetings and communicates regularly to ensure both sides are always on the same page. The team's hard-working nature and technical expertise continue to have a major impact on the project. Their work ethic is most impressive.",
          href: "#",
        },
      ],
      reasons: [
        "An agile development process that will break your project development process.",
        "International quality assurance models for testing your application.",
        "International coding standards for app promotion.",
        "Constant correspondence about your application.",
        "Full deployment support.",
        "Full after-sales support.",
      ],
      langs: [
        { name: "React", href: "/" },
        { name: "Redux", href: "/" },
        { name: "Redux-Saga", href: "/" },
        { name: "Express", href: "/" },
        { name: "PostgreSQL", href: "/" },
        { name: "InversifyJS", href: "/" },
        { name: "Braintree", href: "/" },
        { name: "Amazon Web Service", href: "/" },
        { name: "Paypal", href: "/" },
      ],
      pains: [
        {
          id: 0,
          img: "https://wtt-solutions.com/images/home/business/img1.svg",
          title: "ONLINE PRESENCE",
          description:
            "We help startups go online because if you are not on the Internet, you do not exist.",
        },
        {
          id: 1,
          img: "https://wtt-solutions.com/images/home/business/img1.svg",
          title: "ONLINE PRESENCE",
          description:
            "We help startups go online because if you are not on the Internet, you do not exist.",
        },
        {
          id: 2,
          img: "https://wtt-solutions.com/images/home/business/img1.svg",
          title: "ONLINE PRESENCE",
          description:
            "We help startups go online because if you are not on the Internet, you do not exist.",
        },
        {
          id: 3,
          img: "https://wtt-solutions.com/images/home/business/img1.svg",
          title: "ONLINE PRESENCE",
          description:
            "We help startups go online because if you are not on the Internet, you do not exist.",
        },
        {
          id: 4,
          img: "https://wtt-solutions.com/images/home/business/img1.svg",
          title: "ONLINE PRESENCE",
          description:
            "We help startups go online because if you are not on the Internet, you do not exist.",
        },
        {
          id: 5,
          img: "https://wtt-solutions.com/images/home/business/img1.svg",
          title: "ONLINE PRESENCE",
          description:
            "We help startups go online because if you are not on the Internet, you do not exist.",
        },
        {
          id: 6,
          img: "https://wtt-solutions.com/images/home/business/img1.svg",
          title: "ONLINE PRESENCE",
          description:
            "We help startups go online because if you are not on the Internet, you do not exist.",
        },
        {
          id: 7,
          img: "https://wtt-solutions.com/images/home/business/img1.svg",
          title: "ONLINE PRESENCE",
          description:
            "We help startups go online because if you are not on the Internet, you do not exist.",
        },
      ],
    };
  },
  mounted() {
    this.service_sliderActive(0),
      this.clients_sliderActive(0),
      this.pains_sliderActive(0);
  },
  methods: {
    serviceNext() {
      if (this.serviceSlide === this.services.length - 1) {
        this.serviceSlide = 0;
      } else {
        this.serviceSlide++;
      }
      this.service_sliderActive(this.serviceSlide);
    },
    servicePrev() {
      if (this.serviceSlide === 0) {
        this.serviceSlide = this.services.length - 1;
      } else {
        this.serviceSlide--;
      }
      this.service_sliderActive(this.serviceSlide);
    },
    serviceSlideTo(index) {
      this.serviceSlide = index;
      this.service_sliderActive(this.serviceSlide);
    },
    service_sliderActive(index) {
      let sliders = document.querySelectorAll(".services .slider");
      let service = document.querySelectorAll(".services ul li");
      for (let i = 0; i < this.services.length; i++) {
        if (i === index) {
          sliders[i].style.background = "#1ba94c";
          service[i].style.transform = "rotateX(0deg)";
        } else {
          sliders[i].style.background = "#777";
          service[i].style.transform = "rotateX(25deg)";
        }
      }
      this.servicesSlide();
    },
    servicesSlide() {
      let el = document.querySelector(".services ul");
      el.style.transform = `translateX(-${this.serviceSlide}00%)`;
    },

    // clients swiper

    clientsNext() {
      if (window.innerWidth <= "1024") {
        if (this.clientsSlide === this.clients.length - 1) {
          this.clientsSlide = 0;
        } else {
          this.clientsSlide++;
        }
      } else {
        if (this.clientsSlide === this.clients.length - 2) {
          this.clientsSlide = 0;
        } else {
          this.clientsSlide++;
        }
      }

      this.clients_sliderActive(this.clientsSlide);
    },
    clientsPrev() {
      if (window.innerWidth <= "1024") {
        if (this.clientsSlide === 0) {
          this.clientsSlide = this.clients.length - 2;
        } else {
          this.clientsSlide--;
        }
      } else {
        if (this.clientsSlide === 0) {
          this.clientsSlide = this.clients.length - 1;
        } else {
          this.clientsSlide--;
        }
      }

      this.clients_sliderActive(this.clientsSlide);
    },
    clientsSlideTo(index) {
      this.clientsSlide = index;
      this.clients_sliderActive(this.clientsSlide);
    },
    clients_sliderActive(index) {
      let sliders = document.querySelectorAll(".clients .slider");
      let service = document.querySelectorAll(".clients ul li");
      for (let i = 0; i < this.clients.length; i++) {
        if (i === index) {
          sliders[i].style.background = "#1ba94c";
          service[i].style.transform = "scale(1)";
        } else {
          sliders[i].style.background = "#777";
          service[i].style.transform = "scale(0.9)";
        }
      }
      this.clientSlide();
    },
    clientSlide() {
      let el = document.querySelector(".clients ul");
      if (window.innerWidth <= "1024") {
        el.style.transform = `translateX(-${this.clientsSlide + "00"}%)`;
      } else {
        let scrollTo = (this.clientsSlide / 2) * 10;
        el.style.transform = `translateX(-${scrollTo + "0"}%)`;
      }
    },

    // pains swiper
    painsNext() {
      if (this.painSlide === this.pains.length - 1) {
        this.painSlide = 0;
      } else {
        this.painSlide++;
      }
      this.pains_sliderActive(this.painSlide);
    },
    painsPrev() {
      if (this.painSlide === 0) {
        this.painSlide = this.pains.length - 1;
      } else {
        this.painSlide--;
      }
      this.pains_sliderActive(this.painSlide);
    },
    painsSlideTo(index) {
      this.painSlide = index;
      this.pains_sliderActive(this.painSlide);
    },
    pains_sliderActive(index) {
      let sliders = document.querySelectorAll(".pains .slider");
      let el = document.querySelectorAll(".pains ul li");
      for (let i = 0; i < this.pains.length; i++) {
        if (i === index) {
          sliders[i].style.background = "#1ba94c";
          el[i].style.transform = "rotateX(0deg)";
        } else {
          sliders[i].style.background = "#777";
          el[i].style.transform = "rotateX(25deg)";
        }
      }
      this.painsSlide();
    },
    painsSlide() {
      let el = document.querySelector(".pains ul");
      el.style.transform = `translateX(-${this.painSlide}00%)`;
    },
  },
};
</script>
