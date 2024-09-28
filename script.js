const quotes = [
    // "Pani mein pathar na feko use bhi koi pita hai <br> Marne ki baat Na Karo tumhe dekh kar bhi koi jita hai.",
    "Tum naraj naraj se lagte Ho koi tarkeeb batao manane ki <br> Ham jindagi amanat rakh denge tum kimat batao muskurane ki",
    "Mujhko mere sath akela mat chhoda kar <br> Mera apne-aap se jhagda ho jata hai",
    "Ab to khwabon mein aana chhod do ab kaun sa ham sath hai<br> Tere sath bhi barbad the tere baad bhi barbad hai",
    "Nafrat nahin hai tujhse per ab Mohabbat bhi nahin hai <br> Bichhadne ka dukh to bahut hai per ab milane ki Chahat bhi nahi hai",
    "Khwaishon ka kafila bhi bada ajeeb hai galib <br> Aksar vahin se gujarta hai jaha rasta na ho",
    "Bahut kareeb se dekha hai iss duniya Ko <br> Tabhi sabse dur jakar baitha hun",
    // "Main chup hun vajah hai <br> jis din baras jaunga <br> Uss din taras bhi nahin khaunga",
    "Log bhul jaate Hain ki unka Dil rakhne wala shakhs bhi <br> Ek Dil rakhta hai",
    "Kamaal ka tana diya aaj dil ne kehta hai <br> Koi tera hai to kaha hai",
    "Baat banao baat banati achhi lagti ho <br> Khao jhuthi kasme khati achhi lagti ho",
    "Agar partiksha sima se adhik ho jaye <br> To milne ka moh samaapt ho jata hai",
    // "Faasla rakhiye warna payar ho jayega <br> baad me kisi ki ammi nahi manti to kisi ke abba",
    "Muskurate bahut ho tum <br> Kabhi khus bhi raha karo",
    "Bura nahi hu mai, meri bhi kuchh kahani hai <br> Badla badla sa jarur nazar aa raha hu,<br> Or kisi ki nahi mere apno ki meherbani hai",
    "Jid per aa jaaun to palat kar bhi Na dekhu <br> Meri sabr se abhi tum wakif hi kahan ho",
    // "Bahut mahange the per ab saste mein nahin aayenge <br> Ja aaj ke bad tere raste mein nahin aayenge",
    "Kyu na badlu mai, tum wahi ho kya <br> Chalo mana mai galat hu, tum sahi ho kya",
    "Humko niche utar lenge log <br> ishq latka rahega pankhe me",
    "Andaaz hume bhi aate hai nazar andaz karne ke <br> magar tu bhi iss takleef se gujre ye hume gawara nahi",
    "They don’t really like you; they’re just making time for you <br> because you were always there for them",
    "Har baar kaha dil se chal bhul ja usko <br> Har baar dil ne kaha tum dil se nahi kahete",
    "Har khamoshi bezubaan nahi hoti...",
    "When you choose peace It comes with <br> A lot of goodbyes",
    'Over a small <span style="font-size: 24px;">MISUNDERSTANDING</span> \n God will show you \nHow people truly feel about you',
    "Iss baar dil se utar gaye tum ab tum mil bhi gaye to nahi chahiye",
    "My last act of love was leaving you alone<br> so you could do the things that hurt me,<br> but without me",
    "I've a bad habit of giving an ocean<br> When someone asks for a single drop",
    'Sometimes the right way to love is to <br> <span style="font-size: 40px;">LEAVE</span>' // Added HTML tags to style "LEAVE"
    
];

const recentQuotes = []; // Queue to store the indexes of the last 20 shown quotes
const maxRecent = 20; // Max number of recent quotes to keep track of

function getQuote() {
    let randomIndex;
    
    // Keep generating a new index until it's not in the recentQuotes array
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (recentQuotes.includes(randomIndex));

    const quote = quotes[randomIndex];
    document.getElementById('quote').innerHTML = quote;

    // Add the current index to recentQuotes and maintain its length to maxRecent
    recentQuotes.push(randomIndex);
    if (recentQuotes.length > maxRecent) {
        recentQuotes.shift(); // Remove the oldest quote index when the limit is exceeded
    }

    // Play music when a new quote is generated
    const audio = document.getElementById('background-music');
    audio.play().catch(error => console.log("Error playing audio:", error));
}

// Optional: Automatically play music on page load (note: may be blocked by browsers)
window.onload = function() {
    getQuote(); // Get a quote when the page loads
    // playMusic(); // Uncomment to attempt auto-play
};

// For disabling right-click
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);
