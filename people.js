module.exports = {
  removedBadPeople: function (array) {
    return array.filter(function (item) {
        return item.name !== "" && item.name !== undefined;
    })
  },

  sumAgesValid: function (array) {
  var newArray = this.removedBadPeople(array)
  return newArray.reduce(function (all, item, index) {
      all += item.age
      return all
  }, 0)
  },

  sumAgesAll: function (array) {
    var newArray = array.filter(function(item) {
        return item.age
    });

    return newArray.reduce(function (all, item, index) {
        all += item.age
        return all
    }, 0)
    }
}

