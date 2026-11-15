(function () {
  "use strict";

  var CONTACT_EMAIL = "hello@9techlabs.com";
  /* Contact form messages are delivered to CONTACT_EMAIL by the FormSubmit service. */
  var FORM_ENDPOINT = "https://formsubmit.co/ajax/" + CONTACT_EMAIL;

  /* Mobile navigation */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    };

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* Footer year */
  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  /* Reveal sections as they scroll into view */
  var revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    Array.prototype.forEach.call(revealItems, function (item) {
      observer.observe(item);
    });
  } else {
    Array.prototype.forEach.call(revealItems, function (item) {
      item.classList.add("in");
    });
  }

  /* Contact form */
  var form = document.getElementById("contact-form");
  if (!form) {
    return;
  }

  var summary = document.getElementById("error-summary");
  var summaryList = summary.querySelector("ul");
  var status = document.getElementById("form-status");

  var rules = {
    name: function (value) {
      return value ? "" : "Enter your name.";
    },
    email: function (value) {
      if (!value) {
        return "Enter your email address.";
      }
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ""
        : "Enter an email address in the format name@example.com.";
    },
    message: function (value) {
      return value.length >= 10 ? "" : "Tell us a little about what you need (at least 10 characters).";
    }
  };

  var validateField = function (id) {
    var input = document.getElementById(id);
    var message = rules[id](input.value.trim());
    var error = document.getElementById(id + "-error");
    error.textContent = message;
    if (message) {
      input.setAttribute("aria-invalid", "true");
    } else {
      input.removeAttribute("aria-invalid");
    }
    return message;
  };

  Object.keys(rules).forEach(function (id) {
    document.getElementById(id).addEventListener("blur", function () {
      validateField(id);
    });
  });

  /* Preselect a service when arriving from a service link */
  var wanted = new URLSearchParams(window.location.search).get("service");
  var serviceSelect = document.getElementById("service");
  if (wanted && serviceSelect) {
    Array.prototype.forEach.call(serviceSelect.options, function (option) {
      if (option.dataset.key === wanted) {
        serviceSelect.value = option.value;
      }
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    status.textContent = "";
    summaryList.textContent = "";

    var problems = [];
    Object.keys(rules).forEach(function (id) {
      var message = validateField(id);
      if (message) {
        problems.push({ id: id, message: message });
      }
    });

    if (problems.length) {
      problems.forEach(function (problem) {
        var item = document.createElement("li");
        var link = document.createElement("a");
        link.href = "#" + problem.id;
        link.textContent = problem.message;
        item.appendChild(link);
        summaryList.appendChild(item);
      });
      summary.hidden = false;
      summary.focus();
      return;
    }

    summary.hidden = true;

    var value = function (id) {
      return document.getElementById(id).value.trim();
    };

    /* Spam trap: real visitors never fill this hidden field */
    if (document.getElementById("website-field").value) {
      return;
    }

    var button = document.getElementById("submit-button");
    var showStatus = function (text, isError) {
      status.classList.toggle("is-error", Boolean(isError));
      status.textContent = text;
    };

    var payload = {
      name: value("name"),
      email: value("email"),
      company: value("company") || "Not given",
      service: value("service"),
      message: value("message"),
      _subject: "Website enquiry: " + value("service"),
      _replyto: value("email"),
      _template: "table",
      _captcha: "false"
    };

    button.disabled = true;
    button.textContent = "Sending...";

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload)
    })
      .then(function (response) {
        return response.json().then(function (data) {
          if (!response.ok || String(data.success) !== "true") {
            throw new Error(data.message || "Send failed");
          }
        });
      })
      .then(function () {
        form.reset();
        showStatus("Thank you. Your message has been sent and we will reply by email soon.", false);
      })
      .catch(function () {
        showStatus(
          "Sorry, your message could not be sent. Please try again, or email us at " + CONTACT_EMAIL + ".",
          true
        );
      })
      .then(function () {
        button.disabled = false;
        button.textContent = "Submit";
      });
  });
})();
