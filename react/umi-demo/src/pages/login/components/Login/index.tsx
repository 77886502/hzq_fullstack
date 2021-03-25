import {Form,Button,Input} from 'antd';
import {UserOutlined,LockOutlined} from '@antd-design/icons';
const LoginForm = () =>{
    const onFinish = () => {}
    const [form] = Form.useForm();
    return (
        
        <div>
            <Form form={form} name="userForm" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length).length
              }
            >
              Log in
            </Button>
          )}
        </Form.Item>
      </Form>

        </div>
    )
}
export default LoginForm;