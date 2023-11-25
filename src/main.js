import parseAsync from "./csv/Parse.js";
import ParseableFile from './csv/ParseableFile.js';

const ARTICLE_PICKING_TIME = await parseAsync(ParseableFile.ARTICLE_PICKING_TIME);
const CUSTOMERS_PROPERTIES = await parseAsync(ParseableFile.CUSTOMERS_PROPERTIES);
const TICKETS = await parseAsync(ParseableFile.TICKETS);
const TESTS = await parseAsync(ParseableFile.TEST);
const PLANOGRAM_TABLES = await parseAsync(ParseableFile.PLANOGRAM_TABLE);
