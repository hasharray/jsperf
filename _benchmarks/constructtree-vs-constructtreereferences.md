---
title: constructTree vs constructTreeReferences
setup: |
  function constructTree(list_items) {
    let dummy_node = {children: []};
    let tree = {
      '0': Object.assign({}, dummy_node)
    };
  
    // This works via circular references inside `tree`, then using the finished
    // product of `tree[0].children` to exclude the circular references.
    Object.keys(list_items).forEach(uuid => {
      let list_item = Object.assign({}, list_items[uuid]);
      let parent_uuid = list_item.parent_uuid || '0';
  
      // Init .children property.
      list_item.children = [];
  
      // `tree[uuid]` may exist from the insertion of dummy nodes, so we
      // should overwrite, rather than replace.
      tree[uuid] = Object.assign({}, tree[uuid], list_item);
  
      // If the parent node exists in `state.list_items`, but does not yet
      // exist in `tree`, then insert a dummy node.
      if (tree[parent_uuid] === undefined) {
        tree[parent_uuid] = Object.assign({}, dummy_node);
      }
  
      // Append to Array children of parent list_item.
      tree[parent_uuid].children.push(tree[uuid]);
    });
  
    return tree;
  }
  
  function constructTreeReferences(list_items) {
    let dummy_node = {children: []};
    let tree = {
      '0': Object.assign({}, dummy_node)
    };
    
    Object.keys(list_items).forEach(uuid => {
      let list_item = {uuid: uuid};
      let parent_uuid = list_items[uuid].parent_uuid || '0';
      
      list_item.children = [];
      
      tree[uuid] = Object.assign({}, tree[uuid], list_item);
      
      if (tree[parent_uuid] === undefined) {
        tree[parent_uuid] = Object.assign({}, dummy_node);
      }
      
      tree[parent_uuid].children.push(tree[uuid]);
    });
    
    return tree;
  }
  
  
  let state = {
    by_id: {},
    by_tree: null
  }
  
  let initial_state_list_item = {
    uuid: null,
    parent_uuid: null
  }
  
  
  // Populate 1000 list items
  let max = 10000
  for (let i = 0; i < max; i++) {
    state.by_id[i] = Object.assign({}, initial_state_list_item, {
      uuid: i,
      parent_uuid: Math.floor(Math.random() * max)
    })
  }
tests:
  -
    name: constructTree
    code: |
      state.by_tree = constructTree(state.by_id)
  -
    name: constructTreeReferences
    code: |
      state.by_tree = constructTreeReferences(state.by_id)
---

