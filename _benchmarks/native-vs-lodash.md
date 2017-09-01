---
title: native vs lodash
setup: |
  const ANOTHER_RECIPIENT = 'ANOTHER_RECIPIENT';
  const emailType = 'ANOTHER_RECIPIENT';
  const email = { foo: 100, bar: 'baz' };
  const sendEmailOption = [{ key: 'yolo' }];
  
  const nativeFn = () => {
      const selectedEmail = (emailType === ANOTHER_RECIPIENT)
        ? ANOTHER_RECIPIENT
        : _.isEmpty(email)
          ? sendEmailOption[0].key
          : email;
  }
  
  const lodashFn = () => {
      const = selectedEmail = _.cond([
        [() => emailType === ANOTHER_RECIPIENT, () => ANOTHER_RECIPIENT],
        [() => _.isEmpty(email), () => _.get(_.first(sendEmailOption), 'key')],
        [() => true, () => email]
      ])();
  }
tests:
  -
    name: native
    code: |
      nativeFn();
  -
    name: lodash
    code: |
      lodashFn();
---

