<template>
  <section id="contact">
    <div class="content">
      <img
        src="https://wtt-solutions.com/_next/image?url=%2Fimages%2FCTA%2FceoDesk.png&w=1200&q=20"
        alt="wtt solution"
      />
      <span>
        <b>Hi, I'm serge!</b>
        <p>
          CEO & Co-founder at WTT Solutions Do you have a new project? or want
          to say "hello"...
        </p>
      </span>
    </div>
    <form id="contact_form">
      <h3>{{ title }}</h3>
      <ul>
        <li>
          <label for="form_input">Name <b>*</b></label>
          <input
            type="text"
            id="form_input"
            placeholder="How can we call you"
          />
        </li>
        <li>
          <label for="form_email">Email <b>*</b></label>
          <input
            type="text"
            id="form_email"
            placeholder="We use it to contact you"
          />
        </li>
        <li>
          <label for="form_text">I want to speak about</label>
          <textarea
            id="form_text"
            placeholder="Tell us briefly about your project, or ask us anything"
          ></textarea>
        </li>
        <li>
          <router-link to="/" class="btn">Submit Form</router-link>
        </li>
      </ul>
    </form>
  </section>
</template>
<script>
export default {
  name: "Contact",
  props: {
    title: String,
  },
};
</script>