const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

const expect = chai.expect;

const url='https://httpbin.org/';

describe('First Api Tests', () => {

    it('Consume GET Service', async () => {
        const response = await agent.get(url+'ip');
      
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body).to.have.property('origin');
      });



      it('Consume GET Service with query parameters', async () => {
        const reqBody = {
          name: 'John',
          age: '31',
          city: 'New York'
        };
      
        const response = await agent.get(url+'get').query(reqBody);
      
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.args).to.eql(reqBody);
      });


      it('Consume POST Service with query params', async ()=>{
        const reqBody={
            bestSkill: 'NodeJs'

        };

        const response = await agent.post(url+'post').query(reqBody);

        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.args).to.eql(reqBody);


      });


      it('Consume HEAD Service with query params', async ()=>{

        const reqBody={
            username: 'garzuzo'
        };

        const response = await agent.head(url+'get').query(reqBody);
        expect(response.status).to.equal(statusCode.OK);
    

      });



      it('Consume PATCH Service with query params', async ()=>{

        const reqBody={
username:"jgarzon"
        };

        const response = await agent.patch(url+'patch').query(reqBody);
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.args).to.eql(reqBody);

      });


      it('Consume PUT Service with query params', async ()=>{

        const reqBody={
            username:"JohnatanG"
        };

        const response = await agent.put(url+'put').query(reqBody);
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.args).to.eql(reqBody);

      });



      it('Consume DELETE Service with query params', async ()=>{

        const reqBody={
username:"garzuzo"
        };

        const response = await agent.delete(url+'delete').query(reqBody);
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.args).to.eql(reqBody);

      });   




});


