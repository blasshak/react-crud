import React from 'react';
import { shallow } from 'enzyme';
import Page from '../../../source/pages/components/Page';

describe("Testing the structure", function() {
  let component;

  beforeEach(() => {
    component = shallow(<Page />);
  });

  it("main", function() {
    expect(component.length).toEqual(1);
    expect(component.prop('role')).toEqual('application');
  });

  it("main > swtich", function() {
    const sw = component.find('Switch');
  });

  it("main > switch > Route", function() {
    const sw = component.find('Switch');
    const route = sw.find('Route');
    const homeRoute = route.at(0);
    const signUpUserRoute = route.at(1);
    const profileRoute = route.at(2);
    const errorRoute = route.at(3);
    expect(route.length).toEqual(4);
    expect(homeRoute.prop('path')).toEqual('/');
    expect(homeRoute.prop('exact')).toBe(true);
    expect(signUpUserRoute.prop('path')).toEqual('/user');
    expect(signUpUserRoute.prop('exact')).toBe(true);
    expect(profileRoute.prop('path')).toEqual('/user/:id');
    expect(profileRoute.prop('exact')).toBe(true);
    expect(errorRoute.prop('path')).toEqual(undefined);
    expect(errorRoute.prop('exact')).toEqual(undefined);
  });
});
