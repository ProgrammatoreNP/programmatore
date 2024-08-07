const CourseCSSData = [
  {
    id: 1,
    title: "1. Introduction to CSS",
    content: `
      <h3>Introduction to CSS</h3>
      <p>CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media.</p>
      <pre><code class="language-css">
        body {
          background-color: lightblue;
        }
        h1 {
          color: navy;
          margin-left: 20px;
        }
      </code></pre>
    `,
    actionItems: [
      {
        text: "CSS Introduction",
        link: "https://www.w3schools.com/css/css_intro.asp",
      },
      {
        text: "Learn CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
  },
  // More lessons...
];

export default CourseCSSData;
