// Use js dom to mimic browser environment
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

global.window = (new JSDOM()).window; // this will put window object on the node's global object.
