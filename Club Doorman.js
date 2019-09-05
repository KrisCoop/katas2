// The Club Doorman will give you a word. To enter the Club you need to provide the right number according to provided the word.

// Every given word has a doubled letter, like 'tt' in lettuce.

// To answer the right number you need to find the doubled letter's position of the given word in the alphabet and multiply this number per 3.

// It will be given only words with one doubled letter.

//--------------------
// EXAMPLE: Lettuce is the given word. 't' is the doubled letter and it's position is 20 in the alphabet.

// The answer to the Club Doorman is 20 * 3 = 60



function passTheDoorMan (word){
    word = word.split("");
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let doubledLetter = '';
    for(i = 0; i < word.length; i++){
        if (word[i] === word[i + 1]){
            doubledLetter = word[i]
        }
    }
    return (letters.indexOf(doubledLetter) + 1) * 3;
}


describe("Club Doorman", function(){
    it("Basic Tests", function(){
     Test.assertSimilar( passTheDoorMan("lettuce") , 60);
     Test.assertSimilar( passTheDoorMan("hill"), 36);
     Test.assertSimilar( passTheDoorMan("apple"), 48);
   });
  });