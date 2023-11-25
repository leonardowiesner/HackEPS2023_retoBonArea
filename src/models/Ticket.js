export default class Ticket {
  /**
   *
   * @param {{enter_date_time: number, customer_id: number}} params
   */
  constructor({ enter_date_time, customer_id, article_id, quantity, id }) {
    this.enter_date_time = enter_date_time;
    this.customer_id = customer_id;
    this.article_id = article_id;
    this.quantity = quantity;
    this.id = id;
  }
}
