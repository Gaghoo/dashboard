export function state() {
  const isOpened = localStorage.getItem('menu:isOpened');
  console.log('isOpened', isOpened)
  return {
    opened: isOpened !== null ? isOpened === 'true' : true
  }
}

export const getters = {
  isOpen
};

function isOpen({ opened }) {
  return opened;
}

export const mutations = {
  mutateOpen,
  mutateClose
};

function mutateOpen(state) {
  state.opened = true;
  localStorage.setItem('menu:isOpened', 'true');
}

function mutateClose(state) {
  state.opened = false;
  localStorage.setItem('menu:isOpened', 'false');
}

export const actions = {
  toggle,
  open,
  close
}

function toggle({ state, commit }) {
  if (state.opened) {
    commit('mutateClose');
  } else {
    commit('mutateOpen');
  }
}

function open({ commit }) {
  commit('mutateOpen');
}

function close({ commit }) {
  commit('mutateClose');
}
