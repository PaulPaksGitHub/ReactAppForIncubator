import React from 'react'

const NewsList = {
  news: [
    { id: 1, text: "Ben Blocker" ,header: 'New1'},
    { id: 2, text: "Dave Defender", header: 'new 2'},
  ],
  all: function() { return this.news},
  get: function(id) {
    const toFind = n => n.id === id
    return this.news.find(toFind)
  }
}
export default NewsList;
