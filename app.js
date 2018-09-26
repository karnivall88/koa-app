const koa = require ('koa');
const app = new koa();
app.use(async ctx=>(ctx.body = "<iframe width='600' height='450' frameborder='0' style='border:0'src='https://www.google.com/maps/embed/v1/place?q=place_id:ChIJo8AO40-TkkYR8sA97beS4w8&key=AIzaSyByusDOM5N_Uv48ZQAcXKt54sEaI2Fjr0o' allowfullscreen></iframe>"));
