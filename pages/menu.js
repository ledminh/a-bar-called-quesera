import Image from 'next/image';

import margarityImg from '../imgs/margarita.jpg';
import menu2Img from '../imgs/menu-2.jpg';
import menu3Img from '../imgs/menu-3.jpg';

import styles from '../styles/Menu.module.scss';

import PageLayout from '../layouts/Page';
import MenuBlock from '../components/MenuBlock';


const abcClassics = {
    name: "ABC CLASSICS",
    items: [
        {
            name: "Gemma",
            desc: "Bombay Sapphire gin, Sake, Pistachio, Ginger, Citrus",
            price: 152
        },

        {
            name: "Pearly White",
            desc: "Haku Vodka, Muyu Jasmine, Rose water, Lime sherbet, Verjus",
            price: 152
        },

        {
            name: "Caskmates",
            desc: "Jameson Irish Whiskey, Hennessy VS, Coconut, Mandarin, apple vinegar",
            price: 158
        },

        {
            name: "Pink Haze",
            desc: "Martini Rosato, Gemma Light Rum, Raspberry, Citrus, Hops",
            price: 152
        },

        {
            name: "Hawaiian Babe",
            desc: "Gemma Light & Dark Rum, Yellow Chartreuse, Marcona & Pistachio Orgeat, Kaffir lime, citrus",
            price: 158
        },

    ]
}


const oldies = {
    name: "OLDIES BUT GOLDIES",
    items: [
        {
            name: "Old Fashioned 63*",
            desc: "Whistle Pig Rye 10y, Four Roses Single Barrel, Px Sherry, Aperol, Orange",
            price: 165
        },

        {
            name: "Negroni",
            desc: "Ramsbury Gin, Campari, House Vermouth, Mint, Violette",
            price: 152
        },

        {
            name: "Espresso Martini",
            desc: "Grey Goose Vodka, Gemma Dark rum, White cacao, Espresso, Citrus mist",
            price: 158
        },

        {
            name: "Whiskey Sour",
            desc: "Naked Malt whiskey, Plum wine, Lactic Acid, Whey, Citrus",
            price: 158
        },

        {
            name: "Dry Martini",
            desc: "Roku Gin, Cocchi Extra dry, Fino sherry, Brine, Le pershiole",
            price: 165
        },

    ]
}

const firstSeason = {
    name: "First season",
    items: [
        {
            name: "Beet Box",
            desc: "Naked Malt whiskey, Beetroot, Honey, Citrus, Pink pepper",
            price: 152
        },

        {
            name: "Lap Dance",
            desc: "Pisco Waqar, Laird’s Jersey Lightning, Stonefruits, Shiso, Timur pepper",
            price: 155
        },

        {
            name: "Making you blush",
            desc: "Pol Roger Champagne, Remy Martin 1738, St Germain, Pickled peach, Verjus",
            price: 155
        },

        {
            name: "Golden Bay",
            desc: "Tullamore XO, Bacardi Diez, Figs, Bay leaf, Balsamic vinegar",
            price: 158
        },

        {
            name: "Esmeralda",
            desc: "Gemma Light Rum, Mezcal Vago Elote, Muyu Vetiver, Hibiscus, Citrus husk",
            price: 158
        },

        {
            name: "Late night in Turin",
            desc: "Cocchi Dopo Teatro, Amaro Montenegro, Marsala wine, Agave, Apple Cider",
            price: 150
        },

        {
            name: "Red rocks",
            desc: "Maker’s Mark 46, Campari, Suze, Amontillado sherry, Banana",
            price: 150
        },

        {
            name: "Sardana",
            desc: "Torres 15 Brandy, Parsley wine, Chinotto, Mandarin, Spiced honey",
            price: 150
        },

        {
            name: "Quite Soon",
            desc: "Botanist Gin, Jägermeister Manifest, Preserved orange, Green pepper, Herbs",
            price: 168
        },

        {
            name: "Underwater March",
            desc: "Gemma Dark Rum, Fortified tumeric wine, Salted pumpkin seed orgeat, Tiki spices, Citrus",
            price: 168
        },

        {
            name: "Sober & Stormy - Non-Alc",
            desc: "Three Spirits Social, Lime, Ginger, Herbs, Soda water",
            price: 92
        },

        {
            name: "Stay’n alivener - Non-Alc",
            desc: "Three Cents Pink Grapefruit, Schisandra berry, Ginseng, Salt, Tonic",
            price: 92
        },
    ]
}

const beerWhineChampange =  {
    name: "Beer, Whine & Champange",
    items: [
        {
            name: "Carlsberg Unfiltered, 4,5 % DK",
            price: 58
        },

        {
            name: "Brooklyn Defender IPA, 5,5 % USA",
            price: 64
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
            name: "Zeni Soave, ITA",
            price: "115/455"
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
            name: "Pol Roger Brut Réserve, FR",
            price: "158 / 885"
        },

        {
            name: "Pol Roger Cuvée Sir Winston Churchill, FR",
            price: "2 450"
        }


    ]
}

const foodAndBites =  {
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

export default function Menu() {

    return (
        <PageLayout>
            <div className={styles.row}>
                <div className={styles.col}>
                    <MenuBlock 
                        data={abcClassics}
                        />
                </div>
                <div className={styles.col}>
                    <div className={styles.photoWrapper}>
                        <div className={styles.photo}>
                            <Image 
                                src={margarityImg}
                                alt="A magarita"
                                layout='fill'
                                objectFit='cover'
                                sizes='100vw'
                                objectPosition={'top right'}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.col}>
                    <MenuBlock 
                        data={oldies}
                        />
                </div>
                <div className={styles.col}>
                    <div className={styles.photoWrapper}>
                        <div className={styles.photo}>
                            <Image 
                                src={menu2Img}
                                alt="A cocktail drink"
                                layout='fill'
                                objectFit='cover'
                                sizes='100vw'
                                objectPosition={'top right'}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.col}>
                    <MenuBlock 
                        data={firstSeason}
                        />
                </div>
                <div className={styles.col}>
                <div className={styles.photoWrapper}>
                        <div className={styles.photo}>
                            <Image 
                                src={menu3Img}
                                alt="A cocktail drink"
                                layout='fill'
                                objectFit='cover'
                                sizes='100vw'
                                objectPosition={'top right'}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.col}>
                    <MenuBlock 
                        data={beerWhineChampange}
                        />
                </div>
                <div className={styles.col}>
                    <MenuBlock 
                        data={foodAndBites}
                        />
                </div>
            </div>
        </PageLayout>
    )
}