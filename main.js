$(document).ready(function () {
  $(".item").each(function () {
    var randomtop = Math.floor(
        Math.random() * ($("#container").height() - $(this).height() - 20)
      ),
      randomleft = Math.floor(
        Math.random() * ($("#container").width() - $(this).width() - 20)
      ),
      randomzindex = Math.floor(Math.random() * 30);
    $(this).css({
      top: randomtop,
      left: randomleft,
      "z-index": randomzindex,
    });
  });
});

var sprout = 1;
      
      function changeJournal() {
         var img = document.getElementById('journal');
         
         if (sprout = 1) {
            img.src = "image/journal.png";
            sprout = 2;
         }
      }

      function changeFirst() {
         var img = document.getElementById('firstwebsite');
         
         if (sprout = 1) {
            img.src = "image/firstwebsite.png";
            sprout = 2;
         }
      }

      function changeMoon() {
         var img = document.getElementById('moon');
         
         if (sprout = 1) {
            img.src = "image/moon.png";
            sprout = 2;
         }
      }

      function changeDark() {
         var img = document.getElementById('dark');
         
         if (sprout = 1) {
            img.src = "image/labyrinth.png";
            sprout = 2;
         }
      }

      function changePlankton() {
         var img = document.getElementById('plankton');
         
         if (sprout = 1) {
            img.src = "image/screensaver.png";
            sprout = 2;
         }
      }

      function changeSprout1() {
         var img = document.getElementById('sprout1');
         
         if (sprout = 1) {
            img.src = "image/sprout3.png";
            sprout = 2;
         }
      }

      function changeSprout2() {
         var img = document.getElementById('sprout2');
         
         if (sprout = 1) {
            img.src = "image/sprout3.png";
            sprout = 2;
         }
      }

      function changeSprout3() {
         var img = document.getElementById('sprout3');
         
         if (sprout = 1) {
            img.src = "image/sprout3.png";
            sprout = 2;
         }
      }