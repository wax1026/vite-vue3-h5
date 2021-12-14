// vant 按需引入
import { Button, Form, Field, CellGroup, Dialog, Notify } from 'vant';

export default (app) => {
  app.use(Button);
  app.use(Form);
  app.use(Field);
  app.use(CellGroup);
  app.use(Dialog);
  app.use(Notify);
};
