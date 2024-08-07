// src/data/courseData.js

const CourseDataHTML = {
  html: [
    {
      id: 1,
      title: "1. Introduction to HTML",
      content: `
        <h3>Introduction to HTML</h3>
        <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a webpage and consists of a series of elements that define different parts of the content.</p>
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
        { text: "HTML Introduction Video", link: "#" },
        {
          text: "HTML Documentation",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
      ],
    },
    {
      id: 2,
      title: "2. HTML Tags and Elements",
      content: `
        <h3>HTML Tags and Elements</h3>
        <p>HTML is made up of tags and elements. Tags are used to mark up the start and end of elements, which are the building blocks of HTML documents.</p>
        <pre><code class="language-html">
          &lt;h1&gt;This is a heading&lt;/h1&gt;
          &lt;p&gt;This is a paragraph.&lt;/p&gt;
          &lt;a href="https://example.com"&gt;This is a link&lt;/a&gt;
        </code></pre>
      `,
      actionItems: [
        {
          text: "HTML Tags Overview",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
        },
        {
          text: "HTML Elements Reference",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
        },
      ],
    },
    {
      id: 3,
      title: "3. HTML Attributes",
      content: `
        <h3>HTML Attributes</h3>
        <p>Attributes provide additional information about HTML elements. They are always included in the opening tag of an element and usually come in name/value pairs like name="value".</p>
        <pre><code class="language-html">
          &lt;a href="https://example.com"&gt;This is a link&lt;/a&gt;
          &lt;img src="image.jpg" alt="Description of image"&gt;
        </code></pre>
      `,
      actionItems: [
        {
          text: "HTML Attributes Guide",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes",
        },
        {
          text: "Common HTML Attributes",
          link: "https://www.w3schools.com/html/html_attributes.asp",
        },
      ],
    },
    {
      id: 4,
      title: "4. HTML Headings",
      content: `
        <h3>HTML Headings</h3>
        <p>Headings are used to define the headings of a document or section. There are six levels of headings in HTML, from &lt;h1&gt; to &lt;h6&gt;.</p>
        <pre><code class="language-html">
          &lt;h1&gt;Heading 1&lt;/h1&gt;
          &lt;h2&gt;Heading 2&lt;/h2&gt;
          &lt;h3&gt;Heading 3&lt;/h3&gt;
          &lt;h4&gt;Heading 4&lt;/h4&gt;
          &lt;h5&gt;Heading 5&lt;/h5&gt;
          &lt;h6&gt;Heading 6&lt;/h6&gt;
        </code></pre>
      `,
      actionItems: [
        {
          text: "HTML Headings Reference",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements",
        },
        {
          text: "Using HTML Headings",
          link: "https://www.w3schools.com/html/html_headings.asp",
        },
      ],
    },
    {
      id: 5,
      title: "5. HTML Paragraphs",
      content: `
        <h3>HTML Paragraphs</h3>
        <p>Paragraphs are used to define blocks of text. They are represented by the &lt;p&gt; tag.</p>
        <pre><code class="language-html">
          &lt;p&gt;This is a paragraph.&lt;/p&gt;
          &lt;p&gt;This is another paragraph.&lt;/p&gt;
        </code></pre>
      `,
      actionItems: [
        {
          text: "HTML Paragraphs Reference",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p",
        },
        {
          text: "Creating HTML Paragraphs",
          link: "https://www.w3schools.com/html/html_paragraphs.asp",
        },
      ],
    },
    {
      id: 6,
      title: "6. HTML Links",
      content: `
        <h3>HTML Links</h3>
        <p>Links are used to navigate from one page to another. They are created using the &lt;a&gt; tag, with the href attribute specifying the URL of the page the link goes to.</p>
        <pre><code class="language-html">
          &lt;a href="https://example.com"&gt;Visit Example.com&lt;/a&gt;
        </code></pre>
      `,
      actionItems: [
        {
          text: "HTML Links Guide",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",
        },
        {
          text: "HTML Links Tutorial",
          link: "https://www.w3schools.com/html/html_links.asp",
        },
      ],
    },
    {
      id: 7,
      title: "7. HTML Images",
      content: `
        <h3>HTML Images</h3>
        <p>Images are embedded in web pages using the &lt;img&gt; tag. The src attribute specifies the path to the image, and the alt attribute provides an alternative text for the image.</p>
        <pre><code class="language-html">
          &lt;img src="image.jpg" alt="Description of image"&gt;
        </code></pre>
      `,
      actionItems: [
        {
          text: "HTML Images Reference",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img",
        },
        {
          text: "Inserting Images in HTML",
          link: "https://www.w3schools.com/html/html_images.asp",
        },
      ],
    },
    {
      id: 8,
      title: "8. HTML Lists",
      content: `
        <h3>HTML Lists</h3>
        <p>There are two types of lists in HTML: ordered lists (&lt;ol&gt;) and unordered lists (&lt;ul&gt;). Each list item is defined with the &lt;li&gt; tag.</p>
        <pre><code class="language-html">
          &lt;ul&gt;
            &lt;li&gt;Item 1&lt;/li&gt;
            &lt;li&gt;Item 2&lt;/li&gt;
            &lt;li&gt;Item 3&lt;/li&gt;
          &lt;/ul&gt;

          &lt;ol&gt;
            &lt;li&gt;First item&lt;/li&gt;
            &lt;li&gt;Second item&lt;/li&gt;
            &lt;li&gt;Third item&lt;/li&gt;
          &lt;/ol&gt;
        </code></pre>
      `,
      actionItems: [
        {
          text: "HTML Lists Guide",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul",
        },
        {
          text: "Creating HTML Lists",
          link: "https://www.w3schools.com/html/html_lists.asp",
        },
      ],
    },
    {
      id: 9,
      title: "9. HTML Tables",
      content: `
        <h3>HTML Tables</h3>
        <p>Tables are used to display data in a tabular format. A table is defined using the &lt;table&gt; tag, with rows defined by &lt;tr&gt; and columns defined by &lt;td&gt;. Headers are defined by &lt;th&gt;.</p>
        <pre><code class="language-html">
          &lt;table&gt;
            &lt;tr&gt;
              &lt;th&gt;Name&lt;/th&gt;
              &lt;th&gt;Age&lt;/th&gt;
            &lt;/tr&gt;
            &lt;tr&gt;
              &lt;td&gt;John&lt;/td&gt;
              &lt;td&gt;30&lt;/td&gt;
            &lt;/tr&gt;
            &lt;tr&gt;
              &lt;td&gt;Jane&lt;/td&gt;
              &lt;td&gt;25&lt;/td&gt;
            &lt;/tr&gt;
          &lt;/table&gt;
        </code></pre>
      `,
      actionItems: [
        {
          text: "HTML Tables Reference",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table",
        },
        {
          text: "Creating HTML Tables",
          link: "https://www.w3schools.com/html/html_tables.asp",
        },
      ],
    },
    {
      id: 10,
      title: "10. HTML Forms",
      content: `
        <h3>HTML Forms</h3>
        <p>Forms are used to collect user input. A form is defined using the &lt;form&gt; tag. Input fields are defined using various &lt;input&gt; types, &lt;textarea&gt;, and &lt;select&gt; tags.</p>
        <pre><code class="language-html">
          &lt;form&gt;
            &lt;label for="name"&gt;Name:&lt;/label&gt;
            &lt;input type="text" id="name" name="name"&gt;&lt;br&gt;
            &lt;label for="email"&gt;Email:&lt;/label&gt;
            &lt;input type="email" id="email" name="email"&gt;&lt;br&gt;
            &lt;input type="submit" value="Submit"&gt;
          &lt;/form&gt;
        </code></pre>
      `,
      actionItems: [
        {
          text: "HTML Forms Guide",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
        },
        {
          text: "Creating HTML Forms",
          link: "https://www.w3schools.com/html/html_forms.asp",
        },
      ],
    },
    {
      id: 11,
      title: "11. HTML Semantic Elements",
      content: `
        <h3>HTML Semantic Elements</h3>
        <p>Semantic elements clearly describe their meaning in a human- and machine-readable way. Examples include &lt;article&gt;, &lt;section&gt;, &lt;nav&gt;, &lt;header&gt;, &lt;footer&gt;, and &lt;aside&gt;.</p>
        <pre><code class="language-html">
          &lt;article&gt;
            &lt;h2&gt;Article Heading&lt;/h2&gt;
            &lt;p&gt;Article content...&lt;/p&gt;
          &lt;/article&gt;

          &lt;nav&gt;
            &lt;ul&gt;
              &lt;li&gt;&lt;a href="#home"&gt;Home&lt;/a&gt;&lt;/li&gt;
              &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
          &lt;/nav&gt;
        </code></pre>
      `,
      actionItems: [
        {
          text: "HTML Semantic Elements Guide",
          link: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html",
        },
        {
          text: "Using Semantic Elements",
          link: "https://www.w3schools.com/html/html5_semantic_elements.asp",
        },
      ],
    },
    {
      id: 12,
      title: "12. HTML5 New Elements",
      content: `
        <h3>HTML5 New Elements</h3>
        <p>HTML5 introduced several new elements and attributes that provide more flexibility and power. Examples include &lt;video&gt;, &lt;audio&gt;, &lt;canvas&gt;, and &lt;progress&gt;.</p>
        <pre><code class="language-html">
          &lt;video controls&gt;
            &lt;source src="movie.mp4" type="video/mp4"&gt;
            Your browser does not support the video tag.
          &lt;/video&gt;

          &lt;canvas id="myCanvas" width="200" height="100"&gt;
            Your browser does not support the canvas tag.
          &lt;/canvas&gt;
        </code></pre>
      `,
      actionItems: [
        {
          text: "HTML5 New Elements Reference",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
        },
        {
          text: "HTML5 Introduction",
          link: "https://www.w3schools.com/html/html5_intro.asp",
        },
      ],
    },
    {
      id: 13,
      title: "13. HTML Media Elements",
      content: `
        <h3>HTML Media Elements</h3>
        <p>HTML5 includes built-in media support for embedding video, audio, and images. Elements like &lt;video&gt; and &lt;audio&gt; come with a variety of attributes to control playback.</p>
        <pre><code class="language-html">
          &lt;audio controls&gt;
            &lt;source src="audio.mp3" type="audio/mpeg"&gt;
            Your browser does not support the audio element.
          &lt;/audio&gt;
        </code></pre>
      `,
      actionItems: [
        {
          text: "HTML5 Media Elements Guide",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio",
        },
        {
          text: "Using HTML5 Media Elements",
          link: "https://www.w3schools.com/html/html5_audio.asp",
        },
      ],
    },
    {
      id: 14,
      title: "14. HTML APIs",
      content: `
        <h3>HTML APIs</h3>
        <p>HTML5 introduced several APIs to enhance the functionality of web pages. These include APIs for geolocation, drag and drop, web storage, and more.</p>
        <pre><code class="language-html">
          &lt;script&gt;
            navigator.geolocation.getCurrentPosition(function(position) {
              document.getElementById('location').innerHTML = "Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude;
            });
          &lt;/script&gt;
          &lt;p id="location"&gt;Getting location...&lt;/p&gt;
        </code></pre>
      `,
      actionItems: [
        {
          text: "HTML5 APIs Overview",
          link: "https://developer.mozilla.org/en-US/docs/Web/API",
        },
        {
          text: "Using HTML5 APIs",
          link: "https://www.w3schools.com/html/html5_geolocation.asp",
        },
      ],
    },
    {
      id: 15,
      title: "15. Building a Complete Webpage",
      content: `
        <h3>Building a Complete Webpage</h3>
        <p>Let's combine everything we've learned to build a complete webpage.</p>
        <pre><code class="language-html">
          &lt;!DOCTYPE html&gt;
          &lt;html&gt;
          &lt;head&gt;
            &lt;title&gt;My Webpage&lt;/title&gt;
            &lt;link rel="stylesheet" href="styles.css"&gt;
          &lt;/head&gt;
          &lt;body&gt;
            &lt;header&gt;
              &lt;h1&gt;Welcome to My Webpage&lt;/h1&gt;
              &lt;nav&gt;
                &lt;ul&gt;
                  &lt;li&gt;&lt;a href="#home"&gt;Home&lt;/a&gt;&lt;/li&gt;
                  &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
                  &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
              &lt;/nav&gt;
            &lt;/header&gt;
            &lt;section id="home"&gt;
              &lt;h2&gt;Home&lt;/h2&gt;
              &lt;p&gt;Welcome to the homepage of my website.&lt;/p&gt;
            &lt;/section&gt;
            &lt;section id="about"&gt;
              &lt;h2&gt;About&lt;/h2&gt;
              &lt;p&gt;This is the about section.&lt;/p&gt;
            &lt;/section&gt;
            &lt;section id="contact"&gt;
              &lt;h2&gt;Contact&lt;/h2&gt;
              &lt;p&gt;This is the contact section.&lt;/p&gt;
            &lt;/section&gt;
            &lt;footer&gt;
              &lt;p&gt;&copy; 2024 My Webpage&lt;/p&gt;
            &lt;/footer&gt;
          &lt;/body&gt;
          &lt;/html&gt;
        </code></pre>
      `,
      actionItems: [
        {
          text: "Building a Complete Webpage",
          link: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started",
        },
        { text: "HTML Tutorial", link: "https://www.w3schools.com/html/" },
      ],
    },
  ],
};

export default CourseDataHTML;
