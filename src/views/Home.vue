<template>
  <section id="home" class="page">
    <section class="home">
      <div class="home_content">
        <div class="home_content-text">
          <h2>MAKE YOUR EDTEC COMPANY MORE PROFITABLE WITH A RELIABLE TECH PARTNER.</h2>
          <a href="#">Get Started</a>
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
      <div class="home_rates">
        <router-link to="/"
          ><img
            src="https://wtt-solutions.com/images/socialNetwork/stars.svg"
            alt="img" /><img
            src="https://wtt-solutions.com/images/socialNetwork/clutch.svg"
            alt="img"
        /></router-link>
        <router-link to="/"
          ><p>TOP RATED PLUS</p>
          <img
            src="https://wtt-solutions.com/images/socialNetwork/upwork.svg"
            alt="img"
        /></router-link>
        <router-link to="/"
          ><img
            src="https://wtt-solutions.com/images/socialNetwork/stars.svg"
            alt="img" /><img
            src="https://wtt-solutions.com/images/socialNetwork/goodfirms.svg"
            alt="img"
        /></router-link>
      </div>
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
      <div class="services_swiper">
          <button @click="prev()" :disabled='prevBtnDisabled'><i class="ai-circle-chevron-left"></i
          ></button>
          <div class="sliders">
              <div :class="slider" v-for="index in services" :key='index' @click='slideTo(index.id)'></div>
          </div>
          <button @click="next()"  :disabled='nextBtnDisabled'><i class="ai-circle-chevron-right"></i
          ></button>
      </div>
    </section>


  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
        translate:0,
        slider:'slider',
        nextBtnDisabled: false,
        prevBtnDisabled: false,
      services: [
        {
          id:0,
          img: "https://wtt-solutions.com/images/home/services/img1.svg",
          title: "STARTUP",
          description:
            "Launch your idea. An agile development process that will break your project development process.",
          link: "See Startup Services",
          href: "startups",
        },
        {
          id:1,
          img: "https://wtt-solutions.com/images/home/services/img2.svg",
          title: "STAFF",
          description:
            "Scale your teams. An agile development process that will break your project development process.",
          link: "More Details",
          href: "about-us",
        },
        {
          id:2,
          img: "https://wtt-solutions.com/images/home/services/img3.svg",
          title: "MIDSIZE",
          description:
            "Develop your solution. An agile development process that will break your project development process.",
          link: "More About Platform Development",
          href: "platform-dev",
        },
        {
          id:3,
          img: "https://wtt-solutions.com/images/home/services/img4.svg",
          title: "ENTERPRISE",
          description:
            "Develop your solution. An agile development process that will break your project development process.",
          link: "Go to Our Enterprise Solutions",
          href: "enterprise-dev",
        },
      ],
    };
  },
  mounted() {
    this.sliderActive(0)
  },
  methods: {
    next(){
      if(this.translate === this.services.length - 1){
        this.translate = 0
      }else{
        this.translate++
      }
      this.sliderActive(this.translate)
    },
    prev(){
      if(this.translate === 0){
        this.translate = this.services.length - 1
      }else{
        this.translate--
      }
      this.sliderActive(this.translate)
    },
    slideTo(index){
      this.translate = index
      this.sliderActive(this.translate)
    },
    sliderActive(index){
      let sliders = document.querySelectorAll(".services .slider")
      let service = document.querySelectorAll('.services ul li')
      for(let i=0;i<this.services.length;i++){
        if(i === index){
          sliders[i].style.background="#1ba94c"
          service[i].style.transform='rotateX(0deg)'
        }else{
          sliders[i].style.background='#777'
          service[i].style.transform='rotateX(25deg)'
        }
      }
      this.slide()
    },
    slide(){
      let el = document.querySelector('.services ul')
      el.style.transform=`translateX(-${this.translate}00%)`
    },
  },
};
</script>
