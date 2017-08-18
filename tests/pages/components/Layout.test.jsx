import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../../source/pages/components/Layout';

describe("Testing the structure", function() {
  const properties = { title: 'title', content: 'content' };
  let component;
  let head;
  let body;

  beforeEach(() => {
    component = shallow(<Layout {...properties} />);
    head = component.find('head');
    body = component.find('body');
  });

  it("html", function() {
    expect(component.length).toEqual(1);
    expect(component.find('[lang="es"]').length).toEqual(1);
  });

  it("head", function() {
    const head = component.find('head');
    expect(head.length).toEqual(1);
  });

  it("head > meta", function() {
    const metas = head.find('meta');
    const metaCharset = metas.at(0);
    const metaViewport = metas.at(1);
    expect(metas.length).toEqual(2);
    expect(metaCharset.find('[charSet="utf-8"]').length).toEqual(1);
    expect(metaViewport.find('[name="viewport"]').length).toEqual(1);
    expect(metaViewport.find('[content="width=device-with, initial-scale=1.0, minimum-scale=1.0"]').length).toEqual(1);

  });

  it("head > title", function() {
    const title = head.find('title');
    expect(title.length).toEqual(1);
    expect(title.text()).toEqual(properties.title);
  });

  it("head > link", function() {
    const link = head.find('link');
    expect(link.length).toEqual(1);
    expect(link.find('[rel="stylesheet"]').length).toEqual(1);
    expect(link.find('[href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css"]').length).toEqual(1);

  });

  it("body", function() {
    expect(body.length).toEqual(1);
  });

  it("body > div", function() {
    expect(body.length).toEqual(1);
  });

  it("body > script", function() {
    const div = body.find('div');
    expect(div.length).toEqual(1);
    expect(div.find('[id="render-target"]').length).toEqual(1);
  });
});
