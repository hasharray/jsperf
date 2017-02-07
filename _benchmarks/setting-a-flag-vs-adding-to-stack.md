---
title: setting a flag vs adding to stack
setup: |
  var flag;
  var array;
tests:
  -
    name: setting a flag
    code: |
      function setFlag(val) {
      flag = val;
      }
  -
    name: adding to stack
    code: |
      var stack = [];
      stack.push({ companyId: 555, companyName: 'Nike', companyAddressLine1: 'Nike Towers', companyAddressLine2: 'Nike Road', companyAddressState: 'Ohio', companyAddressZip: '10001-01', companyCountry: 'United States', companyHqPhone: '001-756-555-0987', companyWebsite: 'http://www.nike.com', companyDuns: 847362982, companyRegistrationNumber: 683798309, companyRegisteredTax: '527498-098' });
---
Setting a flag vs pushing to an array
