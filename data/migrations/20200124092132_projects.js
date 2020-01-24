
exports.up = function(knex) {
    return knex.schema
    .createTable('project', tbl => {
    tbl.increments();
    tbl.text('project_id');
    tbl.text('name')
    .notNullable();
    tbl.text('project_description');
    tbl.boolean('completed');
    
     
 })
 .createTable('task', tbl => {
    tbl.increments();
    tbl.integer('task_id')
    .unsigned()
    .references('project_id')
    .inTable('project');
    tbl.text('task_description')
    .notNullable();
    tbl.text('task_notes');
 })
 
 .createTable('resources', tbl => {
    tbl.increments();
    tbl.integer('resource_id')
    .unsigned()
    .notNullable()
    .references('project_id')
    .inTable('project');
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
