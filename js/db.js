// init indexDB
db.enablePersistence()
  .catch(err => {
    if (err.code === 'failed-precondition') {
      // multiple tabs open at once
      console.log('persistence failed');
    } else if(err.code === 'unimplemented') {
      // browser support
      console.log('persistence is not available');
    }
  })

// real-time listener
db.collection('recipes').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    const data = { ...change.doc.data(), id: change.doc.id };

    switch(change.type) {
      case 'added':
        addRecipeToDom(data);
        break;

      case 'removed':
        removeRecipeFromDom(data);
        break;

      default: {}
    }
  })
})
