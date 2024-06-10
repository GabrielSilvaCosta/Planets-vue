import { createApp } from 'vue';
import MainApp from '../../main';

describe('Main App', () => {
  it('should mount the app without errors', () => {
    const app = createApp(MainApp);

    const vm = app.mount(document.createElement('div'));

    expect(vm).toBeTruthy();
  });
});
