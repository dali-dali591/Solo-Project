$(document).ready(function() {

    $("#submit-btn").click(function() {
      var d1 = $("#date").val();

      var m1 = $("#month").val();

      var y1 = $("#year").val();
  
      var date = new Date();

      var d2 = date.getDate();

      var m2 = 1 + date.getMonth();

      var y2 = date.getFullYear();

      var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
      if (d1 > d2) {

        d2 = d2 + month[m2 - 1];

        m2 = m2 - 1;
      };
      if (m1 > m2) {
        m2 = m2 + 12;

        y2 = y2 - 1;
      }
      var d = d2 - d1;

      var m = m2 - m1;

      var y = y2 - y1;
  
      $("#age").text('Your Age is ' + y + ' Years ' + m + ' Months ' + d + ' Days');
  
      var ageInHours = calculateAgeInHours(y, m, d);

      $("#age-hours").text('And ' + ageInHours + ' hours.');
    });
  
    function calculateAgeInHours(years, months, days) {
      var hoursInDay = 24;

      var daysInYear = 365
      var hoursInYear = hoursInDay * daysInYear;
      var hoursInMonth = hoursInYear / 12;
  
      var totalHours = (years * hoursInYear) + (months * hoursInMonth) + (days * hoursInDay);
      return totalHours;
    }
  });
  
  