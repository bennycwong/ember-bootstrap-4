import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('Integration | Bootstrap', {
  integration: true
});

test('bootstrap uses customized sass variables', function(assert) {

  this.render(hbs`
    <div class="text-primary">Hello World</div>
  `);

  assert.equal(this.$('.text-primary').css('color'), 'rgb(255, 17, 119)');
});

test('only our desired plugins are present', function(assert) {
  assert.ok(!Ember.$.fn.scrollspy, "should not have un-selected plugins present");
  assert.ok(Ember.$.fn.collapse, "should have selected plugins present");
});
