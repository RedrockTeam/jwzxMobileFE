import Vue from 'vue';
import App from './App';
import Router from 'vue-router';
import HomeView from './components/HomeView';
import RubLessonView from './components/RubLesson';

Vue.use(Router);

const router = new Router();
router.map({
  '/': {
    component: HomeView,
  },
  '/rubLesson': {
    component: RubLessonView,
  },
});

router.beforeEach(() => {
  const $body = document.body;
  document.title = `${Math.random()}`;
  // hack在微信等 webview 中无法修改 document.title 的情况
  const $iframe = document.createElement('iframe');
  $iframe.src = '/favicon.ico';
  $iframe.onload = () => {
    setTimeout(() => {
      $iframe.onload = null;
      $body.removeChild($iframe);
    }, 0);
  };
  $body.appendChild($iframe);
  window.scrollTo(0, 0);
});

router.redirect({
  '*': '/',
});

router.start(App, '#app');
