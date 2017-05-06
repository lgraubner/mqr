/* eslint no-unused-expressions: 0, import/no-extraneous-dependencies:0 */

import chai, { expect } from 'chai';
import { spy, stub } from 'sinon';
import sinonChai from 'sinon-chai';

import mqr from '../src';

chai.use(sinonChai);

it('should default export a function', () => {
  expect(mqr).to.be.a('function');
});

describe('mqr#', () => {
  let query;

  global.window = {
    matchMedia: stub().returns({
      matches: false,
      addListener: spy(),
      removeListener: spy(),
    }),
  };

  beforeEach(() => {
    query = mqr();
  });

  describe('listen()', () => {
    it('should be a function', () => {
      expect(query).to.have.property('listen').that.is.a('function');
    });

    it('should call handler on register', () => {
      const handler = spy();
      query.listen('print', handler);
      expect(handler).to.have.been.calledOnce.and.calledWith(false);
    });

    it('should not call handler on register with execute false', () => {
      const handler = spy();
      query.listen('print', handler, false);
      expect(handler).to.have.not.been.called;
    });
  });

  describe('remove()', () => {
    it('should be a function', () => {
      expect(query).to.have.property('remove').that.is.a('function');
    });
  });

  describe('matches()', () => {
    it('should be a function', () => {
      expect(query).to.have.property('matches').that.is.a('function');
    });

    it('should return a boolean', () => {
      expect(query.matches('print')).to.be.a('boolean');
    });
  });
});
