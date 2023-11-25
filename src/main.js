import * as parse from "./csv/Parse.js";

const ARTICLE_PICKING_TIME = await parse.getArticlePickingTimeAsync();
const CUSTOMERS_PROPERTIES = await parse.getCustomersPropertiesAsync();
const TICKETS = await parse.getTicketsAsync();
const TESTS = await parse.getTestsAsync();
const PLANOGRAM_TABLES = await parse.getPlanogramTablesAsync();
