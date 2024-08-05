const quotes = [
    "Pani mein pathar na feko use bhi koi pita hai\n Marne ki baat Na Karo tumhe dekh kar bhi koi jita hai.",
    "Tum naraj naraj se lagte Ho koi tarkeeb batao manane ki \n Ham jindagi amanat rakh denge tum kimat batao muskurane ki",
    "Mujhko mere sath akela mat chhoda kar \n Mera apne-aap se jhagda ho jata hai",
    // "Ab to khwabon mein aana chhod do ab kaun sa ham sath hai\n Tere sath bhi barbad the tere baad bhi barbad hai",
    "Nafrat nahin hai tujhse per ab Mohabbat bhi nahin hai \n Bichhadne ka dukh to bahut hai per ab milane ki Chahat bhi nahi hai",
    "Khwaishon ka kafila bhi bada ajeeb hai galib \n Aksar vahin se gujarta hai jaha rasta na ho",
    "Bahut kareeb se dekha hai iss duniya Ko \n Tabhi sabse dur jakar baitha hun",
    // "Main chup hun vajah hai \n jis din baras jaunga \n Uss din taras bhi nahin khaunga",
    "Log bhul jaate Hain ki unka Dil rakhne wala shakhs bhi \n Ek Dil rakhta hai",
    "Kamaal ka tana diya aaj dil ne kehta hai \n Koi tera hai to kaha hai",
    "Banao baat banati achhi lagti ho \n Khao jhuthi kasme khati achhi lagti ho",
    "Agar partiksha sima se adhik ho jaye \n To milne ka moh khatam ho jata hai",
    // "Faasla rakhiye warna payar ho jayega \n baad me kisi ki ammi nahi manti to kisi ke abba",
    "Muskurate bahut ho tum Kabhi khus bhi raha karo",
    "Bura nahi hu mai meri bhi kuchh kahani hai \n Badla badla sa jarur nazar aa raha hu \n Or kisi ki nahi mere apno ki meherbani hai",
    // "Jid per aa jaaun to palat kar bhi Na dekhu \n Meri sabr se abhi tum wakif hi kahan ho",
    // "Bahut mahange the per ab saste mein nahin aayenge \n Ja aaj ke bad tere raste mein nahin aayenge",
    "Kyu na badlu mai, tum wahi ho kya \n Chalo mana mai galat hu, tum sahi ho kya",
    "Humko niche utar lenge log \n isqe latka rahega pankhe me",
    "Andaaz hume bhi aate hai nazar andaz karne ke \n magar tu bhi iss takleef se gujre ye hume gawara nahi",
    "They don’t really like you; they’re just making time for you because you’re always there for them"   
    
];

function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote').innerText = quote;
}

function playMusic() {
    const audio = document.getElementById('background-music');
    audio.play().catch(error => console.log("Error playing audio:", error));
}

// Optional: Automatically play music on page load (note: may be blocked by browsers)
window.onload = function() {
    getQuote(); // Get a quote when the page loads
    // playMusic(); // Uncomment to attempt auto-play
};
//For disable right click
document.addEventListener("contextmenu",function(e){
    e.preventDefault()
},false)
