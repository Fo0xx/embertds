import AbstractRoute from '../abstractroute';
import { action } from '@ember/object';

export default class OrderRoute extends AbstractRoute {
  model(params) {
    return this.store.findRecord('orderdetail', params.order_id, {
      include: 'products',
    });
  }

  @action board() {
    this.transitionTo('board');
  }

  @action productPrepared() {
    this.transitionTo('my-order.order.product-prepared');
  }

  @action prepared() {
    this.transitionTo('my-order.order.prepared');
  }

  @action cancel() {
    this.transitionTo('my-order.order.cancel');
  }
}
