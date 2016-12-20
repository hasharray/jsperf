---
title: empty-append vs html
setup: |
  var template = '<ul><li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, aliquid! Repellendus, ab eveniet ipsum praesentium reiciendis consequuntur velit tenetur nisi, soluta explicabo adipisci, aperiam perferendis libero quidem odio alias eum.</li><li>Impedit cum harum veritatis quisquam, non enim, commodi ipsum recusandae alias natus rem! Doloribus provident obcaecati rerum placeat eum ratione quae minus aspernatur quibusdam, omnis ea earum dolorem molestiae tempora.</li><li>Culpa soluta natus cum, nesciunt itaque, perferendis a iusto magnam harum reiciendis placeat voluptas explicabo adipisci, dolorum nam doloremque error pariatur repellendus! Commodi tenetur maiores iure similique nam exercitationem qui.</li><li>Unde illo quam voluptas quisquam consequuntur voluptates praesentium. Porro iusto repudiandae eius temporibus doloribus totam inventore corporis beatae aut doloremque atque officiis ad, vero similique quae, voluptas velit voluptate eum.</li><li>Inventore a laboriosam, labore ducimus, cumque quia odio ipsam molestiae nostrum dicta nesciunt, impedit facilis. Error ex reprehenderit nobis obcaecati eius officiis, vitae doloribus, blanditiis at sint nulla esse beatae!</li><li>Unde quae quaerat quibusdam asperiores fugit facere eos et laboriosam numquam exercitationem. Debitis officiis facere fuga aspernatur in quos odio aut eligendi! Laboriosam accusantium soluta, magnam unde harum recusandae totam.</li><li>Distinctio quidem nobis suscipit iure mollitia sequi facere fugiat ullam vero laboriosam odio magnam tempora animi, quis nulla eaque veniam. Repellat accusantium, deserunt aperiam esse illum alias ab nobis est!</li><li>Atque obcaecati omnis nobis doloremque non quo exercitationem reprehenderit fugiat quibusdam. Tenetur atque doloremque cumque, aperiam sapiente, enim aliquam impedit, vitae iusto nemo officiis, quibusdam vel quia adipisci optio facilis.</li><li>Iste molestiae nemo adipisci cumque ratione accusamus, obcaecati voluptate nam distinctio esse dolor sint autem qui provident tempore perspiciatis dicta, odit repudiandae numquam quis corporis consequuntur quas! Debitis, quod at.</li><li>Incidunt facilis minus magnam nostrum excepturi temporibus impedit voluptas alias, dolore doloribus consequatur dolorum, ducimus officia, minima labore expedita a quis quas perferendis, vel quisquam adipisci tempore aut assumenda sequi.</li></ul>';
  var s = document.createElement('script');
  s.src = 'https://code.jquery.com/jquery-3.1.1.min.js';
  s.type = 'text/javascript'
  document.body.appendChild(s);
  var test = document.createElement('div');
  test.id = 'test';
  document.body.appendChild(test);
tests:
  -
    name: empty-append
    code: |
      $('#test').empty().append(template)
  -
    name: html
    code: |
      $('#test').html(template)
---

