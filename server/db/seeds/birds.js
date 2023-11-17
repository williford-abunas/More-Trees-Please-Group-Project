/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('birds').insert([
    {
      id: 1,
      name: 'Hihi',
      likesFlowering: true,
      likesFruiting: false,
      favouriteTreeId: 2,
    },
    {
      id: 2,
      name: 'Kereru',
      likesFlowering: true,
      likesFruiting: true,
      favouriteTreeId: 25,
    },
    {
      id: 3,
      name: 'Tui',
      likesFlowering: true,
      likesFruiting: true,
      favouriteTreeId: 9,
    },
    {
      id: 4,
      name: 'Ruru',
      likesFlowering: false,
      likesFruiting: false,
      favouriteTreeId: 3,
    },
    {
      id: 5,
      name: 'Kotare',
      likesFlowering: true,
      likesFruiting: false,
      favouriteTreeId: 9,
    },
    {
      id: 7,
      name: 'Kiwi',
      likesFlowering: false,
      likesFruiting: false,
      favouriteTreeId: 24,
    },
    {
      id: 8,
      name: 'Piwakawaka',
      likesFlowering: true,
      likesFruiting: false,
      favouriteTreeId: 14,
    },
    {
      id: 9,
      name: 'Kahu',
      likesFlowering: false,
      likesFruiting: false,
      favouriteTreeId: 18,
    },
    {
      id: 10,
      name: 'Karearea',
      likesFlowering: false,
      likesFruiting: false,
      favouriteTreeId: 1,
    },
    {
      id: 11,
      name: 'Moa',
      likesFlowering: false,
      likesFruiting: false,
      favouriteTreeId: 12,
    },
    {
      id: 12,
      name: 'Takahe',
      likesFlowering: true,
      likesFruiting: false,
      favouriteTreeId: 9,
    },
    {
      id: 13,
      name: 'Koremako',
      likesFlowering: true,
      likesFruiting: true,
      favouriteTreeId: 7,
    },
    {
      id: 14,
      name: 'Weka',
      likesFlowering: true,
      likesFruiting: true,
      favouriteTreeId: 6,
    },
    {
      id: 15,
      name: 'Kakapo',
      likesFlowering: true,
      likesFruiting: true,
      favouriteTreeId: 3,
    },
  ])
}
