export async function up(knex) {
  await knex.schema.createTable('gameState', (table) => {
    table.integer('id').primary()
    table.string('name')
    table.integer('region')
    table.bool('isFlowering')
    table.bool('isFruiting')
    table.integer('maxHeight')
    table.bool('isNative')
    table.string('imageUrl')
    table.integer('x')
    table.integer('y')
    table.timestamp('timestamp')
    table.string('imgSrc')
  })
}

export async function down(knex) {
  await knex.schema.dropTableIfExists('gameState')
}
