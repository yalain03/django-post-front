import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios';

const FormItem = Form.Item;

class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, articleID) => {
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        switch(requestType) {
            case 'post':
                return axios.post('http://localhost:8000/api/', {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(err => console.log(err));
            case 'put':
                return axios.put(`http://localhost:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    }

  render() {
    return (
      <div>
        <Form onSubmit={(event) => this.handleFormSubmit(
            event,
            this.props.requestType,
            this.props.articleID
        )} >
          <FormItem
            label="Title"
          >
            <Input name="title" placeholder="Title goes here" />
          </FormItem>
          <FormItem
            label="Content"
          >
            <Input name="content" placeholder="Content goes here..." />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default CustomForm;