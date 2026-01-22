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

  // Configure marked to generate header IDs
  const renderer = {
    heading(text, level) {
      // Strip HTML tags to get plain text for the slug
      const plainText = text.replace(/<[^>]*>/g, "");
      // Generate a GitHub-style slug (lowercase, spaces to hyphens, remove special chars)
      const slug = plainText
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
      return `<h${level} id="${slug}">${text}</h${level}>`;
    },
  };

  marked.use({ renderer });

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
        
        html {
            scroll-behavior: smooth;
        }
        
        .markdown-body h1[id],
        .markdown-body h2[id],
        .markdown-body h3[id],
        .markdown-body h4[id] {
            scroll-margin-top: 20px;
        }
        
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background-color: #0969da;
            color: #ffffff;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
            z-index: 1000;
            opacity: 0;
            transform: translateY(20px);
        }
        
        .back-to-top.visible {
            display: flex;
            opacity: 1;
            transform: translateY(0);
        }
        
        .back-to-top:hover {
            background-color: #0860ca;
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
            transform: translateY(-2px);
        }
        
        .back-to-top:active {
            transform: translateY(0);
        }
        
        @media (max-width: 767px) {
            .back-to-top {
                bottom: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
                font-size: 20px;
            }
        }
    </style>
</head>
<body>
    <article class="markdown-body">
        ${htmlContent}
    </article>
    <button class="back-to-top" id="backToTop" aria-label="Back to top" title="Back to top">
        ↑
    </button>
    <script>
        // Baseline metrics: page visit (best-effort, no PII).
        (function () {
            if (typeof window === 'undefined' || typeof fetch !== 'function') {
                return;
            }
            const site = window.location.host;
            const page = window.location.pathname;
            const payload = {
                site,
                metrics: [
                    {
                        name: 'web_page_visits_total',
                        type: 'counter',
                        value: 1,
                        labels: { site, page },
                        timestamp: Date.now(),
                    },
                ],
                timestamp: Date.now(),
            };
            fetch('/api/track', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                keepalive: true,
            }).catch(function () {
                // Ignore all errors (best-effort telemetry).
            });
        })();
        
        // Initialize syntax highlighting
        if (typeof hljs !== 'undefined') {
            hljs.highlightAll();
        }
        
        // Back to top button functionality
        (function() {
            const backToTopButton = document.getElementById('backToTop');
            const scrollThreshold = 300; // Show button after scrolling 300px
            
            function toggleBackToTopButton() {
                if (window.pageYOffset > scrollThreshold) {
                    backToTopButton.classList.add('visible');
                } else {
                    backToTopButton.classList.remove('visible');
                }
            }
            
            function scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
            
            // Show/hide button based on scroll position
            window.addEventListener('scroll', toggleBackToTopButton);
            
            // Scroll to top when button is clicked
            backToTopButton.addEventListener('click', scrollToTop);
            
            // Initial check
            toggleBackToTopButton();
        })();
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
