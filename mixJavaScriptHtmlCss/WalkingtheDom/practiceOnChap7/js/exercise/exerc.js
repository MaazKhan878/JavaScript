let myJokes = [
        {
            "category": "Programming",
            "type": "single",
            "joke": "Eight bytes walk into a bar.\nThe bartender asks, \"Can I get you anything?\"\n\"Yeah,\" reply the bytes.\n\"Make us a double.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 34,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "The generation of random numbers is too important to be left to chance.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 39,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Debugging: Removing the needles from the haystack.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 40,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Have a great weekend!\nI hope your code behaves the same on Monday as it did on Friday.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 44,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Four engineers get into a car. The car won't start.\nThe Mechanical engineer says \"It's a broken starter\".\nThe Electrical engineer says \"Dead battery\".\nThe Chemical engineer says \"Impurities in the gasoline\".\nThe IT engineer says \"Hey guys, I have an idea: How about we all get out of the car and get back in\".",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 132,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 4,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 0,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "\"Can I tell you a TCP joke?\"\n\"Please tell me a TCP joke.\"\n\"OK, I'll tell you a TCP joke.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 57,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Your mama's so FAT she can't save files bigger than 4GB.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 9,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Documentation is like sex:\nWhen it's good, it's very good.\nWhen it's bad, it's better than nothing...",
            "flags": {
                "nsfw": true,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": false,
            "id": 305,
            "lang": "en"
        }
 ]
 let index = Math.floor(Math.random() * myJokes.length - 1);
 console.log(myJokes[index]);
 joke.innerHTML = myJokes[index].joke;

 