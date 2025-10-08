const pokemonData = [
  {
    name: 'Mew',
    sprite: 'https://art.pixilart.com/d0f8d2abcada107.png',
    time: ['mañana', 'dia'],
    biome: ['modified_jungle', 'modified_jungle_edge'],
    condition: ''
  },
  {
    name: 'Raikou',
    sprite: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/d/d4/Pokemans_243.gif?width=325',
    time: ['amanecer', 'mañana'],
    biome: ['shattered_savanna_plateau', 'shattered_savanna', 'savanna_plateau', 'savanna'],
    condition: ''
  },
  {
    name: 'Entei',
    sprite: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/d/d5/Pokemans_244.gif?width=325',
    time: ['dia'],
    biome: ['mountain_edge', 'gravelly_mountains', 'wooded_mountains', 'modified_gravelly_mountains', 'mountains'],
    condition: 'Y >= 100'
  },
  {
    name: 'Suicune',
    sprite: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/d/d4/Pokemans_245.gif',
    time: ['noche'],
    biome: ['beach', 'snowy_beach', 'mushroom_field_shore', 'stone_shore'],
    condition: ''
  },
  {
    name: 'Regirock',
    sprite: 'https://static.wikia.nocookie.net/pokemon-magma/images/7/72/377.png',
    time: ['tarde'],
    biome: ['badlands', 'modified_badlands_plateau', 'badlands_plateau', 'modified_wooded_badlands_plateau', 'wooded_badlands_plateau', 'eroded_badlands'],
    condition: 'Y <= 30'
  },
  {
    name: 'Regice',
    sprite: 'https://static.wikia.nocookie.net/pokemon-radiance/images/2/2f/278_Regice.png',
    time: ['mañana'],
    biome: ['snowy_taiga_mountains', 'snowy_taiga', 'frozen_ocean', 'ice_spikes', 'snowy_taiga_hills', 'snowy_beach', 'snowy_tundra', 'frozen_river', 'snowy_mountains'],
    condition: 'Y <= 30'
  },
  {
    name: 'Registeel',
    sprite: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/a/a1/Pokemans_379.gif',
    time: ['amanecer', 'mañana'],
    biome: ['desert', 'desert_hills', 'desert_lakes'],
    condition: 'Y <= 30'
  },
  {
    name: 'Latias',
    sprite: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/8/88/Pokemans_380.gif',
    time: ['mañana'],
    biome: ['warm_ocean', 'ocean'],
    condition: ''
  },
  {
    name: 'Latios',
    sprite: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/6/6c/Pokemans_381.gif?width=396',
    time: ['tarde'],
    biome: ['warm_ocean', 'ocean'],
    condition: ''
  },
  {
    name: 'Kyogre',
    sprite: 'https://infinite-fusion-calculator.com/imgs/base-pokes/340.png',
    time: ['noche'],
    biome: ['deep_frozen_ocean', 'deep_ocean', 'deep_lukewarm_ocean', 'deep_cold_ocean', 'deep_warm_ocean'],
    condition: 'Lluvia, Y <= 40'
  },
  {
    name: 'Groudon',
    sprite: 'https://static.wikia.nocookie.net/pokemonempyrean/images/d/d9/383.png',
    time: ['dia'],
    biome: ['desert', 'desert_hills'],
    condition: 'Cielo despejado'
  },
  {
    name: 'Rayquaza',
    sprite: 'https://static.wikia.nocookie.net/pokemonempyrean/images/5/55/384.png',
    time: ['tarde', 'atardecer'],
    biome: ['mountain_edge', 'gravelly_mountains', 'wooded_mountains', 'modified_gravelly_mountains', 'mountains'],
    condition: ''
  },
  {
    name: 'Jirachi',
    sprite: 'https://www.smogon.com/forums/attachments/rachi-gif.601822/',
    time: ['amanecer', 'mañana'],
    biome: ['snowy_taiga_mountains', 'gravelly_mountains'],
    condition: 'Y >= 100'
  },
  {
    name: 'Deoxys',
    sprite: 'https://24.media.tumblr.com/tumblr_ljay1vQg821qg0dcvo1_400.gif',
    time: ['mañana'],
    biome: ['snowy_taiga_mountains', 'gravelly_mountains'],
    condition: 'Y >= 100'
  },
  {
    name: 'Uxie',
    sprite: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/f/fe/Pokemans_480.gif?width=325',
    time: ['tarde'],
    biome: ['dark_forest', 'dark_forest_hills', 'desert_lakes'],
    condition: 'Superficie acuática'
  },
  {
    name: 'Mesprit',
    sprite: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/0/09/Pokemans_481.gif?width=325',
    time: ['amanecer', 'mañana'],
    biome: ['tall_birch_forest', 'birch_forest_hills', 'birch_forest', 'tall_birch_hills', 'desert_lakes'],
    condition: 'Superficie acuática'
  },
  {
    name: 'Azelf',
    sprite: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/b/b7/Pokemans_482.gif?width=396',
    time: ['mañana'],
    biome: ['forest', 'wooded_hills', 'flower_forest', 'desert_lakes'],
    condition: 'Superficie acuática'
  },
  {
    name: 'Heatran',
    sprite: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/4/4b/Pokemans_485.gif',
    time: ['amanecer', 'mañana', 'dia', 'tarde', 'atardecer', 'noche'],
    biome: ['badlands', 'modified_badlands_plateau', 'badlands_plateau', 'modified_wooded_badlands_plateau', 'wooded_badlands_plateau', 'eroded_badlands'],
    condition: 'Superficie de lava, Y <= 50'
  },
  {
    name: 'Regigigas',
    sprite: 'https://pa1.aminoapps.com/8551/c7d2b27dfd2d9c6a55d1fb6d8c118aec17f4e6b6r1-392-328_hq.gif',
    time: ['tarde', 'atardecer'],
    biome: ['shattered_savanna_plateau', 'shattered_savanna', 'savanna_plateau', 'savanna'],
    condition: 'Bajo tierra'
  },
  {
    name: 'Cresselia',
    sprite: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/7/75/Pokemans_488.gif?width=325',
    time: ['noche'],
    biome: ['tall_birch_forest'],
    condition: 'Luna llena'
  },
  {
    name: 'Manaphy',
    sprite: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/0/0e/Pokemans_490.gif',
    time: ['mañana'],
    biome: ['warm_ocean', 'lukewarm_ocean'],
    condition: ''
  },
  {
    name: 'Darkrai',
    sprite: 'https://i.pinimg.com/originals/52/98/52/529852d4ecabaef70451449418e3be46.gif',
    time: ['noche'],
    biome: ['dark_forest_hills', 'dark_forest'],
    condition: 'Luna nueva'
  },
  {
    name: 'Shaymin',
    sprite: 'https://www.pngplay.com/wp-content/uploads/11/Shaymin-Pokemon-PNG-HD-Quality.png',
    time: ['mañana'],
    biome: ['sunflower_plains', 'mount_lanakila', 'flower_forest'],
    condition: ''
  },
  {
    name: 'Victini',
    sprite: 'https://media.tenor.com/4tW3iWTeOugAAAAj/victini.gif',
    time: ['dia'],
    biome: ['shattered_savanna_plateau', 'shattered_savanna', 'savanna_plateau', 'savanna'],
    condition: 'Cielo despejado'
  },
  {
    name: 'Cobalion',
    sprite: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/d/da/Pokemans_638.gif',
    time: ['noche'],
    biome: ['birch_forest_hills', 'wooded_hills', 'tall_birch_hills'],
    condition: 'Y >= 85'
  },
  {
    name: 'Terrakion',
    sprite: 'https://static.wikia.nocookie.net/pokemon-magma/images/b/b9/639.png',
    time: ['noche'],
    biome: ['birch_forest_hills', 'wooded_hills', 'tall_birch_hills'],
    condition: 'Y >= 85'
  },
  {
    name: 'Virizion',
    sprite: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/4/4d/Pokemans_640.gif',
    time: ['dia'],
    biome: ['birch_forest_hills', 'wooded_hills', 'tall_birch_hills'],
    condition: 'Y >= 85'
  },
  {
    name: 'Tornadus',
    sprite: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/8/8d/Pokemans_641.gif',
    time: ['tarde'],
    biome: ['plains', 'sunflower_plains'],
    condition: 'Lluvia'
  },
  {
    name: 'Thundurus',
    sprite: 'https://static.wikia.nocookie.net/pokemon-magma/images/5/57/642.png',
    time: ['mañana'],
    biome: ['plains', 'sunflower_plains'],
    condition: 'Lluvia'
  },
  {
    name: 'Reshiram',
    sprite: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/3/3c/Pokemans_643.gif?width=325',
    time: ['dia'],
    biome: ['giant_spruce_taiga', 'giant_tree_taiga_hills', 'giant_spruce_taiga_hills', 'giant_tree_taiga'],
    condition: ''
  },
  {
    name: 'Zekrom',
    sprite: 'https://wiki.p-insurgence.com/images/d/dc/644.png',
    time: ['noche'],
    biome: ['giant_spruce_taiga', 'giant_tree_taiga_hills', 'giant_spruce_taiga_hills', 'giant_tree_taiga'],
    condition: ''
  },
  {
    name: 'Landorus',
    sprite: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/2/2c/Pokemans_645.gif',
    time: ['amanecer', 'mañana'],
    biome: ['modified_badlands_plateau', 'badlands_plateau', 'modified_wooded_badlands_plateau', 'wooded_badlands_plateau', 'savanna_plateau'],
    condition: ''
  },
  {
    name: 'Kyurem',
    sprite: 'https://static.unboundwiki.com/wp-content/assets/images/2024/11/kyurem-scaled-1.png',
    time: ['tarde', 'atardecer'],
    biome: ['ice_spikes', 'snowy_mountains'],
    condition: ''
  },
  {
    name: 'Keldeo',
    sprite: 'https://art.pixilart.com/thumb/9e37ddc4f2740c5.png',
    time: ['dia'],
    biome: ['river', 'desert_lakes'],
    condition: ''
  },
  {
    name: 'Meloetta',
    sprite: 'https://www.pngmart.com/files/22/Meloetta-Pokemon-PNG-Isolated-Pic.png',
    time: ['noche'],
    biome: ['sunflower_plains', 'flower_forest'],
    condition: ''
  },
  {
    name: 'Genesect',
    sprite: 'https://www.nicepng.com/png/full/467-4673967_view-file-pixel-art-pokemon-genesect.png',
    time: ['noche'],
    biome: ['gravelly_mountains', 'wooded_mountains'],
    condition: ''
  },
  {
    name: 'Xerneas',
    sprite: 'https://rejuvenation.wiki.gg/images/716.png?bd69d3',
    time: ['dia'],
    biome: ['dark_forest'],
    condition: ''
  },
  {
    name: 'Yveltal',
    sprite: 'https://static.unboundwiki.com/wp-content/assets/images/2024/11/yveltal_scaled_4x_pngcrushed.png',
    time: ['noche'],
    biome: ['taiga_mountains'],
    condition: ''
  },
  {
    name: 'Diancie',
    sprite: 'https://static.wikia.nocookie.net/pokemon-magma/images/5/5f/719.png',
    time: ['mañana'],
    biome: ['mountain_edge', 'gravelly_mountains', 'wooded_mountains', 'modified_gravelly_mountains', 'mountains'],
    condition: 'Y <= 50'
  },
  {
    name: 'Hoopa',
    sprite: 'https://static.wikia.nocookie.net/pokemon-magma/images/8/8c/720.png',
    time: ['tarde'],
    biome: ['desert', 'desert_hills', 'desert_lakes'],
    condition: ''
  },
  {
    name: 'Volcanion',
    sprite: 'https://static.wikia.nocookie.net/pokemon-magma/images/f/fb/721.png',
    time: ['amanecer', 'mañana'],
    biome: ['desert_lakes'],
    condition: 'Superficie acuática'
  },
  {
    name: 'Type: Null',
    sprite: 'https://static.wikia.nocookie.net/pokemonwack/images/7/71/1162s.png',
    time: ['atardecer', 'noche'],
    biome: ['jungle', 'jungle_edge'],
    condition: ''
  },
  {
    name: 'Tapu Koko',
    sprite: 'https://static.wikia.nocookie.net/pokemonwack/images/3/36/1441.png',
    time: ['mañana'],
    biome: ['jungle'],
    condition: ''
  },
  {
    name: 'Tapu Lele',
    sprite: 'https://static.unboundwiki.com/wp-content/assets/images/2024/12/tapu-lele-scaled-1.png',
    time: ['noche'],
    biome: ['jungle'],
    condition: ''
  },
  {
    name: 'Tapu Bulu',
    sprite: 'https://static.wikia.nocookie.net/pokemonwack/images/6/69/1443.png',
    time: ['dia'],
    biome: ['jungle'],
    condition: ''
  },
  {
    name: 'Tapu Fini',
    sprite: 'https://static.wikia.nocookie.net/pokemonwack/images/2/2c/1444.png',
    time: ['tarde'],
    biome: ['jungle'],
    condition: 'Superficie acuática'
  },
  {
    name: 'Cosmog',
    sprite: 'https://static.wikia.nocookie.net/pokemonempyrean/images/7/76/789.png',
    time: ['atardecer'],
    biome: ['sunflower_plains', 'flower_forest'],
    condition: ''
  },
  {
    name: 'Necrozma',
    sprite: 'https://static.wikia.nocookie.net/pokemon-radiance/images/1/1e/089_Necrozma.png',
    time: ['noche'],
    biome: ['dark_forest'],
    condition: ''
  },
  {
    name: 'Magearna',
    sprite: 'https://static.wikia.nocookie.net/pokemonwack/images/c/c7/1180.png',
    time: ['dia'],
    biome: ['sunflower_plains', 'flower_forest'],
    condition: ''
  },
  {
    name: 'Marshadow',
    sprite: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3b0ee562-5e13-4566-b957-9311ebbeaa20/dbj5glm-ecc7ada7-f330-492c-b31f-8ea6c25902e4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8zYjBlZTU2Mi01ZTEzLTQ1NjYtYjk1Ny05MzExZWJiZWFhMjAvZGJqNWdsbS1lY2M3YWRhNy1mMzMwLTQ5MmMtYjMxZi04ZWE2YzI1OTAyZTQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.r5Ba6_ZXUCruSmGnrE7nL5moqvURYVxwa2Y7zuecy94',
    time: ['noche'],
    biome: ['badlands_plateau'],
    condition: ''
  },
  {
    name: 'Zeraora',
    sprite: 'https://static.wikia.nocookie.net/pokemon-magma/images/7/77/825.png',
    time: ['tarde'],
    biome: ['shattered_savanna_plateau', 'savanna_plateau'],
    condition: ''
  },
  {
    name: 'Zacian',
    sprite: 'https://static.wikia.nocookie.net/pokemon-radiance/images/3/30/718_Zacian.png',
    time: ['dia'],
    biome: ['flower_forest'],
    condition: ''
  },
  {
    name: 'Zamazenta',
    sprite: 'https://static.wikia.nocookie.net/pokemon-radiance/images/d/d3/719_Zamazenta.png',
    time: ['noche'],
    biome: ['birch_forest'],
    condition: ''
  },
  {
    name: 'Eternatus',
    sprite: 'https://static.wikia.nocookie.net/pokemon-radiance/images/a/af/720_Eternatus.png',
    time: ['amanecer', 'mañana'],
    biome: ['swamp_hills', 'swamp'],
    condition: ''
  },
  {
    name: 'Kubfu',
    sprite: 'https://static.wikia.nocookie.net/pokemonwack/images/a/ad/2896.png',
    time: ['tarde'],
    biome: ['bamboo_jungle', 'bamboo_jungle_hills'],
    condition: ''
  },
  {
    name: 'Zarude',
    sprite: 'https://i.redd.it/sv3yba6tx5j51.png',
    time: ['noche'],
    biome: ['bamboo_jungle', 'bamboo_jungle_hills', 'jungle', 'jungle_edge', 'jungle_hills', 'modified_jungle', 'modified_jungle_edge'],
    condition: 'Parte superior de un árbol'
  },
  {
    name: 'Regieleki',
    sprite: 'https://static.wikia.nocookie.net/pokemon-daybreak/images/2/26/933.png',
    time: ['tarde'],
    biome: ['giant_spruce_taiga'],
    condition: ''
  },
  {
    name: 'Regidrago',
    sprite: 'https://static.wikia.nocookie.net/pokemon-radiance/images/7/76/281_Regidrago.png',
    time: ['dia'],
    biome: ['wooded_mountains'],
    condition: ''
  },
  {
    name: 'Glastrier',
    sprite: 'https://static.wikia.nocookie.net/pokemonwack/images/9/90/4369.png',
    time: ['dia'],
    biome: ['snowy_taiga_mountains', 'snowy_taiga', 'frozen_ocean', 'ice_spikes', 'snowy_taiga_hills', 'snowy_beach', 'snowy_tundra', 'frozen_river', 'snowy_mountains'],
    condition: ''
  },
  {
    name: 'Spectrier',
    sprite: 'https://rejuvenation.wiki.gg/images/6/64/897.png?4abfca',
    time: ['noche'],
    biome: ['swamp_hills', 'swamp'],
    condition: ''
  },
  {
    name: 'Calyrex',
    sprite: 'https://static.unboundwiki.com/wp-content/assets/images/2024/12/calyrex-scaled-1.png',
    time: ['mañana'],
    biome: ['snowy_taiga_mountains', 'snowy_taiga', 'snowy_taiga_hills'],
    condition: ''
  },
  {
    name: 'Enamorus',
    sprite: 'https://rejuvenation.wiki.gg/images/905.png',
    time: ['amanecer', 'atardecer'],
    biome: ['sunflower_plains', 'flower_forest'],
    condition: ''
  },
  {
    name: 'Wo-Chien',
    sprite: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e57c0ca5-c162-43e7-b0dc-40f215c30321/dg600h9-5fc9d2d8-8885-4ba9-a263-954475e4f020.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9lNTdjMGNhNS1jMTYyLTQzZTctYjBkYy00MGYyMTVjMzAzMjEvZGc2MDBoOS01ZmM5ZDJkOC04ODg1LTRiYTktYTI2My05NTQ0NzVlNGYwMjAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3Prmxl1yftGYMD4YQg0bSg-m20S8FHWVXzaQpuza2fQ',
    time: ['noche'],
    biome: ['swamp_hills', 'swamp'],
    condition: ''
  },
  {
    name: 'Chien-Pao',
    sprite: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/1002.png',
    time: ['noche'],
    biome: ['snowy_mountains', 'snowy_taiga', 'snowy_taiga_hills'],
    condition: 'Y >= 100'
  },
  {
    name: 'Ting-Lu',
    sprite: 'https://static.wikia.nocookie.net/pokemon-keishou/images/8/87/TINGLU.png',
    time: ['noche'],
    biome: ['taiga_hills', 'taiga', 'taiga_mountains'],
    condition: ''
  },
  {
    name: 'Chi-Yu',
    sprite: 'https://img.pokemondb.net/sprites/home/normal/chi-yu.png',
    time: ['dia'],
    biome: ['badlands', 'modified_badlands_plateau', 'badlands_plateau', 'modified_wooded_badlands_plateau', 'wooded_badlands_plateau', 'eroded_badlands'],
    condition: 'Superficie de lava'
  },
  {
    name: 'Koraidon',
    sprite: 'https://i.redd.it/6ux6ym0818391.png',
    time: ['atardecer'],
    biome: ['savanna_plateau', 'savanna'],
    condition: ''
  },
  {
    name: 'Miraidon',
    sprite: 'https://64.media.tumblr.com/25bba19f0a8d022fe1437f82360369a8/87c505323d1b8407-77/s500x750/4b8d17644c08a5f3d3c292e1277a38543d09e2f1.gif',
    time: ['dia'],
    biome: ['badlands', 'badlands_plateau'],
    condition: 'Lluvia'
  },
  {
    name: 'Nihilego',
    sprite: 'https://static.wikia.nocookie.net/pokemonwack/images/0/05/1182.png',
    time: ['mañana'],
    biome: ['beach'],
    condition: ''
  },
  {
    name: 'Buzzwole',
    sprite: 'https://static.wikia.nocookie.net/pokemonempyrean/images/d/df/794.png',
    time: ['atardecer'],
    biome: ['dark_forest', 'birch_forest'],
    condition: ''
  },
  {
    name: 'Pheromosa',
    sprite: 'https://static.wikia.nocookie.net/pokemon-magma/images/a/aa/795.png',
    time: ['amanecer', 'mañana'],
    biome: ['bamboo_jungle'],
    condition: ''
  },
  {
    name: 'Xurkitree',
    sprite: 'https://static.wikia.nocookie.net/pokemon-radiance/images/d/df/353_Xurkitree.png',
    time: ['noche'],
    biome: ['forest', 'taiga'],
    condition: ''
  },
  {
    name: 'Celesteela',
    sprite: 'https://static.wikia.nocookie.net/pokemon-magma/images/b/bf/797.png',
    time: ['tarde'],
    biome: ['giant_spruce_taiga', 'giant_tree_taiga_hills', 'giant_spruce_taiga_hills', 'giant_tree_taiga'],
    condition: ''
  },
  {
    name: 'Kartana',
    sprite: 'https://static.wikia.nocookie.net/pokemonwack/images/5/58/1187.png',
    time: ['dia'],
    biome: ['jungle', 'modified_jungle'],
    condition: ''
  },
  {
    name: 'Poipole',
    sprite: 'https://art.pixilart.com/thumb/689ed4630851fbb.png',
    time: ['noche'],
    biome: ['tall_birch_forest', 'taiga_mountains'],
    condition: ''
  },
  {
    name: 'Stakataka',
    sprite: 'https://static.wikia.nocookie.net/pokemon-radiance/images/e/e0/359_Stakataka.png',
    time: ['noche'],
    biome: ['badlands_plateau'],
    condition: ''
  },
  {
    name: 'Blacephalon',
    sprite: 'https://static.wikia.nocookie.net/pokemonwack/images/0/01/1433.png',
    time: ['noche'],
    biome: ['desert', 'dark_forest'],
    condition: ''
  },
  {
    name: 'Guzzlord',
    sprite: 'https://static.wikia.nocookie.net/pokemonwack/images/5/5a/1188.png',
    time: ['noche'],
    biome: ['desert_hills'],
    condition: ''
  }
];