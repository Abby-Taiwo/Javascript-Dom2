function musicalGroup(array) {
    const length_ = array.length
    if(length_ <= 0) {
      console.log("not a group")
    }
    else if (length_ === 1) {
      console.log("solo")
    }
    else if (length_ === 2 ) {
      console.log("duet")
    }
    else if (length_ === 3 ) {
      console.log("trio")
    }
    else if (length_ === 4 ) {
      console.log("quartet")
    }
    else{
      console.log("this is a large group")
    }
  }
  
  // Tests
  const group1 = []
  const group2 = ["adam"]
  const group3 = ["adam", "ludo"]
  const group4 = ["adam", "ludo", "john"]
  const group5 = ["adam", "ludo", "john","nick"]
  const group6 = ["adam", "ludo", "john","nick","dan"]
  
  musicalGroup(group1)
  musicalGroup(group2)
  musicalGroup(group3)
  musicalGroup(group4)
  musicalGroup(group5)
  musicalGroup(group6)
