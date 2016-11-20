'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

  orders () {
    return this.hasMany('App/Model/Order')
  }

  comments () {
        return this.hasMany('App/Model/Comment')  
    }

}

module.exports = User
