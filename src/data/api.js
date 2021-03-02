//Base URL
const base_url = "https://jobs.github.com/positions";
const description = ``;
const page = ``;
const full_time = ``;
const location = ``;
const search = ``;
const json = ``;
const markdown = ``;

//Pagination

const page_with_pagination = `.json?description=${description}&page=${page}&search=${search}`;

//GET /positions.json

const page_positions = `.json?description=${description}&full_time=${full_time}&location=${location}&search=${search}`

//GET /positions/ID.json

const page_positions_id = `/${json}.json?markdown=${markdown}`;

export const pageWithPagination = () => `${base_url}${page_with_pagination}`;
export const pagePositions = () => `${base_url}${page_positions}`;
export const pagePositionsId = () => `${base_url}${page_positions_id}`;

