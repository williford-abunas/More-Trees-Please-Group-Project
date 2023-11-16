export async function up(knex) {
  await knex.schema.createTable('birds', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.bool('likesFlowering')
    table.bool('likeFruiting')
    table.bool('isNocturnal')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('birds')
}
