    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Reddit Hydra</title>
        <link type="text/css" rel="stylesheet" href="home.css" media="screen">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
  
          <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="http://code.highcharts.com/highcharts.js"></script>
		<script src="http://code.highcharts.com/modules/exporting.js"></script>
  
  
  
    </script>
        <script type="javascript">


    </script>
     </head>
    
    
        
        <!--body begins-->
      <body>
          

              <!--BANNER begins-->
        <div id="banner"><center>
        <a href="home.html"><img id="logoleft" src="Hydra_logo.png" alt="Welcome"></a></center>
         </div>
              <!--BANNER ends-->
          
          
           </div>
        <!--BUTTONS end-->
          
          
        
          <!--MAIN TEXT begins-->

<div id="toptext">
	<h1><center>HYDRA REDDIT: <?php echo  $_POST["name"] ; ?></h1><br>

	<p><center> Pie chart of most popular subreddit<br>Click on slice to navigate </center>
	
	
		
		
        <div id="container">
		<script>
		
			
		
				var myKeyword = <?php echo "\"" . $_POST["name"] . "\""; ?>;
				var myLimit = <?php echo $_POST['limit']; ?>;
				
				var subredditCount = [];
	            var redditURL = "http://www.reddit.com";
	            var URL = "http://www.reddit.com/.json";
				var searchURL = "http://www.reddit.com/search.json?q=" + myKeyword + "&limit=100";
	           
	            /* Waits for DOM to be fully loaded before executing */
	            $(document).ready(function(){
	               
	                /* Retrieves the json data from the URL */
	                $.getJSON(searchURL, function(json){
						function getPage(data){
							json.data.children.forEach(function(childData){
								if(subredditCount.length === 0){
									subredditCount.push({"subreddit": childData.data.subreddit, "count": 1});
								}else{
									for(i = 0; i < subredditCount.length; i++){
										if(subredditCount[i].subreddit === childData.data.subreddit){
											subredditCount[i].count += 1;
											return;
										}
									}
								}
								subredditCount.push({"subreddit": childData.data.subreddit, "count": 1});
							});
						}
						
						getPage(json);
						
						if(json.data.after !== null){
							$.getJSON(searchURL + "&after=" + json.data.after, function(nextPageData){
								getPage(nextPageData);
								console.log(subredditCount);
							});
						}
						 
						
						
						setTimeout(function(){
							window.scrollTo(0,155); //scroll down
							/* Sort by count */
							subredditCount.sort(function(a, b){
								if(a.count < b.count)
									return 1;
								else if(a.count > b.count)
									return -1;
								else
									return 0;
							});
							
							/* storeWordData is to a storage place to put into the graph's data */
							var storeSubredditCount = [];
							console.log(subredditCount);
							/* Adds the top 20 words into the array */
							for(var i = 0; i < 20 && i < subredditCount.length; i++){
								storeSubredditCount.push([subredditCount[i].subreddit, subredditCount[i].count]);
								console.log(storeSubredditCount);
							}
						
							/* Highchart graphing of a pie chart of top 20 word count */
							$('#container').highcharts({
								chart: {
									plotBackgroundColor: null,
									plotBorderWidth: null,
									plotShadow: false
								},
								title: {
									text: 'Keyword Search Results'
								},
								tooltip: {
									pointFormat: '{series.name}: <b>{point.y}</b>'
								},
								plotOptions: {
									pie: {
										allowPointSelect: false,
										cursor: 'pointer',
										dataLabels: {
											enabled: true,
											color: '#000000',
											connectorColor: '#000000',
											format: '<b>/r/{point.name}</b>: {point.percentage:.1f} %'
										}
									}
								},
								series: [{
									type: 'pie',
									name: 'Word Count',
									data: storeSubredditCount
								}]
							},
						   
							
							
							/* A little extra if they click on the graph they will be sent to reddit's home page */
							function(item){
								var a = $(this);
								$('path').click(function(){
									//document.write('<a href="http://www.reddit.com" onclick="window.open(this.href); return false;"></a>');
									window.location.href = "http://www.reddit.com/r/";
									
								});
							   
							})
						}, 5000);
						
						
						if (myKeyword == "") { $('#subNames').text("Empty Keyword.");
						
						setTimeout(function(){window.location.href='home.html'},1000);
						
						} else {
						
						$('#subNames').html(function(){
							var allsubreddit = "";
							subredditCount.forEach(function(sr){
								allsubreddit += "<a href='" + redditURL + "/r/" + sr.subreddit + "'</a>" + sr.subreddit + "<br>";
							});
							
							return allsubreddit;
						}); }
						
						
	                });

	            });
				
			
	       </script>
           </div>
	

	
</center>
</p>
<center> List of Subreddits
	<div id=subNames>  </div></center>

          
          <div id="wrap">
        <div id="main">
        </div>
    </div>
    <div id="footerblock">
               &copy; 2014, Andrew Kind, Derek Mak
          <br>
          All trademarks and registered trademarks appearing on 
          this site are the property of their respective owners. 
    </div>
          


	</div>
	
	

 <!--MAIN TEXT ends-->

          
          
    </body>
        <!--body ends--> 
    </html>