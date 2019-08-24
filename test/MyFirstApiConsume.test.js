const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

const expect = chai.expect;

describe('First Api Tests', () => {



    it('Consume GET Service', async () => {
        const response = await agent.get('https://httpbin.org/ip');
      
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body).to.have.property('origin');
      });



      it('Consume GET Service with query parameters', async () => {
        const query = {
          name: 'John',
          age: '31',
          city: 'New York'
        };
      
        const response = await agent.get('https://httpbin.org/get').query(query);
      
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.args).to.eql(query);
      });


      it('Consume POST Service with query params', async ()=>{
        const query={
            bestSkill: 'NodeJs'

        };

        const response = await agent.post('https://httpbin.org/post').query(query);

        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.args).to.eql(query);


      });
});

