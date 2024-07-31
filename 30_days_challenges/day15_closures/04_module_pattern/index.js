const manageItems = () => {
    let items = [];

    const addItem = (item) => {
        items.push(item);
    }

    const removeItem = (item) => {
        if (items.includes(item)) {
            const modifyItems = items.filter(it => it !== item);
            items = modifyItems;
        }
    }

    const listItems = () => {
        return items;
    }

    return {
        addItem, removeItem, listItems
    }
}

const { addItem, removeItem, listItems } = manageItems();

addItem("item 01");
addItem("item 02");
addItem("item 03");
addItem("item 04");

console.log(listItems());;

removeItem("item 02");

console.log(listItems());