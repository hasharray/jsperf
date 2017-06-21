---
title: Test filters vs Test filters 2
setup: |
  const users = [
    {
      'email': 'sweet.cooley@progenex.biz',
      'company': 'PROGENEX',
      'name': {
        'last': 'Cooley',
        'first': 'Sweet'
      },
      '_id': '594a4689ada26d6cb9feffe1'
    },
    {
      'email': 'ortiz.harding@zytrax.name',
      'company': 'ZYTRAX',
      'name': {
        'last': 'Harding',
        'first': 'Ortiz'
      },
      '_id': '594a46895476eaa94d5c4435'
    },
    {
      'email': 'shelby.rodriquez@daido.co.uk',
      'company': 'DAIDO',
      'name': {
        'last': 'Rodriquez',
        'first': 'Shelby'
      },
      '_id': '594a468979dcd0c1a8d17bc7'
    },
    {
      'email': 'frank.hutchinson@zytrac.org',
      'company': 'ZYTRAC',
      'name': {
        'last': 'Hutchinson',
        'first': 'Frank'
      },
      '_id': '594a468931e60304a407f586'
    },
    {
      'email': 'jill.suarez@schoolio.ca',
      'company': 'SCHOOLIO',
      'name': {
        'last': 'Suarez',
        'first': 'Jill'
      },
      '_id': '594a46899620f7c89208f0a9'
    },
    {
      'email': 'marcia.burks@digifad.io',
      'company': 'DIGIFAD',
      'name': {
        'last': 'Burks',
        'first': 'Marcia'
      },
      '_id': '594a46893626cc1f9e4a83e8'
    },
    {
      'email': 'noel.reid@greeker.com',
      'company': 'GREEKER',
      'name': {
        'last': 'Reid',
        'first': 'Noel'
      },
      '_id': '594a46892f98984097e6d941'
    },
    {
      'email': 'hall.hoover@eyeris.us',
      'company': 'EYERIS',
      'name': {
        'last': 'Hoover',
        'first': 'Hall'
      },
      '_id': '594a468970f3b28ff58477a2'
    },
    {
      'email': 'delaney.hammond@photobin.tv',
      'company': 'PHOTOBIN',
      'name': {
        'last': 'Hammond',
        'first': 'Delaney'
      },
      '_id': '594a4689604f982f4c3b7bf6'
    },
    {
      'email': 'bethany.aguilar@xinware.me',
      'company': 'XINWARE',
      'name': {
        'last': 'Aguilar',
        'first': 'Bethany'
      },
      '_id': '594a4689837537b2e9ce6a3a'
    },
    {
      'email': 'jacklyn.branch@roboid.net',
      'company': 'ROBOID',
      'name': {
        'last': 'Branch',
        'first': 'Jacklyn'
      },
      '_id': '594a4689a5a35af281b74c6c'
    },
    {
      'email': 'vasquez.ingram@geeky.biz',
      'company': 'GEEKY',
      'name': {
        'last': 'Ingram',
        'first': 'Vasquez'
      },
      '_id': '594a4689c1a280c03da0119b'
    },
    {
      'email': 'saundra.mann@centice.biz',
      'company': 'CENTICE',
      'name': {
        'last': 'Mann',
        'first': 'Saundra'
      },
      '_id': '594a46895304a4c18698cdc5'
    },
    {
      'email': 'woodard.molina@imperium.name',
      'company': 'IMPERIUM',
      'name': {
        'last': 'Molina',
        'first': 'Woodard'
      },
      '_id': '594a468917949e858f13b481'
    },
    {
      'email': 'marcella.brown@bleeko.co.uk',
      'company': 'BLEEKO',
      'name': {
        'last': 'Brown',
        'first': 'Marcella'
      },
      '_id': '594a468903d24c3eb25402b6'
    },
    {
      'email': 'mullen.lewis@geoforma.org',
      'company': 'GEOFORMA',
      'name': {
        'last': 'Lewis',
        'first': 'Mullen'
      },
      '_id': '594a4689888cec493ec3bb4f'
    },
    {
      'email': 'hodges.durham@rubadub.ca',
      'company': 'RUBADUB',
      'name': {
        'last': 'Durham',
        'first': 'Hodges'
      },
      '_id': '594a4689b4ed7288cc791ae5'
    },
    {
      'email': 'jenny.silva@trollery.io',
      'company': 'TROLLERY',
      'name': {
        'last': 'Silva',
        'first': 'Jenny'
      },
      '_id': '594a468984feb4721144dc9e'
    },
    {
      'email': 'laurie.winters@magnafone.com',
      'company': 'MAGNAFONE',
      'name': {
        'last': 'Winters',
        'first': 'Laurie'
      },
      '_id': '594a46892a13cc37ca32bfe7'
    },
    {
      'email': 'angelita.gould@comstar.us',
      'company': 'COMSTAR',
      'name': {
        'last': 'Gould',
        'first': 'Angelita'
      },
      '_id': '594a46895164766570fdbda9'
    },
    {
      'email': 'ebony.lawson@cinaster.tv',
      'company': 'CINASTER',
      'name': {
        'last': 'Lawson',
        'first': 'Ebony'
      },
      '_id': '594a4689b50bbc000ca67ec5'
    },
    {
      'email': 'green.larsen@injoy.me',
      'company': 'INJOY',
      'name': {
        'last': 'Larsen',
        'first': 'Green'
      },
      '_id': '594a4689ae13f984823a4c5d'
    },
    {
      'email': 'langley.levine@papricut.net',
      'company': 'PAPRICUT',
      'name': {
        'last': 'Levine',
        'first': 'Langley'
      },
      '_id': '594a4689eaed1f97594d19c7'
    },
    {
      'email': 'wilder.riddle@snorus.biz',
      'company': 'SNORUS',
      'name': {
        'last': 'Riddle',
        'first': 'Wilder'
      },
      '_id': '594a4689f2c76689d7d4d0a6'
    },
    {
      'email': 'rebekah.gilmore@songlines.biz',
      'company': 'SONGLINES',
      'name': {
        'last': 'Gilmore',
        'first': 'Rebekah'
      },
      '_id': '594a46896c5eb541dde0b835'
    },
    {
      'email': 'kenya.spencer@barkarama.name',
      'company': 'BARKARAMA',
      'name': {
        'last': 'Spencer',
        'first': 'Kenya'
      },
      '_id': '594a46890e9420612781003c'
    },
    {
      'email': 'rutledge.henry@inventure.co.uk',
      'company': 'INVENTURE',
      'name': {
        'last': 'Henry',
        'first': 'Rutledge'
      },
      '_id': '594a468936987c4e3fba23c2'
    },
    {
      'email': 'lara.black@ramjob.org',
      'company': 'RAMJOB',
      'name': {
        'last': 'Black',
        'first': 'Lara'
      },
      '_id': '594a46893c7b4e158e7f8e83'
    },
    {
      'email': 'oneil.bolton@snowpoke.ca',
      'company': 'SNOWPOKE',
      'name': {
        'last': 'Bolton',
        'first': 'Oneil'
      },
      '_id': '594a4689e2e6d43d06714424'
    },
    {
      'email': 'keith.schroeder@gluid.io',
      'company': 'GLUID',
      'name': {
        'last': 'Schroeder',
        'first': 'Keith'
      },
      '_id': '594a46892bea0d1311718e2b'
    },
    {
      'email': 'davidson.osborn@lovepad.com',
      'company': 'LOVEPAD',
      'name': {
        'last': 'Osborn',
        'first': 'Davidson'
      },
      '_id': '594a4689c74c8d118f56fa96'
    }
  ]
tests:
  -
    name: Test filters
    code: |
      console.log(users)
  -
    name: Test filters 2
    code: |
      console.log(users)
---
Test filters
