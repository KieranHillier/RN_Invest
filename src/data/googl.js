const google = () => {
  var arr = []
    var i = 0
    while(arr.length < 40){
        i += 1
        var r = (Math.random() * 3) + 100;
        var newPosition = {
            x: i,
            y: r
        }
        arr.push(newPosition);
    }

  return arr
}

export default google