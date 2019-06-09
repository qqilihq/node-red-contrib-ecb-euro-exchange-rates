import * as should from 'should';
import * as helper from 'node-red-node-test-helper';
import * as ecbEuroExchangesRatesNode from '../src/ecb-euro-exchange-rates';

helper.init(require.resolve('node-red'));

describe('ecb-euro-exchange-rates Node', () => {

  beforeEach(done => helper.startServer(done));

  afterEach(done => {
    helper.unload();
    helper.stopServer(done);
  });

  it('should be loaded', done => {
    const flow = [{ id: 'n1', type: 'ecb-euro-exchange-rates', name: 'test name' }];
    helper.load(ecbEuroExchangesRatesNode, flow, () => {
      const n1 = helper.getNode('n1');
      n1.should.have.property('name', 'test name');
      done();
    });
  });

  it('should make payload ECB rates', done => {
    const flow = [{ id: 'n1', type: 'ecb-euro-exchange-rates', name: 'test name', wires: [['n2']] },
    { id: 'n2', type: 'helper' }];
    helper.load(ecbEuroExchangesRatesNode, flow, () => {
      const n2 = helper.getNode('n2');
      const n1 = helper.getNode('n1');
      n2.on('input', msg => {
        should(msg).have.property('payload');
        should(msg.payload).be.Object();
        done();
      });
      n1.receive({ payload: 'foo' });
    });
  });

});
