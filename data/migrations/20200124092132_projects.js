
exports.up = function(knex) {
    return knex.schema
    .createTable('project', tbl => {
    tbl.increments();
    tbl.text('project_name')
    .unique()
    .notNullable();
    tbl.text('project_description');
    tbl.boolean('completed')
    .notNullable();
    
     
 })
 .createTable('task', tbl => {
    tbl.increments();
    tbl.text('task_name');
    tbl.text('task_description')
    .notNullable();
    tbl.text('task_notes');
    tbl.boolean('completed')
    .notNullable();
 })
 
 .createTable('resources', tbl => {
    tbl.increments();
    // tbl.integer('resource_id')
    // .unsigned()
    // .notNullable()
    // .references('id')
    // .inTable('project');
    // .onDelete('RESTRICT')
    // .onUpdate('CASCADE'); 
    tbl.text('resource_name')
    .notNullable();
    tbl.text('resource_description');
 })
};

exports.down = function(knex) {
    return knex.schema 
    .dropTableIfExists('resources')
    .dropTableIfExists('task')
    .dropTableIfExists('project');
};
