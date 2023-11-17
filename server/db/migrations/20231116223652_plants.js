export async function up(knex) {
  await knex.schema.createTable('plants', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('region')
    table.bool('isFlowering')
    table.bool('isFruiting')
    table.integer('maxHeight')
    table.bool('native')
    table.string('imageUrl')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('plants')
}
