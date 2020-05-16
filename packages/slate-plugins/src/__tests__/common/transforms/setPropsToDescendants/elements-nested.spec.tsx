/** @jsx jsx */

import { jsx } from '__test-utils__/jsx';
import { setPropsToDescendants } from 'common/transforms';
import { ListType } from 'elements/list';
import { PARAGRAPH } from 'elements/paragraph';

const node = (
  <li>
    test
    <p>test</p>test
  </li>
) as any;

const props = { a: 1 };

const output = (
  <element type={ListType.LI} a={1}>
    <htext a={1}>test</htext>
    <element type={PARAGRAPH} a={1}>
      <htext a={1}>test</htext>
    </element>
    <htext a={1}>test</htext>
  </element>
) as any;

it('should set props to all descendants', () => {
  setPropsToDescendants(node, props);
  expect(node).toEqual(output);
});