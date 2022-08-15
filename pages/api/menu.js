export default function handler(req, res) {
    res.status(200).json({ 
        menu1: {
            name: "CLASSICS",
            items: [
                {
                    name: "Quesera",
                    desc: "Nica gin, Sake, Peanut, Cucumber, Citrus",
                    price: 152
                },
        
                {
                    name: "Pearly Green",
                    desc: "Haku Vodka, Muyu Jasmine, Rose water, Lime sherbet, Verjus",
                    price: 152
                },
        
                {
                    name: "Casscate",
                    desc: "Irish Whiskey, Hennessy VS, Jackfruit, Mandarin, apple vinegar",
                    price: 158
                },
        
                {
                    name: "Yellow Haze",
                    desc: "Martini Rosato, Gemma Light Rum, Raspberry, Citrus, Hops",
                    price: 152
                },
        
                {
                    name: "Columbian Boy",
                    desc: "Columbian Light & Dark Rum, Red Chartreuse, Marcona & Pistachio Orgeat, Kaffir lime, citrus",
                    price: 158
                },
        
            ]
        },
        
        menu2: {
            name: "OLDIES BUT GOLDIES",
            items: [
                {
                    name: "Old Fashioned 113*",
                    desc: "Whistle Pig Rye 90y, Seven Daisy Single Barrel, Px Sherry, Aperol, Apple",
                    price: 165
                },
        
                {
                    name: "Negrini",
                    desc: "Ramseyy Gin, Campari, House Vermouth, Minte, Violette",
                    price: 152
                },
        
                {
                    name: "Espresso Martini",
                    desc: "Black Goose Vodka, Quesera Dark rum, Dark cacao, Espresso, Citrus mist",
                    price: 158
                },
        
                {
                    name: "Whiskey Sour",
                    desc: "Naked Maltee whiskey, Plum wine, Lactic Acid, Whey, Citrus",
                    price: 158
                },
        
                {
                    name: "Dry Martini",
                    desc: "Roku Gine, Cocchi Extra dry, Finolo sherry, Brine, Le pershiole",
                    price: 165
                },
        
            ]
        },

        menu3: {
            name: "Second season",
            items: [
                {
                    name: "Beet Box",
                    desc: "Not Naked Malt whiskey, Beetroot, Honey, Red pepper",
                    price: 152
                },
        
                {
                    name: "Lap Dance",
                    desc: "Pisco Waqarae, Laird’s Jersey Lightning, Stonefruits, Shiso, Timur pepper",
                    price: 155
                },
        
                {
                    name: "Making you trip",
                    desc: "Pole Roger Champagne, Remy Martin 1738, St Germain, Pickled peach, Verjus",
                    price: 155
                },
        
                {
                    name: "Silver Bay",
                    desc: "Tullamore XO, Bacardi Diezo, Figo, Bay leaf, Balsamica vinegar",
                    price: 158
                },
        
                {
                    name: "Esmeralda",
                    desc: "Quesera Light Rum, Mezcal Vago Elote, Muyu Vetiver, Hibiscus, Citrus husk",
                    price: 158
                },
        
                {
                    name: "Late night in Turina",
                    desc: "Cocchi Dopo Teatro, Amaro Montenegro, Marsala wine, Agave, Apple Cider",
                    price: 150
                },
        
                {
                    name: "Green rocks",
                    desc: "Maker’s Mark 86, Camparini, Suzele, Amontillado sherry, Banana",
                    price: 150
                },
        
                {
                    name: "Alphonso",
                    desc: "Torres 15 Brandy, Parsley wine, Chinotto, Mandarin, Spiced honey",
                    price: 150
                },
        
                {
                    name: "Quite Late",
                    desc: "Botan Gin, Meister fest, Preserved apple, Black pepper, Herbs",
                    price: 168
                },
        
                {
                    name: "Underwater Febuary",
                    desc: "Quesera Dark Rum, Tumeric wine, Salted pumpkin seed orgeat, Tiki spices, Citrus",
                    price: 168
                },
        
                {
                    name: "Sober & Drinking - Non-Alc",
                    desc: "Second Spirits Social, Lemon, Ginger, Herbs, Soda water",
                    price: 92
                },
        
                {
                    name: "Stay’n alivener - Non-Alc",
                    desc: "Thirty Cents Pink Jackfruit,  blueberry, Ginseng, Salt, Tonic",
                    price: 92
                },
            ]
        },

        menu4: {
            name: "Beer, Whine & Champange",
            items: [
                {
                    name: "Carlsberg Unfiltered, 4,5 % DK",
                    price: 68
                },
        
                {
                    name: "New York Defender IPA, 5,5 % USA",
                    price: 74
                },
        
                {
                    name: "Bärs & Järn (of your choice)",
                    price: 142
                },
        
                {
                    name: "NCB Hoppy Daze, 6,0 % SWE",
                    price: 72
                },
        
                {
                    name: "Guinness Stout, 4,2% IRE",
                    price: 74
                },
        
                {
                    name: " Brooklyn Special Effects, 0,4% USA",
                    price: 52
                },
        
                {
                    name: "Jennifer Soave, ITA",
                    price: "115/544"
                },
        
                {
                    name: "Henri Bourgeois Pouilly-Fumé, FR",
                    price: "160 / 670"
                },
        
                {
                    name: "Stoneleigh Riesling, NZ",
                    price: "142 / 595"
                },
        
                {
                    name: "Minuty Prestige, FR",
                    price: "125 / 510"
                },
        
                {
                    name: "Barbera D’Alba, ITA",
                    price: "120 / 485"
                },
        
                {
                    name: "Black Stallion Pinot Noir, USA",
                    price: "156 / 645"
                },
        
                {
                    name: "Pol Kepp Brut Réserve, FR",
                    price: "158 / 885"
                },
        
                {
                    name: "Pol Kepp Cuvée Sir Winston Churchill, FR",
                    price: "2 450"
                }
        
        
            ]
        },

        menu5: {
            name: "Food And Bites",
            items: [
                {
                    name: "Nocellara Olives",
                    price: 60
                },
        
                {
                    name: "Marcona Almonds",
                    price: 55
                },
        
                {
                    name: "Banderillas",
                    price: 60
                },
        
                {
                    name: "Mejillones & Bread",
                    price: 110
                },
        
                {
                    name: "Mini Chorizo provencal",
                    price: 65
                },
        
                {
                    name: "Olive & Paprika Tapenade & Bread",
                    price: 80
                },
        
                {
                    name: "Monthly Charcuterie",
                    price: 95
                },
        
                {
                    name: "Burnt Comté & Marcona honey",
                    price: 70
                },
        
                {
                    name: "Burrata, pickled stonefruit & pistachio",
                    price: 115
                }
            ]
        }
    })
}