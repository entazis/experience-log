const fs = require("fs");
const path = require("path");
const { marked } = require("marked");

/**
 * Configuration for the HTML generator
 */
const CONFIG = {
  inputFile: "README.md",
  outputFile: "index.html",
  title: "Bence Szabó - Portfolio",
  description:
    "Tech Lead & Full-Stack Engineer | 7+ Years Building Scalable Systems",
  watchMode: process.argv.includes("--watch"),
};

/**
 * Reads the markdown file and converts it to HTML
 * @returns {string} The generated HTML content
 */
function generateHtml() {
  const markdownPath = path.join(__dirname, CONFIG.inputFile);

  if (!fs.existsSync(markdownPath)) {
    throw new Error(`Markdown file not found: ${CONFIG.inputFile}`);
  }

  const markdownContent = fs.readFileSync(markdownPath, "utf8");
  const htmlContent = marked(markdownContent);

  const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${CONFIG.description}">
    <title>${CONFIG.title}</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
    <style>
        * {
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
            background-color: #ffffff;
            color: #24292f;
            line-height: 1.5;
        }
        
        .markdown-body {
            box-sizing: border-box;
            min-width: 200px;
            max-width: 980px;
            margin: 0 auto;
            padding: 45px;
        }
        
        @media (max-width: 767px) {
            .markdown-body {
                padding: 15px;
            }
        }
        
        .markdown-body pre {
            background-color: #f6f8fa;
            border-radius: 6px;
            padding: 16px;
            overflow: auto;
        }
        
        .markdown-body code {
            background-color: rgba(175, 184, 193, 0.2);
            padding: 0.2em 0.4em;
            border-radius: 3px;
            font-size: 85%;
        }
        
        .markdown-body pre code {
            background-color: transparent;
            padding: 0;
            font-size: 100%;
        }
        
        .markdown-body a {
            color: #0969da;
            text-decoration: none;
        }
        
        .markdown-body a:hover {
            text-decoration: underline;
        }
        
        .markdown-body h1, .markdown-body h2 {
            border-bottom: 1px solid #d0d7de;
            padding-bottom: 0.3em;
        }
        
        .markdown-body h1 {
            font-size: 2em;
        }
        
        .markdown-body h2 {
            font-size: 1.5em;
        }
        
        .markdown-body table {
            border-collapse: collapse;
            width: 100%;
        }
        
        .markdown-body table th,
        .markdown-body table td {
            border: 1px solid #d0d7de;
            padding: 6px 13px;
        }
        
        .markdown-body table th {
            background-color: #f6f8fa;
            font-weight: 600;
        }
        
        .markdown-body blockquote {
            padding: 0 1em;
            color: #656d76;
            border-left: 0.25em solid #d0d7de;
            margin: 0;
        }
        
        .markdown-body ul, .markdown-body ol {
            padding-left: 2em;
        }
        
        .markdown-body img {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <article class="markdown-body">
        ${htmlContent}
    </article>
    <script>
        // Initialize syntax highlighting
        if (typeof hljs !== 'undefined') {
            hljs.highlightAll();
        }
    </script>
</body>
</html>`;

  return htmlTemplate;
}

/**
 * Writes the HTML content to the output file
 * @param {string} htmlContent - The HTML content to write
 */
function writeHtmlFile(htmlContent) {
  const outputPath = path.join(__dirname, CONFIG.outputFile);
  fs.writeFileSync(outputPath, htmlContent, "utf8");
  console.log(`✅ ${CONFIG.outputFile} generated successfully!`);
}

/**
 * Main function to build the HTML file
 */
function build() {
  try {
    const htmlContent = generateHtml();
    writeHtmlFile(htmlContent);
  } catch (error) {
    console.error("❌ Error generating HTML:", error.message);
    process.exit(1);
  }
}

// Run the build
build();

// Watch mode (simple file watching)
if (CONFIG.watchMode) {
  const markdownPath = path.join(__dirname, CONFIG.inputFile);
  console.log(`👀 Watching ${CONFIG.inputFile} for changes...`);

  fs.watchFile(markdownPath, { interval: 1000 }, (curr, prev) => {
    if (curr.mtime !== prev.mtime) {
      console.log(`\n📝 File changed, rebuilding...`);
      build();
    }
  });
}
