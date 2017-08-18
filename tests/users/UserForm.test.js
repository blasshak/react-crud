import React from 'react';
import { shallow } from 'enzyme';
import UserForm from '../../source/users/UserForm';

describe('Testing the structure', function () {
  let form;
  const onS = function () {};
  const userForm = { onSubmit: onS, name: 'prueba', email: 'ags@as.com', onChange: onS };

  beforeEach(() => {
    const component = shallow(<UserForm {...userForm} />);
    form = component.find('form');
  });

  it("form", function () {
    expect(form.length).toEqual(1);
    expect(form.prop('onSubmit')).toEqual(onS);
  });

  it("form > button", function () {
    const button = form.find('button');
    expect(button.length).toEqual(1);
    expect(button.prop('type')).toEqual('submit');
    expect(button.text()).toEqual('Submit');
  });

  it("form > div", function () {
    const div = form.find('div').at(0);
    expect(div.length).toEqual(1);
  });

  it("form > div > label", function () {
    const label = form.find('div').at(0).find('label');
    expect(label.length).toEqual(1);
    expect(label.prop('htmlFor')).toEqual('firstName');
    expect(label.text()).toEqual('First Name');
  });

  it("form > div > input", function () {
    const input = form.find('div').at(0).find('input');
    expect(input.length).toEqual(1);
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('name');
    expect(input.prop('defaultValue')).toEqual(userForm.name);
    expect(input.prop('onChange')).toEqual(onS);
  });
})