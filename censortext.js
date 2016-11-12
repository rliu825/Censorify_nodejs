var censoredWords=["sad","bad","mad"];
var customCensoredWords = [];
function censor(inStr){
	for (idx in censoredWords) {
		inStr = inStr.replace(censoredWords[idx],"****");
	}
	for (idx in customCensoredWords){
		inStr = inStr.replace( customCensoredWords[idx],"****");
	}
	return inStr;	
}
//add a censored words besides the default sad bad and mad
function addCensoredWord(word){
	customCensroedWords.push(word);
}
// refresh and update with the newly added censored words
function getCensoredWords(){
	return censoredWords.concat(customCensoredWords);
}
exports.cesore = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;