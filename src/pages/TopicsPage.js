// Import necessary React modules
import React from 'react';

// Define the TopicsPage functional component
function TopicsPage() {
   // Return the JSX content for TopicsPage
   return (
      <>
         <section>
            <nav class="local">
               <a href="#web-servers">Web Servers</a>
               <a href="#frontend-design">Frontend Design</a>
               <a href="#optimizing-images">Optimizing Images</a>
               <a href="#favicons">Favicons</a>
               <a href="#cascading-stylesheets">Cascading Style Sheets</a>
               <a href="#forms">Forms</a>
               <a href="#express">Express</a>
               <a href="#Javascript">JS</a>
            </nav>

            <article id="web-servers">
                <h3>Web Servers</h3>
                <p><strong>The concept of web servers</strong> is crucial in web development. It involves the
                    utilization of software and hardware to deliver web content to users.</p>

                <p>In the realm of web development and server management, the term 'index' refers to a crucial file,
                    typically named 'index.html' or a variant, acting as the default landing page when users access a
                    specific directory on a web server. This concept is particularly evident in the configuration of
                    servers like OSU's Apache, where 'index.html' is commonly designated as the default home page. It's
                    noteworthy, however, that various servers may follow different conventions, such as using
                    'default.html.' This file, whether named 'index.html' or 'default.html,' contains essential HTML,
                    CSS, and potentially JavaScript code to construct the initial webpage users encounter. When visitors
                    navigate to a website without specifying a particular file or page in the URL, the web server
                    automatically seeks the index file in the root directory, presenting it as the default content. This
                    mechanism ensures a seamless and organized user experience, with the relationship between the
                    default home page and server configuration determining the specific file sought when no explicit
                    file is specified in the URL</p>

                <p>Significant disparities come to light when contrasting the experience of viewing files locally versus
                    on a server, particularly evident in the file's URL structure. Locally, the URL adopts a '///'
                    format, whereas on the server, it is securely hosted via <strong>'HTTPS.'</strong> Beyond this,
                    notable differences manifest in the performance metrics. Local access demonstrates swifter timings
                    in crucial aspects
                    such as<strong> DNS lookup, initial connection, and Time to First Byte</strong> when compared to the
                    web server environment. To gain deeper insights into these dynamics, one can leverage the browser's
                    Web Dev/Inspector Network tab. This tool unveils details encompassing the HTTP Request and HTTP
                    Response, including essential concepts such as <strong>Method (GET), and Header Request/Response
                        data.</strong></p>

                <p>The main differences in status codes between the favicon.ico file and the main.css and main.js
                    files are notably different. For instance, the favicon.ico file receives a status code of 200,
                    indicating that the local server is correctly configured to serve this file, and the path specified
                    is accurate. Conversely, the main.css and main.js files, despite being crucial for styling and
                    functionality, exhibit a different status code, <strong>such as 404 Not Found or another non-200
                        status.</strong> This discrepancy suggests a potential issue with the paths specified for these
                    files on the local server. It is plausible that an error in the path configuration is preventing the
                    server from locating and serving the main.css and main.js files successfully. Addressing and
                    correcting these path issues may lead to the expected 200 status codes for these essential
                    resources, ensuring their proper inclusion in the web page</p>

                <p>Scheme: Specifies the protocol for communication (e.g., "HTTPS"). Subdomain: for URL is web and engr
                    <strong>Host Domain</strong>: Identifies the main domain name (e.g., oregonstate.edu). <strong>User
                        Directory</strong>: Represents a user's directory on the server (e.g., "ONID Username").
                    <strong>Path and Resource</strong>: is A2 and index.html for this project. It includes folder/file
                    names for your project.</p>
            </article>

            <article id="frontend-design">
                <h3>Frontend Design</h3>
                <p><strong>The concept of frontend design</strong>: focuses on creating the user interface and
                    experience. It includes visual elements and user interactions.</p>

                <dl>
                    <dt><strong>Efficiency:</strong></dt>
                    <dd><strong>The system should perform tasks with minimal resources.</strong></dd>
                    <dt><strong>Engagement:</strong></dt>
                    <dd><strong>Users should find the interface interesting and captivating.</strong></dd>
                    <dt><strong>Errors:</strong></dt>
                    <dd><strong>Design should minimize user errors and provide effective error messages.</strong></dd>
                    <dt><strong>Ease of Learning:</strong></dt>
                    <dd><strong>Users should quickly learn to navigate and use the system.</strong></dd>
                    <dt><strong>Ease of Use:</strong></dt>
                    <dd><strong>The design should be user-friendly and intuitive.</strong></dd>
                </dl>

                <p><strong>The purpose of each of the page layout tags</strong> (e.g., <code>&lt;header&gt;</code>,
                    <code>&lt;main&gt;</code>, etc.) is to structure and organize content, providing a clear hierarchy
                    and aiding accessibility.</p>

                <p><strong>Anchors link to external content</strong> using the <code>href</code> attribute.
                    <strong>Internal content is linked</strong> using the anchor tag (<code>&lt;a&gt;</code>).</p>
            </article>
        </section>

        <section>
            <article id="optimizing-images">
                <h3>Optimizing Images</h3>
                <p><strong>What are the 6 major specifications of images for the web, and why?</strong></p>
                <p>When optimizing images for the web, it's essential to consider several key specifications to ensure a
                    better user experience. The six major specifications for web images are:</p>
                <ol>
                    <li>File Format: Choose the right image format, such as JPEG, PNG, or GIF, depending on the image
                        type and purpose.</li>
                    <li>Resolution: Optimize image resolution to balance quality and file size, typically 72 DPI for the
                        web.</li>
                    <li>File Size: Compress images to reduce file size for faster page loading.</li>
                    <li>Aspect Ratio: Maintain a consistent aspect ratio to prevent distortion on various devices.</li>
                    <li>Alt Text: Include descriptive alt text for accessibility and SEO benefits.</li>
                    <li>Image Dimensions: Specify image dimensions in the HTML to prevent layout shifts and improve
                        performance.</li>
                </ol>
                <p>Choosing the right file format and optimizing these specifications is crucial for faster loading,
                    better accessibility, and a smoother user experience.</p>

                <p><strong>Which file formats are most appropriate for photos and for line art, and why?</strong></p>
                <p>For photos, JPEG is a commonly used format, as it provides good compression for images with many
                    colors and gradients. On the other hand, for line art, graphics, or images with transparency, PNG is
                    often preferred due to its lossless compression and support for transparency. The choice of format
                    depends on the specific image content and the need for quality and transparency.</p>
            </article>

            <article id="favicons">
                <h3>Favicons</h3>
                <p><strong>How do browsers and devices use favicons?</strong></p>
                <p>Favicons, short for "favorite icons," are small images used to represent websites in browser tabs,
                    bookmarks, and history lists. Browsers and devices use favicons in the following ways:</p>
                <ul>
                    <li>Browser Tabs: Favicons appear in browser tabs next to the page title, helping users easily
                        identify and switch between open tabs.</li>
                    <li>Bookmarks: Favicons are used as visual markers for saved bookmarks, making it easier for users
                        to find and access their favorite sites.</li>
                    <li>History Lists: When users view their browsing history, favicons provide a visual reference for
                        previously visited sites.</li>
                </ul>
                <p>Adding a unique favicon to your website enhances brand recognition and user experience, making your
                    site easily identifiable and memorable.</p>
            </article>
            <article id="cascading-stylesheets">
                <h3>Cascading Style Sheets</h3>
                <p>The incorporation of Cascading Style Sheets (CSS) is crucial in modern web development. CSS is utilized to add design, layout, and style to web pages, ensuring a consistent and visually appealing presentation. It offers several key advantages when incorporated into websites and apps.</p>
                <p>The main reasons to incorporate stylesheets in websites and apps are:</p>
                <ol>
                    <li><strong>Consistency:</strong> CSS enables consistent design and layout across a website, ensuring a unified look and feel.</li>
                    <li><strong>Separation of Concerns:</strong> It separates the structure (HTML) from the presentation (CSS), making the code more organized and easier to maintain.</li>
                    <li><strong>Scalability:</strong> Stylesheets allow for easy scalability, as they can be applied to multiple elements or pages simultaneously.</li>
                    <li><strong>Reusability:</strong> Styles can be defined once and reused across the site, reducing redundancy and development time.</li>
                    <li><strong>Enhanced User Experience:</strong> Well-crafted stylesheets improve the overall user experience by making the site visually appealing and easier to navigate.</li>
                </ol>
                <p>There are various ways to incorporate styles in websites and applications:</p>
                <ol>
                    <li><strong>Embedded:</strong> Inline styles within HTML tags.</li>
                    <li><strong>Internal:</strong> Internal style blocks within the HTML file.</li>
                    <li><strong>External:</strong> External style sheets linked using the <code>&lt;link&gt;</code> tag.</li>
                    <li><strong>Imported:</strong> Importing external style sheets using the <code>@import</code> rule.</li>
                    <li><strong>Inline:</strong> Inline styles applied directly to specific HTML elements using the style attribute.</li>
                </ol>
                <p>Each method has its own advantages and best use cases, but the primary objective remains consistent: to effectively style web content.</p>
            </article>
            <article id="forms">
                <h3>Form Usability, Elements, and Attributes</h3>
                <p>Accessible forms play a crucial role in web development. The 6 major goals of accessible forms include:</p>
                <ol>
                    <li>Perceivable: Users must be able to perceive the form components and their purpose.</li>
                    <li>Operable: Forms should be easily operable using keyboard or assistive technologies.</li>
                    <li>Understandable: Instructions and form structure should be clear and understandable.</li>
                    <li>Robust: Forms should work well with current and future user agents, including assistive technologies.</li>
                    <li>Consistency: Forms should follow consistency in design and behavior.</li>
                    <li>Feedback: Users should receive feedback and validation messages for form input.</li>
                </ol>
                <p>Major tags used in forms include &lt;form&gt;, &lt;input&gt;, &lt;textarea&gt;, &lt;select&gt;, etc. Attributes such as "type," "name," "id," "placeholder," and "aria-label" are essential for form elements.</p>
                <p>Form style recommendations include using clear labels, providing hints and error messages, grouping related fields, using proper field set and legend elements, and making forms responsive for various devices.</p>
            </article>
            <article id="express">
                <h3>Node, NPM, and Express</h3>
                <p>Node.js, NPM, and Express are fundamental technologies in web development:</p>
                <p><strong>Node.js:</strong> Node.js is a runtime environment that allows server-side JavaScript development. It enhances web development by enabling non-blocking, event-driven architecture.</p>
                <p><strong>NPM (Node Package Manager):</strong> NPM is a package manager for Node.js, providing access to a vast ecosystem of reusable packages. It simplifies dependency management and project setup.</p>
                <p><strong>Express:</strong> Express is a web application framework for Node.js. It streamlines the development of web applications and APIs. Express offers routing, middleware, and a range of tools for building robust server applications.</p>
                <p>Using these technologies, developers can create efficient, scalable, and high-performance web applications.</p>
            </article>
            <article id="Javascript">
                <h3>Understanding JavaScript</h3>
                <p>
                    JavaScript encompasses a variety of data types that serve as the building blocks for coding. The main data types include numbers, representing numeric values; strings, holding sequences of characters; booleans, expressing true or false conditions; objects, allowing the grouping of related data and functionality; and arrays, storing collections of values. This versatility in data types enables developers to handle a wide range of scenarios in their code, supporting the dynamic nature of web development.
                </p>
                <p>
                    Objects, arrays, and JSON (JavaScript Object Notation) are pivotal for data manipulation in JavaScript. Objects encapsulate data and behavior into a single entity, arrays provide ordered lists of values, and JSON serves as a lightweight data interchange format. Conditionals, such as if statements, enable developers to make decisions based on certain conditions, directing the flow of their programs. Loops, like for and while loops, allow for the repetitive execution of code, streamlining tasks. JavaScript also embraces object-oriented programming, emphasizing the organization of code around objects, and functional programming, treating computation as the evaluation of mathematical functions.
                </p>
            </article>
        </section>
        </>
   );
}

// Export TopicsPage as the default component
export default TopicsPage;
