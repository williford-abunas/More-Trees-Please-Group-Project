export async function up(knex) {
  await knex.schema.createTable('birds', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.bool('likesFlowering')
    table.bool('likesFruiting')
    table.bool('isNocturnal')
    table.integer('favouriteTreeId')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('birds')
}
