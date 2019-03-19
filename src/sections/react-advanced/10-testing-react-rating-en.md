# Example: testing a rating component

With Jest, Enzyme, Chai and Sinon

## Example: testing a rating component

```tsx
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Rating from './Rating';
```

## Example: testing a rating component

```tsx
describe('rendering', () => {
  it('renders 5 Star components', () => {
    const wrapper = shallow(<Rating stars={5} />);
    expect(wrapper.find('Star')).to.have.length(5);
  });

  it('renders 5 stars', () => {
    const wrapper = mount(<Rating stars={5} />);
    expect(wrapper.find('.star')).to.have.length(5);
  });
});
```

## Example: testing a rating component

```tsx
describe('rendering', () => {
  it('renders 3 active stars', () => {
    const wrapper = mount(<Rating stars={3} />);
    expect(wrapper.find('.star')).to.have.length(5);
    expect(
      wrapper.find('.star').get(2).props.className
    ).to.equal('star active');
    expect(
      wrapper.find('.star').get(3).props.className
    ).to.equal('star');
  });
});
```

## Example: testing a rating component

```tsx
describe('events', () => {
  it('reacts to click on first star', () => {
    const spy = sinon.spy();
    const wrapper = mount(
      <Rating stars={3} onStarsChange={spy} />
    );
    wrapper
      .find('span')
      .at(0)
      .simulate('click');
    expect(spy.getCall(0).args[0]).to.equal(1);
  });
});
```

## Example: testing a rating component

```tsx
describe('errors', () => {
  it('throws an error if the number of stars is 0', () => {
    const testFn = () => {
      const wrapper = shallow(<Rating stars={0} />);
    };
    expect(testFn).to.throw(
      'number of stars must be positive'
    );
  });
});
```
