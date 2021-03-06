import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Form, Input} from "antd";
//import Brandmod from "./Brandmod";
//import Update from "./Model";

const Catmod = (props, {onSubmit}) => {
  const [form] = Form.useForm();
  // const [formLayout, setFormLayout] = useState();
  const [value, setValue] = useState();

  // const onFormLayoutChange = ({ change }) => {
  //   setFormLayout(change);
  // };
  //    const alert = () => {
  //        console.log('Successfully Submitted')

  //    } ;

   const onChange = (e) => {
    
    setValue(e.target.value);
    props.updateCategoryName(value);
    // alert.show('Oh look, an alert!')
  };

  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 15,
    },
  };
  //   const brandmod =() => {
  //         <Brandmod/>
  //     };

  return (
    <>
      <Form
        // {...formItemLayout}
        // layout={formLayout}
        form={form}
        // initialValues={{
        //   layout: formLayout,
        // }}
        // onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="Category"
        >
          <Input
           // key = {category.id}
            value={value}
            placeholder="Type in Category"
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </Form.Item>
      </Form>
    </>
  );
};
export default Catmod;