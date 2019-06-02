function choice(items){
    let index = Math.floor(Math.random() * items.length );
    return items[index];
}

function remove(items, item){
    let index = items.indexOf(item);
    let rItem = items[index];
    if (index > -1) {
        items.splice(index, 1);
        return rItem;
    } else{
        return false;
    }
}

export {choice, remove};