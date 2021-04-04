export const Types = {
    GET_ITEMS:"get_items",
    SET_ITEMS:"set_items",
    GET_ITEM:"get_item",
    SET_ITEM:"set_item"
};

export const getItemsAction = (query:any) => ({
	type: Types.GET_ITEMS,
	payload: {query}
});

export const getItemAction = (id:any) => ({
	type: Types.GET_ITEM,
	payload: {id}
});

export const setItemsAction = (items:any[]) => ({
	type: Types.SET_ITEMS,
	payload: {items}
});

export const setItemAction = (item:any) => ({
	type: Types.SET_ITEM,
	payload: {item}
});