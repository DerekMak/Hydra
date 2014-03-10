var stopWords = {
    "a" : "a",
    "able" : "able",
    "about" : "about",
    "above" : "above",
    "according" : "according",
    "accordingly" : "accordingly",
    "across" : "across",
    "actually" : "actually",
    "after" : "after",
    "afterwards" : "afterwards",
    "again" : "again",
    "against" : "against",
    "ain't" : "ain't",
    "all" : "all",
    "allow" : "allow",
    "allows" : "allows",
    "almost" : "almost",
    "alone" : "alone",
    "along" : "along",
    "already" : "already",
    "also" : "also",
    "although" : "although",
    "always" : "always",
    "am" : "am",
    "among" : "among",
    "amongst" : "amongst",
    "an" : "an",
    "and" : "and",
    "another" : "another",
    "any" : "any",
    "anybody" : "anybody",
    "anyhow" : "anyhow",
    "anyone" : "anyone",
    "anything" : "anything",
    "anyway" : "anyway",
    "anyways" : "anyways",
    "anywhere" : "anywhere",
    "apart" : "apart",
    "appear" : "appear",
    "appreciate" : "appreciate",
    "appropriate" : "appropriate",
    "are" : "are",
    "aren't" : "aren't",
    "around" : "around",
    "as" : "as",
    "aside" : "aside",
    "ask" : "ask",
    "asking" : "asking",
    "associated" : "associated",
    "at" : "at",
    "available" : "available",
    "away" : "away",
    "awfully" : "awfully",
    "be" : "be",
    "became" : "became",
    "because" : "because",
    "become" : "become",
    "becomes" : "becomes",
    "becoming" : "becoming",
    "been" : "been",
    "before" : "before",
    "beforehand" : "beforehand",
    "behind" : "behind",
    "being" : "being",
    "believe" : "believe",
    "below" : "below",
    "beside" : "beside",
    "besides" : "besides",
    "best" : "best",
    "better" : "better",
    "between" : "between",
    "beyond" : "beyond",
    "both" : "both",
    "brief" : "brief",
    "but" : "but",
    "by" : "by",
    "came" : "came",
    "can" : "can",
    "cannot" : "cannot",
    "cant" : "cant",
    "can't" : "can't",
    "cause" : "cause",
    "causes" : "causes",
    "certain" : "certain",
    "certainly" : "certainly",
    "changes" : "changes",
    "clearly" : "clearly",
    "c'mon" : "c'mon",
    "co" : "co",
    "com" : "com",
    "come" : "come",
    "comes" : "comes",
    "concerning" : "concerning",
    "consequently" : "consequently",
    "consider" : "consider",
    "considering" : "considering",
    "contain" : "contain",
    "containing" : "containing",
    "contains" : "contains",
    "corresponding" : "corresponding",
    "could" : "could",
    "couldn't" : "couldn't",
    "could've" : "could've",
    "course" : "course",
    "c's" : "c's",
    "currently" : "currently",
    "dear" : "dear",
    "definitely" : "definitely",
    "described" : "described",
    "despite" : "despite",
    "did" : "did",
    "didn't" : "didn't",
    "different" : "different",
    "do" : "do",
    "does" : "does",
    "doesn't" : "doesn't",
    "doing" : "doing",
    "done" : "done",
    "don't" : "don't",
    "down" : "down",
    "downwards" : "downwards",
    "during" : "during",
    "each" : "each",
    "edu" : "edu",
    "eg" : "eg",
    "eight" : "eight",
    "either" : "either",
    "else" : "else",
    "elsewhere" : "elsewhere",
    "enough" : "enough",
    "entirely" : "entirely",
    "especially" : "especially",
    "et" : "et",
    "etc" : "etc",
    "even" : "even",
    "ever" : "ever",
    "every" : "every",
    "everybody" : "everybody",
    "everyone" : "everyone",
    "everything" : "everything",
    "everywhere" : "everywhere",
    "ex" : "ex",
    "exactly" : "exactly",
    "example" : "example",
    "except" : "except",
    "far" : "far",
    "few" : "few",
    "fifth" : "fifth",
    "first" : "first",
    "five" : "five",
    "followed" : "followed",
    "following" : "following",
    "follows" : "follows",
    "for" : "for",
    "former" : "former",
    "formerly" : "formerly",
    "forth" : "forth",
    "four" : "four",
    "from" : "from",
    "further" : "further",
    "furthermore" : "furthermore",
    "get" : "get",
    "gets" : "gets",
    "getting" : "getting",
    "given" : "given",
    "gives" : "gives",
    "go" : "go",
    "goes" : "goes",
    "going" : "going",
    "gone" : "gone",
    "got" : "got",
    "gotten" : "gotten",
    "greetings" : "greetings",
    "had" : "had",
    "hadn't" : "hadn't",
    "happens" : "happens",
    "hardly" : "hardly",
    "has" : "has",
    "hasn't" : "hasn't",
    "have" : "have",
    "haven't" : "haven't",
    "having" : "having",
    "he" : "he",
    "he'd" : "he'd",
    "he'll" : "he'll",
    "hello" : "hello",
    "help" : "help",
    "hence" : "hence",
    "her" : "her",
    "here" : "here",
    "hereafter" : "hereafter",
    "hereby" : "hereby",
    "herein" : "herein",
    "here's" : "here's",
    "hereupon" : "hereupon",
    "hers" : "hers",
    "herself" : "herself",
    "he's" : "he's",
    "hi" : "hi",
    "him" : "him",
    "himself" : "himself",
    "his" : "his",
    "hither" : "hither",
    "hopefully" : "hopefully",
    "how" : "how",
    "howbeit" : "howbeit",
    "how'd" : "how'd",
    "however" : "however",
    "how'll" : "how'll",
    "how's" : "how's",
    "i" : "i",
    "i'd" : "i'd",
    "ie" : "ie",
    "if" : "if",
    "ignored" : "ignored",
    "i'll" : "i'll",
    "i'm" : "i'm",
    "immediate" : "immediate",
    "in" : "in",
    "inasmuch" : "inasmuch",
    "inc" : "inc",
    "indeed" : "indeed",
    "indicate" : "indicate",
    "indicated" : "indicated",
    "indicates" : "indicates",
    "inner" : "inner",
    "insofar" : "insofar",
    "instead" : "instead",
    "into" : "into",
    "inward" : "inward",
    "is" : "is",
    "isn't" : "isn't",
    "it" : "it",
    "it'd" : "it'd",
    "it'll" : "it'll",
    "its" : "its",
    "it's" : "it's",
    "itself" : "itself",
    "i've" : "i've",
    "just" : "just",
    "keep" : "keep",
    "keeps" : "keeps",
    "kept" : "kept",
    "know" : "know",
    "known" : "known",
    "knows" : "knows",
    "last" : "last",
    "lately" : "lately",
    "later" : "later",
    "latter" : "latter",
    "latterly" : "latterly",
    "least" : "least",
    "less" : "less",
    "lest" : "lest",
    "let" : "let",
    "let's" : "let's",
    "like" : "like",
    "liked" : "liked",
    "likely" : "likely",
    "little" : "little",
    "look" : "look",
    "looking" : "looking",
    "looks" : "looks",
    "ltd" : "ltd",
    "mainly" : "mainly",
    "many" : "many",
    "may" : "may",
    "maybe" : "maybe",
    "me" : "me",
    "mean" : "mean",
    "meanwhile" : "meanwhile",
    "merely" : "merely",
    "might" : "might",
    "mightn't" : "mightn't",
    "might've" : "might've",
    "more" : "more",
    "moreover" : "moreover",
    "most" : "most",
    "mostly" : "mostly",
    "much" : "much",
    "must" : "must",
    "mustn't" : "mustn't",
    "must've" : "must've",
    "my" : "my",
    "myself" : "myself",
    "name" : "name",
    "namely" : "namely",
    "nd" : "nd",
    "near" : "near",
    "nearly" : "nearly",
    "necessary" : "necessary",
    "need" : "need",
    "needs" : "needs",
    "neither" : "neither",
    "never" : "never",
    "nevertheless" : "nevertheless",
    "new" : "new",
    "next" : "next",
    "nine" : "nine",
    "no" : "no",
    "nobody" : "nobody",
    "non" : "non",
    "none" : "none",
    "noone" : "noone",
    "nor" : "nor",
    "normally" : "normally",
    "not" : "not",
    "nothing" : "nothing",
    "novel" : "novel",
    "now" : "now",
    "nowhere" : "nowhere",
    "obviously" : "obviously",
    "of" : "of",
    "off" : "off",
    "often" : "often",
    "oh" : "oh",
    "ok" : "ok",
    "okay" : "okay",
    "old" : "old",
    "on" : "on",
    "once" : "once",
    "one" : "one",
    "ones" : "ones",
    "only" : "only",
    "onto" : "onto",
    "or" : "or",
    "other" : "other",
    "others" : "others",
    "otherwise" : "otherwise",
    "ought" : "ought",
    "our" : "our",
    "ours" : "ours",
    "ourselves" : "ourselves",
    "out" : "out",
    "outside" : "outside",
    "over" : "over",
    "overall" : "overall",
    "own" : "own",
    "particular" : "particular",
    "particularly" : "particularly",
    "per" : "per",
    "perhaps" : "perhaps",
    "placed" : "placed",
    "please" : "please",
    "plus" : "plus",
    "possible" : "possible",
    "presumably" : "presumably",
    "probably" : "probably",
    "provides" : "provides",
    "que" : "que",
    "quite" : "quite",
    "qv" : "qv",
    "rather" : "rather",
    "rd" : "rd",
    "re" : "re",
    "really" : "really",
    "reasonably" : "reasonably",
    "regarding" : "regarding",
    "regardless" : "regardless",
    "regards" : "regards",
    "relatively" : "relatively",
    "respectively" : "respectively",
    "right" : "right",
    "said" : "said",
    "same" : "same",
    "saw" : "saw",
    "say" : "say",
    "saying" : "saying",
    "says" : "says",
    "second" : "second",
    "secondly" : "secondly",
    "see" : "see",
    "seeing" : "seeing",
    "seem" : "seem",
    "seemed" : "seemed",
    "seeming" : "seeming",
    "seems" : "seems",
    "seen" : "seen",
    "self" : "self",
    "selves" : "selves",
    "sensible" : "sensible",
    "sent" : "sent",
    "serious" : "serious",
    "seriously" : "seriously",
    "seven" : "seven",
    "several" : "several",
    "shall" : "shall",
    "shan't" : "shan't",
    "she" : "she",
    "she'd" : "she'd",
    "she'll" : "she'll",
    "she's" : "she's",
    "should" : "should",
    "shouldn't" : "shouldn't",
    "should've" : "should've",
    "since" : "since",
    "six" : "six",
    "so" : "so",
    "some" : "some",
    "somebody" : "somebody",
    "somehow" : "somehow",
    "someone" : "someone",
    "something" : "something",
    "sometime" : "sometime",
    "sometimes" : "sometimes",
    "somewhat" : "somewhat",
    "somewhere" : "somewhere",
    "soon" : "soon",
    "sorry" : "sorry",
    "specified" : "specified",
    "specify" : "specify",
    "specifying" : "specifying",
    "still" : "still",
    "sub" : "sub",
    "such" : "such",
    "sup" : "sup",
    "sure" : "sure",
    "take" : "take",
    "taken" : "taken",
    "tell" : "tell",
    "tends" : "tends",
    "th" : "th",
    "than" : "than",
    "thank" : "thank",
    "thanks" : "thanks",
    "thanx" : "thanx",
    "that" : "that",
    "that'll" : "that'll",
    "thats" : "thats",
    "that's" : "that's",
    "the" : "the",
    "their" : "their",
    "theirs" : "theirs",
    "them" : "them",
    "themselves" : "themselves",
    "then" : "then",
    "thence" : "thence",
    "there" : "there",
    "thereafter" : "thereafter",
    "thereby" : "thereby",
    "therefore" : "therefore",
    "therein" : "therein",
    "theres" : "theres",
    "there's" : "there's",
    "thereupon" : "thereupon",
    "these" : "these",
    "they" : "they",
    "they'd" : "they'd",
    "they'll" : "they'll",
    "they're" : "they're",
    "they've" : "they've",
    "think" : "think",
    "third" : "third",
    "this" : "this",
    "thorough" : "thorough",
    "thoroughly" : "thoroughly",
    "those" : "those",
    "though" : "though",
    "three" : "three",
    "through" : "through",
    "throughout" : "throughout",
    "thru" : "thru",
    "thus" : "thus",
    "tis" : "tis",
    "'tis" : "'tis",
    "to" : "to",
    "together" : "together",
    "too" : "too",
    "took" : "took",
    "toward" : "toward",
    "towards" : "towards",
    "tried" : "tried",
    "tries" : "tries",
    "truly" : "truly",
    "try" : "try",
    "trying" : "trying",
    "t's" : "t's",
    "twas" : "twas",
    "'twas" : "'twas",
    "twice" : "twice",
    "two" : "two",
    "un" : "un",
    "under" : "under",
    "unfortunately" : "unfortunately",
    "unless" : "unless",
    "unlikely" : "unlikely",
    "until" : "until",
    "unto" : "unto",
    "up" : "up",
    "upon" : "upon",
    "us" : "us",
    "use" : "use",
    "used" : "used",
    "useful" : "useful",
    "uses" : "uses",
    "using" : "using",
    "usually" : "usually",
    "value" : "value",
    "various" : "various",
    "very" : "very",
    "via" : "via",
    "viz" : "viz",
    "vs" : "vs",
    "wanna" : "wanna",
    "want" : "want",
    "wants" : "wants",
    "was" : "was",
    "wasn't" : "wasn't",
    "way" : "way",
    "we" : "we",
    "we'd" : "we'd",
    "welcome" : "welcome",
    "well" : "well",
    "we'll" : "we'll",
    "went" : "went",
    "were" : "were",
    "we're" : "we're",
    "weren't" : "weren't",
    "we've" : "we've",
    "what" : "what",
    "what'd" : "what'd",
    "whatever" : "whatever",
    "what's" : "what's",
    "when" : "when",
    "when" : "when",
    "whence" : "whence",
    "when'd" : "when'd",
    "whenever" : "whenever",
    "when'll" : "when'll",
    "when's" : "when's",
    "where" : "where",
    "whereafter" : "whereafter",
    "whereas" : "whereas",
    "whereby" : "whereby",
    "where'd" : "where'd",
    "wherein" : "wherein",
    "where'll" : "where'll",
    "where's" : "where's",
    "whereupon" : "whereupon",
    "wherever" : "wherever",
    "whether" : "whether",
    "which" : "which",
    "while" : "while",
    "whither" : "whither",
    "who" : "who",
    "who'd" : "who'd",
    "whoever" : "whoever",
    "whole" : "whole",
    "who'll" : "who'll",
    "whom" : "whom",
    "who's" : "who's",
    "whose" : "whose",
    "why" : "why",
    "why'd" : "why'd",
    "why'll" : "why'll",
    "why's" : "why's",
    "will" : "will",
    "willing" : "willing",
    "wish" : "wish",
    "with" : "with",
    "within" : "within",
    "without" : "without",
    "wonder" : "wonder",
    "won't" : "won't",
    "would" : "would",
    "wouldn't" : "wouldn't",
    "would've" : "would've",
    "yes" : "yes",
    "yet" : "yet",
    "you" : "you",
    "you'd" : "you'd",
    "you'll" : "you'll",
    "your" : "your",
    "your" : "your",
    "you're" : "you're",
    "yours" : "yours",
    "yourself" : "yourself",
    "yourselves" : "yourselves",
    "you've" : "you've",
    "zero" : "zero"
};

var redditURL = "http://www.reddit.com";
var URL = "http://www.reddit.com/.json";
var subredditURL = "";
var storeWord = [];
var ready = false;

function readFrontPage() {
    $(document).ready(function() {
        $.getJSON(URL, function(json) {
            subredditURL = redditURL + json.data.children[1].data.permalink;
            readSubReddit(json, function(){
            	console.log('ready');
            	next();
            });
        }); 
    });
}

function readSubReddit(json, callback) {
    $.getJSON(subredditURL + ".json", function(d) {

        /* Traverses all the children to read all the comments to count all the words */
        d[1].data.children.forEach(function(childData) {
        	
            if (childData.kind === "more") {
                getHiddenComments(childData);
                //return;
            }

            getBodyText(childData);
            lookForReplies(childData);
        });

        callback();
    });
}

function makeYummyPie() {
	console.log("yummy pie");
	/* Sort by count */
	storeWord.sort(function(a, b){
    	if(a.count < b.count)
        	return 1;
    	else if(a.count > b.count)
        	return -1;
    	else
    		return 0;
	});
                        
    /* storeWordData is to a storage place to put into the graph's data */
    var storeWordData = [];
    
    /* Adds the top 20 words into the array */
    for (var i = 0; i < 20; i++) {
        storeWordData.push([storeWord[i].word, storeWord[i].count]);
    }
    //console.log(storeWordData);
    /* Highchart graphing of a pie chart of top 20 word count */
    $('#container').highcharts({
        chart : {
            plotBackgroundColor : null,
            plotBorderWidth : null,
            plotShadow : false
        },
        title : {
            text : 'Top 20 word count'
        },
        tooltip : {
            pointFormat : '{series.name}: <b>{point.y}</b>'
        },
        plotOptions : {
            pie : {
                allowPointSelect : false,
                cursor : 'pointer',
                dataLabels : {
                    enabled : true,
                    color : '#000000',
                    connectorColor : '#000000',
                    format : '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series : [{
            type : 'pie',
            name : 'Word Count',
            data : storeWordData
        }]
    },

    /* A little extra if they click on the graph they will be sent to reddit's home page */
    function(item) {
        var a = $(this);
        $('path').click(function() {
            window.location.href = "http://www.reddit.com";
        });

    });
}

/* Strip all the special characters at the start and end of the word */
function strip(word) {
    word = word.replace(/^[^\w\s]+/gi, '');
    word = word.replace(/[\W^\s\n\r\t\v]+$/gi, '');
    word = word.toLowerCase();
    return word;
}

/* Gets the body text that the user wrote and stores the word into an array
 * of objects {word: string, count: int} */
function getBodyText(parent) {

    /* More does not gives us what we want */
    if (parent.kind === "more") {
        getHiddenComments(parent);
        return;
    }

    /* Gets the comments then splits the comments of new line and space */
    var listOfWords = parent.data.body;
    listOfWords = listOfWords.split(/[\ \n]/);

    /* Goes through the list of words to strip and store the word */
    listOfWords.forEach(function(w) {

        var newWord = strip(w);

        /* Case of just special characters returns empty string */
        if (newWord === '' || stopWords[newWord] !== undefined)
            return;

        /* Nothing in the array */
        if (storeWord.length == 0) {
            storeWord.push({
                "word" : newWord,
                "count" : 1
            });
        } else {

            /* Check for the same word occurr if so increase count */
            for ( i = 0; i < storeWord.length; i++) {
                if (storeWord[i].word === newWord) {
                    storeWord[i].count += 1;
                    return;
                }
            }

            /* Word not found and store the new word object into the array */
            storeWord.push({
                "word" : newWord,
                "count" : 1
            });
        }
    });
}

/* Does recursion to go through all the children's comments and then stores
 * all the words into the array */
function lookForReplies(parent) {
    if (parent.kind === "more") {
        getHiddenComments(parent);
        return;
    }
    if (parent.data.replies == "")
        return;

    parent.data.replies.data.children.forEach(function(repliesData) {
        if (repliesData.data.replies == undefined || repliesData.data.replies.data == undefined) {
            getBodyText(repliesData);
            return;
        }

        if (repliesData.data.replies.data.children != 0) {
            lookForReplies(repliesData);
        }
        getBodyText(repliesData);
    });
}

function getHiddenComments(parent) {
	var moreChildren = [];
	var link = "http://www.reddit.com/api/morechildren.json?link_id=" + parent.data.parent_id + "&children=";

	
    parent.data.children.forEach(function(CommentID) {
		$.getJSON(subredditURL + ".json?comment=" + CommentID, function(dat) {
	        dat[1].data.children.forEach(function(cd) {
	            getBodyText(cd);
	            lookForReplies(cd);
	        });
	    });
	 });
    
}

function next(err, result){
    if(err) throw err;
    var currentTask = tasks.shift();
    if(currentTask){
        currentTask(result);
    }
}

var tasks = [readFrontPage, makeYummyPie];

next();
