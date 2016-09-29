---
title: Boolean vs String
setup: |
  var url = "https://www.google.fi/search?q=js+performance&oq=js+perf&aqs=chrome.0.0j69i57j0l4.1583j0j7&sourceid=chrome&ie=UTF-8#q=jsperf+alternative";
  var feature = Math.random() > 0.5;
tests:
  -
    name: Boolean
    code: |
      if (true);
  -
    name: String
    code: |
      if (url.substr(0, 6) === "https:");
---

