import React, { Component } from 'react';
import { Layout, Button } from 'antd';
const { Header, Content } = Layout;

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout>
                <Header><Button type='primary'>lalalalalaaaa</Button></Header>
                <Content>
                    {
                        this.props.children
                    }
                </Content>
            </Layout>
        )
    }
}

export default App;