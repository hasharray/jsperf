---
title: URLSearchParams vs replace
setup: |
  let urls = [
      '?oauth_token=a12321qwcawjh801923hn&ascasc',
      '?a=b',
      '',
      'oauth_token=a12321qwcawjh801923hn&ascasc',
      '?oauth_token=a12321qwcawjh801923hn&ascasc&user=foo',
      '?oauth_token=a12321qwcawjh801923hn&ascasc&user=foo&oauth_token=foo',
      '?a=1&oauth_token=a12321qwcawjh801923hn&ascasc&b=2'
    ];
    
    for (let i = 1; i < 10; i++) {
      urls = urls.concat(urls);
    }
tests:
  -
    name: URLSearchParams
    code: |
      urls.forEach(url = > {
        let params = new URLSearchParams(url);
        params.delete('oauth_token');
      });
  -
    name: replace
    code: |
      urls.forEach(url = > url.replace(/oauth_token=\w+&+/, ''));
---

