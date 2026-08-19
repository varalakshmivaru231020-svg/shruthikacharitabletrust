/* ==========================================================================
   Shruthika Trust — interactions & animation engine
   Vanilla JS, no dependencies.
   ========================================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----------------------------------------------------------
     1. Hero headline: split into words for a staggered reveal
     ---------------------------------------------------------- */
  function splitHeadings() {
    document.querySelectorAll("[data-split]").forEach(function (el) {
      var index = 0;

      // Walk direct children so inline <span class="word-mark"> keeps its styling.
      var parts = Array.prototype.map.call(el.childNodes, function (node) {
        if (node.nodeType === Node.TEXT_NODE) {
          return { text: node.textContent, className: "" };
        }
        return { text: node.textContent, className: node.className || "" };
      });

      var html = parts
        .map(function (part) {
          return part.text
            .split(/\s+/)
            .filter(Boolean)
            .map(function (word) {
              var cls = "reveal-word" + (part.className ? " " + part.className : "");
              return (
                '<span class="reveal-line"><span class="' +
                cls +
                '" style="--w:' +
                index++ +
                '">' +
                word +
                "</span></span> "
              );
            })
            .join("");
        })
        .join("");

      el.innerHTML = html;
    });
  }
  splitHeadings();

  /* ----------------------------------------------------------
     2. Preloader — release as soon as the page is ready
     ---------------------------------------------------------- */
  function reveal() {
    root.classList.add("is-loaded");
  }
  window.addEventListener("load", reveal);
  // Safety net: never trap the user behind a stuck asset.
  setTimeout(reveal, 2200);

  /* ----------------------------------------------------------
     3. Header: stick, hide on scroll down, show on scroll up
     ---------------------------------------------------------- */
  var header = document.getElementById("header");
  var progress = document.getElementById("progress");
  var toTop = document.getElementById("toTop");
  var lastY = window.scrollY;
  var ticking = false;

  function onScroll() {
    var y = window.scrollY;

    if (header) {
      header.classList.toggle("is-stuck", y > 40);
      var goingDown = y > lastY && y > 400;
      header.classList.toggle("is-hidden", goingDown && !root.classList.contains("nav-open"));
    }

    if (progress) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = "scaleX(" + (max > 0 ? y / max : 0) + ")";
    }

    if (toTop) toTop.classList.toggle("is-visible", y > 700);

    parallax(y);
    lastY = y;
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    },
    { passive: true }
  );

  /* ----------------------------------------------------------
     4. Parallax layers
     ---------------------------------------------------------- */
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));

  function parallax(y) {
    if (reduceMotion || !parallaxEls.length) return;
    parallaxEls.forEach(function (el) {
      var speed = parseFloat(el.dataset.parallax) || 0.15;
      var rect = el.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
      el.style.transform = "translate3d(0," + (y * speed).toFixed(2) + "px,0)";
    });
  }

  /* ----------------------------------------------------------
     5. Scroll reveal
     ---------------------------------------------------------- */
  var revealEls = document.querySelectorAll("[data-reveal]");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-in");
    });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealEls.forEach(function (el) {
      io.observe(el);
    });

    // Auto-stagger groups that did not declare an explicit --d delay.
    document.querySelectorAll(".services, .footer__grid, .gallery-strip").forEach(function (group) {
      Array.prototype.forEach.call(group.children, function (child, i) {
        if (child.hasAttribute("data-reveal") && !child.style.getPropertyValue("--d")) {
          child.style.setProperty("--d", i * 70);
        }
      });
    });
  }

  /* ----------------------------------------------------------
     6. Mobile drawer
     ---------------------------------------------------------- */
  var burger = document.getElementById("burger");
  var scrim = document.getElementById("scrim");
  var drawer = document.getElementById("drawer");

  function setNav(open) {
    root.classList.toggle("nav-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    if (burger) burger.setAttribute("aria-expanded", String(open));
    if (burger) burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (scrim) scrim.hidden = !open;
  }

  if (burger) {
    burger.addEventListener("click", function () {
      setNav(!root.classList.contains("nav-open"));
    });
  }
  if (scrim) {
    scrim.addEventListener("click", function () {
      setNav(false);
    });
  }
  if (drawer) {
    drawer.addEventListener("click", function (e) {
      if (e.target.closest("a")) setNav(false);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && root.classList.contains("nav-open")) setNav(false);
  });

  /* ----------------------------------------------------------
     7. Objectives accordion
        A collapsed .obj__body is only visually clipped, so it stays
        in the accessibility tree unless we take it out ourselves.
     ---------------------------------------------------------- */
  function syncPanel(item) {
    var body = item.querySelector(".obj__body");
    if (!body) return;
    var open = item.classList.contains("is-open");
    // `inert` where supported; aria-hidden plus a tab-stop sweep for the
    // browsers that do not have it, so a hidden link is never reachable.
    if (open) {
      body.removeAttribute("inert");
      body.removeAttribute("aria-hidden");
    } else {
      body.setAttribute("inert", "");
      body.setAttribute("aria-hidden", "true");
    }
    body.querySelectorAll("a[href], button, input, select, textarea").forEach(function (stop) {
      if (open) {
        stop.removeAttribute("tabindex");
      } else {
        stop.setAttribute("tabindex", "-1");
      }
    });
  }

  document.querySelectorAll(".obj").forEach(function (item) {
    syncPanel(item);
  });

  document.querySelectorAll(".obj__head").forEach(function (head) {
    head.addEventListener("click", function () {
      var item = head.closest(".obj");
      var isOpen = item.classList.contains("is-open");

      item.parentElement.querySelectorAll(".obj").forEach(function (other) {
        other.classList.remove("is-open");
        var btn = other.querySelector(".obj__head");
        if (btn) btn.setAttribute("aria-expanded", "false");
        syncPanel(other);
      });

      if (!isOpen) {
        item.classList.add("is-open");
        head.setAttribute("aria-expanded", "true");
        syncPanel(item);
      }
    });
  });

  /* ----------------------------------------------------------
     8. Magnetic buttons (pointer-fine devices only)
     ---------------------------------------------------------- */
  if (!reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll(".btn").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var r = btn.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * 0.18;
        var y = (e.clientY - r.top - r.height / 2) * 0.3;
        btn.style.transform = "translate(" + x + "px," + (y - 3) + "px)";
      });
      btn.addEventListener("mouseleave", function () {
        btn.style.transform = "";
      });
    });
  }

  /* ----------------------------------------------------------
     9. Graceful image placeholders
        Photos live in assets/img/. Until they are dropped in,
        the decorative gradient behind each frame stands in.
     ---------------------------------------------------------- */
  function markMissing(img) {
    img.style.display = "none";
    var holder = img.parentElement;
    if (holder) holder.classList.add("is-empty");
  }

  document.querySelectorAll("img").forEach(function (img) {
    img.addEventListener("error", function () {
      markMissing(img);
    });
    // Images can fail before this script runs — catch those too.
    if (img.complete && img.naturalWidth === 0) markMissing(img);
  });

  /* ----------------------------------------------------------
     10. Smooth in-page anchors + footer year
     ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      // A bare "#" is a placeholder (the footer socials until real URLs
      // arrive). Swallow it rather than throwing the reader to the top.
      if (id.length < 2) {
        e.preventDefault();
        return;
      }
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      // Scrolling alone leaves keyboard focus behind — the skip link in
      // particular has to actually land the user inside <main>.
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      try {
        target.focus({ preventScroll: true });
      } catch (err) {
        target.focus();
      }
    });
  });

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Prime scroll-dependent state on first paint.
  onScroll();
})();

/* ==========================================================================
   Inner-page components
   Gallery lightbox · donation tiers · copy-to-clipboard · contact form
   Self-contained: every block returns early when its markup is absent,
   so this file stays safe to load on every page including the home page.
   ========================================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function all(sel, ctx) {
    return Array.prototype.slice.call((ctx || document).querySelectorAll(sel));
  }
  function focusSafely(el) {
    if (!el || typeof el.focus !== "function") return;
    try {
      el.focus();
    } catch (err) {
      /* element vanished — ignore */
    }
  }

  /* ----------------------------------------------------------
     11. Gallery lightbox
     ---------------------------------------------------------- */
  (function lightbox() {
    var grid = document.querySelector("[data-lightbox]");
    var box = document.getElementById("lightbox");
    if (!grid || !box) return;

    var tiles = all(".gallery-tile", grid);
    if (!tiles.length) return;

    var figure = box.querySelector(".lightbox__figure");
    var image = box.querySelector(".lightbox__img");
    var caption = box.querySelector(".lightbox__caption");
    var counter = box.querySelector(".lightbox__counter");
    var prevBtn = box.querySelector("[data-lb-prev]");
    var nextBtn = box.querySelector("[data-lb-next]");
    var closers = all("[data-lb-close]", box);
    var closeBtn = box.querySelector("button[data-lb-close]") ||
      closers.filter(function (el) {
        return el.tagName === "BUTTON";
      })[0];

    var index = 0;
    var isOpen = false;
    var lastFocused = null;

    box.setAttribute("aria-hidden", "true");

    function sourceOf(tile) {
      var inner = tile.querySelector("img");
      return tile.getAttribute("data-full") || (inner ? inner.getAttribute("src") : "");
    }
    function captionOf(tile) {
      var inner = tile.querySelector("img");
      return (
        tile.getAttribute("data-caption") ||
        (inner ? inner.getAttribute("alt") : "") ||
        ""
      );
    }

    function show(i) {
      index = (i + tiles.length) % tiles.length;
      var tile = tiles[index];
      var text = captionOf(tile);

      if (image) {
        // A previous 404 may have hidden the node via the placeholder helper.
        image.style.display = "";
        image.setAttribute("src", sourceOf(tile));
        image.setAttribute("alt", text);
      }
      if (figure) figure.classList.remove("is-empty");
      if (caption) caption.textContent = text;
      if (counter) counter.textContent = index + 1 + " / " + tiles.length;
    }

    function openAt(i) {
      lastFocused = document.activeElement;
      isOpen = true;
      box.classList.add("is-open");
      // Expose the dialog BEFORE writing the counter, or the aria-live
      // update happens inside an aria-hidden subtree and is never read.
      box.setAttribute("aria-hidden", "false");
      show(i);
      root.classList.add("lightbox-open");
      document.body.style.overflow = "hidden";
      window.setTimeout(
        function () {
          // closers[0] is the scrim <div>, which cannot take focus — the
          // trap below would then never fire. Prefer a real button.
          focusSafely(closeBtn || box);
        },
        reduceMotion ? 0 : 60
      );
    }

    function close() {
      if (!isOpen) return;
      isOpen = false;
      box.classList.remove("is-open");
      box.setAttribute("aria-hidden", "true");
      root.classList.remove("lightbox-open");
      document.body.style.overflow = "";
      focusSafely(lastFocused);
      lastFocused = null;
    }

    tiles.forEach(function (tile, i) {
      tile.addEventListener("click", function (e) {
        e.preventDefault();
        openAt(i);
      });
    });

    closers.forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        close();
      });
    });
    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        show(index - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        show(index + 1);
      });
    }

    document.addEventListener("keydown", function (e) {
      if (!isOpen) return;
      if (e.key === "Escape" || e.key === "Esc") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        show(index - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        show(index + 1);
      }
    });

    // Keep Tab inside the dialog while it is open.
    box.addEventListener("keydown", function (e) {
      if (!isOpen || e.key !== "Tab") return;
      var stops = all(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        box
      ).filter(function (el) {
        return !el.disabled && el.offsetParent !== null;
      });
      if (!stops.length) return;
      var first = stops[0];
      var last = stops[stops.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        focusSafely(last);
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        focusSafely(first);
      }
    });
  })();

  /* ----------------------------------------------------------
     12. Donation tiers (single-select radiogroup)
     ---------------------------------------------------------- */
  (function giveTiers() {
    var group = document.querySelector("[data-give]");
    if (!group) return;

    var cards = all(".give-card", group);
    if (!cards.length) return;

    var amountInput = document.querySelector("[data-give-amount]");

    if (!group.getAttribute("role")) group.setAttribute("role", "radiogroup");

    function select(card, opts) {
      opts = opts || {};
      cards.forEach(function (other) {
        var on = other === card;
        other.classList.toggle("is-selected", on);
        other.setAttribute("aria-checked", on ? "true" : "false");
        other.setAttribute("tabindex", on ? "0" : "-1");
      });

      var amount = card ? (card.getAttribute("data-amount") || "").trim() : "";
      if (amountInput && opts.writeInput !== false) {
        if (amount) {
          if (amountInput.value !== amount) amountInput.value = amount;
        } else {
          amountInput.value = "";
        }
      }
      if (opts.focusCard) focusSafely(card);
      if (!amount && amountInput && opts.focusInput) focusSafely(amountInput);
    }

    cards.forEach(function (card, i) {
      if (!card.getAttribute("role")) card.setAttribute("role", "radio");
      if (!card.hasAttribute("aria-checked")) {
        card.setAttribute("aria-checked", card.classList.contains("is-selected") ? "true" : "false");
      }

      card.addEventListener("click", function (e) {
        e.preventDefault();
        select(card, { focusInput: true });
      });

      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
          e.preventDefault();
          select(card, { focusInput: true });
        } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          select(cards[(i + 1) % cards.length], { focusCard: true });
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          select(cards[(i - 1 + cards.length) % cards.length], { focusCard: true });
        }
      });
    });

    // Typing a custom amount clears a preset that no longer matches.
    if (amountInput) {
      amountInput.addEventListener("input", function () {
        var typed = amountInput.value.trim();
        var match = null;
        cards.forEach(function (card) {
          if (typed && (card.getAttribute("data-amount") || "").trim() === typed) match = card;
        });
        if (match) {
          select(match, { writeInput: false });
          return;
        }
        var custom = group.querySelector(".give-card--custom");
        cards.forEach(function (card) {
          var on = card === custom;
          card.classList.toggle("is-selected", on);
          card.setAttribute("aria-checked", on ? "true" : "false");
          card.setAttribute("tabindex", on ? "0" : "-1");
        });
        if (!custom) {
          // No custom tile on the page — keep one tab stop in the group.
          cards[0].setAttribute("tabindex", "0");
        }
      });
    }

    // Honour a tile the page pre-marked with .is-selected; otherwise start
    // with nothing chosen but keep exactly one tab stop in the group.
    var initial = null;
    cards.forEach(function (card) {
      if (!initial && card.classList.contains("is-selected")) initial = card;
    });
    if (initial) {
      select(initial);
    } else {
      cards.forEach(function (card, i) {
        card.setAttribute("aria-checked", "false");
        card.setAttribute("tabindex", i === 0 ? "0" : "-1");
      });
    }
  })();

  /* ----------------------------------------------------------
     13. Copy to clipboard (bank account number)
     ---------------------------------------------------------- */
  (function copyToClipboard() {
    var buttons = all(".copy-btn");
    if (!buttons.length) return;

    function legacyCopy(text) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "-1000px";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (err) {
        ok = false;
      }
      document.body.removeChild(ta);
      return ok;
    }

    function copyText(text, done) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(
          function () {
            done(true);
          },
          function () {
            done(legacyCopy(text));
          }
        );
        return;
      }
      done(legacyCopy(text));
    }

    buttons.forEach(function (btn) {
      // Progressive enhancement: the markup ships the button hidden, so
      // with JS off nobody is offered a control that cannot work.
      btn.removeAttribute("hidden");

      var labelEl = btn.querySelector(".copy-btn__label");
      var baseLabel = labelEl ? labelEl.textContent : "";
      var baseAria = btn.getAttribute("aria-label") || "Copy";
      var timer = null;

      btn.addEventListener("click", function (e) {
        e.preventDefault();

        var targetSel = btn.getAttribute("data-copy-target");
        var text = "";
        if (targetSel) {
          var target = document.querySelector(targetSel);
          if (target) text = (target.textContent || "").trim();
        } else {
          text = (btn.getAttribute("data-copy") || "").trim();
        }
        if (!text) return;

        copyText(text, function (ok) {
          btn.classList.toggle("is-copied", ok);
          if (labelEl) labelEl.textContent = ok ? "Copied!" : "Select & copy";
          btn.setAttribute(
            "aria-label",
            ok ? "Copied to clipboard" : "Copy failed — please select the number and copy it manually"
          );
          window.clearTimeout(timer);
          timer = window.setTimeout(function () {
            btn.classList.remove("is-copied");
            if (labelEl) labelEl.textContent = baseLabel;
            btn.setAttribute("aria-label", baseAria);
          }, 2000);
        });
      });
    });
  })();

  /* ----------------------------------------------------------
     14. Contact form — client-side validation + mailto handoff
         The form has no backend. It NEVER claims a message was sent.
     ---------------------------------------------------------- */
  (function contactForm() {
    var form = document.getElementById("contactForm") || document.querySelector(".contact-form");
    if (!form) return;

    var status = form.querySelector(".form-status") || document.querySelector(".form-status");
    var mailTo = form.getAttribute("data-mailto") || "shruthikacharitabletrust2@gmail.com";

    var fields = {
      name: form.querySelector('[name="name"]'),
      email: form.querySelector('[name="email"]'),
      phone: form.querySelector('[name="phone"]'),
      subject: form.querySelector('[name="subject"]'),
      message: form.querySelector('[name="message"]')
    };

    var emailRe = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
    var phoneRe = /^[0-9+()\-.\s]{7,20}$/;

    function valueOf(input) {
      return input ? String(input.value || "").trim() : "";
    }

    function setError(input, message) {
      if (!input) return;
      var field = input.closest(".field");
      if (field) {
        field.classList.add("is-invalid");
        var err = field.querySelector(".field__error");
        if (err) {
          err.textContent = message;
          if (!err.id) err.id = (input.id || input.name || "field") + "-error";
          var described = input.getAttribute("aria-describedby") || "";
          if (described.indexOf(err.id) === -1) {
            input.setAttribute("aria-describedby", (described + " " + err.id).trim());
          }
        }
      }
      input.setAttribute("aria-invalid", "true");
    }

    function clearError(input) {
      if (!input) return;
      var field = input.closest(".field");
      if (field) {
        field.classList.remove("is-invalid");
        var err = field.querySelector(".field__error");
        if (err) err.textContent = "";
      }
      input.removeAttribute("aria-invalid");
    }

    function setStatus(message, kind) {
      if (!status) return;
      status.classList.remove("is-ok", "is-error");
      status.textContent = message;
      if (kind) status.classList.add(kind);
    }

    function validate() {
      var invalid = [];

      Object.keys(fields).forEach(function (key) {
        clearError(fields[key]);
      });

      if (valueOf(fields.name).length < 2) {
        setError(fields.name, "Please tell us your name.");
        invalid.push(fields.name);
      }
      if (!emailRe.test(valueOf(fields.email))) {
        setError(fields.email, "Please enter a valid email address, e.g. name@example.com.");
        invalid.push(fields.email);
      }
      if (fields.phone && valueOf(fields.phone) && !phoneRe.test(valueOf(fields.phone))) {
        setError(fields.phone, "Please enter a valid phone number, or leave this blank.");
        invalid.push(fields.phone);
      }
      if (valueOf(fields.message).length < 10) {
        setError(fields.message, "Please write a short message (at least 10 characters).");
        invalid.push(fields.message);
      }

      return invalid.filter(Boolean);
    }

    Object.keys(fields).forEach(function (key) {
      var input = fields[key];
      if (!input) return;
      input.addEventListener("input", function () {
        var field = input.closest(".field");
        if (field && field.classList.contains("is-invalid")) clearError(input);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var invalid = validate();
      if (invalid.length) {
        setStatus(
          "Please correct the highlighted " +
            (invalid.length === 1 ? "field" : "fields") +
            " and try again.",
          "is-error"
        );
        focusSafely(invalid[0]);
        return;
      }

      var name = valueOf(fields.name);
      var subject = valueOf(fields.subject) || "Website enquiry from " + name;
      var lines = [
        "Name: " + name,
        "Email: " + valueOf(fields.email),
        "Phone: " + (valueOf(fields.phone) || "not provided"),
        "Subject: " + subject,
        "",
        "Message:",
        valueOf(fields.message),
        "",
        "— Sent via the Shruthika Trust website contact form"
      ];

      var href =
        "mailto:" +
        mailTo +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(lines.join("\n"));

      setStatus(
        "Your email app is opening with this message ready to go to " +
          mailTo +
          ". Nothing has been sent yet — please press send there. If no app opens, email us directly at " +
          mailTo +
          ".",
        "is-ok"
      );

      window.setTimeout(function () {
        window.location.href = href;
      }, 60);
    });
  })();

  /* ----------------------------------------------------------
     15. Auto-stagger reveal delays for the new grid wrappers
         (pure CSS reveal; this only fills in a --d if none was set)
     ---------------------------------------------------------- */
  (function staggerNewGroups() {
    if (reduceMotion) return;
    var groups = all(
      ".cause-grid, .fact-row, .give-grid, .info-grid, .timeline, .qr-row, .gallery-grid, .form-grid"
    );
    if (!groups.length) return;
    groups.forEach(function (group) {
      Array.prototype.forEach.call(group.children, function (child, i) {
        if (child.hasAttribute("data-reveal") && !child.style.getPropertyValue("--d")) {
          // Capped: each child reveals as it enters the viewport, so a delay
          // taken from the absolute index would leave the 22nd gallery tile
          // waiting 1.5s after it is already on screen.
          child.style.setProperty("--d", Math.min(i, 7) * 70);
        }
      });
    });
  })();
})();
