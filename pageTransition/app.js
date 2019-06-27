import Highway from '@dogstudio/highway';
import Fade from './transitions/transition';

const H = new Highway.Core({
  transitions: {
    default: Fade
  }
});