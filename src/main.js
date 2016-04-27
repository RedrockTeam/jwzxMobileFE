import Vue from 'vue';
import App from './App';
import Router from 'vue-router';
import HelloView from './components/Hello';
import RubLessonView from './components/RubLesson';

Vue.use(Router);

const router = new Router();
router.map({
  '/': {
    component: HelloView,
  },
  '/rubLesson': {
    component: RubLessonView,
  },
});

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

router.start(App, '#app');
