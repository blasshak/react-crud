import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../../../source/pages/components/Menu';

describe("Testing the structure", function() {
  const selected = 'prueba';
  let component;

  beforeEach(() => {
    component = shallow(<Menu selected={`${selected}`} />);
  });

  it("section", function() {
    expect(component.length).toEqual(1);
    expect(component.find(`[name="${selected}"]`).length).toEqual(1);
  });

  it("section > h1", function() {
    const h1 = component.find('h1');
    expect(h1.text()).toEqual(selected);
  });

  it("section > link", function() {
    const links = component.find('Link');
    expect(links.length).toEqual(1);
    expect(links.at(0).children().text()).toEqual('Go to home');
    expect(links.at(0).prop('to')).toEqual('/');
  });
});
