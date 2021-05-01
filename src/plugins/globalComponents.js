import { Parallax } from '../components';
import {
  Button,
  Checkbox,
  Radio,
  FormGroupInput,
  Slider,
  Switch
} from '@/components';
/**
 * You can register global components here
 */

const globalComponents = {
  install(Vue) {
    Vue.component(Parallax.name, Parallax);
    Vue.component(Button.name, Button);
    Vue.component(Checkbox.name, Checkbox);
    Vue.component(Radio.name, Radio);
    Vue.component(FormGroupInput.name, FormGroupInput);
    Vue.component(Slider.name, Slider);
    Vue.component(Switch.name, Switch);
  }
};

export default globalComponents;
