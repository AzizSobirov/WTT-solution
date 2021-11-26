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
        <references/>
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
      <div id="swiper">
          <button @click="servicePrev()" :disabled='prevBtnDisabled'><i class="ai-circle-chevron-left"></i
          ></button>
          <div class="sliders">
              <div class="slider" v-for="index in services" :key='index' @click='serviceSlideTo(index.id)'></div>
          </div>
          <button @click="serviceNext()"  :disabled='nextBtnDisabled'><i class="ai-circle-chevron-right"></i
          ></button>
      </div>
    </section>

    <section class="clients">
      <h2>WHAT OUR CLIENTS ARE SAYING</h2>
      <ul>
        <li v-for="client in clients" :key="client">
          <div class="clients_text">
            <img :src="client.img" :alt="client.name">
            <span>
              <h3>{{client.name}}</h3>
              <p>{{client.company}}</p>
              <b>{{client.hobby}}</b>
            </span>
          </div>
          <p>{{client.description}}</p>
          <a :href="client.href">View full review <i class="ai-arrow-right"></i></a>
        </li>
      </ul>
      <div class="clients_content">
        <references/>
        <div id="swiper">
          <button @click="clientsPrev()" ><i class="ai-circle-chevron-left"></i
          ></button>
          <div class="sliders">
              <div class="slider" v-for="index in clients" :key='index.id' @click='clientsSlideTo(index.id)'></div>
          </div>
          <button @click="clientsNext()"><i class="ai-circle-chevron-right"></i
          ></button>
        </div>
      </div>
    </section>

  </section>
</template>

<script>
import references from '../components/TheReferences.vue'
export default {
  name: "Home",
  components: {
    references
  },
  data() {
    return {
        serviceSlide:0,
        clientsSlide:0,
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
      clients:[
        {
          id:0,
          img:'https://wtt-solutions.com/_next/image?url=%2Fimages%2Freviews%2FMichaelKauffman.jpg&w=1200&q=75',
          name:'MICHAEL KAUFFMAN',
          company:'Werkcrush',
          hobby:'Founder',
          description:"WTT Solutions has integrated APIs, improved user experience, and launched a working platform. The updated platform has become more convenient and scalable. Clear communication and a high level of knowledge were the hallmarks of this collaboration. The work of WTT will allow us to launch and scale a business much faster and more efficiently.",
          href:'#'
        },{
          id:1,
          img:'https://wtt-solutions.com/_next/image?url=%2Fimages%2Freviews%2FMichaelKauffman.jpg&w=1200&q=75',
          name:'MICHAEL KAUFFMAN',
          company:'Werkcrush',
          hobby:'Founder',
          description:"WTT Solutions has integrated APIs, improved user experience, and launched a working platform. The updated platform has become more convenient and scalable. Clear communication and a high level of knowledge were the hallmarks of this collaboration. The work of WTT will allow us to launch and scale a business much faster and more efficiently.",
          href:'#'
        },{
          id:2,
          img:'https://wtt-solutions.com/_next/image?url=%2Fimages%2Freviews%2FMichaelKauffman.jpg&w=1200&q=75',
          name:'MICHAEL KAUFFMAN',
          company:'Werkcrush',
          hobby:'Founder',
          description:"WTT Solutions has integrated APIs, improved user experience, and launched a working platform. The updated platform has become more convenient and scalable. Clear communication and a high level of knowledge were the hallmarks of this collaboration. The work of WTT will allow us to launch and scale a business much faster and more efficiently.",
          href:'#'
        },{
          id:3,
          img:'https://wtt-solutions.com/_next/image?url=%2Fimages%2Freviews%2FMichaelKauffman.jpg&w=1200&q=75',
          name:'MICHAEL KAUFFMAN',
          company:'Werkcrush',
          hobby:'Founder',
          description:"WTT Solutions has integrated APIs, improved user experience, and launched a working platform. The updated platform has become more convenient and scalable. Clear communication and a high level of knowledge were the hallmarks of this collaboration. The work of WTT will allow us to launch and scale a business much faster and more efficiently.",
          href:'#'
        },{
          id:4,
          img:'https://wtt-solutions.com/_next/image?url=%2Fimages%2Freviews%2FMichaelKauffman.jpg&w=1200&q=75',
          name:'MICHAEL KAUFFMAN',
          company:'Werkcrush',
          hobby:'Founder',
          description:"WTT Solutions has integrated APIs, improved user experience, and launched a working platform. The updated platform has become more convenient and scalable. Clear communication and a high level of knowledge were the hallmarks of this collaboration. The work of WTT will allow us to launch and scale a business much faster and more efficiently.",
          href:'#'
        },{
          id:5,
          img:'https://wtt-solutions.com/_next/image?url=%2Fimages%2Freviews%2FMichaelKauffman.jpg&w=1200&q=75',
          name:'MICHAEL KAUFFMAN',
          company:'Werkcrush',
          hobby:'Founder',
          description:"WTT Solutions has integrated APIs, improved user experience, and launched a working platform. The updated platform has become more convenient and scalable. Clear communication and a high level of knowledge were the hallmarks of this collaboration. The work of WTT will allow us to launch and scale a business much faster and more efficiently.",
          href:'#'
        }
      ]
    };
  },
  mounted() {
    this.service_sliderActive(0),
    this.clients_sliderActive(0)
  },
  methods: {
    serviceNext(){
      if(this.serviceSlide === this.services.length - 1){
        this.serviceSlide = 0
      }else{
        this.serviceSlide++
      }
      this.service_sliderActive(this.serviceSlide)
    },
    servicePrev(){
      if(this.serviceSlide === 0){
        this.serviceSlide = this.services.length - 1
      }else{
        this.serviceSlide--
      }
      this.service_sliderActive(this.serviceSlide)
    },
    serviceSlideTo(index){
      this.serviceSlide = index
      this.service_sliderActive(this.serviceSlide)
    },
    service_sliderActive(index){
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
      this.servicesSlide()
    },
    servicesSlide(){
      let el = document.querySelector('.services ul')
      el.style.transform=`translateX(-${this.serviceSlide}00%)`
    },

// clients swiper

    clientsNext(){
      if(window.innerWidth <= '1024'){
        if(this.clientsSlide === this.clients.length - 1){
          this.clientsSlide = 0
        }else{
         this.clientsSlide++
        }
      }else{
        if(this.clientsSlide === this.clients.length - 2){
          this.clientsSlide = 0
        }else{
         this.clientsSlide++
        }
      }
      
      this.clients_sliderActive(this.clientsSlide)
    },
    clientsPrev(){
      if(window.innerWidth <= '1024'){
        if(this.clientsSlide === 0){
          this.clientsSlide = this.clients.length - 2
        }else{
          this.clientsSlide--
        }      
      }else{
        if(this.clientsSlide === 0){
          this.clientsSlide = this.clients.length - 1
        }else{
          this.clientsSlide--
        }
      }

      this.clients_sliderActive(this.clientsSlide)
    },
    clientsSlideTo(index){
      this.clientsSlide = index
      this.service_sliderActive(this.clientsSlide)
    },
    clients_sliderActive(index){
      let sliders = document.querySelectorAll(".clients .slider")
      let service = document.querySelectorAll('.clients ul li')
      for(let i=0;i<this.clients.length;i++){
        if(i === index){
          sliders[i].style.background="#1ba94c"
          service[i].style.transform='rotateX(0deg)'
        }else{
          sliders[i].style.background='#777'
          service[i].style.transform='rotateX(25deg)'
        }
      }
      this.clientSlide()
    },
    clientSlide(){
      let el = document.querySelector('.clients ul')
      if(window.innerWidth <= '1024'){
        el.style.transform=`translateX(-${this.clientsSlide+'00'}%)`
      }else{
        let scrollTo = this.clientsSlide / 2 * 10
        el.style.transform=`translateX(-${scrollTo+'0'}%)`
      }
    },
  },
};
</script>
