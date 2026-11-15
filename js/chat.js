/* 9techlabs assistant: answers common questions from the built-in list below.
   To change an answer, edit the matching entry in TOPICS. */
(function () {
  "use strict";

  var EMAIL = "hello@9techlabs.com";
  var CONTACT = '<a href="contact.html">contact page</a>';
  var MAIL = '<a href="mailto:' + EMAIL + '">' + EMAIL + "</a>";

  var TOPICS = [
    {
      id: "greet",
      keys: ["hi", "hello", "hey", "salam", "good morning", "good evening", "assalam"],
      answer: "Hello! I can tell you about our services, how projects run, pricing and how to reach the team. What would you like to know?",
      chips: ["What services do you offer?", "How much does it cost?", "Talk to a person"]
    },
    {
      id: "services",
      keys: ["services", "service", "offer", "what do you do", "what can you do", "help with", "provide"],
      answer:
        "We offer five services:" +
        "<ul>" +
        '<li><a href="services.html#websites">Website design</a></li>' +
        '<li><a href="services.html#apps">App development</a></li>' +
        '<li><a href="services.html#ai">AI assistants and chatbots</a></li>' +
        '<li><a href="services.html#social">Social media marketing</a></li>' +
        '<li><a href="services.html#data">Data services</a></li>' +
        "</ul>Ask me about any of them.",
      chips: ["Website design", "AI chatbots", "Data and dashboards"]
    },
    {
      id: "websites",
      keys: ["website", "websites", "web design", "site", "landing page", "ecommerce", "e-commerce", "online store", "shop", "seo", "wordpress", "shopify", "redesign", "hosting"],
      answer:
        "We design and build company websites, online stores and booking sites. They are designed for phones first, set up for search engines, and come with an editor so you can change content yourself. " +
        '<a href="services.html#websites">See website design</a>.',
      chips: ["How much does it cost?", "How long does it take?"]
    },
    {
      id: "apps",
      keys: ["app", "apps", "android", "ios", "iphone", "mobile app", "web app", "application", "portal", "software", "flutter", "react native"],
      answer:
        "We build iPhone, Android and web apps, including customer portals and internal tools. We start with a prototype, release a small useful version, and grow it from there. " +
        '<a href="services.html#apps">See app development</a>.',
      chips: ["How does a project run?", "How much does it cost?"]
    },
    {
      id: "ai",
      keys: ["ai", "chatbot", "chatbots", "bot", "assistant", "assistants", "gpt", "llm", "artificial intelligence", "automation", "automate", "whatsapp"],
      answer:
        "We set up AI assistants that answer from your own documents, products and policies. They can handle support questions, qualify leads, book appointments and hand over to your team when needed. " +
        '<a href="services.html#ai">See AI assistants and chatbots</a>.',
      chips: ["How much does it cost?", "Talk to a person"]
    },
    {
      id: "social",
      keys: ["social", "social media", "marketing", "instagram", "facebook", "linkedin", "tiktok", "ads", "advertising", "campaign", "campaigns", "content", "posts", "followers"],
      answer:
        "We plan and run your social media: strategy, a monthly content calendar, post design, paid campaigns and a plain monthly report. " +
        '<a href="services.html#social">See social media marketing</a>.',
      chips: ["How much does it cost?", "Talk to a person"]
    },
    {
      id: "data",
      keys: ["data", "dashboard", "dashboards", "analytics", "report", "reports", "reporting", "database", "migration", "excel", "spreadsheet", "spreadsheets", "bi", "pipeline"],
      answer:
        "Our data services cover cleanup, migration between systems, dashboards, automated reports and analytics setup. " +
        '<a href="services.html#data">See data services</a>.',
      chips: ["How does a project run?", "Talk to a person"]
    },
    {
      id: "price",
      keys: ["price", "prices", "pricing", "cost", "costs", "how much", "quote", "quotation", "budget", "rate", "rates", "charge", "charges", "fee", "fees", "package", "packages", "expensive", "cheap"],
      answer:
        "Every project is priced on its scope, so I can't give a figure here. After a short conversation you receive a written scope, timeline and price before any work starts. Send the team a few lines on the " + CONTACT + " to get a quote.",
      chips: ["Talk to a person", "How long does it take?"]
    },
    {
      id: "time",
      keys: ["how long", "timeline", "time", "deadline", "duration", "when", "weeks", "months", "fast", "urgent", "quickly", "delivery"],
      answer:
        "It depends on the size of the work. You get a written timeline with your quote, and we build in short rounds so you see working progress along the way. If you have a date in mind, mention it on the " + CONTACT + ".",
      chips: ["How does a project run?", "Talk to a person"]
    },
    {
      id: "process",
      keys: ["process", "how do you work", "how does a project run", "how it works", "steps", "stages", "approach", "method", "start", "begin", "get started"],
      answer:
        "Projects run in four stages:" +
        "<ul><li><strong>Understand</strong>: we learn your goals and agree a written scope.</li>" +
        "<li><strong>Design</strong>: you see how it will look and work first.</li>" +
        "<li><strong>Build</strong>: short rounds with working previews.</li>" +
        "<li><strong>Launch and support</strong>: we test, launch and stay on to improve.</li></ul>",
      chips: ["How much does it cost?", "Talk to a person"]
    },
    {
      id: "cases",
      keys: ["case study", "case studies", "portfolio", "examples", "example", "previous work", "past work", "clients", "projects", "references", "samples"],
      answer:
        'You can read about recent projects on the <a href="case-studies.html">case studies page</a>, including what we built and what changed as a result.',
      chips: ["What services do you offer?", "Talk to a person"]
    },
    {
      id: "contact",
      keys: ["contact", "email", "e-mail", "call", "phone", "number", "reach", "talk", "speak", "human", "person", "someone", "team", "meeting", "book", "demo", "consultation", "hire"],
      answer:
        "You can reach the team by email at " + MAIL + ", or send a message through the " + CONTACT + ". They will reply with questions and next steps.",
      chips: ["What services do you offer?"]
    },
    {
      id: "own",
      keys: ["own", "ownership", "source code", "code", "intellectual property", "rights", "lock", "locked"],
      answer:
        "Yes. The code, designs, accounts and data we produce for you belong to you, and we hand over documentation so you are never locked in.",
      chips: ["How does a project run?", "Talk to a person"]
    },
    {
      id: "support",
      keys: ["support", "maintenance", "maintain", "after launch", "updates", "update", "fix", "bug", "bugs", "ongoing"],
      answer:
        "Yes. After launch we stay on to fix issues, measure results and make improvements. The level of support is agreed with you in the scope.",
      chips: ["How much does it cost?", "Talk to a person"]
    },
    {
      id: "bot",
      keys: ["are you a bot", "are you real", "are you human", "are you ai", "who are you", "what are you", "robot"],
      answer:
        "I'm the 9techlabs automated assistant. I answer common questions from a prepared list, so I can't handle everything. For anything else, the team is at " + MAIL + ".",
      chips: ["What services do you offer?", "Talk to a person"]
    },
    {
      id: "thanks",
      keys: ["thanks", "thank you", "thank", "great", "perfect", "ok", "okay", "cool", "bye", "goodbye"],
      answer: "You're welcome. If you need anything else, ask here or write to " + MAIL + ".",
      chips: []
    }
  ];

  var FALLBACK = {
    answer:
      "I don't have an answer for that. The team can help: email " + MAIL + " or use the " + CONTACT + ".",
    chips: ["What services do you offer?", "How much does it cost?", "How does a project run?"]
  };

  var WELCOME = {
    answer: "Hi, I'm the 9techlabs assistant. Ask me about our services, pricing or how a project runs.",
    chips: ["What services do you offer?", "How much does it cost?", "How does a project run?", "Talk to a person"]
  };

  var escapeRegExp = function (text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  var findTopic = function (input) {
    var text = " " + input.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").replace(/\s+/g, " ") + " ";
    var best = null;
    var bestScore = 0;
    TOPICS.forEach(function (topic) {
      var score = 0;
      topic.keys.forEach(function (key) {
        var pattern = new RegExp("\\s" + escapeRegExp(key) + "\\s");
        if (pattern.test(text)) {
          score += key.indexOf(" ") > -1 ? 3 : 1;
        }
      });
      if (score > bestScore) {
        bestScore = score;
        best = topic;
      }
    });
    return best || FALLBACK;
  };

  /* Build the interface */
  var MARK =
    '<svg class="mark" viewBox="0 0 48 48" aria-hidden="true">' +
    '<path d="M8 24V8H40V24H8M40 24V40H8" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<g fill="#fff"><circle cx="8" cy="8" r="5"/><circle cx="24" cy="8" r="5"/><circle cx="8" cy="24" r="5"/>' +
    '<circle cx="24" cy="24" r="5"/><circle cx="40" cy="24" r="5"/><circle cx="8" cy="40" r="5"/>' +
    '<circle cx="24" cy="40" r="5"/><circle cx="40" cy="40" r="5"/></g><circle cx="40" cy="8" r="5.5" fill="#FFB020"/></svg>';

  var launch = document.createElement("button");
  launch.type = "button";
  launch.className = "chat-launch";
  launch.setAttribute("aria-expanded", "false");
  launch.setAttribute("aria-controls", "chat-panel");
  launch.innerHTML =
    '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.8 7L4 20l1.2-4.6A8 8 0 1 1 21 12z"/><path d="M9 11h6M9 14h4"/></svg>' +
    "<span>Chat with us</span>";

  var panel = document.createElement("section");
  panel.className = "chat-panel";
  panel.id = "chat-panel";
  panel.hidden = true;
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-labelledby", "chat-title");
  panel.innerHTML =
    '<header class="chat-head">' + MARK +
    '<div><h2 id="chat-title">9techlabs assistant</h2><p>Automated answers, any time</p></div>' +
    '<button type="button" class="chat-close" aria-label="Close chat">' +
    '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></header>' +
    '<div class="chat-log" role="log" aria-live="polite" aria-label="Conversation" tabindex="0"></div>' +
    '<form class="chat-form"><label class="visually-hidden" for="chat-input">Your question</label>' +
    '<input id="chat-input" type="text" autocomplete="off" maxlength="300" placeholder="Type your question">' +
    '<button type="submit" aria-label="Send question">' +
    '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12l16-8-6 16-3-7z"/></svg></button></form>' +
    '<p class="chat-note">Answers come from a prepared list. For anything else, email ' + EMAIL + ".</p>";

  document.body.appendChild(launch);
  document.body.appendChild(panel);

  var log = panel.querySelector(".chat-log");
  var form = panel.querySelector(".chat-form");
  var input = panel.querySelector("#chat-input");
  var started = false;

  var scrollDown = function () {
    log.scrollTop = log.scrollHeight;
  };

  var removeChips = function () {
    var old = log.querySelectorAll(".chat-chips");
    Array.prototype.forEach.call(old, function (node) {
      node.remove();
    });
  };

  var addChips = function (labels) {
    if (!labels || !labels.length) {
      return;
    }
    var row = document.createElement("div");
    row.className = "chat-chips";
    labels.forEach(function (label) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.textContent = label;
      chip.addEventListener("click", function () {
        ask(label);
      });
      row.appendChild(chip);
    });
    log.appendChild(row);
  };

  var addBot = function (reply) {
    var bubble = document.createElement("div");
    bubble.className = "msg bot";
    bubble.innerHTML = reply.answer; /* answers are fixed strings defined above */
    log.appendChild(bubble);
    addChips(reply.chips);
    scrollDown();
  };

  var addUser = function (text) {
    var bubble = document.createElement("div");
    bubble.className = "msg user";
    bubble.textContent = text;
    log.appendChild(bubble);
    scrollDown();
  };

  var ask = function (text) {
    removeChips();
    addUser(text);
    var typing = document.createElement("div");
    typing.className = "msg bot";
    typing.innerHTML = '<span class="typing" aria-label="Assistant is typing"><i></i><i></i><i></i></span>';
    log.appendChild(typing);
    scrollDown();
    window.setTimeout(function () {
      typing.remove();
      addBot(findTopic(text));
    }, 500);
  };

  var open = function () {
    panel.hidden = false;
    launch.setAttribute("aria-expanded", "true");
    if (!started) {
      started = true;
      addBot(WELCOME);
    }
    input.focus();
  };

  var close = function () {
    panel.hidden = true;
    launch.setAttribute("aria-expanded", "false");
    launch.focus();
  };

  launch.addEventListener("click", open);
  panel.querySelector(".chat-close").addEventListener("click", close);

  panel.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      close();
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var text = input.value.trim();
    if (!text) {
      return;
    }
    input.value = "";
    ask(text);
  });
})();
