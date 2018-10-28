let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

let server = require('../index.js').app;

process.env.NODE_ENV = 'test';

chai.use(chaiHttp);
describe('GET /', () => {
   it('it should GET index.html', (done) => {
      chai.request(server)
      .get('/')
      .end((err, res) => {
         res.should.have.status(200);

         res.should.have.header('content-type');
         res.header['content-type'].should.be.equal('text/html; charset=UTF-8');

         done();
      });
   });
});

describe('POST /api/calls', () => {
   it('it should return error on invalid status', (done) => {
     let data = {
       status : '54',
       number : '6'
    }
    chai.request(server)
    .post('/api/calls')
    .send(data)
    .end((err, res) => {
      res.should.have.status(400);

      done();
   });
 });

});

describe('POST /api/calls', () => {
   it('it should not return error on valid status', (done) => {
     let data = {
       status : '2',
       number : '6'
    }
    chai.request(server)
    .post('/api/calls')
    .send(data)
    .end((err, res) => {
      res.should.have.status(200);

      done();
   });
 });

});


