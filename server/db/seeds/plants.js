/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('plants').insert([
    {
      id: 1,
      name: 'Kauri',
      region: 1,
      isFlowering: false,
      isFruiting: false,
      maxHeight: 50,
      isNative: true,
      imageUrl:
        'https://lp-cms-production.imgix.net/image_browser/Kauri%20tree%20%28Getty%20RF%29.jpg?auto=format&w=1440&h=810&fit=crop&q=75',
    },
    {
      id: 2,
      name: 'Pohutakawa',
      region: 1,
      isFlowering: true,
      isFruiting: false,
      maxHeight: 20,
      isNative: true,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/5/5b/PohutukawaCornwallis.jpg',
    },
    {
      id: 3,
      name: 'Harakeke',
      region: 1,
      isFlowering: true,
      isFruiting: false,
      maxHeight: 3,
      isNative: true,
      imageUrl:
        'https://wavewatchers.co.nz/wp-content/uploads/2017/03/Flax.jpg',
    },
    {
      id: 4,
      name: 'Titoki',
      region: 1,
      isFlowering: false,
      isFruiting: false,
      maxHeight: 18,
      isNative: true,
      imageUrl: 'https://www.treetrust.org.nz/images/76._Titoki.jpg',
    },
    {
      id: 5,
      name: 'Pukatea',
      region: 1,
      isFlowering: false,
      isFruiting: false,
      maxHeight: 35,
      isNative: true,
      imageUrl:
        'https://i.pinimg.com/originals/59/fb/3f/59fb3ff073a9e4b59cef86de55c91bc5.jpg',
    },
    {
      id: 6,
      name: 'Kohekohe',
      region: 1,
      isFlowering: false,
      isFruiting: false,
      maxHeight: 15,
      isNative: true,
      imageUrl:
        'https://files.leafland.co.nz/tr:w-1000/didymocheton-spectabilis/didymocheton-spectabilis.jpg',
    },
    {
      id: 7,
      name: 'Wharariki',
      region: 2,
      isFlowering: false,
      isFruiting: false,
      maxHeight: 1,
      isNative: true,
      imageUrl:
        'https://www.aucklandbotanicgardens.co.nz/media/3343/phormium-cookianum-30-oct-2013-025.jpg',
    },
    {
      id: 8,
      name: 'Toetoe',
      region: 2,
      isFlowering: true,
      isFruiting: false,
      maxHeight: 2,
      isNative: true,
      imageUrl:
        'https://pioneernursery.co.nz/wp-content/uploads/2019/09/austroderia-Toetoe.jpg',
    },
    {
      id: 9,
      name: 'Silver Tussock',
      region: 3,
      isFlowering: false,
      isFruiting: false,
      maxHeight: 0.5,
      isNative: true,
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0275/4545/files/Poa_cita_23_1024x1024.jpg?3597089931393021830',
    },
    {
      id: 10,
      name: 'Red Tussock',
      region: 2,
      isFlowering: false,
      isFruiting: false,
      maxHeight: 1,
      isNative: true,
      imageUrl:
        'https://www.gardenia.net/wp-content/uploads/2016/01/CFGr209Optimized.jpg',
    },
    {
      id: 11,
      name: 'Copper Tussock',
      region: 2,
      isFlowering: false,
      isFruiting: false,
      maxHeight: 1,
      isNative: true,
      imageUrl:
        'https://www.nzpcn.org.nz/site/assets/files/0/35/633/qqq_w-olguryy-107-puvba-ehoen-phc.400x400-u0c0i1s1q90f1.jpg',
    },
    {
      id: 12,
      name: 'Manuka',
      region: 2,
      isFlowering: true,
      isFruiting: true,
      maxHeight: 5,
      isNative: true,
      imageUrl:
        'https://webbox.imgix.net/images/njwsnuimalbimped/a41db749-ca8f-4fff-9aae-dc29f3f50e78.jpg?auto=format,compress&fit=crop&crop=entropy',
    },
    {
      id: 13,
      name: 'Ponga',
      region: 2,
      isFlowering: false,
      isFruiting: false,
      maxHeight: 6,
      isNative: true,
      imageUrl:
        'https://lifeform.co.nz/wp-content/uploads/Wheki_Ponga_Koru.jpg',
    },
    {
      id: 14,
      name: 'Southern Rata',
      region: 3,
      isFlowering: false,
      isFruiting: false,
      maxHeight: 40,
      isNative: true,
      imageUrl:
        'https://www.doc.govt.nz/thumbs/hero/contentassets/8c90d0aa2f6b47658c9c4812ebcd408d/southern-rata-enderby-island-hero.jpg',
    },
    {
      id: 15,
      name: 'Kahikatea',
      region: 3,
      isFlowering: false,
      isFruiting: false,
      maxHeight: 50,
      isNative: true,
      imageUrl:
        'https://nznurseries.co.nz/wp-content/uploads/2022/01/Kahikatea-post-.jpeg',
    },
    {
      id: 16,
      name: 'Miro',
      region: 3,
      isFlowering: false,
      isFruiting: false,
      maxHeight: 25,
      isNative: true,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS8giIdzSjEFML9dpI6BSTmZRntPHBeQ0WMA&usqp=CAU',
    },
    {
      id: 17,
      name: 'Tawhai',
      region: 3,
      isFlowering: false,
      isFruiting: false,
      maxHeight: '30',
      isNative: true,
      imageUrl:
        'https://i0.wp.com/www.nznatureguy.com/wp-content/uploads/2019/06/mountain-beech.jpg?fit=2048%2C1536&ssl=1',
    },
    {
      id: 18,
      name: 'Mountain Totara',
      region: 3,
      isFlowering: true,
      isFruiting: true,
      maxHeight: 40,
      isNative: true,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTuAv9rhUIZL1SRNn4cxDarpZnHHsQNsQVA&usqp=CAU',
    },
    {
      id: 19,
      name: 'Rimu',
      region: 3,
      isFlowering: false,
      isFruiting: false,
      maxHeight: 35,
      isNative: true,
      imageUrl:
        'https://futuretreehealth.com.au/wp-content/uploads/2023/07/Rimu-1024x574.jpg',
    },
    {
      id: 20,
      name: 'Pītau',
      region: 3,
      isFlowering: false,
      isFruiting: false,
      maxHeight: 16,
      isNative: true,
      imageUrl:
        'https://i.pinimg.com/736x/4d/37/64/4d3764e22eaa9742af1719f6493eddcb.jpg',
    },
    {
      id: 21,
      name: 'Totara',
      region: 0,
      isFlowering: true,
      isFruiting: true,
      maxHeight: 25,
      isNative: true,
      imageUrl:
        'https://www.thelionslodge.co.nz/images/250/226/tree-totara-northland-isNative?h=036c9aa8',
    },
    {
      id: 22,
      name: 'Kanuka',
      region: 0,
      isFlowering: false,
      isFruiting: false,
      maxHeight: 15,
      isNative: true,
      imageUrl:
        'https://nznurseries.co.nz/wp-content/uploads/2022/03/kanuka-Flowing-website.jpeg',
    },
    {
      id: 23,
      name: 'Kowhai',
      region: 0,
      isFlowering: true,
      isFruiting: false,
      maxHeight: 10,
      isNative: true,
      imageUrl:
        'https://static.wixstatic.com/media/d9899a_2eeefdb772c340fa81cb0708e491efe3~mv2.jpg/v1/fill/w_480,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d9899a_2eeefdb772c340fa81cb0708e491efe3~mv2.jpg',
    },
    {
      id: 24,
      name: 'Piripiri',
      region: 0,
      isFlowering: false,
      isFruiting: false,
      maxHeight: 0.3,
      isNative: true,
      imageUrl:
        'https://www.oratianatives.co.nz/images/get_photo.php?photo_id=340',
    },
    {
      id: 25,
      name: 'Kawa Kawa',
      region: 0,
      isFlowering: false,
      isFruiting: false,
      maxHeight: 4,
      isNative: true,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSC0BMBVdAJsvPJ3hH-fqY8TL_S2kiz63hzGzF5U4EeC3htiEvjNgRslmMNSlkzmHJzmM&usqp=CAU',
    },
    {
      id: 26,
      name: 'Kakaha',
      region: 0,
      isFlowering: false,
      isFruiting: false,
      maxHeight: 1.5,
      isNative: true,
      imageUrl:
        'https://www.ttc.org.nz/pmwiki/pmwiki.php/InTheHills/InTheHills2016-08?action=createthumb&imcl=&upname=th386---ffffff--kiwakiwa.jpg.jpg',
    },
    {
      id: 27,
      name: 'Pine',
      region: 0,
      isFlowering: true,
      isFruiting: false,
      maxHeight: 60,
      isNative: false,
      imageUrl:
        'https://gardengoodsdirect.com/cdn/shop/articles/blog_header_45_830x.jpg?v=1669651491',
    },
    {
      id: 28,
      name: 'Blackberry',
      region: 0,
      isFlowering: true,
      isFruiting: false,
      maxHeight: 2,
      isNative: false,
      imageUrl:
        'https://beehavengardens.nz/wp-content/uploads/2023/09/Thornless-blackberry.jpg',
    },
  ])
}
