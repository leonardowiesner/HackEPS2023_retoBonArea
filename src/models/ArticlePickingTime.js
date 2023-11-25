export default class ArticlePickingTime {
  constructor({
    id,
    name,
    first_pick,
    second_pick,
    third_pick,
    fourth_pick,
    fifth_more_pick,
  }) {
    this.id = id;
    this.name = name;
    this.first_pick = first_pick;
    this.second_pick = second_pick;
    this.third_pick = third_pick;
    this.fourth_pick = fourth_pick;
    this.fifth_more_pick = fifth_more_pick;
  }
}
