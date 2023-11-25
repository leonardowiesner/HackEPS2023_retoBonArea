import csvParser from "csv-parser";
import { createReadStream } from "fs";

import ParseableFile from "./ParseableFile.js";
import ArticlePickingTime from "../models/ArticlePickingTime.js";
import CustomerProperties from "../models/CustomerProperties.js";
import Ticket from "../models/Ticket.js";
import Test from "../models/Test.js";
import PlanogramTable from "../models/PlanogramTable.js";

const BASE_PATH = "./assets/csv";

/**
 * @param {string} fileName
 * @returns {Promise<Array<any>>}
 */
const parseCsv = async (fileName) => {
  let csvData = [];

  return new Promise((res, _) => {
    createReadStream(`${BASE_PATH}/${fileName}.csv`)
      .pipe(csvParser({ separator: ";" }))
      .on("data", (data) => {
        csvData.push(data);
      })
      .on("end", () => {
        res(csvData);
      });
  });
};

/**
 *
 * @returns {Promise<Array<ArticlePickingTime>>}
 */
export const getArticlePickingTimeAsync = async () => {
  const data = await parseCsv(ParseableFile.ARTICLE_PICKING_TIME);

  return data.map(
    (x) =>
      new ArticlePickingTime({
        id: x.article_id,
        name: x.article_name,
        first_pick: x.first_pick,
        second_pick: x.second_pick,
        third_pick: x.third_pick,
        fourth_pick: x.fourth_pick,
        fifth_more_pick: x.fifth_more_pick,
      })
  );
};

/**
 * @returns {Promise<Array<CustomerProperties>>}
 */
export const getCustomersPropertiesAsync = async () => {
  const data = await parseCsv(ParseableFile.CUSTOMERS_PROPERTIES);

  return data.map(
    (x) =>
      new CustomerProperties({
        id: x.customer_id,
        step_seconds: x.step_seconds,
        picking_offset: x.picking_offset,
      })
  );
};

/**
 * @returns {Promise<Array<Ticket>>}
 */
export const getTicketsAsync = async () => {
  const data = await parseCsv(ParseableFile.TICKETS);

  return data.map(
    (x) =>
      new Ticket({
        id: x.ticket_id,
        enter_date_time: x.enter_date_time,
        customer_id: x.customer_id,
        article_id: x.article_id,
        quantity: x.quantity,
      })
  );
};

/**
 * @returns {Promise<Array<Test>>}
 */
export const getTestsAsync = async () => {
  const data = await parseCsv(ParseableFile.TEST);
  return data.map(
    (x) => new Ticket({ id: x.ticket_id, enter_date_time: x.enter })
  );
};

/**
 * @returns {Promise<Array<PlanogramTable>>}
 */
export const getPlanogramTablesAsync = async () => {
  const data = await parseCsv(ParseableFile.PLANOGRAM_TABLE);

  return data.map(
    (x) =>
      new PlanogramTable({
        x: x.x,
        y: x.y,
        picking_x: x.picking_x,
        picking_y: x.picking_y,
        description: x.description,
      })
  );
};
