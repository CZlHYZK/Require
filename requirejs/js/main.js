requirejs.config({
  baseUrl:'js',
});
requirejs(['lib/jquery-3.3.1','goTop','carousel','pubu'],function(jq,goTop,carousel,Pubu){
  carousel.start($(".container"));
  var pubu=new Pubu(8,3);
  pubu.init();
  pubu.getNextPage();
  $(".btn-load").click(function(){
    pubu.getNextPage();
  });
})