---
title: tr:last vs :last-child vs Javascript
setup: |
  <script
  			  src="https://code.jquery.com/jquery-2.1.3.min.js"
  			  integrity="sha256-ivk71nXhz9nsyFDoYoGf2sbjrR9ddh+XDkCcfZxjvcM="
  			  crossorigin="anonymous"></script>
  
  <table id="tableList" class="slcBody" cellspacing="0" cellpadding="1" role="listbox">
     <tbody>
        <tr role="option" class="slcRow" aria-selected="true" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;"> </td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Abby Benton</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Abby Fender</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Alan Schuck</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Alan Gosdin</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Alan Harris</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Alan Aimee</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Alan Perry</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Alan Mathis</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Alex Arnold</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Alex Crawford</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Alex Dennison</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Alex Steele</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Alexandra Hall</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Alexandra Blades</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Alyssa Hooks</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Andre Milano</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Angel McRaney</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Anthony John Beck</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Anthony John Russell</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Anthony John Rasche</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Anthony Michael Delany</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Anthony Michael Carter</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Anthony Michael Frann</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Arielle Barash</td>
        </tr>
        <tr role="option" class="slcRow" style="height: 16px;">
           <td nowrap="" style="padding-left: 7px;">Arielle Carter</td>
        </tr>
     </tbody>
  </table>
tests:
  -
    name: tr:last
    code: |
      var element = $("#tableList").find("tr:last")[0];
  -
    name: :last-child
    code: |
      var element = $("#tableList").find("tbody > :last-child")[0];
  -
    name: Javascript
    code: |
      var element = document.getElementById("tableList").firstChild.querySelectorAll("tr:last-child");
---
last-child tests examples
