---
title: lodash vs no lodash
setup: |
  <script src="https://cdn.jsdelivr.net/lodash/4.2/lodash.min.js"></script>
  <script> var settings = {config: {attributes:{validations: [{max: 10}, {max:5}]}}};</script>
tests:
  -
    name: lodash
    code: |
      _.get(settings, 'config.attributes.validations[1].max');
  -
    name: no lodash
    code: |
      settings.config.attributes.validations[1].max
---

