export async function seed(knex) {
  await knex('birds').del()
}
