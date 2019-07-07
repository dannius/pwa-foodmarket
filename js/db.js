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
