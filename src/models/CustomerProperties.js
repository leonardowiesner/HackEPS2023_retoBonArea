export default class CustomersProperties {
  /**
   *
   * @param {{id: number, steps_per_second: number, picking_offset: number}} params
   */
  constructor({ id, step_per_second, picking_offset }) {
    this.id = id;
    this.step_per_second = step_per_second;
    this.picking_offset = picking_offset;
  }
}
