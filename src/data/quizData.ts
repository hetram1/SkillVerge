import { DifficultyLevel, Technology } from "./quizTypes";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  technology: Technology;
  difficulty: DifficultyLevel;
  questions: Question[];
}

export const quizzes: Quiz[] = [
  // HTML Beginner
  {
    id: "html-beginner",
    technology: "html",
    difficulty: "beginner",
    questions: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: [
          "Hypertext Markup Language",
          "Hypertext Markdown Language",
          "Hypertext Machine Language",
          "Hypertech Modern Language",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Which tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "Which HTML element is used to define an image?",
        options: ["<picture>", "<image>", "<img>", "<src>"],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: "What is the correct HTML for creating a checkbox?",
        options: [
          '<input type="check">',
          '<input type="checkbox">',
          "<checkbox>",
          "<check>",
        ],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "How do you create a numbered list in HTML?",
        options: ["<list>", "<nl>", "<ol>", "<ul>"],
        correctAnswer: 2,
      },
      {
        id: 6,
        question: "Which HTML element defines the title of a document?",
        options: ["<meta>", "<title>", "<header>", "<head>"],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "What is the correct HTML for creating a table?",
        options: [
          "<table><tr><td>",
          "<table><head><body>",
          "<table><thead><tbody>",
          "<tab><tr><td>",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "Which HTML attribute is used to define inline styles?",
        options: ["class", "style", "font", "css"],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "What is the correct HTML for creating a text area?",
        options: [
          '<input type="textarea">',
          '<input type="textbox">',
          "<textarea></textarea>",
          "<textfield>",
        ],
        correctAnswer: 2,
      },
      {
        id: 10,
        question: "Which HTML element is used to define important text?",
        options: ["<important>", "<b>", "<strong>", "<bold>"],
        correctAnswer: 2,
      },
      {
        id: 11,
        question: "What is the correct HTML for creating a line break?",
        options: ["<break>", "<lb>", "<br>", "<newline>"],
        correctAnswer: 2,
      },
      {
        id: 12,
        question: "Which HTML element is used to define a paragraph?",
        options: ["<p>", "<paragraph>", "<text>", "<para>"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "How do you create an unordered list in HTML?",
        options: ["<ul>", "<list>", "<ol>", "<unordered>"],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "Which HTML element is used for the largest heading?",
        options: ["<heading1>", "<h6>", "<head>", "<h1>"],
        correctAnswer: 3,
      },
      {
        id: 15,
        question: "What is the correct HTML for adding a background color?",
        options: [
          '<body bg="yellow">',
          "<background>yellow</background>",
          '<body style="background-color: yellow">',
          '<body color="yellow">',
        ],
        correctAnswer: 2,
      },
      {
        id: 16,
        question: "Which HTML element defines navigation links?",
        options: ["<navigation>", "<nav>", "<navigate>", "<menu>"],
        correctAnswer: 1,
      },
      {
        id: 17,
        question: "What is the correct HTML for creating a button?",
        options: [
          '<input type="button">',
          "<button>",
          "Both A and B are correct",
          "<buttonfield>",
        ],
        correctAnswer: 2,
      },
      {
        id: 18,
        question: "Which HTML element is used to define the document type?",
        options: ["<doctype>", "<!DOCTYPE>", "<doc>", "<type>"],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "What is the correct HTML for creating a text input field?",
        options: [
          "<textfield>",
          '<input type="text">',
          "<input text>",
          "<textinput>",
        ],
        correctAnswer: 1,
      },
      {
        id: 20,
        question:
          "Which HTML element is used to define a header for a document or section?",
        options: ["<head>", "<top>", "<header>", "<heading>"],
        correctAnswer: 2,
      },
      {
        id: 21,
        question: "How do you create a radio button in HTML?",
        options: [
          '<input type="radio">',
          "<radio>",
          '<input type="check">',
          "<radiobutton>",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "Which HTML element is used to define a footer?",
        options: ["<bottom>", "<section>", "<footer>", "<end>"],
        correctAnswer: 2,
      },
      {
        id: 23,
        question: "What is the correct HTML for making a drop-down list?",
        options: [
          "<list>",
          "<select>",
          '<input type="dropdown">',
          "<dropdown>",
        ],
        correctAnswer: 1,
      },
      {
        id: 24,
        question:
          "Which HTML attribute specifies an alternate text for an image?",
        options: ["title", "alt", "src", "description"],
        correctAnswer: 1,
      },
      {
        id: 25,
        question: "What is the correct HTML for playing video files?",
        options: ["<media>", "<video>", "<movie>", "<play>"],
        correctAnswer: 1,
      },
      {
        id: 26,
        question:
          "Which HTML element is used to define a section in a document?",
        options: ["<div>", "<section>", "<part>", "<region>"],
        correctAnswer: 1,
      },
      {
        id: 27,
        question: "How do you create a password input field?",
        options: [
          '<input type="password">',
          "<password>",
          "<input password>",
          "<passwordfield>",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "Which HTML element is used for playing audio files?",
        options: ["<sound>", "<audio>", "<music>", "<mp3>"],
        correctAnswer: 1,
      },
      {
        id: 29,
        question: "What is the correct HTML for creating a comment?",
        options: [
          "<!-- comment -->",
          "//comment",
          "<comment>",
          "/* comment */",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "Which HTML element defines a description list?",
        options: ["<dl>", "<list>", "<ul>", "<description>"],
        correctAnswer: 0,
      },
    ],
  },

  // HTML Intermediate
  {
    id: "html-intermediate",
    technology: "html",
    difficulty: "intermediate",
    questions: [
      {
        id: 1,
        question: "Which of the following is not a semantic HTML5 element?",
        options: ["<article>", "<section>", "<header>", "<span>"],
        correctAnswer: 3,
      },
      {
        id: 2,
        question:
          "What is the purpose of the srcset attribute in the <img> tag?",
        options: [
          "To specify multiple image sources for different screen sizes",
          "To set the source of an image",
          "To create a slideshow of images",
          "To define image dimensions",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "What is the purpose of the <figure> element?",
        options: [
          "To display mathematical figures",
          "To group media content and its caption",
          "To create figures and diagrams",
          "To define a figure in a document",
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question:
          "Which HTML5 element is used to specify independent, self-contained content?",
        options: ["<section>", "<article>", "<aside>", "<div>"],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "What is the purpose of the <datalist> element?",
        options: [
          "To store data in a list format",
          "To create a dropdown list",
          "To specify a list of pre-defined options for input controls",
          "To display data in a table format",
        ],
        correctAnswer: 2,
      },
      {
        id: 6,
        question:
          "Which attribute is used to specify that an input field must be filled out?",
        options: ["validate", "placeholder", "required", "mandatory"],
        correctAnswer: 2,
      },
      {
        id: 7,
        question: "What is the purpose of the <time> element?",
        options: [
          "To display a clock",
          "To represent a specific period in time",
          "To create a countdown timer",
          "To show different time zones",
        ],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "Which HTML5 input type is used for picking a color?",
        options: ["color", "picker", "palette", "colorpicker"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What is the purpose of the <output> element?",
        options: [
          "To display computer output",
          "To show the result of a calculation",
          "To create an output field",
          "To define printer output",
        ],
        correctAnswer: 1,
      },
      {
        id: 10,
        question:
          "Which attribute is used to specify the relationship between the current document and the linked document?",
        options: ["connection", "rel", "relationship", "link"],
        correctAnswer: 1,
      },
      {
        id: 11,
        question: "What is the purpose of the <mark> element?",
        options: [
          "To create a bookmark",
          "To highlight text",
          "To mark a list item",
          "To create a marker on an image",
        ],
        correctAnswer: 1,
      },
      {
        id: 12,
        question:
          "Which HTML5 element is used to embed content from another source?",
        options: ["<frame>", "<iframe>", "<embed>", "<object>"],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "What is the purpose of the download attribute?",
        options: [
          "To specify that a link should be downloaded",
          "To download the webpage",
          "To create a download button",
          "To specify download speed",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question:
          "Which attribute is used to specify the character encoding for the HTML document?",
        options: ["encode", "charset", "character", "encoding"],
        correctAnswer: 1,
      },
      {
        id: 15,
        question: "What is the purpose of the <meter> element?",
        options: [
          "To measure length",
          "To create a progress bar",
          "To measure data within a known range",
          "To display metrics",
        ],
        correctAnswer: 2,
      },
      {
        id: 16,
        question: "Which HTML5 element is used to draw graphics via scripting?",
        options: ["<draw>", "<canvas>", "<graphic>", "<paint>"],
        correctAnswer: 1,
      },
      {
        id: 17,
        question: "What is the purpose of the <details> element?",
        options: [
          "To add details to an image",
          "To create a disclosure widget",
          "To provide additional information",
          "To show file details",
        ],
        correctAnswer: 1,
      },
      {
        id: 18,
        question:
          "Which attribute is used to specify that an element is not yet, or is no longer, relevant?",
        options: ["irrelevant", "hidden", "invisible", "inert"],
        correctAnswer: 3,
      },
      {
        id: 19,
        question: "What is the purpose of the <progress> element?",
        options: [
          "To show task progress",
          "To create a loading bar",
          "To display file progress",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        id: 20,
        question: "Which HTML5 element defines navigation links?",
        options: ["<navigation>", "<menu>", "<nav>", "<navbar>"],
        correctAnswer: 2,
      },
      {
        id: 21,
        question: "What is the purpose of the contenteditable attribute?",
        options: [
          "To make content editable",
          "To edit content in a CMS",
          "To enable text editing",
          "To create an editor",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question:
          "Which HTML5 element is used to specify independent content in a document?",
        options: ["<content>", "<article>", "<section>", "<div>"],
        correctAnswer: 1,
      },
      {
        id: 23,
        question: "What is the purpose of the <aside> element?",
        options: [
          "To create a side panel",
          "To define content aside from main content",
          "To add a sidebar",
          "To move content to the side",
        ],
        correctAnswer: 1,
      },
      {
        id: 24,
        question:
          "Which attribute is used to specify the base URL for all relative URLs in a document?",
        options: ["href", "src", "base", "url"],
        correctAnswer: 2,
      },
      {
        id: 25,
        question: "What is the purpose of the <dialog> element?",
        options: [
          "To create a chat dialog",
          "To define a dialog box or window",
          "To show messages",
          "To create a modal",
        ],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "Which HTML5 input type validates email addresses?",
        options: ["text", "email", "validate", "address"],
        correctAnswer: 1,
      },
      {
        id: 27,
        question: "What is the purpose of the <main> element?",
        options: [
          "To define the main content of a document",
          "To create a main section",
          "To specify the primary content",
          "To highlight important content",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question:
          "Which attribute is used to specify that an input field should have autocomplete enabled?",
        options: ["complete", "autocomplete", "autofill", "fill"],
        correctAnswer: 1,
      },
      {
        id: 29,
        question: "What is the purpose of the <template> element?",
        options: [
          "To create a template design",
          "To hold content that should be hidden when page loads",
          "To define a layout template",
          "To create reusable HTML",
        ],
        correctAnswer: 1,
      },
      {
        id: 30,
        question:
          "Which HTML5 element is used to specify a footer for a document or section?",
        options: ["<bottom>", "<section>", "<footer>", "<end>"],
        correctAnswer: 2,
      },
    ],
  },

  // HTML Advanced
  {
    id: "html-advanced",
    technology: "html",
    difficulty: "advanced",
    questions: [
      {
        id: 1,
        question:
          "What is the purpose of the preload attribute in the <link> element?",
        options: [
          "To specify the loading priority of resources",
          "To preload resources that will be needed later",
          "To load resources in parallel",
          "To cache resources for offline use",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question:
          "Which HTML5 feature allows for client-side storage of complex data?",
        options: ["Web Storage", "IndexedDB", "Cookies", "Cache API"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question:
          "What is the purpose of the sandbox attribute in the <iframe> element?",
        options: [
          "To create a testing environment",
          "To restrict potentially malicious content",
          "To isolate CSS styles",
          "To create a virtual DOM",
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question:
          "Which HTML5 API is used for real-time bidirectional communication?",
        options: ["WebSocket", "Server-Sent Events", "Long Polling", "AJAX"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is the purpose of the picture element in HTML5?",
        options: [
          "To display multiple images in a slideshow",
          "To provide alternative image sources for different screen sizes",
          "To create image galleries",
          "To apply filters to images",
        ],
        correctAnswer: 1,
      },
      {
        id: 6,
        question:
          "Which attribute is used for custom data attributes in HTML5?",
        options: ["data-*", "custom-*", "user-*", "attr-*"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question:
          "What is the purpose of the srcset attribute in responsive images?",
        options: [
          "To specify multiple image formats",
          "To provide different image sizes for different devices",
          "To set image source paths",
          "To define image dimensions",
        ],
        correctAnswer: 1,
      },
      {
        id: 8,
        question:
          "Which HTML5 element is used for handling mathematical equations?",
        options: ["<math>", "<equation>", "<formula>", "<calculate>"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What is the purpose of the defer attribute in script tags?",
        options: [
          "To delay script execution until page load",
          "To prevent script downloading",
          "To defer script compilation",
          "To postpone script parsing",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "Which HTML5 API is used for drag and drop functionality?",
        options: ["DragDrop API", "Drag and Drop API", "DnD API", "Move API"],
        correctAnswer: 1,
      },
      {
        id: 11,
        question: "What is the purpose of the manifest attribute in HTML5?",
        options: [
          "To specify required resources",
          "To enable offline web applications",
          "To define page metadata",
          "To list page dependencies",
        ],
        correctAnswer: 1,
      },
      {
        id: 12,
        question: "Which HTML5 element is used for vector graphics?",
        options: ["<vector>", "<svg>", "<draw>", "<graphic>"],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "What is the purpose of the role attribute in HTML5?",
        options: [
          "To define element styling",
          "To specify ARIA roles for accessibility",
          "To assign user roles",
          "To define element behavior",
        ],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "Which HTML5 API is used for accessing device orientation?",
        options: [
          "Orientation API",
          "DeviceOrientation API",
          "Motion API",
          "Gyroscope API",
        ],
        correctAnswer: 1,
      },
      {
        id: 15,
        question: "What is the purpose of the async attribute in script tags?",
        options: [
          "To load scripts asynchronously",
          "To execute scripts in order",
          "To delay script execution",
          "To prevent script blocking",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question:
          "Which HTML5 element is used for bidirectional text isolation?",
        options: ["<bdi>", "<dir>", "<bdo>", "<iso>"],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "What is the purpose of the crossorigin attribute?",
        options: [
          "To enable cross-domain requests",
          "To handle CORS policies",
          "To block external resources",
          "To verify resource origin",
        ],
        correctAnswer: 1,
      },
      {
        id: 18,
        question: "Which HTML5 API is used for full-screen mode?",
        options: ["Screen API", "Fullscreen API", "Display API", "View API"],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "What is the purpose of the integrity attribute?",
        options: [
          "To verify file integrity",
          "To validate resource content",
          "To check for malware",
          "To ensure data consistency",
        ],
        correctAnswer: 1,
      },
      {
        id: 20,
        question: "Which HTML5 element is used for ruby annotations?",
        options: ["<ruby>", "<annotation>", "<note>", "<mark>"],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "What is the purpose of the ping attribute in anchor tags?",
        options: [
          "To track link clicks",
          "To check link status",
          "To verify link validity",
          "To measure response time",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "Which HTML5 API is used for recording audio and video?",
        options: [
          "Recorder API",
          "MediaRecorder API",
          "AudioVideo API",
          "Capture API",
        ],
        correctAnswer: 1,
      },
      {
        id: 23,
        question: "What is the purpose of the importance attribute?",
        options: [
          "To prioritize resource loading",
          "To mark important content",
          "To set element priority",
          "To define loading order",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "Which HTML5 element is used for measuring time intervals?",
        options: ["<timer>", "<time>", "<duration>", "<interval>"],
        correctAnswer: 1,
      },
      {
        id: 25,
        question: "What is the purpose of the translate attribute?",
        options: [
          "To enable automatic translation",
          "To indicate if content should be translated",
          "To specify translation rules",
          "To define language pairs",
        ],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "Which HTML5 API is used for battery status?",
        options: [
          "Power API",
          "Battery Status API",
          "Energy API",
          "Device API",
        ],
        correctAnswer: 1,
      },
      {
        id: 27,
        question: "What is the purpose of the hidden attribute?",
        options: [
          "To hide elements visually",
          "To remove elements from DOM",
          "To mark elements as not yet relevant",
          "To disable element interaction",
        ],
        correctAnswer: 2,
      },
      {
        id: 28,
        question: "Which HTML5 element is used for defining command buttons?",
        options: ["<cmd>", "<command>", "<button>", "<control>"],
        correctAnswer: 1,
      },
      {
        id: 29,
        question: "What is the purpose of the dropzone attribute?",
        options: [
          "To define drop targets",
          "To specify drag and drop zones",
          "To create droppable areas",
          "To handle drop events",
        ],
        correctAnswer: 1,
      },
      {
        id: 30,
        question:
          "Which HTML5 API is used for accessing device camera and microphone?",
        options: ["Media API", "MediaDevices API", "Camera API", "Device API"],
        correctAnswer: 1,
      },
    ],
  },

  // CSS Beginner
  {
    id: "css-beginner",
    technology: "css",
    difficulty: "beginner",
    questions: [
      {
        id: 1,
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Creative Style Sheets",
          "Colorful Style Sheets",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Which CSS property controls the text size?",
        options: ["text-size", "font-size", "text-style", "font-style"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "How do you select an element with the id 'demo'?",
        options: [".demo", "#demo", "demo", "*demo"],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "Which CSS property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "background"],
        correctAnswer: 2,
      },
      {
        id: 5,
        question: "How do you select elements with the class name 'test'?",
        options: ["#test", ".test", "test", "*test"],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "Which property is used to change the font of an element?",
        options: ["font-style", "font-family", "font-weight", "font-size"],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "How do you make text bold in CSS?",
        options: [
          "font-weight: bold",
          "style: bold",
          "text-style: bold",
          "font: bold",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "Which CSS property controls the spacing between lines?",
        options: ["line-spacing", "spacing", "line-height", "line-width"],
        correctAnswer: 2,
      },
      {
        id: 9,
        question: "Which CSS property is used to add shadows to elements?",
        options: ["element-shadow", "shadow", "box-shadow", "object-shadow"],
        correctAnswer: 2,
      },
      {
        id: 10,
        question: "How do you add a border around an element?",
        options: ["border-line:", "border-around:", "stroke:", "border:"],
        correctAnswer: 3,
      },
      {
        id: 11,
        question: "Which CSS property controls the text alignment?",
        options: ["text-align", "align", "text-position", "position"],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "How do you make text italic in CSS?",
        options: [
          "style: italic",
          "font-style: italic",
          "text-style: italic",
          "italic: true",
        ],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "Which CSS property sets the space between elements?",
        options: ["spacing", "margin", "padding", "gap"],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "How do you change text color in CSS?",
        options: ["text-color", "color", "font-color", "text-style"],
        correctAnswer: 1,
      },
      {
        id: 15,
        question: "Which property sets the background image?",
        options: ["background-img", "background-image", "bg-image", "image"],
        correctAnswer: 1,
      },
      {
        id: 16,
        question: "How do you make a list without bullets?",
        options: [
          "list-style: none",
          "list: none",
          "bullet: none",
          "style: no-bullet",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "Which property changes the size of a border?",
        options: [
          "border-width",
          "border-size",
          "border-thickness",
          "border-weight",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "How do you select all paragraphs inside a div?",
        options: ["div.p", "div p", "div+p", "div-p"],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "Which value defines a solid border?",
        options: ["line", "solid", "regular", "normal"],
        correctAnswer: 1,
      },
      {
        id: 20,
        question: "How do you add space inside an element?",
        options: ["spacing", "margin", "padding", "inner-space"],
        correctAnswer: 2,
      },
      {
        id: 21,
        question: "Which property makes text uppercase?",
        options: [
          "text-transform: uppercase",
          "text-case: upper",
          "text-style: caps",
          "font-case: upper",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "How do you center an element horizontally?",
        options: [
          "center: true",
          "margin: center",
          "margin: 0 auto",
          "align: center",
        ],
        correctAnswer: 2,
      },
      {
        id: 23,
        question: "Which property sets the style of a border?",
        options: ["border-line", "border-type", "border-style", "border-mode"],
        correctAnswer: 2,
      },
      {
        id: 24,
        question: "How do you make text underlined?",
        options: [
          "text-decoration: underline",
          "underline: true",
          "text-style: under",
          "text-line: bottom",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "Which property changes the cursor style?",
        options: ["cursor", "mouse-pointer", "pointer", "hand"],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "How do you make text bold and italic?",
        options: [
          "font: bold italic",
          "style: bold italic",
          "text-style: bold italic",
          "font-weight: bold; font-style: italic",
        ],
        correctAnswer: 3,
      },
      {
        id: 27,
        question: "Which property sets element height?",
        options: ["size", "height", "element-height", "h-size"],
        correctAnswer: 1,
      },
      {
        id: 28,
        question: "How do you group selectors?",
        options: [
          "selector1 + selector2",
          "selector1, selector2",
          "selector1 and selector2",
          "selector1 & selector2",
        ],
        correctAnswer: 1,
      },
      {
        id: 29,
        question: "Which property sets element width?",
        options: ["size", "width", "element-width", "w-size"],
        correctAnswer: 1,
      },
      {
        id: 30,
        question: "How do you hide an element?",
        options: [
          "display: none",
          "visibility: hidden",
          "show: false",
          "hidden: true",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // CSS Intermediate
  {
    id: "css-intermediate",
    technology: "css",
    difficulty: "intermediate",
    questions: [
      {
        id: 1,
        question:
          "Which CSS property is used to change the text color of an element?",
        options: ["text-color", "color", "font-color", "text-style"],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "How do you display a text with an underline in CSS?",
        options: [
          "text-decoration: underline",
          "font-decoration: underline",
          "text-style: underline",
          "underline: true",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "Which CSS property is used to make text uppercase?",
        options: [
          "text-style",
          "text-transform",
          "transform",
          "font-transform",
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question:
          "How do you change the cursor when hovering over an element in CSS?",
        options: ["cursor:", "mouse:", "pointer:", "cursor-style:"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question:
          "Which CSS property is used to set the transparency of an element?",
        options: ["transparent", "visibility", "opacity", "filter"],
        correctAnswer: 2,
      },
      {
        id: 6,
        question: "How do you make a text center-aligned in CSS?",
        options: [
          "align: center",
          "text-align: center",
          "position: center",
          "text-position: center",
        ],
        correctAnswer: 1,
      },
      {
        id: 7,
        question:
          "What is the correct CSS syntax for making all <p> elements bold?",
        options: [
          "p { font-weight: bold; }",
          'p style="font-weight: bold;"',
          "<p>.bold { }",
          "p { text-style: bold; }",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question:
          "Which property is used to control the spacing between elements?",
        options: ["spacing", "margin", "padding", "Both margin and padding"],
        correctAnswer: 3,
      },
      {
        id: 9,
        question:
          "Which CSS property is used to specify the layout of items in a flexbox container?",
        options: ["flex-layout", "flex-direction", "flex-flow", "flex-align"],
        correctAnswer: 1,
      },
      {
        id: 10,
        question: "Which CSS property is used to create a transition effect?",
        options: ["transition", "transform", "animation", "motion"],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "What does the CSS property `z-index` control?",
        options: [
          "Element rotation",
          "Stacking order of elements",
          "Element transparency",
          "Text alignment",
        ],
        correctAnswer: 1,
      },
      {
        id: 12,
        question:
          "How do you apply a style to an element only when it is hovered over?",
        options: [":hover", ":active", ":focus", ":mouseover"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question:
          "Which CSS property is used to round the corners of an element?",
        options: ["border-radius", "corner-radius", "border-curve", "rounded"],
        correctAnswer: 0,
      },
      {
        id: 14,
        question:
          "What is the default value of the `position` property in CSS?",
        options: ["absolute", "relative", "fixed", "static"],
        correctAnswer: 3,
      },
      {
        id: 15,
        question:
          "Which CSS property is used to control the size of a background image?",
        options: [
          "background-size",
          "background-scale",
          "image-size",
          "bg-size",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question:
          "How do you make an element take up the full width of its parent container?",
        options: ["width: 100%", "width: full", "size: 100%", "width: auto"],
        correctAnswer: 0,
      },
      {
        id: 17,
        question:
          "Which CSS property is used to create a shadow effect behind an element?",
        options: ["shadow", "box-shadow", "element-shadow", "drop-shadow"],
        correctAnswer: 1,
      },
      {
        id: 18,
        question: "What is the purpose of the `display: flex` property in CSS?",
        options: [
          "To make an element invisible",
          "To create a flexible box layout",
          "To align text centrally",
          "To add animations",
        ],
        correctAnswer: 1,
      },
      {
        id: 19,
        question:
          "Which CSS property is used to control the spacing between lines of text?",
        options: ["line-height", "text-spacing", "line-spacing", "font-height"],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "How do you hide an element without removing it from the document flow?",
        options: [
          "display: none",
          "visibility: hidden",
          "opacity: 0",
          "Both visibility: hidden and opacity: 0",
        ],
        correctAnswer: 1,
      },
      {
        id: 21,
        question:
          "Which CSS property is used to align items vertically in a flexbox container?",
        options: [
          "align-items",
          "justify-content",
          "align-content",
          "vertical-align",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What does the `overflow` property in CSS control?",
        options: [
          "Element rotation",
          "Content that exceeds an element's box",
          "Text alignment",
          "Element transparency",
        ],
        correctAnswer: 1,
      },
      {
        id: 23,
        question:
          "Which CSS property is used to define the animation duration?",
        options: [
          "animation-duration",
          "transition-duration",
          "animation-time",
          "animate-duration",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "How do you select the first child element of a parent in CSS?",
        options: [":first-child", ":first", ":child(1)", ":nth-child(1)"],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "Which CSS property is used to create a grid layout?",
        options: [
          "grid-template",
          "display: grid",
          "grid-layout",
          "grid-display",
        ],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "What is the purpose of the `calc()` function in CSS?",
        options: [
          "To perform mathematical calculations",
          "To define animations",
          "To set font sizes",
          "To align elements",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question:
          "Which CSS property is used to control the order of flex items?",
        options: ["order", "flex-order", "item-order", "align-order"],
        correctAnswer: 0,
      },
      {
        id: 28,
        question:
          "How do you apply a style to an element when it is focused, such as an input field?",
        options: [":focus", ":active", ":hover", ":selected"],
        correctAnswer: 0,
      },
      {
        id: 29,
        question:
          "Which CSS property is used to set the gap between grid items?",
        options: ["grid-gap", "gap", "grid-spacing", "Both grid-gap and gap"],
        correctAnswer: 3,
      },
      {
        id: 30,
        question: "What is the purpose of the `transform` property in CSS?",
        options: [
          "To change the element's position",
          "To modify the element's appearance (e.g., rotate, scale)",
          "To set the element's transparency",
          "To align text",
        ],
        correctAnswer: 1,
      },
    ],
  },

  // CSS Advanced
  {
    id: "css-advanced",
    technology: "css",
    difficulty: "advanced",
    questions: [
      {
        id: 1,
        question: "How do you select all <p> elements inside a <div> element?",
        options: ["div p", "div.p", "div > p", "div + p"],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Which CSS property is used to create a grid layout?",
        options: [
          "layout",
          "display: layout",
          "display: grid",
          "grid-template",
        ],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: "How do you make an image responsive in CSS?",
        options: [
          "image-responsive: true",
          "img { responsive: true; }",
          "img { width: 100%; height: auto; }",
          "img { scale: responsive; }",
        ],
        correctAnswer: 2,
      },
      {
        id: 4,
        question:
          "Which CSS property is used to specify the stacking order of elements?",
        options: ["z-index", "position", "overlay", "stack-order"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "How do you select every other element in CSS?",
        options: [
          "element:every-other",
          "element:alternate",
          "element:nth-child(2n)",
          "element:even-child",
        ],
        correctAnswer: 2,
      },
      {
        id: 6,
        question: "Which CSS unit is relative to the font-size of the element?",
        options: ["px", "em", "%", "vh"],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "How do you create a CSS animation?",
        options: [
          "animation: name duration",
          "@keyframes name { } and animation property",
          "transform: animate(parameters)",
          "motion: parameters",
        ],
        correctAnswer: 1,
      },
      {
        id: 8,
        question:
          "Which CSS property allows you to specify whether an element is resizable by the user?",
        options: ["user-resize", "resize", "scale", "transform"],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "How do you create rounded corners in CSS?",
        options: [
          "corner-style",
          "border-corner",
          "round-corner",
          "border-radius",
        ],
        correctAnswer: 3,
      },
      {
        id: 10,
        question:
          "Which of the following is NOT a valid CSS position property value?",
        options: ["static", "relative", "absolute", "floating"],
        correctAnswer: 3,
      },
      {
        id: 11,
        question: "How do you define a CSS custom property (variable)?",
        options: [
          "var: --my-variable;",
          "--my-variable: value;",
          "custom: --my-variable;",
          "variable: --my-variable;",
        ],
        correctAnswer: 1,
      },
      {
        id: 12,
        question:
          "Which CSS pseudo-element is used to style the first letter of an element?",
        options: ["::first-letter", "::first-char", "::letter", "::initial"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is the purpose of the `will-change` CSS property?",
        options: [
          "To change an element's size",
          "To optimize animations by hinting at properties that will change",
          "To define a transition effect",
          "To control element visibility",
        ],
        correctAnswer: 1,
      },
      {
        id: 14,
        question:
          "How do you select an element with a specific attribute value in CSS?",
        options: [
          "element[attr=value]",
          "element.attr=value",
          "element::attr(value)",
          "element:attr(value)",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question:
          "Which CSS property is used to control the alignment of grid items along the column axis?",
        options: [
          "align-items",
          "justify-content",
          "align-content",
          "grid-align",
        ],
        correctAnswer: 2,
      },
      {
        id: 16,
        question: "What does the `clip-path` CSS property do?",
        options: [
          "Clips an element to a specific shape or path",
          "Defines a transition path",
          "Hides an element completely",
          "Sets a clipping border",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question:
          "How do you apply styles only when the viewport is smaller than 600px?",
        options: [
          "@media (max-width: 600px) { }",
          "@viewport (width < 600px) { }",
          "@screen (max-width: 600px) { }",
          "@responsive (width: 600px) { }",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "Which CSS function is used to calculate values dynamically?",
        options: ["calc()", "compute()", "math()", "evaluate()"],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What is the purpose of the `object-fit` CSS property?",
        options: [
          "To control how an image or video fits within its container",
          "To align objects in a flex container",
          "To set the position of an object",
          "To define object transparency",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "How do you select the last child element of a parent in CSS?",
        options: [":last-child", ":last", ":child(last)", ":nth-last-child(1)"],
        correctAnswer: 0,
      },
      {
        id: 21,
        question:
          "Which CSS property is used to control the scroll behavior of an element?",
        options: [
          "scroll-behavior",
          "scroll-effect",
          "scroll-smooth",
          "scroll-style",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What does the `filter` CSS property do?",
        options: [
          "Applies graphical effects like blur or grayscale",
          "Filters out specific elements",
          "Controls element transparency",
          "Aligns elements in a grid",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "How do you reference a CSS custom property in a style rule?",
        options: [
          "var(--my-variable)",
          "use(--my-variable)",
          "get(--my-variable)",
          "--my-variable",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "Which CSS property is used to define the number of columns in a grid layout?",
        options: [
          "grid-template-columns",
          "grid-columns",
          "columns",
          "grid-column-count",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "What is the purpose of the `currentColor` keyword in CSS?",
        options: [
          "To inherit the background color",
          "To use the current value of the color property",
          "To reset the color to default",
          "To match the parent element's color",
        ],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "How do you prevent text from wrapping to a new line in CSS?",
        options: [
          "white-space: nowrap",
          "text-wrap: none",
          "wrap: off",
          "line-break: none",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question:
          "Which CSS property is used to control the stacking context of an element without changing its position?",
        options: ["z-index", "stack-order", "layer", "overlap"],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What is the purpose of the `aspect-ratio` CSS property?",
        options: [
          "To set the width of an element",
          "To maintain a specific width-to-height ratio",
          "To control image scaling",
          "To align elements in a flexbox",
        ],
        correctAnswer: 1,
      },
      {
        id: 29,
        question:
          "How do you select an element that immediately follows another element in CSS?",
        options: [
          "element + element",
          "element ~ element",
          "element > element",
          "element :: element",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "Which CSS property is used to optimize rendering performance for animations?",
        options: [
          "transform",
          "animation-optimize",
          "render-mode",
          "performance",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // JavaScript Beginner
  {
    id: "javascript-beginner",
    technology: "javascript",
    difficulty: "beginner",
    questions: [
      {
        id: 1,
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<scripting>", "<js>", "<javascript>", "<script>"],
        correctAnswer: 3,
      },
      {
        id: 2,
        question: "How do you create a function in JavaScript?",
        options: [
          "function:myFunction()",
          "function myFunction()",
          "function = myFunction()",
          "function.create(myFunction)",
        ],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "How do you call a function named 'myFunction'?",
        options: [
          "call myFunction()",
          "myFunction()",
          "call function myFunction()",
          "Call.myFunction()",
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "How do you write an IF statement in JavaScript?",
        options: ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"],
        correctAnswer: 2,
      },
      {
        id: 5,
        question:
          "How do you write an IF statement for executing code if 'i' is NOT equal to 5?",
        options: ["if (i != 5)", "if i <> 5", "if (i <> 5)", "if i =! 5 then"],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "How does a WHILE loop start?",
        options: [
          "while (i <= 10)",
          "while i = 1 to 10",
          "while (i <= 10; i++)",
          "while i <= 10",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "How does a FOR loop start?",
        options: [
          "for (i = 0; i <= 5; i++)",
          "for (i <= 5; i++)",
          "for i = 1 to 5",
          "for (i = 0; i <= 5)",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "How can you add a comment in JavaScript?",
        options: [
          "//This is a comment",
          "<!--This is a comment-->",
          "'This is a comment",
          "#This is a comment",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "How do you round the number 7.25 to the nearest integer?",
        options: [
          "Math.round(7.25)",
          "round(7.25)",
          "Math.rnd(7.25)",
          "rnd(7.25)",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question:
          "What is the correct JavaScript syntax for opening a new window?",
        options: [
          "window.open('URL')",
          "window.new('URL')",
          "open.window('URL')",
          "new.window('URL')",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "How do you declare a variable in JavaScript?",
        options: ["var myVar", "variable myVar", "v myVar", "declare myVar"],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "What is the correct way to write a JavaScript array?",
        options: [
          "var colors = ['red', 'green', 'blue']",
          "var colors = ('red', 'green', 'blue')",
          "var colors = {'red', 'green', 'blue'}",
          "var colors = red, green, blue",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question:
          "How do you access the first element of an array in JavaScript?",
        options: ["array[0]", "array.first()", "array(1)", "array[1]"],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "Which operator is used to assign a value to a variable?",
        options: ["==", "=", "===", ":="],
        correctAnswer: 1,
      },
      {
        id: 15,
        question: "What is the correct way to write a JavaScript string?",
        options: [
          "var text = 'Hello'",
          "var text = Hello",
          "var text = {Hello}",
          "var text = (Hello)",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "How do you find the length of a string in JavaScript?",
        options: [
          "string.length",
          "string.size()",
          "string.len()",
          "string.count()",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "Which JavaScript keyword is used to define a constant?",
        options: ["var", "let", "const", "constant"],
        correctAnswer: 2,
      },
      {
        id: 18,
        question: "How do you add an element to the end of an array?",
        options: [
          "array.push(element)",
          "array.add(element)",
          "array.append(element)",
          "array.insert(element)",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What will `typeof 'Hello'` return in JavaScript?",
        options: ["string", "text", "word", "char"],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "How do you write a multi-line comment in JavaScript?",
        options: [
          "/* This is a comment */",
          "// This is a comment",
          "<!-- This is a comment -->",
          "# This is a comment",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "Which method converts a string to uppercase in JavaScript?",
        options: ["toUpperCase()", "upperCase()", "toUpper()", "capitalize()"],
        correctAnswer: 0,
      },
      {
        id: 22,
        question:
          "What is the correct way to compare two values for equality in JavaScript?",
        options: ["=", "==", "===", ":="],
        correctAnswer: 2,
      },
      {
        id: 23,
        question:
          "How do you get a random number between 0 and 1 in JavaScript?",
        options: ["Math.random()", "random()", "Math.rnd()", "rnd()"],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "Which keyword is used to exit a loop in JavaScript?",
        options: ["stop", "break", "exit", "return"],
        correctAnswer: 1,
      },
      {
        id: 25,
        question: "How do you check if a variable is undefined in JavaScript?",
        options: [
          "typeof variable === 'undefined'",
          "variable === null",
          "variable == undefined",
          "isUndefined(variable)",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "What is the result of `5 + '5'` in JavaScript?",
        options: ["10", "55", "25", "NaN"],
        correctAnswer: 1,
      },
      {
        id: 27,
        question: "How do you select an HTML element by its ID in JavaScript?",
        options: [
          "document.getElementById('id')",
          "document.getId('id')",
          "document.findElement('id')",
          "document.selectId('id')",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What does the `alert()` function do in JavaScript?",
        options: [
          "Displays a message box",
          "Logs a message to the console",
          "Changes the page title",
          "Redirects to a new URL",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "How do you convert a string to a number in JavaScript?",
        options: [
          "Number(string)",
          "string.toNumber()",
          "parseString(string)",
          "toInt(string)",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "Which JavaScript method removes the last element from an array?",
        options: ["pop()", "remove()", "deleteLast()", "shift()"],
        correctAnswer: 0,
      },
    ],
  },

  // JavaScript Intermediate
  {
    id: "javascript-intermediate",
    technology: "javascript",
    difficulty: "intermediate",
    questions: [
      {
        id: 1,
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onmouseover", "onchange", "onclick", "onmouseclick"],
        correctAnswer: 2,
      },
      {
        id: 2,
        question: "How do you declare a JavaScript variable?",
        options: ["var x;", "variable x;", "x = variable;", "declare x;"],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "Which operator is used to assign a value to a variable?",
        options: ["*", "-", "=", "x"],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: "What will the following code return: Boolean(10 > 9)",
        options: ["true", "false", "NaN", "undefined"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is the correct way to write a JavaScript array?",
        options: [
          'var colors = (1:"red", 2:"green", 3:"blue")',
          'var colors = ["red", "green", "blue"]',
          'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
          'var colors = "red", "green", "blue"',
        ],
        correctAnswer: 1,
      },
      {
        id: 6,
        question:
          "How do you find the number with the highest value of two numbers?",
        options: [
          "Math.max(x, y)",
          "top(x, y)",
          "Math.ceil(x, y)",
          "ceil(x, y)",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "Which of the following is a JavaScript framework?",
        options: ["Django", "React", "Laravel", "Rails"],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "How do you create an object in JavaScript?",
        options: [
          'var person = {name:"John", age:30}',
          'var person = create({name:"John", age:30})',
          'var person = new Object({name:"John", age:30})',
          "Both A and C are correct",
        ],
        correctAnswer: 3,
      },
      {
        id: 9,
        question: "What is the output of: console.log(typeof [])?",
        options: ["array", "object", "undefined", "null"],
        correctAnswer: 1,
      },
      {
        id: 10,
        question:
          "Which method of an Array object adds one or more elements to the end of the array?",
        options: ["append()", "add()", "push()", "attachEnd()"],
        correctAnswer: 2,
      },
      {
        id: 11,
        question:
          "What does the 'this' keyword refer to in a JavaScript function?",
        options: [
          "The global object",
          "The function itself",
          "The object the function is a method of",
          "The parent function",
        ],
        correctAnswer: 2,
      },
      {
        id: 12,
        question: "How do you remove the last element from an array?",
        options: [
          "array.pop()",
          "array.shift()",
          "array.splice(-1)",
          "array.remove()",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "What is a closure in JavaScript?",
        options: [
          "A function with no parameters",
          "A function that has access to variables from its outer scope",
          "A method to lock variables",
          "A way to close a function",
        ],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "What is the output of: console.log(2 + '2')?",
        options: ["4", "22", "NaN", "undefined"],
        correctAnswer: 1,
      },
      {
        id: 15,
        question:
          "Which method converts a JSON string into a JavaScript object?",
        options: [
          "JSON.stringify()",
          "JSON.parse()",
          "JSON.convert()",
          "JSON.toObject()",
        ],
        correctAnswer: 1,
      },
      {
        id: 16,
        question: "What does the 'map' method do in JavaScript?",
        options: [
          "Removes elements from an array",
          "Creates a new array with the results of calling a function for every array element",
          "Sorts the array",
          "Merges two arrays",
        ],
        correctAnswer: 1,
      },
      {
        id: 17,
        question:
          "How do you prevent the default behavior of an event in JavaScript?",
        options: [
          "event.preventDefault()",
          "event.stopPropagation()",
          "event.cancel()",
          "event.stop()",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What is the purpose of the 'async' keyword?",
        options: [
          "To make a function synchronous",
          "To allow a function to return a Promise",
          "To pause execution of a function",
          "To run a function in a loop",
        ],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "What will 'null == undefined' return?",
        options: ["true", "false", "null", "undefined"],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "Which method is used to add an event listener to an element?",
        options: [
          "element.addEvent()",
          "element.on()",
          "element.addEventListener()",
          "element.attachEvent()",
        ],
        correctAnswer: 2,
      },
      {
        id: 21,
        question: "What does the 'filter' method do in JavaScript?",
        options: [
          "Creates a new array with elements that pass a test",
          "Modifies the original array",
          "Sorts the array",
          "Removes duplicates from an array",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What is the output of: console.log(!!'hello')?",
        options: ["true", "false", "'hello'", "undefined"],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "Which keyword is used to exit a loop in JavaScript?",
        options: ["stop", "break", "exit", "return"],
        correctAnswer: 1,
      },
      {
        id: 24,
        question: "What is the purpose of the 'Promise' object in JavaScript?",
        options: [
          "To handle synchronous operations",
          "To represent the eventual completion or failure of an asynchronous operation",
          "To store data permanently",
          "To create loops",
        ],
        correctAnswer: 1,
      },
      {
        id: 25,
        question: "What does 'document.querySelector()' do?",
        options: [
          "Selects all elements matching a CSS selector",
          "Selects the first element matching a CSS selector",
          "Creates a new element",
          "Removes an element",
        ],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "What is the output of: console.log([1, 2, 3].includes(2))?",
        options: ["true", "false", "2", "undefined"],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "What is the difference between 'let' and 'var'?",
        options: [
          "'let' is function-scoped, 'var' is block-scoped",
          "'let' is block-scoped, 'var' is function-scoped",
          "'let' cannot be reassigned, 'var' can",
          "There is no difference",
        ],
        correctAnswer: 1,
      },
      {
        id: 28,
        question: "What does the 'spread' operator (...) do?",
        options: [
          "Divides an array into parts",
          "Copies or expands elements of an array or object",
          "Merges two functions",
          "Removes elements from an array",
        ],
        correctAnswer: 1,
      },
      {
        id: 29,
        question: "What is the output of: console.log(0 == '0')?",
        options: ["true", "false", "NaN", "undefined"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "Which method is used to join all elements of an array into a string?",
        options: ["join()", "concat()", "merge()", "toString()"],
        correctAnswer: 0,
      },
    ],
  },

  // JavaScript Advanced
  {
    id: "javascript-advanced",
    technology: "javascript",
    difficulty: "advanced",
    questions: [
      {
        id: 1,
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: [
          "Refers to the current function",
          "Refers to the current object",
          "Refers to the parent object",
          "Refers to the window object",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "What is a closure in JavaScript?",
        options: [
          "A function with no parameters",
          "A function that has access to variables in its outer scope",
          "A function that returns undefined",
          "A function that closes the program",
        ],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "What is the purpose of the 'use strict' directive?",
        options: [
          "To enforce stricter parsing and error handling",
          "To make the code run faster",
          "To enable new JavaScript features",
          "To prevent the use of variables",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "What is the difference between '==' and '===' operators?",
        options: [
          "No difference",
          "'===' compares both value and type",
          "'==' is faster than '==='",
          "'===' only compares values",
        ],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "What is event bubbling in JavaScript?",
        options: [
          "A way to create multiple events",
          "When an event triggers on a child and propagates up through parents",
          "When events occur simultaneously",
          "A method to remove events",
        ],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "What is the purpose of Promise in JavaScript?",
        options: [
          "To make the code run faster",
          "To handle asynchronous operations",
          "To create loops",
          "To define variables",
        ],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "What is the difference between let and var?",
        options: [
          "No difference",
          "let has block scope, var has function scope",
          "var is faster than let",
          "let is used for constants",
        ],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "What is a generator function in JavaScript?",
        options: [
          "A function that generates random numbers",
          "A function that can be paused and resumed",
          "A function that creates other functions",
          "A function that only runs once",
        ],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "What is the purpose of the Symbol type in JavaScript?",
        options: [
          "To create unique identifiers",
          "To perform mathematical operations",
          "To convert strings to numbers",
          "To create arrays",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "What is the purpose of the Map object in JavaScript?",
        options: [
          "To create a list of numbers",
          "To store key-value pairs and maintain insertion order",
          "To perform mathematical calculations",
          "To create arrays",
        ],
        correctAnswer: 1,
      },
      {
        id: 11,
        question: "What is the prototype chain in JavaScript?",
        options: [
          "A sequence of objects linked via their prototype property",
          "A method to chain promises",
          "A way to chain function calls",
          "A chain of event listeners",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question:
          "What happens when you use 'new' with a function in JavaScript?",
        options: [
          "It creates a new function",
          "It creates a new object with the function as its constructor",
          "It calls the function immediately",
          "It throws an error",
        ],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "What is the purpose of the 'async/await' syntax?",
        options: [
          "To create synchronous code",
          "To simplify working with promises",
          "To optimize loops",
          "To handle errors in synchronous code",
        ],
        correctAnswer: 1,
      },
      {
        id: 14,
        question:
          "What is the output of: console.log([1, 2, 3].__proto__ === Array.prototype)?",
        options: ["true", "false", "undefined", "null"],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What is the difference between 'call' and 'apply' methods?",
        options: [
          "'call' takes arguments as an array, 'apply' takes them individually",
          "'apply' takes arguments as an array, 'call' takes them individually",
          "No difference",
          "'call' is faster than 'apply'",
        ],
        correctAnswer: 1,
      },
      {
        id: 16,
        question: "What is a WeakMap in JavaScript?",
        options: [
          "A map that allows only strings as keys",
          "A map where keys are weakly referenced and can be garbage collected",
          "A map that cannot be modified",
          "A map that stores only numbers",
        ],
        correctAnswer: 1,
      },
      {
        id: 17,
        question:
          "What is the purpose of the 'debounce' technique in JavaScript?",
        options: [
          "To delay function execution until after a specified time of inactivity",
          "To execute a function immediately",
          "To prevent memory leaks",
          "To optimize loops",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What is the output of: console.log(typeof Symbol())?",
        options: ["object", "symbol", "string", "undefined"],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "What is the purpose of the 'Object.defineProperty' method?",
        options: [
          "To create a new object",
          "To define or modify a property on an object",
          "To delete a property from an object",
          "To copy an object",
        ],
        correctAnswer: 1,
      },
      {
        id: 20,
        question: "What is event delegation in JavaScript?",
        options: [
          "Attaching multiple event listeners to an element",
          "Using a single event listener on a parent to handle events for children",
          "Preventing event propagation",
          "Creating custom events",
        ],
        correctAnswer: 1,
      },
      {
        id: 21,
        question: "What is the output of: console.log(0.1 + 0.2 === 0.3)?",
        options: ["true", "false", "NaN", "undefined"],
        correctAnswer: 1,
      },
      {
        id: 22,
        question: "What is the purpose of the 'Proxy' object in JavaScript?",
        options: [
          "To create a copy of an object",
          "To intercept and customize operations on an object",
          "To lock an object from modifications",
          "To optimize object performance",
        ],
        correctAnswer: 1,
      },
      {
        id: 23,
        question: "What is the difference between 'forEach' and 'map' methods?",
        options: [
          "'forEach' returns a new array, 'map' does not",
          "'map' returns a new array, 'forEach' does not",
          "No difference",
          "'forEach' is faster than 'map'",
        ],
        correctAnswer: 1,
      },
      {
        id: 24,
        question: "What is the purpose of the 'Reflect' object in JavaScript?",
        options: [
          "To create mirrors of objects",
          "To provide methods for interceptable JavaScript operations",
          "To optimize function calls",
          "To handle errors",
        ],
        correctAnswer: 1,
      },
      {
        id: 25,
        question:
          "What is the output of: console.log(Promise.resolve(1).then(() => 2).then(val => val))?",
        options: ["1", "2", "undefined", "Promise"],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "What is a memory leak in JavaScript, and how can it occur?",
        options: [
          "When variables are not declared",
          "When memory is not released after use, e.g., in event listeners",
          "When too many functions are called",
          "When arrays are too large",
        ],
        correctAnswer: 1,
      },
      {
        id: 27,
        question: "What is the purpose of the 'Object.freeze' method?",
        options: [
          "To make an object immutable",
          "To copy an object",
          "To delete an object",
          "To convert an object to a string",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question:
          "What is the output of: console.log([1, 2, 3].reduce((a, b) => a + b, 0))?",
        options: ["6", "123", "undefined", "0"],
        correctAnswer: 0,
      },
      {
        id: 29,
        question:
          "What is the purpose of the 'throttle' technique in JavaScript?",
        options: [
          "To limit the rate at which a function can fire",
          "To execute a function immediately",
          "To prevent memory leaks",
          "To pause function execution",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "What is the difference between 'Object.create' and 'new Object'?",
        options: [
          "'Object.create' allows specifying a prototype, 'new Object' does not",
          "'new Object' allows specifying a prototype, 'Object.create' does not",
          "No difference",
          "'Object.create' is faster than 'new Object'",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // Tailwind CSS Beginner
  {
    id: "tailwindcss-beginner",
    technology: "tailwindcss",
    difficulty: "beginner",
    questions: [
      {
        id: 1,
        question: "What is Tailwind CSS primarily used for?",
        options: [
          "Writing JavaScript functions",
          "Styling web pages with utility classes",
          "Managing database queries",
          "Creating server-side logic",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Which HTML attribute is used to apply Tailwind CSS styles?",
        options: ["style", "class", "id", "data"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question:
          "How do you set the background color to blue in Tailwind CSS?",
        options: ["bg-blue", "background-blue", "bg-blue-500", "color-blue"],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: "What does the Tailwind CSS class 'p-4' do?",
        options: [
          "Sets padding to 4 pixels",
          "Sets padding to 1rem (16px by default)",
          "Sets margin to 4 pixels",
          "Sets font size to 4rem",
        ],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "How do you center text horizontally in Tailwind CSS?",
        options: [
          "text-center",
          "align-center",
          "center-text",
          "text-align-center",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "Which Tailwind CSS class sets the font size to large?",
        options: ["font-lg", "text-lg", "size-large", "font-size-lg"],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "How do you make an element bold in Tailwind CSS?",
        options: ["font-bold", "text-bold", "bold", "font-weight-bold"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "What does the 'm-2' class do in Tailwind CSS?",
        options: [
          "Sets margin to 2 pixels",
          "Sets margin to 0.5rem (8px by default)",
          "Sets padding to 2 pixels",
          "Sets margin to 2rem",
        ],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "Which class adds a rounded border in Tailwind CSS?",
        options: ["border-round", "rounded", "border-radius", "round"],
        correctAnswer: 1,
      },
      {
        id: 10,
        question: "How do you apply a shadow to an element in Tailwind CSS?",
        options: ["shadow", "box-shadow", "shadow-md", "element-shadow"],
        correctAnswer: 2,
      },
      {
        id: 11,
        question: "What is the default file used to configure Tailwind CSS?",
        options: [
          "tailwind.config.js",
          "tailwind.css",
          "config.tailwind.js",
          "tailwind.json",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question:
          "Which class makes an element take the full width of its parent?",
        options: ["w-full", "width-full", "full-width", "w-100"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "How do you set the text color to red in Tailwind CSS?",
        options: ["color-red", "text-red", "text-red-500", "font-red"],
        correctAnswer: 2,
      },
      {
        id: 14,
        question: "What does the 'flex' class do in Tailwind CSS?",
        options: [
          "Sets display to flex",
          "Aligns items flexibly",
          "Stretches the element",
          "Adds flexible padding",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "How do you vertically center items in a flex container?",
        options: [
          "items-center",
          "align-center",
          "flex-center",
          "center-items",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "Which class hides an element in Tailwind CSS?",
        options: ["hidden", "display-none", "hide", "invisible"],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "How do you add a border to an element in Tailwind CSS?",
        options: ["border", "outline", "border-line", "edge"],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What does the 'gap-4' class do in a flex or grid container?",
        options: [
          "Sets gap between elements to 4 pixels",
          "Sets gap between elements to 1rem (16px by default)",
          "Sets padding to 4 pixels",
          "Sets margin to 1rem",
        ],
        correctAnswer: 1,
      },
      {
        id: 19,
        question:
          "Which class applies a hover effect to change text color to blue?",
        options: [
          "hover:text-blue-500",
          "text-blue:hover",
          "hover-blue-500",
          "text-hover-blue",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "How do you make an element italic in Tailwind CSS?",
        options: ["italic", "font-italic", "text-italic", "style-italic"],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "Which class sets the maximum width of an element to 100%?",
        options: ["max-w-full", "width-max", "max-width-100", "w-max"],
        correctAnswer: 0,
      },
      {
        id: 22,
        question:
          "How do you apply styles only on medium screens (md) and above?",
        options: ["md:style", "medium:style", "screen-md:style", "md-style"],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "What does the 'h-8' class do in Tailwind CSS?",
        options: [
          "Sets height to 8 pixels",
          "Sets height to 2rem (32px by default)",
          "Sets height to 8rem",
          "Sets height to 0.5rem (8px by default)",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "Which class aligns items horizontally to the right in a flex container?",
        options: ["justify-end", "align-right", "flex-right", "items-end"],
        correctAnswer: 0,
      },
      {
        id: 25,
        question:
          "How do you set the opacity of an element to 50% in Tailwind CSS?",
        options: ["opacity-50", "transparent-50", "opacity-half", "fade-50"],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "Which class adds a transition effect to an element?",
        options: ["transition", "animate", "transition-all", "effect"],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "How do you make text uppercase in Tailwind CSS?",
        options: [
          "uppercase",
          "text-uppercase",
          "font-uppercase",
          "transform-uppercase",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question:
          "What is the default breakpoint prefix for small screens in Tailwind CSS?",
        options: ["sm", "md", "lg", "xs"],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "Which class sets the cursor to a pointer on hover?",
        options: ["cursor-pointer", "pointer", "hover-pointer", "cursor-hand"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "How do you center a block element horizontally in Tailwind CSS?",
        options: ["mx-auto", "center-block", "margin-center", "block-center"],
        correctAnswer: 0,
      },
    ],
  },

  // Tailwind CSS Intermediate
  {
    id: "tailwindcss-intermediate",
    technology: "tailwindcss",
    difficulty: "intermediate",
    questions: [
      {
        id: 1,
        question:
          "How do you apply a Tailwind CSS class only on hover and focus states?",
        options: [
          "hover:focus:class",
          "hover:class focus:class",
          "state-hover-focus:class",
          "hover-focus:class",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question:
          "Which Tailwind CSS class creates a flexbox layout with items spaced evenly?",
        options: [
          "flex justify-between",
          "flex space-evenly",
          "flex justify-around",
          "flex distribute",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "How do you set a custom width of 10rem in Tailwind CSS?",
        options: ["w-10rem", "w-[10rem]", "width-10", "w-custom-10"],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "What does the 'sm:grid-cols-2' class do in Tailwind CSS?",
        options: [
          "Sets 2 columns for small screens and above",
          "Sets 2 columns for small screens only",
          "Sets 2 rows for small screens and above",
          "Sets 2 columns for all screen sizes",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question:
          "How do you apply a background gradient from blue to green in Tailwind CSS?",
        options: [
          "bg-gradient-to-r from-blue-500 to-green-500",
          "gradient-blue-green",
          "bg-blue-to-green",
          "bg-gradient blue-500 green-500",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "Which class aligns items to the bottom of a flex container?",
        options: ["items-end", "align-bottom", "flex-end", "items-bottom"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "How do you configure a custom color in tailwind.config.js?",
        options: [
          "colors: { custom: '#123456' }",
          "theme: { colors: { custom: '#123456' } }",
          "theme: { extend: { colors: { custom: '#123456' } } }",
          "customColors: { custom: '#123456' }",
        ],
        correctAnswer: 2,
      },
      {
        id: 8,
        question: "What does the 'divide-y' class do in Tailwind CSS?",
        options: [
          "Adds horizontal borders between child elements",
          "Adds vertical borders between child elements",
          "Divides the element into rows",
          "Sets a vertical gap between elements",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question:
          "How do you apply a style only when an element is the first child?",
        options: [
          "first:class",
          "child-first:class",
          "first-child:class",
          ":first:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "Which class creates a grid layout with 3 equal columns?",
        options: [
          "grid-cols-3",
          "grid columns-3",
          "grid-template-cols-3",
          "cols-3",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question:
          "How do you make an element fade in on hover using Tailwind CSS?",
        options: [
          "hover:opacity-100 transition-opacity",
          "hover:fade-in",
          "hover:opacity-50",
          "transition hover:opacity",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "What does the 'space-x-4' class do in Tailwind CSS?",
        options: [
          "Sets horizontal margin between child elements to 1rem",
          "Sets vertical padding to 4 pixels",
          "Sets horizontal padding to 1rem",
          "Sets vertical margin between child elements to 1rem",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question:
          "How do you apply a class only on large screens (lg) and above?",
        options: [
          "lg:class",
          "large:class",
          "screen-lg:class",
          "lg-screen:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question:
          "Which class rotates an element by 45 degrees in Tailwind CSS?",
        options: [
          "rotate-45",
          "transform-rotate-45",
          "rotation-45",
          "rotate-[45deg]",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question:
          "How do you set a custom font size of 2.5rem in Tailwind CSS?",
        options: [
          "text-2.5rem",
          "text-[2.5rem]",
          "font-size-2.5",
          "text-custom-2.5",
        ],
        correctAnswer: 1,
      },
      {
        id: 16,
        question: "What does the 'ring-2' class do in Tailwind CSS?",
        options: [
          "Adds a 2px outline around an element",
          "Adds a 2px shadow ring around an element",
          "Sets a 2px border radius",
          "Adds a 2px border",
        ],
        correctAnswer: 1,
      },
      {
        id: 17,
        question:
          "How do you apply styles only when an element is focused within a form?",
        options: [
          "focus-within:class",
          "form-focus:class",
          "focus:class",
          "within-focus:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question:
          "Which class sets the z-index of an element to 10 in Tailwind CSS?",
        options: ["z-10", "z-index-10", "stack-10", "layer-10"],
        correctAnswer: 0,
      },
      {
        id: 19,
        question:
          "How do you create a responsive container that spans 4 columns on large screens?",
        options: [
          "lg:col-span-4",
          "col-span-4 lg",
          "large:col-span-4",
          "col-4 lg:col-span-4",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "What does the 'tracking-tight' class do in Tailwind CSS?",
        options: [
          "Decreases letter spacing",
          "Increases letter spacing",
          "Sets tight line height",
          "Aligns text tightly",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question:
          "How do you apply a class only when the parent has a specific class like 'group'?",
        options: [
          "group-hover:class",
          "parent-hover:class",
          "group:class",
          "hover-parent:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "Which class adds a smooth scroll behavior in Tailwind CSS?",
        options: [
          "scroll-smooth",
          "smooth-scroll",
          "scroll-behavior-smooth",
          "scroll-auto",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question:
          "How do you extend the default spacing scale in tailwind.config.js?",
        options: [
          "spacing: { '10': '2.5rem' }",
          "theme: { spacing: { '10': '2.5rem' } }",
          "theme: { extend: { spacing: { '10': '2.5rem' } } }",
          "extend: { spacing: { '10': '2.5rem' } }",
        ],
        correctAnswer: 2,
      },
      {
        id: 24,
        question: "What does the 'aspect-square' class do in Tailwind CSS?",
        options: [
          "Sets a 1:1 aspect ratio",
          "Creates a square border",
          "Aligns elements in a square grid",
          "Sets equal padding",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "How do you apply a class only on dark mode in Tailwind CSS?",
        options: [
          "dark:class",
          "dark-mode:class",
          "theme-dark:class",
          "night:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question:
          "Which class scales an element to 125% of its original size in Tailwind CSS?",
        options: [
          "scale-125",
          "transform-scale-125",
          "size-125",
          "scale-[1.25]",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question:
          "How do you apply a class only for the last child element in Tailwind CSS?",
        options: [
          "last:class",
          "child-last:class",
          "last-child:class",
          ":last:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What does the 'backdrop-blur-md' class do in Tailwind CSS?",
        options: [
          "Applies a medium blur to the background behind an element",
          "Blurs the element itself",
          "Adds a medium shadow to the background",
          "Reduces background opacity",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "How do you set a custom gap of 3rem in a grid layout?",
        options: ["gap-3rem", "gap-[3rem]", "grid-gap-3", "gap-custom-3"],
        correctAnswer: 1,
      },
      {
        id: 30,
        question:
          "Which class centers a grid item both horizontally and vertically in Tailwind CSS?",
        options: [
          "place-self-center",
          "self-center",
          "center-grid",
          "justify-items-center",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // Tailwind CSS Advanced
  {
    id: "tailwindcss-advanced",
    technology: "tailwindcss",
    difficulty: "advanced",
    questions: [
      {
        id: 1,
        question:
          "How do you create a custom utility in a Tailwind CSS plugin?",
        options: [
          "module.exports = { utilities: { '.custom': { property: 'value' } } }",
          "module.exports = { plugins: [function({ addUtilities }) { addUtilities({ '.custom': { property: 'value' } }) }] }",
          "theme: { extend: { utilities: { custom: { property: 'value' } } } }",
          "plugins: { custom: { property: 'value' } }",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question:
          "Which Tailwind CSS directive is used to apply styles conditionally based on a parent’s state?",
        options: ["@apply", "@variants", "@group", "@container"],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: "How do you enable JIT (Just-In-Time) mode in Tailwind CSS?",
        options: [
          "mode: 'jit' in tailwind.config.js",
          "jit: true in tailwind.config.js",
          "enableJit: true in tailwind.config.js",
          "theme: { jit: true } in tailwind.config.js",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question:
          "What does the 'supports-[feature]' variant do in Tailwind CSS?",
        options: [
          "Applies styles if a CSS feature is supported",
          "Checks for browser compatibility",
          "Enables feature flags in Tailwind",
          "Adds support for custom utilities",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question:
          "How do you apply a custom CSS property using arbitrary values in Tailwind CSS?",
        options: [
          "[--custom: value]",
          "custom-[--custom: value]",
          "[custom: value]",
          "style-[--custom: value]",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question:
          "Which class creates a grid with a variable number of columns based on content?",
        options: [
          "grid-cols-auto",
          "grid-flow-col",
          "grid-cols-minmax",
          "auto-cols-auto",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "How do you purge unused Tailwind CSS classes in production?",
        options: [
          "purge: ['./src/**/*.{html,js}'] in tailwind.config.js",
          "clean: ['./src/**/*.{html,js}'] in tailwind.config.js",
          "optimize: ['./src/**/*.{html,js}'] in tailwind.config.js",
          "remove: ['./src/**/*.{html,js}'] in tailwind.config.js",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question:
          "What does the 'peer-checked:class' variant do in Tailwind CSS?",
        options: [
          "Applies styles when a peer element is checked",
          "Checks the peer element’s state",
          "Applies styles to checked elements",
          "Targets the parent of a checked element",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question:
          "How do you apply a class conditionally based on a custom media query?",
        options: [
          "[@media (min-width: 800px)]:class",
          "media-[min-width:800px]:class",
          "[min-width:800px]:class",
          "custom-media:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question:
          "Which class ensures a flex item grows to fill available space?",
        options: ["flex-grow", "grow", "flex-expand", "expand"],
        correctAnswer: 1,
      },
      {
        id: 11,
        question: "How do you add a custom screen size in tailwind.config.js?",
        options: [
          "screens: { 'custom': '800px' }",
          "theme: { screens: { 'custom': '800px' } }",
          "theme: { extend: { screens: { 'custom': '800px' } } }",
          "customScreens: { 'custom': '800px' }",
        ],
        correctAnswer: 2,
      },
      {
        id: 12,
        question:
          "What does the 'motion-safe:class' variant do in Tailwind CSS?",
        options: [
          "Applies styles only if reduced motion is disabled",
          "Ensures animations are safe for all users",
          "Applies styles for motion-based transitions",
          "Disables animations for accessibility",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question:
          "How do you create a custom transition timing function in Tailwind CSS?",
        options: [
          "transitionTimingFunction: { custom: 'cubic-bezier(0.4, 0, 0.2, 1)' }",
          "theme: { extend: { transitionTimingFunction: { custom: 'cubic-bezier(0.4, 0, 0.2, 1)' } } }",
          "timing: { custom: 'cubic-bezier(0.4, 0, 0.2, 1)' }",
          "transition: { custom: 'cubic-bezier(0.4, 0, 0.2, 1)' }",
        ],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "Which class applies a clip-path to create a circular shape?",
        options: [
          "clip-circle",
          "[clip-path:circle()]",
          "clip-path-circle",
          "circle-clip",
        ],
        correctAnswer: 1,
      },
      {
        id: 15,
        question:
          "How do you apply styles only when an element is in a specific orientation?",
        options: [
          "orientation-[portrait]:class",
          "portrait:class",
          "screen-orientation:class",
          "[orientation:portrait]:class",
        ],
        correctAnswer: 1,
      },
      {
        id: 16,
        question: "What does the 'content-none' class do in Tailwind CSS?",
        options: [
          "Removes the content of a pseudo-element",
          "Hides the element’s content",
          "Clears the content property",
          "Disables content alignment",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question:
          "How do you create a custom utility for a CSS filter in a Tailwind plugin?",
        options: [
          "addUtilities({ '.filter-custom': { filter: 'blur(5px)' } })",
          "addFilter({ '.filter-custom': { filter: 'blur(5px)' } })",
          "utilities: { filter: { custom: 'blur(5px)' } }",
          "theme: { filter: { custom: 'blur(5px)' } }",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question:
          "Which class applies styles to an element when it’s the only child?",
        options: [
          "only:class",
          "single:class",
          "only-child:class",
          ":only:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question:
          "How do you optimize Tailwind CSS for faster builds in a large project?",
        options: [
          "Enable JIT mode and configure purge",
          "Disable all variants",
          "Use inline CSS instead of Tailwind",
          "Remove tailwind.config.js",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "What does the 'aria-checked:class' variant do in Tailwind CSS?",
        options: [
          "Applies styles when an element has aria-checked='true'",
          "Checks ARIA attributes",
          "Applies styles to checked inputs",
          "Targets ARIA-labeled elements",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "How do you apply a class only when printing a page?",
        options: [
          "print:class",
          "[@media print]:class",
          "media-print:class",
          "print-only:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question:
          "Which class creates a grid with a minimum column width of 200px?",
        options: [
          "grid-cols-minmax-200",
          "auto-cols-min-[200px]",
          "grid-cols-[minmax(200px, 1fr)]",
          "cols-min-200",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "How do you extend Tailwind’s default opacity scale?",
        options: [
          "opacity: { '15': '0.15' }",
          "theme: { opacity: { '15': '0.15' } }",
          "theme: { extend: { opacity: { '15': '0.15' } } }",
          "extend: { opacity: { '15': '0.15' } }",
        ],
        correctAnswer: 2,
      },
      {
        id: 24,
        question:
          "What does the 'forced-color-adjust-auto' class do in Tailwind CSS?",
        options: [
          "Adjusts colors for forced color modes",
          "Forces a specific color scheme",
          "Auto-corrects color contrast",
          "Disables color adjustments",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question:
          "How do you apply a class only when an element is in a specific scroll position?",
        options: [
          "scroll-[top]:class",
          "[scroll-position:top]:class",
          "scroll-top:class",
          "sticky:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question:
          "Which class creates a smooth animation for transform and opacity changes?",
        options: [
          "transition-transform-opacity",
          "transition-all",
          "animate-transform-opacity",
          "transition",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question:
          "How do you add a custom keyframe animation in tailwind.config.js?",
        options: [
          "keyframes: { custom: { '0%': { opacity: 0 }, '100%': { opacity: 1 } } }",
          "theme: { extend: { keyframes: { custom: { '0%': { opacity: 0 }, '100%': { opacity: 1 } } } } }",
          "animations: { custom: { '0%': { opacity: 0 }, '100%': { opacity: 1 } } }",
          "extend: { animation: { custom: { '0%': { opacity: 0 }, '100%': { opacity: 1 } } } }",
        ],
        correctAnswer: 1,
      },
      {
        id: 28,
        question:
          "What does the 'has-[selector]:class' variant do in Tailwind CSS?",
        options: [
          "Applies styles if an element contains a matching selector",
          "Targets elements with specific attributes",
          "Checks for child elements",
          "Applies styles to parent elements",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question: "How do you apply a class only for high-contrast mode?",
        options: [
          "high-contrast:class",
          "[@media (forced-colors: active)]:class",
          "contrast:class",
          "media-contrast:class",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "Which class ensures a grid item spans across all available tracks?",
        options: ["col-span-full", "span-all", "grid-span-full", "col-full"],
        correctAnswer: 0,
      },
    ],
  },

  // Sass Beginner
  {
    id: "sass-beginner",
    technology: "sass",
    difficulty: "beginner",
    questions: [
      {
        id: 1,
        question: "What is Sass primarily used for?",
        options: [
          "JavaScript programming",
          "CSS preprocessing",
          "HTML templating",
          "Database management",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Which file extension is commonly used for Sass files?",
        options: [".css", ".scss", ".sass", "Both .scss and .sass"],
        correctAnswer: 3,
      },
      {
        id: 3,
        question: "How do you define a variable in Sass?",
        options: [
          "$variable: value;",
          "var variable = value;",
          "@variable: value;",
          "#variable: value;",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "What is the correct syntax to use a Sass variable?",
        options: ["{variable}", "$variable", "@variable", "%variable"],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "Which symbol is used for nesting selectors in Sass?",
        options: ["&", ">", "#", "@"],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "What does the `&` symbol represent in Sass nesting?",
        options: [
          "Child selector",
          "Parent selector",
          "Sibling selector",
          "Class selector",
        ],
        correctAnswer: 1,
      },
      {
        id: 7,
        question:
          "How do you write a comment in Sass that won’t appear in the compiled CSS?",
        options: [
          "// comment",
          "/* comment */",
          "# comment",
          "<!-- comment -->",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "What is the purpose of a Sass mixin?",
        options: [
          "To store variables",
          "To reuse a group of CSS declarations",
          "To import files",
          "To define loops",
        ],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "How do you define a mixin in Sass?",
        options: [
          "@mixin name { }",
          "@function name { }",
          "@define name { }",
          "@mix name { }",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "How do you include a mixin in Sass?",
        options: [
          "@include name;",
          "@use name;",
          "@apply name;",
          "@mixin name;",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "What does the `@import` directive do in Sass?",
        options: [
          "Imports JavaScript files",
          "Imports other Sass files",
          "Imports fonts",
          "Imports images",
        ],
        correctAnswer: 1,
      },
      {
        id: 12,
        question:
          "Which Sass feature allows one selector to inherit styles from another?",
        options: ["@extend", "@mixin", "@inherit", "@include"],
        correctAnswer: 0,
      },
      {
        id: 13,
        question:
          "What is the output of `$color: red; div { color: $color; }` after compilation?",
        options: [
          "div { color: $color; }",
          "div { color: red; }",
          "div { $color: red; }",
          "div { color: none; }",
        ],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "Which operator is used for addition in Sass?",
        options: ["+", "&", "++", "#"],
        correctAnswer: 0,
      },
      {
        id: 15,
        question:
          "How do you write a multi-line comment in Sass that appears in the compiled CSS?",
        options: [
          "// comment",
          "/* comment */",
          "# comment",
          "<!-- comment -->",
        ],
        correctAnswer: 1,
      },
      {
        id: 16,
        question: "What is the purpose of the `@function` directive in Sass?",
        options: [
          "To define reusable styles",
          "To create custom calculations",
          "To import files",
          "To nest selectors",
        ],
        correctAnswer: 1,
      },
      {
        id: 17,
        question:
          "Which keyword is used to return a value from a Sass function?",
        options: ["@return", "@yield", "@output", "@result"],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "How do you apply a parent selector suffix in Sass nesting?",
        options: ["&-suffix", "$-suffix", "@suffix", "#suffix"],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "What does the `@if` directive do in Sass?",
        options: [
          "Loops through values",
          "Conditionally applies styles",
          "Imports files",
          "Defines variables",
        ],
        correctAnswer: 1,
      },
      {
        id: 20,
        question: "How do you compile Sass code into CSS?",
        options: [
          "Using a text editor",
          "Using a Sass compiler",
          "Using a browser",
          "Using HTML",
        ],
        correctAnswer: 1,
      },
      {
        id: 21,
        question:
          "What is the difference between `.scss` and `.sass` file extensions?",
        options: [
          "`.scss` uses curly braces, `.sass` uses indentation",
          "`.scss` is for CSS, `.sass` is for Sass",
          "`.scss` is deprecated, `.sass` is modern",
          "No difference",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "How do you pass an argument to a mixin in Sass?",
        options: [
          "@mixin name($arg) { }",
          "@mixin name: $arg { }",
          "@mixin name => $arg { }",
          "@mixin name[$arg] { }",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question:
          "Which Sass feature allows you to loop through a list of values?",
        options: ["@for", "@while", "@each", "All of the above"],
        correctAnswer: 3,
      },
      {
        id: 24,
        question: "What does the `@else` directive do in Sass?",
        options: [
          "Starts a loop",
          "Provides an alternative condition",
          "Includes a mixin",
          "Imports a file",
        ],
        correctAnswer: 1,
      },
      {
        id: 25,
        question: "How do you interpolate a variable in a Sass string?",
        options: [
          "#{$variable}",
          "${variable}",
          "@{$variable}",
          "%{$variable}",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question:
          "What is the default value of a Sass variable if not specified?",
        options: ["null", "0", "none", "undefined"],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "Which directive is used to include external Sass libraries?",
        options: ["@use", "@import", "@require", "@load"],
        correctAnswer: 0,
      },
      {
        id: 28,
        question:
          "What happens if you use `@extend` on a selector that doesn’t exist?",
        options: [
          "Sass throws an error",
          "The style is ignored",
          "The CSS compiles with no output",
          "The selector is created",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question:
          "How do you define a default value for a mixin argument in Sass?",
        options: [
          "$arg: value",
          "$arg = value",
          "$arg => value",
          "$arg default value",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "What is the purpose of the `!default` flag in Sass variables?",
        options: [
          "Forces variable override",
          "Sets a value only if the variable is undefined",
          "Makes the variable global",
          "Prevents variable usage",
        ],
        correctAnswer: 1,
      },
    ],
  },

  // Sass Intermediate
  {
    id: "sass-intermediate",
    technology: "sass",
    difficulty: "intermediate",
    questions: [
      {
        id: 1,
        question:
          "How do you use the `@use` directive in Sass to import a module?",
        options: [
          "@use 'module';",
          "@use module;",
          "@import 'module';",
          "@use module as *;",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question:
          "What is the purpose of the `as` keyword in the `@use` directive?",
        options: [
          "To rename the module namespace",
          "To specify a file extension",
          "To apply a condition",
          "To include a mixin",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question:
          "How do you access a variable from a module imported with `@use 'module' as mod`?",
        options: [
          "$module.variable",
          "$mod.variable",
          "$variable",
          "module.$variable",
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "What does the `@forward` directive do in Sass?",
        options: [
          "Exports variables to JavaScript",
          "Forwards a module’s members to other files",
          "Includes a mixin",
          "Loops through values",
        ],
        correctAnswer: 1,
      },
      {
        id: 5,
        question:
          "How do you conditionally include a mixin based on an argument?",
        options: [
          "@if $arg { @include mixin; }",
          "@include mixin if $arg;",
          "@mixin $arg { @include; }",
          "@if $arg => @include mixin;",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question:
          "What is the output of `$num: 10; div { width: $num * 2px; }` after compilation?",
        options: [
          "div { width: 20px; }",
          "div { width: 10 * 2px; }",
          "div { width: 20; }",
          "div { width: $num * 2px; }",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question:
          "How do you create a mixin that accepts multiple arguments in Sass?",
        options: [
          "@mixin name($arg1, $arg2) { }",
          "@mixin name($arg1 $arg2) { }",
          "@mixin name[$arg1, $arg2] { }",
          "@mixin name($arg1; $arg2) { }",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "What is the purpose of the `content` block in a mixin?",
        options: [
          "To define variables",
          "To allow custom styles to be passed into the mixin",
          "To import files",
          "To loop through values",
        ],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "How do you include a content block in a mixin?",
        options: ["@content;", "@include content;", "@block;", "@yield;"],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "What does the `@each` directive do in Sass?",
        options: [
          "Iterates over a list or map",
          "Conditionally applies styles",
          "Defines a function",
          "Imports a module",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question:
          "How do you write a `@for` loop in Sass to iterate from 1 to 5?",
        options: [
          "@for $i from 1 to 5 { }",
          "@for $i from 1 through 5 { }",
          "@for $i in 1 to 5 { }",
          "@for $i = 1 to 5 { }",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question:
          "What is the difference between `@for ... to` and `@for ... through` in Sass?",
        options: [
          "`to` excludes the end value, `through` includes it",
          "`to` includes the end value, `through` excludes it",
          "`to` is for lists, `through` is for maps",
          "No difference",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "How do you access a value in a Sass map?",
        options: [
          "map-get($map, key)",
          "$map[key]",
          "$map.key",
          "map($map, key)",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "What is the purpose of the `!global` flag in Sass?",
        options: [
          "Makes a variable accessible outside its scope",
          "Prevents variable override",
          "Sets a default value",
          "Exports a variable to CSS",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "How do you merge two Sass maps?",
        options: [
          "map-merge($map1, $map2)",
          "$map1 + $map2",
          "merge($map1, $map2)",
          "map($map1, $map2)",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "What happens when you use `@extend` inside a media query?",
        options: [
          "It works normally",
          "Sass throws an error",
          "The styles are ignored",
          "The media query is ignored",
        ],
        correctAnswer: 1,
      },
      {
        id: 17,
        question: "How do you define a placeholder selector in Sass?",
        options: [
          "%selector { }",
          "#selector { }",
          ".selector { }",
          "@selector { }",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question:
          "What is the benefit of using placeholder selectors with `@extend`?",
        options: [
          "They reduce compiled CSS size",
          "They allow dynamic variables",
          "They enable loops",
          "They import modules",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "How do you perform string interpolation in a Sass selector?",
        options: [
          ".#{$var} { }",
          ".${var} { }",
          ".@{$var} { }",
          ".%{$var} { }",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "What does the `darken($color, $amount)` function do in Sass?",
        options: [
          "Lightens a color",
          "Darkens a color",
          "Changes opacity",
          "Inverts a color",
        ],
        correctAnswer: 1,
      },
      {
        id: 21,
        question: "How do you check if a value exists in a Sass list?",
        options: [
          "index($list, $value)",
          "list-contains($list, $value)",
          "$list[$value]",
          "has($list, $value)",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What is the purpose of the `@while` directive in Sass?",
        options: [
          "Conditionally applies styles",
          "Loops until a condition is false",
          "Imports modules",
          "Defines a function",
        ],
        correctAnswer: 1,
      },
      {
        id: 23,
        question:
          "How do you create a function in Sass that returns a calculated value?",
        options: [
          "@function name($arg) { @return $arg * 2; }",
          "@mixin name($arg) { @return $arg * 2; }",
          "@function name($arg) { $arg * 2; }",
          "@return name($arg) { $arg * 2; }",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "What does the `if($condition, $true, $false)` function do in Sass?",
        options: [
          "Returns $true if $condition is true, otherwise $false",
          "Loops through values",
          "Merges maps",
          "Imports files",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question:
          "How do you apply a default namespace to a module with `@use`?",
        options: [
          "@use 'module' as *;",
          "@use 'module' with default;",
          "@use 'module' namespace;",
          "@use 'module' global;",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "What is the purpose of the `meta` module in Sass?",
        options: [
          "Provides utility functions for inspecting Sass",
          "Handles color calculations",
          "Manages loops",
          "Imports external files",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "How do you use the `meta.call()` function in Sass?",
        options: [
          "To invoke a function dynamically",
          "To import a module",
          "To loop through a list",
          "To merge maps",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What does the `selector-nest()` function do in Sass?",
        options: [
          "Combines multiple selectors",
          "Removes a selector",
          "Checks selector validity",
          "Exports a selector",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question:
          "How do you handle vendor prefixes in Sass for cross-browser compatibility?",
        options: [
          "Use a mixin with prefixes",
          "Sass automatically adds prefixes",
          "Use @prefix directive",
          "Use @vendor directive",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "What is the benefit of using `@use` over `@import` in modern Sass?",
        options: [
          "Better namespace management",
          "Faster compilation",
          "Smaller CSS output",
          "Simpler syntax",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // Sass Advanced
  {
    id: "sass-advanced",
    technology: "sass",
    difficulty: "advanced",
    questions: [
      {
        id: 1,
        question:
          "How does the `@use` directive with `with` clause configure module variables?",
        options: [
          "@use 'module' with ($var: value);",
          "@use 'module' configure ($var: value);",
          "@use 'module' set ($var: value);",
          "@use 'module' vars ($var: value);",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question:
          "What is the purpose of the `meta.load-css()` function in Sass?",
        options: [
          "Dynamically imports and evaluates a CSS module",
          "Loads a JavaScript file",
          "Compiles Sass to CSS",
          "Merges multiple maps",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question:
          "How do you prevent a module’s members from being forwarded with `@forward`?",
        options: [
          "Use `hide` keyword",
          "Use `private` keyword",
          "Use `exclude` keyword",
          "Use `restrict` keyword",
        ],
        correctAnswer: 0,
      },
      {
        id: 4,
        question:
          "What does the `meta.feature-exists()` function check in Sass?",
        options: [
          "Availability of a Sass feature",
          "Browser support for a CSS property",
          "Existence of a variable",
          "Validity of a selector",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "How do you create a custom error in Sass?",
        options: [
          "@error 'message';",
          "@throw 'message';",
          "@warn 'message';",
          "@exception 'message';",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question:
          "What is the output of `selector-append('.a', '.b')` in Sass?",
        options: [".a.b", ".a .b", ".a, .b", ".a + .b"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question:
          "How do you check the type of a value in Sass using the `meta` module?",
        options: [
          "meta.type-of($value)",
          "meta.get-type($value)",
          "meta.value-type($value)",
          "meta.check-type($value)",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question:
          "What is the purpose of the `meta.inspect()` function in Sass?",
        options: [
          "Converts a value to a string for debugging",
          "Validates a CSS property",
          "Merges two maps",
          "Loops through a list",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question:
          "How do you dynamically generate a selector using `selector-unify()`?",
        options: [
          "selector-unify('.a', '.b')",
          "selector-merge('.a', '.b')",
          "selector-combine('.a', '.b')",
          "selector-join('.a', '.b')",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "What does the `math.div()` function do in Sass?",
        options: [
          "Performs division, preserving units",
          "Rounds a number",
          "Calculates a percentage",
          "Converts units",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question: "How do you optimize Sass compilation for large projects?",
        options: [
          "Use `@use` instead of `@import`",
          "Increase variable usage",
          "Avoid nesting selectors",
          "Use inline CSS",
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "What is the purpose of the `unique-id()` function in Sass?",
        options: [
          "Generates a unique identifier",
          "Creates a random color",
          "Validates a selector",
          "Merges maps",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question: "How do you handle deprecated Sass features in a codebase?",
        options: [
          "Use `@warn` to log deprecation",
          "Use `@error` to stop compilation",
          "Use `@debug` to trace issues",
          "Ignore warnings",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question:
          "What is the benefit of using `map.remove()` over `map-get()` in Sass?",
        options: [
          "Removes a key-value pair from a map",
          "Retrieves a value faster",
          "Merges two maps",
          "Validates map keys",
        ],
        correctAnswer: 0,
      },
      {
        id: 15,
        question:
          "How do you create a mixin that supports variable arguments in Sass?",
        options: [
          "@mixin name($args...) { }",
          "@mixin name($args*) { }",
          "@mixin name($args[]) { }",
          "@mixin name($args: all) { }",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question:
          "What does the `meta.global-variable-exists()` function check?",
        options: [
          "If a global variable is defined",
          "If a local variable is defined",
          "If a module is imported",
          "If a function exists",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "How do you use the `color.adjust()` function in Sass?",
        options: [
          "Modifies specific color properties",
          "Converts a color to grayscale",
          "Inverts a color",
          "Merges two colors",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What is the purpose of the `@debug` directive in Sass?",
        options: [
          "Logs information to the console for debugging",
          "Throws an error",
          "Imports a module",
          "Optimizes compilation",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question: "How do you implement a custom unit conversion in Sass?",
        options: [
          "Create a function with `math.div()` and unit handling",
          "Use `unit-convert()` built-in function",
          "Use `@extend` with units",
          "Use `map-get()` for units",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "What does the `selector.is-superselector()` function do in Sass?",
        options: [
          "Checks if one selector matches or contains another",
          "Combines two selectors",
          "Validates a selector",
          "Removes a selector",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "How do you namespace a forwarded module with `@forward`?",
        options: [
          "@forward 'module' as prefix-*;",
          "@forward 'module' namespace prefix;",
          "@forward 'module' with prefix;",
          "@forward 'module' as *;",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What is the purpose of the `list.slash()` function in Sass?",
        options: [
          "Joins lists with a slash separator",
          "Splits a list",
          "Merges two lists",
          "Removes an item from a list",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question: "How do you integrate Sass with a CSS-in-JS workflow?",
        options: [
          "Compile Sass to CSS and import in JS",
          "Use Sass directly in JS",
          "Convert Sass to JavaScript",
          "Use `@extend` in JS",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "What is the benefit of using `meta.call()` over direct function invocation?",
        options: [
          "Allows dynamic function calls",
          "Improves performance",
          "Simplifies syntax",
          "Merges maps",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "How do you handle browser-specific hacks in Sass?",
        options: [
          "Use mixins with conditional prefixes",
          "Use `@hack` directive",
          "Use `browser()` function",
          "Use `@extend` for hacks",
        ],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "What does the `string.quote()` function do in Sass?",
        options: [
          "Wraps a string in quotes",
          "Removes quotes from a string",
          "Converts a string to uppercase",
          "Splits a string",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "How do you create a reusable breakpoint system in Sass?",
        options: [
          "Use a map and mixin for breakpoints",
          "Use `@extend` for breakpoints",
          "Use `breakpoint()` function",
          "Use lists for breakpoints",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What is the purpose of the `math.unit()` function in Sass?",
        options: [
          "Extracts the unit of a number",
          "Converts units",
          "Rounds a number",
          "Merges units",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question:
          "How do you avoid selector bloat when using `@extend` in large projects?",
        options: [
          "Use placeholder selectors and limit `@extend` usage",
          "Use `@import` instead",
          "Use variables for selectors",
          "Use `@use` for selectors",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "What is the benefit of using the Sass module system for large-scale projects?",
        options: [
          "Encourages encapsulation and reduces naming conflicts",
          "Increases compilation speed",
          "Simplifies CSS output",
          "Eliminates variables",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // Bootstrap Beginner
  {
    id: "bootstrap-beginner",
    technology: "bootstrap",
    difficulty: "beginner",
    questions: [
      {
        id: 1,
        question: "What is Bootstrap primarily used for?",
        options: [
          "Server-side scripting",
          "Frontend framework for responsive design",
          "Database management",
          "Backend API development",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question:
          "Which class is used to create a responsive container in Bootstrap?",
        options: ["container", "box", "wrapper", "container-fluid"],
        correctAnswer: 0,
      },
      {
        id: 3,
        question:
          "How many columns does Bootstrap's grid system use by default?",
        options: ["6", "8", "10", "12"],
        correctAnswer: 3,
      },
      {
        id: 4,
        question: "Which Bootstrap class is used to create a primary button?",
        options: ["btn-primary", "button-primary", "btn-blue", "primary-btn"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question:
          "What is the correct way to include Bootstrap CSS in an HTML file?",
        options: [
          "link-bootstrap",
          "bootstrap.css",
          "bootstrap.min.css",
          '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">',
        ],
        correctAnswer: 3,
      },
      {
        id: 6,
        question: "Which class is used to make text bold in Bootstrap?",
        options: ["text-bold", "font-weight-bold", "bold", "text-strong"],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "What does the `col-md-6` class mean in Bootstrap?",
        options: [
          "6 columns on mobile devices",
          "6 columns on medium and larger screens",
          "6 rows on medium screens",
          "6 pixels width",
        ],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "Which Bootstrap class creates a responsive navbar?",
        options: ["navbar", "nav-bar", "navigation", "menu"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question:
          "Which class is used to center an element horizontally in Bootstrap?",
        options: ["center", "mx-auto", "align-center", "text-center"],
        correctAnswer: 1,
      },
      {
        id: 10,
        question: "What is the purpose of the `row` class in Bootstrap?",
        options: [
          "To create a horizontal line",
          "To group columns in the grid system",
          "To add padding",
          "To align text",
        ],
        correctAnswer: 1,
      },
      {
        id: 11,
        question: "Which Bootstrap class is used to create a card component?",
        options: ["card", "box", "panel", "container-card"],
        correctAnswer: 0,
      },
      {
        id: 12,
        question: "What does the `d-none` class do in Bootstrap?",
        options: [
          "Displays an element",
          "Hides an element",
          "Centers an element",
          "Makes text bold",
        ],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "Which class is used to create a success alert in Bootstrap?",
        options: [
          "alert-success",
          "alert-green",
          "success-alert",
          "alert-primary",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question: "How do you make an image responsive in Bootstrap?",
        options: [
          "img-responsive",
          "img-fluid",
          "image-responsive",
          "img-full",
        ],
        correctAnswer: 1,
      },
      {
        id: 15,
        question:
          "Which class is used to add margin to all sides of an element?",
        options: ["m-3", "margin-all", "p-3", "spacing-3"],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "What is the purpose of the `btn` class in Bootstrap?",
        options: [
          "To style buttons",
          "To create a badge",
          "To align text",
          "To add a border",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "Which class is used to create a large button in Bootstrap?",
        options: ["btn-lg", "btn-large", "large-btn", "btn-xl"],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What does the `col` class without a size specifier do?",
        options: [
          "Takes up 1 column",
          "Takes up remaining space equally",
          "Centers the column",
          "Hides the column",
        ],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "Which class is used to create a badge in Bootstrap?",
        options: ["badge", "tag", "label", "marker"],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "What is the purpose of the `container-fluid` class?",
        options: [
          "Creates a fixed-width container",
          "Creates a full-width container",
          "Centers text",
          "Adds padding",
        ],
        correctAnswer: 1,
      },
      {
        id: 21,
        question: "Which class is used to create a dropdown menu in Bootstrap?",
        options: ["dropdown", "menu", "drop-menu", "select"],
        correctAnswer: 0,
      },
      {
        id: 22,
        question: "What does the `text-primary` class do in Bootstrap?",
        options: [
          "Sets text to bold",
          "Sets text to the primary color",
          "Centers text",
          "Underlines text",
        ],
        correctAnswer: 1,
      },
      {
        id: 23,
        question:
          "Which class is used to create a rounded button in Bootstrap?",
        options: ["btn-round", "btn-rounded", "rounded", "btn-circle"],
        correctAnswer: 2,
      },
      {
        id: 24,
        question:
          "What is the purpose of the `form-control` class in Bootstrap?",
        options: [
          "To style form inputs",
          "To align forms",
          "To create buttons",
          "To add margins",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question:
          "Which class is used to create a responsive table in Bootstrap?",
        options: [
          "table",
          "table-responsive",
          "responsive-table",
          "table-fluid",
        ],
        correctAnswer: 1,
      },
      {
        id: 26,
        question: "What does the `p-3` class do in Bootstrap?",
        options: [
          "Adds padding to all sides",
          "Adds margin to all sides",
          "Sets font size",
          "Centers an element",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question: "Which class is used to create a modal in Bootstrap?",
        options: ["modal", "popup", "dialog", "window"],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What is the purpose of the `bg-primary` class in Bootstrap?",
        options: [
          "Sets the background to transparent",
          "Sets the background to the primary color",
          "Adds a border",
          "Centers the element",
        ],
        correctAnswer: 1,
      },
      {
        id: 29,
        question: "Which class is used to create a list group in Bootstrap?",
        options: ["list-group", "group-list", "list", "item-group"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "What does the `align-items-center` class do in a flex container?",
        options: [
          "Aligns items vertically in the center",
          "Aligns items horizontally in the center",
          "Stretches items to fill the container",
          "Spaces items evenly",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // Bootstrap Intermediate
  {
    id: "bootstrap-intermediate",
    technology: "bootstrap",
    difficulty: "intermediate",
    questions: [
      {
        id: 1,
        question:
          "Which Bootstrap class is used to make a column span 6 columns on medium screens and 12 columns on small screens?",
        options: [
          "col-md-6 col-sm-12",
          "col-6 col-12",
          "col-md-6 col-12",
          "col-sm-6 col-md-12",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "What does the `order-md-2` class do in Bootstrap?",
        options: [
          "Changes the order of a flex item to 2 on medium and larger screens",
          "Sets the margin to 2 on medium screens",
          "Aligns items to the second position",
          "Changes the column width to 2",
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question:
          "Which class is used to create a sticky-top navbar in Bootstrap?",
        options: ["sticky-top", "fixed-top", "navbar-sticky", "top-sticky"],
        correctAnswer: 0,
      },
      {
        id: 4,
        question:
          "How do you disable a button in Bootstrap while maintaining its styling?",
        options: [
          "Add the `disabled` attribute",
          "Use `btn-disabled` class",
          "Set `opacity: 0.5`",
          "Use `btn-block` class",
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question:
          "Which class is used to align a navbar's content to the right?",
        options: ["ms-auto", "me-auto", "ml-auto", "justify-content-end"],
        correctAnswer: 0,
      },
      {
        id: 6,
        question: "What is the purpose of the `d-md-none` class in Bootstrap?",
        options: [
          "Hides an element on medium and larger screens",
          "Displays an element only on medium screens",
          "Hides an element on small screens",
          "Centers an element on medium screens",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question:
          "Which class is used to create a card with a header in Bootstrap?",
        options: ["card-header", "header-card", "card-top", "card-title"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "How do you create a responsive column offset in Bootstrap?",
        options: [
          "Use `offset-md-3`",
          "Use `col-offset-3`",
          "Use `margin-md-3`",
          "Use `push-md-3`",
        ],
        correctAnswer: 0,
      },
      {
        id: 9,
        question:
          "Which class is used to create a modal that fades in when opened?",
        options: ["fade", "modal-fade", "animate-modal", "modal-show"],
        correctAnswer: 0,
      },
      {
        id: 10,
        question:
          "What does the `justify-content-between` class do in a flex container?",
        options: [
          "Aligns items with space between them",
          "Centers items horizontally",
          "Aligns items to the start",
          "Stretches items to fill the container",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question:
          "Which class is used to create a collapsible element in Bootstrap?",
        options: ["collapse", "accordion", "fold", "toggle"],
        correctAnswer: 0,
      },
      {
        id: 12,
        question:
          "What is the purpose of the `data-bs-toggle` attribute in Bootstrap?",
        options: [
          "To style buttons",
          "To trigger JavaScript behaviors like modals or collapses",
          "To set the background color",
          "To align text",
        ],
        correctAnswer: 1,
      },
      {
        id: 13,
        question:
          "Which class is used to create a breadcrumb navigation in Bootstrap?",
        options: ["breadcrumb", "nav-breadcrumb", "path", "crumb"],
        correctAnswer: 0,
      },
      {
        id: 14,
        question:
          "How do you make a table row highlighted as active in Bootstrap?",
        options: ["active", "table-active", "row-active", "highlight"],
        correctAnswer: 1,
      },
      {
        id: 15,
        question:
          "Which class is used to create a vertically centered modal in Bootstrap?",
        options: [
          "modal-dialog-centered",
          "modal-center",
          "center-modal",
          "modal-vcenter",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question: "What does the `flex-wrap` class do in Bootstrap?",
        options: [
          "Wraps flex items to a new line if they overflow",
          "Aligns flex items vertically",
          "Stretches flex items",
          "Centers flex items",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question: "Which class is used to create a progress bar in Bootstrap?",
        options: ["progress-bar", "bar", "progress", "meter"],
        correctAnswer: 0,
      },
      {
        id: 18,
        question: "What is the purpose of the `shadow` class in Bootstrap?",
        options: [
          "Adds a border to an element",
          "Adds a box shadow to an element",
          "Darkens the background",
          "Hides an element",
        ],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "Which class is used to create a striped table in Bootstrap?",
        options: ["table-striped", "striped", "table-pattern", "row-striped"],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "What does the `align-self-center` class do in a flex container?",
        options: [
          "Aligns a flex item to the center vertically",
          "Aligns all items to the center",
          "Stretches the item to fill the container",
          "Spaces items evenly",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question: "Which class is used to create a tooltip in Bootstrap?",
        options: ["tooltip", "popover", "hint", "info"],
        correctAnswer: 0,
      },
      {
        id: 22,
        question:
          "What is the purpose of the `data-bs-target` attribute in Bootstrap?",
        options: [
          "To set the background color",
          "To specify the target element for a JavaScript component",
          "To align text",
          "To set the font size",
        ],
        correctAnswer: 1,
      },
      {
        id: 23,
        question: "Which class is used to create a carousel in Bootstrap?",
        options: ["carousel", "slider", "gallery", "slideshow"],
        correctAnswer: 0,
      },
      {
        id: 24,
        question: "What does the `text-truncate` class do in Bootstrap?",
        options: [
          "Truncates text with an ellipsis if it overflows",
          "Aligns text to the left",
          "Makes text bold",
          "Underlines text",
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question: "Which class is used to create a button group in Bootstrap?",
        options: ["btn-group", "button-group", "group-btn", "btn-cluster"],
        correctAnswer: 0,
      },
      {
        id: 26,
        question: "What is the purpose of the `ratio` class in Bootstrap?",
        options: [
          "To set the font size",
          "To maintain aspect ratios for embedded content",
          "To align items",
          "To add margins",
        ],
        correctAnswer: 1,
      },
      {
        id: 27,
        question: "Which class is used to create an accordion in Bootstrap?",
        options: ["accordion", "collapse-group", "fold", "toggle-group"],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "What does the `border-0` class do in Bootstrap?",
        options: [
          "Removes all borders from an element",
          "Adds a border to an element",
          "Centers an element",
          "Hides an element",
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question:
          "Which class is used to create a pagination component in Bootstrap?",
        options: ["pagination", "pages", "nav-pages", "page-group"],
        correctAnswer: 0,
      },
      {
        id: 30,
        question: "What is the purpose of the `form-check` class in Bootstrap?",
        options: [
          "To style checkboxes and radio buttons",
          "To align form inputs",
          "To create a form button",
          "To add padding to forms",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // Bootstrap Advanced
  {
    id: "bootstrap-advanced",
    technology: "bootstrap",
    difficulty: "advanced",
    questions: [
      {
        id: 1,
        question:
          "How do you create a custom breakpoint in Bootstrap 5 by modifying the Sass variables?",
        options: [
          "Override `$grid-breakpoints` in `_variables.scss`",
          "Add a new class like `col-custom-6`",
          "Modify `bootstrap.css` directly",
          "Use `media-breakpoint-up` in CSS",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        question:
          "Which Bootstrap utility class is used to apply a CSS `mix-blend-mode` property?",
        options: [
          "blend-mode",
          "mix-blend-mode",
          "blend",
          "No such utility exists",
        ],
        correctAnswer: 3,
      },
      {
        id: 3,
        question:
          "What is the purpose of the `data-bs-config` attribute in Bootstrap’s JavaScript components?",
        options: [
          "To style components",
          "To pass configuration options to JavaScript plugins",
          "To set accessibility attributes",
          "To trigger animations",
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        question:
          "How do you ensure a Bootstrap modal is accessible for screen readers?",
        options: [
          "Add `aria-labelledby` and `aria-describedby` attributes",
          'Use `role="modal"` only',
          'Set `tabindex="0"` on the modal',
          'Add `data-bs-accessible="true"`',
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        question:
          "Which Sass variable controls the primary color in Bootstrap 5?",
        options: [
          "$primary",
          "$theme-colors",
          "$color-primary",
          "$brand-primary",
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        question:
          "What does the `position-absolute top-0 start-0` class combination do in Bootstrap?",
        options: [
          "Positions an element at the top-left corner",
          "Centers an element",
          "Aligns text to the left",
          "Sets the element to full width",
        ],
        correctAnswer: 0,
      },
      {
        id: 7,
        question:
          "How do you customize the number of grid columns in Bootstrap 5?",
        options: [
          "Override `$grid-columns` in Sass",
          "Add `col-custom` classes",
          "Modify `bootstrap-grid.css`",
          "Use `data-bs-columns` attribute",
        ],
        correctAnswer: 0,
      },
      {
        id: 8,
        question:
          "Which class is used to create a responsive aspect ratio of 16:9 in Bootstrap?",
        options: ["ratio-16x9", "aspect-16-9", "ratio-16-9", "ratio-16by9"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question:
          "What is the purpose of the `visually-hidden` class in Bootstrap?",
        options: [
          "Hides content visually but keeps it accessible to screen readers",
          "Completely hides an element",
          "Reduces opacity",
          "Aligns text",
        ],
        correctAnswer: 0,
      },
      {
        id: 10,
        question:
          "How do you trigger a Bootstrap tooltip programmatically using JavaScript?",
        options: [
          "Use `bootstrap.Tooltip.getOrCreateInstance(element).show()`",
          "Call `$(element).tooltip('show')`",
          'Use `data-bs-toggle="tooltip"`',
          "Add `tooltip-show` class",
        ],
        correctAnswer: 0,
      },
      {
        id: 11,
        question:
          "Which Bootstrap class is used to create a responsive gutters with no spacing on smaller screens?",
        options: ["g-0 g-md-3", "no-gutters", "gutter-0", "gx-0 gy-md-3"],
        correctAnswer: 0,
      },
      {
        id: 12,
        question:
          "What is the purpose of the `data-bs-spy` attribute in Bootstrap?",
        options: [
          "To enable scrollspy for navigation",
          "To trigger modals",
          "To style buttons",
          "To set breakpoints",
        ],
        correctAnswer: 0,
      },
      {
        id: 13,
        question:
          "How do you override Bootstrap’s default button styles using Sass?",
        options: [
          "Modify `$btn` variables and recompile",
          "Add `!important` to CSS rules",
          "Use `btn-custom` class",
          "Edit `bootstrap.min.css`",
        ],
        correctAnswer: 0,
      },
      {
        id: 14,
        question:
          "Which class is used to create a card with a stretched link in Bootstrap?",
        options: ["stretched-link", "card-link", "link-stretch", "full-link"],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "What does the `overflow-auto` class do in Bootstrap?",
        options: [
          "Adds scrollbars when content overflows",
          "Hides overflowing content",
          "Centers content",
          "Stretches content",
        ],
        correctAnswer: 0,
      },
      {
        id: 16,
        question:
          "How do you create a custom Bootstrap theme with a new color?",
        options: [
          "Add a new color to `$theme-colors` in Sass",
          "Use `bg-custom` class",
          "Modify `bootstrap.css`",
          "Add `data-bs-theme` attribute",
        ],
        correctAnswer: 0,
      },
      {
        id: 17,
        question:
          "Which class is used to create a responsive navbar that collapses on small screens?",
        options: [
          "navbar-expand-lg",
          "navbar-collapse",
          "nav-responsive",
          "navbar-toggle",
        ],
        correctAnswer: 0,
      },
      {
        id: 18,
        question:
          "What is the purpose of the `data-bs-ride` attribute in a Bootstrap carousel?",
        options: [
          "To enable automatic cycling",
          "To set the slide duration",
          "To align slides",
          "To add captions",
        ],
        correctAnswer: 0,
      },
      {
        id: 19,
        question:
          "Which class is used to create a form with inline inputs in Bootstrap?",
        options: [
          "form-inline",
          "inline-form",
          "form-row",
          "form-group-inline",
        ],
        correctAnswer: 0,
      },
      {
        id: 20,
        question:
          "How do you customize the Bootstrap modal’s backdrop opacity?",
        options: [
          "Override `$modal-backdrop-opacity` in Sass",
          "Use `backdrop-opacity` class",
          "Add `data-bs-backdrop` attribute",
          "Modify `modal.css`",
        ],
        correctAnswer: 0,
      },
      {
        id: 21,
        question:
          "Which class is used to create a dropdown menu with a divider in Bootstrap?",
        options: [
          "dropdown-divider",
          "menu-divider",
          "dropdown-sep",
          "divider",
        ],
        correctAnswer: 0,
      },
      {
        id: 22,
        question:
          "What is the purpose of the `data-bs-interval` attribute in a Bootstrap carousel?",
        options: [
          "To set the duration between slides",
          "To align slides",
          "To enable looping",
          "To add captions",
        ],
        correctAnswer: 0,
      },
      {
        id: 23,
        question:
          "Which class is used to create a responsive table with hover effects in Bootstrap?",
        options: [
          "table-hover",
          "hover-table",
          "table-active",
          "table-responsive-hover",
        ],
        correctAnswer: 0,
      },
      {
        id: 24,
        question:
          "How do you disable Bootstrap’s default focus ring for accessibility?",
        options: [
          "Override `$focus-ring` variables in Sass",
          "Use `no-focus` class",
          'Set `tabindex="-1"`',
          'Add `data-bs-focus="false"`',
        ],
        correctAnswer: 0,
      },
      {
        id: 25,
        question:
          "Which class is used to create a badge with a pill shape in Bootstrap?",
        options: ["rounded-pill", "badge-pill", "pill", "badge-rounded"],
        correctAnswer: 0,
      },
      {
        id: 26,
        question:
          "What is the purpose of the `data-bs-placement` attribute in Bootstrap tooltips?",
        options: [
          "To set the tooltip’s position",
          "To enable animation",
          "To set the tooltip’s content",
          "To align the tooltip",
        ],
        correctAnswer: 0,
      },
      {
        id: 27,
        question:
          "Which class is used to create a list group with flush styling in Bootstrap?",
        options: [
          "list-group-flush",
          "flush-list",
          "list-flush",
          "group-flush",
        ],
        correctAnswer: 0,
      },
      {
        id: 28,
        question: "How do you enable dark mode in Bootstrap 5?",
        options: [
          'Add `data-bs-theme="dark"` to the root element',
          "Use `dark-mode` class",
          "Modify `$theme` in Sass",
          'Add `data-bs-dark="true"`',
        ],
        correctAnswer: 0,
      },
      {
        id: 29,
        question:
          "Which class is used to create a responsive image with a thumbnail style in Bootstrap?",
        options: [
          "img-thumbnail",
          "thumbnail",
          "img-responsive",
          "image-thumb",
        ],
        correctAnswer: 0,
      },
      {
        id: 30,
        question:
          "What is the purpose of the `data-bs-parent` attribute in a Bootstrap accordion?",
        options: [
          "To specify the parent accordion element",
          "To set the animation speed",
          "To align items",
          "To add padding",
        ],
        correctAnswer: 0,
      },
    ],
  },
];
