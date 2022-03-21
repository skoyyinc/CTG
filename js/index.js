//jshint esversion:8

$(document).ready(function(){

  let feedbackObject = [
    ["client01.png","SVP Human Capital","PT. Penjaminan Infrastruktur Indonesia","CTG+ team is very knowledgeable, cooperative, and helpful throughout the HR Blueprint project. This gives stakeholder confidence in project delivery. CTG+ team successfully leads required meetings for multiple purposes, which involve participants from various organization levels."],
    ["client08.png","HR Director"," PT. Jababeka Tbk.","CTG+ is very professional and able to interact with various parties independently. The team shows high commitment and manage to successfully deliver the project on time. Deliverables can be held accountable and becomes valuable reference for management in decision making."],
    ["client09.png","Finance and Compliance Director","PT. InfraCom Technology", "ICT has been engaged with CTG+ since 2019. During the course of our engagement, the projects are always on time and spot on to what the company needs. Currently our HR Programs are more structured and easier to be understood across the board. Simply put, we are fully satisfied with CTG+'s work."],
    ["client10.png","Chief Executive Officer","Timezone Indonesia","The approach adopted by CTG+ team was very methodical, meticulous and thorough professional. This gave a sense of fairness to team involved and confidence to Management. Recommendations made were practical and executable. I strongly recommend CTG+ team for any Re-Organization project and look forward to engange with the team for people related projects in the future."]
  ];

  $("#feedbackLogo").attr("data-fb-index","0");
  $("#feedbackLogo").attr("src","assets/"+feedbackObject[0][0]);
  $("#feedback-title").html(feedbackObject[0][1]);
  $("#feedback-company").html(feedbackObject[0][2]);
  $("#feedback-content").html(feedbackObject[0][3]);



  function nextFeedback(){
    if (Number($("#feedbackLogo").attr("data-fb-index")) === feedbackObject.length - 1){
      $("#feedbackLogo").attr("data-fb-index","0");
      $("#feedbackLogo").attr("src","assets/"+feedbackObject[0][0]);
      $("#feedback-title").html(feedbackObject[0][1]);
      $("#feedback-company").html(feedbackObject[0][2]);
      $("#feedback-content").html(feedbackObject[0][3]);
    } else {
      let currentIndex = Number($("#feedbackLogo").attr("data-fb-index"));
      $("#feedbackLogo").attr("data-fb-index",currentIndex + 1);
      $("#feedbackLogo").attr("src","assets/"+feedbackObject[currentIndex+1][0]);
      $("#feedback-title").html(feedbackObject[currentIndex+1][1]);
      $("#feedback-company").html(feedbackObject[currentIndex+1][2]);
      $("#feedback-content").html(feedbackObject[currentIndex+1][3]);
    }
  }

  function prevFeedback(){
    if (Number($("#feedbackLogo").attr("data-fb-index")) === 0){
      $("#feedbackLogo").attr("data-fb-index",feedbackObject.length - 1);
      $("#feedbackLogo").attr("src","assets/"+feedbackObject[feedbackObject.length - 1][0]);
      $("#feedback-title").html(feedbackObject[feedbackObject.length - 1][1]);
      $("#feedback-company").html(feedbackObject[feedbackObject.length - 1][2]);
      $("#feedback-content").html(feedbackObject[feedbackObject.length - 1][3]);
    } else {
      let currentIndex = Number($("#feedbackLogo").attr("data-fb-index"));
      $("#feedbackLogo").attr("data-fb-index",currentIndex - 1);
      $("#feedbackLogo").attr("src","assets/"+feedbackObject[currentIndex - 1][0]);
      $("#feedback-title").html(feedbackObject[currentIndex-1][1]);
      $("#feedback-company").html(feedbackObject[currentIndex-1][2]);
      $("#feedback-content").html(feedbackObject[currentIndex-1][3]);
    }
  }

  $("#nextButton").click(nextFeedback);
  $("#prevButton").click(prevFeedback);


  $(".service-card").hover(function() {
    $(this).children().eq(1).css("display", "block");
  }, function() {
    $(this).children().eq(1).css("display", "none");
  });

  let clientStart = 0;
  let clientMax = 20;

  let projectStart = 0;
  let projectMax = 30;

  let trainingStart = 0;
  let trainingMax = 40;

  $("#clientCount").html(clientStart);
  $("#projectCount").html(projectStart);
  $("#trainingCount").html(trainingStart);

  setInterval(function(){
    if (Number($("#clientCount").html()) === clientMax){
      clearInterval();
    } else {
      clientStart += 1;
      $("#clientCount").html(clientStart);
    }
  },100);

  setInterval(function(){
    if (Number($("#projectCount").html()) === projectMax){
      clearInterval();
    } else {
      projectStart += 1;
      $("#projectCount").html(projectStart);
    }
  },100);

  setInterval(function(){
    if (Number($("#trainingCount").html()) === trainingMax){
      clearInterval();
    } else {
      trainingStart += 1;
      $("#trainingCount").html(trainingStart);
    }
  },100);





});
