const CourseDataJS = [
  {
    id: 1,
    title: "1. Introduction to JavaScript",
    content: `
      <h3>Introduction to JavaScript</h3>
      <p>JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites.</p>
      <pre><code class="language-js">
        function myFunction() {
          document.getElementById("demo").innerHTML = "Hello JavaScript!";
        }
      </code></pre>
    `,
    actionItems: [
      {
        text: "JavaScript Introduction",
        link: "https://www.w3schools.com/js/js_intro.asp",
      },
      {
        text: "Learn JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },
  // More lessons...
];

export default CourseDataJS;
