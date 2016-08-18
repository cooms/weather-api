var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  get: get
}

function get (req, res) {
  knex('conditions')
  .join("tips","conditions.id","=","conditions_id")
  .select()
  .then (function(data) {
    res.status(200).json({data:data})
  })
  .catch (function(error) {
    console.log(error)
  })
}
