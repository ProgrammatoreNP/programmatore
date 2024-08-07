// src/data/courseData.js

const courseData = {
  html: [
    {
      id: 1,
      title: "1. Starting with HTML",
      content: `
        <h3>Introduction to HTML</h3>
        <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications. With HTML, you can create your own website.</p>
        <pre><code class="language-html">
          &lt;!DOCTYPE html&gt;
          &lt;html&gt;
          &lt;head&gt;
            &lt;title&gt;Page Title&lt;/title&gt;
          &lt;/head&gt;
          &lt;body&gt;
            &lt;h1&gt;This is a Heading&lt;/h1&gt;
            &lt;p&gt;This is a paragraph.&lt;/p&gt;
          &lt;/body&gt;
          &lt;/html&gt;
        </code></pre>
      `,
      actionItems: [
        { text: "Newsletter for important updates", link: "#" },
        { text: "Follow for exclusive content", link: "#" },
        { text: "Leave a testimonial", link: "#" },
        { text: "Reach your income goals faster & easier", link: "#" },
      ],
    },
    // Add more HTML lessons here
  ],
  css: [
    {
      id: 1,
      title: "1. Introduction to CSS",
      content: `
        <h3>Introduction to CSS</h3>
        <p>CSS (Cascading Style Sheets) is used to style and layout web pages. You can control the color, font, size, spacing, and many other aspects of HTML elements.</p>
        <pre><code class="language-css">
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
          }
          h1 {
            color: #333;
          }
          p {
            color: #666;
          }
        </code></pre>
      `,
      actionItems: [
        { text: "CSS Webinar", link: "https://example.com/css-webinar" },
        { text: "CSS Cheat Sheet", link: "https://example.com/css-cheatsheet" },
        { text: "CSS Resources", link: "https://example.com/css-resources" },
      ],
    },
    // Add more CSS lessons here
  ],
  js: [
    {
      id: 1,
      title: "1. Introduction to JavaScript",
      content: `
        <h3>Introduction to JavaScript</h3>
        <p>JavaScript is a versatile programming language used for creating interactive and dynamic content on web pages.</p>
        <pre><code class="language-js">
          function greet(name) {
            return 'Hello, ' + name + '!';
          }
          console.log(greet('World'));
        </code></pre>
      `,
      actionItems: [
        { text: "JS Webinar", link: "https://example.com/js-webinar" },
        { text: "JS Cheat Sheet", link: "https://example.com/js-cheatsheet" },
        { text: "JS Resources", link: "https://example.com/js-resources" },
      ],
    },
    // Add more JS lessons here
  ],
};

export default courseData;
