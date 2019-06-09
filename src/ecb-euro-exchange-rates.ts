import { Red, Node } from 'node-red';
import * as exchangeRates from 'ecb-euro-exchange-rates';

module.exports = function (RED: Red) {
  function EcbEuroExchangeRatesNode (this: Node, config) {
    RED.nodes.createNode(this, config);
    this.on('input', async msg => {
      msg.payload = await exchangeRates.fetch();
      this.send(msg);
    });
  }
  RED.nodes.registerType('ecb-euro-exchange-rates', EcbEuroExchangeRatesNode);
};
