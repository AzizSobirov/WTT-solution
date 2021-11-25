<template>
    <div id="navbar">
        <div class="logo">
            <img :src="require('../assets/logo.png')" alt="">
            <router-link to='/'><h2>WTT SOLUTIONS</h2></router-link>
        </div>
        <input type="checkbox" class="menu">
        <ul>
            <li>
                <a href="#">Solutions <i class="ai-chevron-down"></i></a>
                <span>
                    <router-link to="/martech">Martech</router-link>
                    <router-link to="/edtech">edtech</router-link>
                    <router-link to="/hrtech">hrtech</router-link>
                </span>
            </li>
            <li>
                <a href="#">EXPERTISE <i class="ai-chevron-down"></i></a>
                <span>
                    <router-link to="/platform-dev">PLATFORM DEVELOPMENT</router-link>
                    <router-link to="/mobile-dev">Mobile development</router-link>
                </span>
            </li>
            <li>
                <a href="#">SERVICES <i class="ai-chevron-down"></i></a>
                <span>
                    <router-link to="/enterprise-dev">ENTERPRISE DEVELOPMENT</router-link>
                    <router-link to="/startups">STARTUPS</router-link>
                    <router-link to="/frontend-dev">FRONTEND DEVELOPMENT</router-link>
                    <router-link to="/backend-dev">BACKEND DEVELOPMENT</router-link>
                </span>
            </li>
            <li><router-link to="/our-work">Our Work</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/blog">Blog </router-link></li>
            <li><router-link to="/get-touch">Get in touch </router-link></li>
        </ul>
    </div>
</template>