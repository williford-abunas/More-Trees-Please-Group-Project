export async function up(knex) {
  await knex.schema.createTable('gameState', (table) => {
    table.integer('id')
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
    table.bool('isMature')
    table.increments('uniqueId').primary()
  })
}

export async function down(knex) {
  await knex.schema.dropTableIfExists('gameState')
}
