import { Red, Node, NodeProperties } from 'node-red';
import * as exchangeRates from 'ecb-euro-exchange-rates';

interface IECBEuroExchangeRatesProps extends NodeProperties {
  datatype: 'current' | 'historic' | 'historic90d';
}

module.exports = function (RED: Red) {
  function EcbEuroExchangeRatesNode (this: Node, config: IECBEuroExchangeRatesProps) {
    RED.nodes.createNode(this, config);
    this.on('input', async msg => {
      switch (config.datatype) {
        case 'current':
          msg.payload = await exchangeRates.fetch();
          break;
        case 'historic':
          msg.payload = await exchangeRates.fetchHistoric();
          break;
        case 'historic90d':
          msg.payload = await exchangeRates.fetchHistoric90d();
          break;
        default:
          throw new Error(`Unimplemented type: ${config.datatype}`);
      }
      this.send(msg);
    });
  }
  RED.nodes.registerType('ecb-euro-exchange-rates', EcbEuroExchangeRatesNode);
};
