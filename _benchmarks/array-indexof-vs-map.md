---
title: array#indexOf vs map
setup: |
  
tests:
  -
    name: array#indexOf
    code: |
      function(){
      
      var UKAreaCountries = ['Albania', 'Armenia', 'Austria', 'Azerbaijan', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Faroe Islands', 'Finland', 'France', 'Georgia', 'Germany', 'Greece', 'Guadeloupe', 'Holy See (Vatican City State)', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Malta', 'Martinique', 'Moldova, Republic of', 'Monaco', 'Montenegro', 'Morocco', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Reunion', 'Romania', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Tajikistan', 'Turkey', 'Ukraine'];
         
           if(UKAreaCountries.indexOf('Ukraine') > -1) {
                return true;
           }
           return false;
      }
  -
    name: map
    code: |
      function(){
      
      var UKAreaCountries = ['Albania' : null, 'Armenia' : null, 'Austria' : null, 'Azerbaijan' : null, 'Belgium' : null, 'Bosnia and Herzegovina' : null, 'Bulgaria' : null, 'Croatia': null, 'Cyprus' : null, 'Czech Republic' : null, 'Denmark' : null, 'Estonia' : null, 'Faroe Islands' : null, 'Finland' : null, 'France' : null, 'Georgia' : null, 'Germany' : null , 'Greece' : null , 'Guadeloupe' : null, 'Holy See (Vatican City State)' : null, 'Hungary' : null, 'Iceland' : null, 'Ireland' : null, 'Italy' : null, 'Latvia' : null, 'Liechtenstein' : null, 'Lithuania' : null, 'Luxembourg' : null, 'Macedonia' : null, 'Malta' : null, 'Martinique' : null, 'Moldova, Republic of' : null, 'Monaco' : null, 'Montenegro' : null, 'Morocco' : null, 'Netherlands' : null, 'Norway' : null, 'Poland' : null, 'Portugal' : null, 'Reunion' : null, 'Romania' : null, 'San Marino' : null, 'Serbia' : null, 'Slovakia' : null, 'Slovenia' : null, 'Spain': null, 'Sweden' : null, 'Switzerland' : null, 'Tajikistan' : null, 'Turkey' : null, 'Ukraine' : null];
      
      
           if('Ukraine' in UKAreaCountries) {
                return true;
           }
           return false;
      }
---

