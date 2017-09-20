// >Disabling javascript
// >2017
// (c) Inkubio ry


// Front page random phrases
var catchphrases = Array(
    "Osaispa koodaa :D",
    "No sit sen pitäs olla melkee joku ebin meemu lause joka arvottais joka refreshil",
    "Pelkät otsikot. pelkät kysymykset. ei vastauksia. vain kysymyksiä",
    "Se ei kuitenkaa muuta sitä et yks lause on liia vähä",
    "Yksi lause ei riittäisi syksyisin edes Nikin mutsille.",
    "Ai boksis vai ilman",
    "Jos se lukis suluissa otsikon alla?",
    "Jaa, must se on nyt just hyvä ja tollee yhen lauseen versio ois kiusalline :D",
    "Ei saa vesittää ekas pätkäs/ingressis muuten tiukkaa lehteä! tollee venytetty on tylsä",
    "Se on vaan orpo jos sen laittaa leipätekstikoolla keskelle puolen sivun kokoista tylsänharmaata boksia",
    "Meil ei voi olla otsikoiden lisäks muuta isoo boldattuu tekstii ku se rikkoo visuaalisen hierarkian",
    "Siin on röyhkee drop shadow",
    "Jos se teksti on valkost ni ei näy vaaleelt taustalt, jos tummaa ni ei näy tummalt",
    "Imo tää on vaa liia lyhyt, se tulee tosi yllättäen",
    "Mietittekin varmasti...",
    "Lähinnä vois selittää et miks kaikki noi linkit on kysymyksiä, ja eihän sille oo mitään oikeeta syytä",
    "Saisko sitä jotenki alaotsikoksi ton nettisnapsitekstin alle?",
    "Turha venyttää, artikkelit on se juttu",
    "Onks tommone yks lause vähä lyhyt tai jotenki out of place :D",
    "Tai ei tos ny oo tilast puute kummiskaa, imo vähä pitemmi vois sanoo",
    "Kai tää on ollu placeholder?",
    "Ite tykkään vielki siit kynäpaperi alustuksest sen videon sisältöön mut jos herr uberfuhrer sanoo et ei ni sit ei",
    "Mitkä ne otsikot ny sit o",
    "Ei se noist paras oo mut en tiiä oks toi sun versio parannus",
    "Nii et ite tykkään ja eero vissii kans",
    "Nii mikä täs oli pöintti",
    "Ei toi 'siellä' anna oikee mitää lisäsisältöö",
    "Viime lehdestäki meinas jäädä yks juttu ulos ku en hokannu aluksi taittaa sitä mukaan",
    "Ehk kukaa vaa tajunnu oikolukee siitä :D",
    "Erikoispainos ilman lisättyä sokeria",
    "Omaan silmään vaan sattuu syystä ö",
    "Meen täffänleikkeelle",
    "Oonks mä vaa koodiapina",
    "Onks kaikki toimittajia",
    "Toi painosläppä ei kyl salee toimi",
    "Mut mitä siihe ny tulee",
    "Sit pitäs tehä taas uus custom sääntö tolle yläindeksi y:lle :D",
    "Mut mitä sinne kirjottais :D",
    "Mut pitää kattoo sitä kokonaisuutta kyl viel",
    "Ei nettisivu tarvi pääkirjoitusta",
    "En voi kyl liia myöhää vääntää ku huome vika duunipäivä",
    "Läpäl",
    "Tykkään näppiksestäni jos pitää kirjottaa jtn",
    "Ne upotetut linkit oikeestaan vaan, mä en oikeen keksi muuta",
    "Ja kuva on välil musta ja välil valkone",
    "Niinku vaikka irc-gallerias oli, et ikään ku leijuva stickeri ja sit ku siirtä hiiren sen päälle se karkaa",
    "Aina hyvä olla useampi idea joita ei voi toteuttaa realistisesti",
    "Ei voi olettaa et fullhd löytyy kaikilt",
    "Kokeileppa tota sivuu fullscreen pöytäkoneel ja sit mobiilil",
    "Aika epätodennäköst et saa toimii kunnol kaikil laitteil",
    "Iteki yllätyin ku luin tänää",
    "Safari ei suostu autoplayaa tota taustavideoo",
    "Voidaan käsitellä sitä jotenki, muuttaa kaksväriseksi, blurraa vitusti tms",
    "Hävettää ku ei tähän ikään mennes oo mitään käsitystä",
    "Se on iha vaa nettisivu",
    "Yks pointti kans et se ei välttis toimi ollenkaa mobiilil",
    "Aikaperspektiivi vääristyy",
    "On 1/3 ajast lähes mustaa ruutuu",
    "Pitää pakata kovaa, rajottaa laatuu",
    "Koska en osaa mtn mut oon valmis opettelee",
    "Lähinnä se et miten ylipäänsä tehään nettisivut",
    "Saatan tänää vähä kerkee kattoo mut ei kyl iha kauheest aikaa"
);

$(document).ready(function() {

    // Hides all articles and returns to main screen
    function resetToHome() {
        var newrandtext = catchphrases[Math.floor(Math.random() * catchphrases.length)];
        $('#catchphrase').text(newrandtext);
        $('[id*=article]').fadeOut();
        $('.button').fadeOut();
        setTimeout(function() {
            $('#kiltis').fadeIn();
            $('#home').fadeIn();
        }, 400);
    }

    // Hides the main screen and switches to article based on clicked element id
    function switchToArticle(id) {
        $('#home').fadeToggle();
        setTimeout(function() {
            $('#article' + id).fadeToggle();
            $('.button').fadeToggle();
        }, 400);
    }

    // Toggle between menu and content on click
    $('a').click( function(e) {
        if ( e.target.id == 'back' || $(e.target).parent().attr('id') == 'back' ) {
            resetToHome();
        }
        else if ( e.target.id == 1 ) { // Special case for kiltis
            var video0 = document.getElementById('kiltis0');
            var src = $(video0).parent().get(0).currentSrc;
            var split = src.split('/');
            var file = split[split.length - 1];
            var filename = file.split('.')[0];
            var filetype = file.split('.')[1];

            if ( filename !== 'kiltislapse' ) {
                var element = $('source[src="'+file+'"]').first();
                element.attr('src', 'kiltislapse.'+filetype);
                $(element).parent().load();
                $(element).parent().get(0).play();
            }
            switchToArticle(e.target.id);
            setTimeout(function() {
                $('#article0').fadeOut();
            }, 12000);
        }
        else if ( e.target.id == 7 ) { // Special case for peli
            var peli = $('#peli');
            peli.attr("src", peli.data("src")); // Hack to load game only after click
            $('#kiltis').fadeOut();
            switchToArticle(e.target.id);
        }
        else {
            switchToArticle(e.target.id);
        }
    })

});