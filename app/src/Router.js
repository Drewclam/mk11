import Vue from 'vue';
import VueRouter from 'vue-router';

import Roster from './components/Roster';
import Fighter from './components/Fighter';

Vue.use(VueRouter);

const routes = [{ path: '/', component: Roster }, { path: '/fighter/:id', component: Fighter }];

export const router = new VueRouter({ routes });
