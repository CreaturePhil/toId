'use strict';

var test = require('tape');
var toId = require('./');

test(function(t) {
  t.plan(5);

  t.equal(toId('Some Username-123'), 'someusername123');
  t.equal(toId('Crystal★Tempo'), 'crystaltempo');
  t.equal(toId('Eden (Saiyan)'), 'edensaiyan');
  t.equal(toId('Some_Mega_Man'), 'somemegaman');
  t.equal(toId('BatMan'), 'batman');
});
