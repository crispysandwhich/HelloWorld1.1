exports.seed = function(knex, Promise) {
  return knex('orange').insert([
    { smile: 'orange you glad', noTime: 'i didnt say bananana'}
  ])
}